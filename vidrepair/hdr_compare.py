#!/usr/bin/env python3
"""Dump avcC SPS/PPS for every MP4 in a folder and compare."""
import glob
import os
import struct
import sys

u32 = lambda d, o: struct.unpack('>I', d[o:o + 4])[0]


def walk(d, start, end):
    pos = start
    while pos + 8 <= end:
        size = u32(d, pos)
        typ = d[pos + 4:pos + 8]
        hdr = 8
        if size == 1:
            size = struct.unpack('>Q', d[pos + 8:pos + 16])[0]
            hdr = 16
        elif size == 0:
            size = end - pos
        if size < hdr or pos + size > end:
            return
        yield pos, size, typ, hdr
        pos += size


def descend(d, start, end, names):
    cur = (start, end)
    hit = None
    for want in names:
        hit = next(((p, s, h) for p, s, t, h in walk(d, cur[0], cur[1]) if t == want), None)
        if not hit:
            return None
        cur = (hit[0] + hit[2], hit[0] + hit[1])
    return hit


rows = []
for path in sorted(glob.glob(os.path.join(sys.argv[1], '*.mp4'))):
    data = open(path, 'rb').read()
    try:
        moov = next(x for x in walk(data, 0, len(data)) if x[2] == b'moov')
        trak = next(x for x in walk(data, moov[0] + moov[3], moov[0] + moov[1]) if x[2] == b'trak')
        stbl = descend(data, trak[0] + trak[3], trak[0] + trak[1], [b'mdia', b'minf', b'stbl'])
        bx = {t: (p, s, h) for p, s, t, h in walk(data, stbl[0] + stbl[2], stbl[0] + stbl[1])}
        p, s, h = bx[b'stsd']
        o = p + h + 8
        codec = data[o + 4:o + 8].decode('latin1')
        w, hh = struct.unpack('>HH', data[o + 32:o + 36])
        ent_end = o + u32(data, o)
        avcc = None
        for ep, es, et, eh in walk(data, o + 86, ent_end):
            if et == b'avcC':
                avcc = data[ep + eh:ep + es]
                break
        off = 6
        sps = []
        for _ in range(avcc[5] & 0x1F):
            ln = struct.unpack('>H', avcc[off:off + 2])[0]
            sps.append(avcc[off + 2:off + 2 + ln])
            off += 2 + ln
        pps = []
        for _ in range(avcc[off]):
            off += 1
            ln = struct.unpack('>H', avcc[off:off + 2])[0]
            pps.append(avcc[off + 2:off + 2 + ln])
            off += 2 + ln
        rows.append((os.path.basename(path), codec, f'{w}x{hh}',
                     ' '.join(x.hex() for x in sps), ' '.join(x.hex() for x in pps)))
    except Exception as e:
        rows.append((os.path.basename(path), 'ERR', str(e), '', ''))

for name, codec, dim, sps, pps in rows:
    print(f'{name:14s} {codec:6s} {dim:11s}')
    print(f'    SPS {sps}')
    print(f'    PPS {pps}')