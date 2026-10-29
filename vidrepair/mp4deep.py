#!/usr/bin/env python3
"""Deep MP4 sample-table audit: verify every sample offset/size and NAL header."""
import os
import struct
import sys
import glob


def parse_boxes(data, start, end):
    pos = start
    while pos + 8 <= end:
        size = struct.unpack('>I', data[pos:pos + 4])[0]
        typ = data[pos + 4:pos + 8]
        hdr = 8
        if size == 1:
            size = struct.unpack('>Q', data[pos + 8:pos + 16])[0]
            hdr = 16
        elif size == 0:
            size = end - pos
        if size < hdr or pos + size > end:
            return pos
        yield pos, size, typ, hdr
        pos += size


def find(data, start, end, want):
    for pos, size, typ, hdr in parse_boxes(data, start, end):
        if typ == want:
            return pos, size, hdr
    return None


def find_path(data, start, end, path):
    cur = (start, end - start, 0)
    for p in path:
        r = find(data, cur[0] + cur[2], cur[0] + cur[1], p)
        if r is None:
            return None
        cur = r
    return cur


def u32(d, o):
    return struct.unpack('>I', d[o:o + 4])[0]


def u64(d, o):
    return struct.unpack('>Q', d[o:o + 8])[0]


def audit(path):
    sz = os.path.getsize(path)
    with open(path, 'rb') as f:
        data = f.read()

    moov = find(data, 0, len(data), b'moov')
    if not moov:
        print(os.path.basename(path), 'NO MOOV')
        return
    ms, mlen, mh = moov
    trak = find(data, ms + mh, ms + mlen, b'trak')
    ts, tlen, th = trak
    stbl = find_path(data, ts, ts + tlen, [b'mdia', b'minf', b'stbl'])
    ss, slen, sh = stbl
    base = ss + sh
    end = ss + slen

    # stsd
    stsd = find(data, base, end, b'stsd')
    codec = None
    width = height = None
    if stsd:
        o = stsd[0] + stsd[2] + 8
        size = u32(data, o)
        codec = data[o + 4:o + 8]
        width = struct.unpack('>H', data[o + 32:o + 34])[0]
        height = struct.unpack('>H', data[o + 34:o + 36])[0]

    stsz = find(data, base, end, b'stsz')
    o = stsz[0] + stsz[2] + 4
    const = u32(data, o)
    count = u32(data, o + 4)
    if const:
        sizes = [const] * count
    else:
        sizes = list(struct.unpack('>%dI' % count, data[o + 8:o + 8 + 4 * count]))

    stsc = find(data, base, end, b'stsc')
    o = stsc[0] + stsc[2] + 4
    n = u32(data, o)
    entries = []
    for i in range(n):
        p = o + 4 + i * 12
        entries.append(struct.unpack('>III', data[p:p + 12]))

    stco = find(data, base, end, b'stco')
    co64 = find(data, base, end, b'co64')
    if stco:
        o = stco[0] + stco[2] + 4
        nchunks = u32(data, o)
        chunks = list(struct.unpack('>%dI' % nchunks, data[o + 4:o + 4 + 4 * nchunks]))
    else:
        o = co64[0] + co64[2] + 4
        nchunks = u32(data, o)
        chunks = list(struct.unpack('>%dQ' % nchunks, data[o + 4:o + 4 + 8 * nchunks]))

    # sample -> chunk mapping
    offsets = []
    si = 0
    for ci, coff in enumerate(chunks):
        spc = 1
        for (first, per, desc) in entries:
            if (ci + 1) >= first:
                spc = per
        pos = coff
        for _ in range(spc):
            if si >= len(sizes):
                break
            offsets.append((pos, sizes[si]))
            pos += sizes[si]
            si += 1

    mdat = None
    for p, s, t, h in parse_boxes(data, 0, len(data)):
        if t == b'mdat':
            mdat = (p, s, h)
            break

    print('=' * 70)
    print(f'{os.path.basename(path)}  file={sz:,}  codec={codec.decode() if codec else "?"} '
          f'{width}x{height}  samples={len(sizes)}  chunks={nchunks}')
    if mdat:
        mstart = mdat[0] + mdat[2]
        mend = mdat[0] + mdat[1]
        print(f'  mdat: data {mstart:,}..{mend:,} ({mend - mstart:,} bytes), '
              f'file tail {sz - mend:,}')

    bad_off = [i for i, (o, s) in enumerate(offsets) if o + s > sz]
    bad_hdr = []
    for i, (o, s) in enumerate(offsets):
        if o + 4 > sz:
            continue
        b = data[o:o + 4]
        if b[0:3] == b'\x00\x00\x01':
            nt = b[3] & 0x1F
        elif b == b'\x00\x00\x00\x01':
            nt = data[o + 4] & 0x1F if o + 5 <= sz else 0
        else:
            bad_hdr.append(i)
            continue
        if nt not in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 20, 21):
            bad_hdr.append(i)

    print(f'  samples with offset+size beyond EOF : {len(bad_off)}'
          + (f'  first@{bad_off[0]}' if bad_off else ''))
    print(f'  samples without valid NAL start     : {len(bad_hdr)}'
          + (f'  first@{bad_hdr[0]} of {len(sizes)}' if bad_hdr else ''))
    if mdat:
        covered = sum(s for o, s in offsets)
        print(f'  sum(sample sizes)={covered:,}  mdat payload={mdat[1] - mdat[2]:,}  '
              f'diff={mdat[1] - mdat[2] - covered:,}')
        if offsets:
            print(f'  first sample @ {offsets[0][0]:,} (mdat data starts {mdat[0] + mdat[2]:,})')
            print(f'  last  sample @ {offsets[-1][0]:,}')
    # sample size stats
    if sizes:
        srt = sorted(sizes)
        print(f'  size min={srt[0]} med={srt[len(srt)//2]} max={srt[-1]} zero-sizes={sizes.count(0)}')


if __name__ == '__main__':
    args = sys.argv[1:]
    files = []
    for a in args:
        if os.path.isdir(a):
            files += sorted(glob.glob(os.path.join(a, '*.mp4')))
        else:
            files.append(a)
    for p in files:
        try:
            audit(p)
        except Exception as e:
            print(os.path.basename(p), 'ERROR', type(e).__name__, e)
