#!/usr/bin/env python3
"""Extract each IDR sample standalone (SPS+PPS+IDR) and decode it alone.

If an isolated IDR still decodes to a flat frame, the picture data itself is
gone and no repair can restore it.
"""
import os
import struct
import subprocess
import sys

path = sys.argv[1]
outdir = sys.argv[2]
os.makedirs(outdir, exist_ok=True)
data = open(path, 'rb').read()
sz = len(data)
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


moov = next((x for x in walk(data, 0, sz) if x[2] == b'moov'))
trak = next((x for x in walk(data, moov[0] + moov[3], moov[0] + moov[1]) if x[2] == b'trak'))
stbl = descend(data, trak[0] + trak[3], trak[0] + trak[1], [b'mdia', b'minf', b'stbl'])
bx = {t: (p, s, h) for p, s, t, h in walk(data, stbl[0] + stbl[2], stbl[0] + stbl[1])}

p, s, h = bx[b'stsd']
o = p + h + 8
ent_end = o + u32(data, o)
avcc = None
for ep, es, et, eh in walk(data, o + 86, ent_end):
    if et == b'avcC':
        avcc = data[ep + eh:ep + es]
L = (avcc[4] & 3) + 1

# parameter sets from avcC
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

p, s, h = bx[b'stsz']
o = p + h + 4
const, count = u32(data, o), u32(data, o + 4)
sizes = [const] * count if const else list(struct.unpack('>%dI' % count, data[o + 8:o + 8 + 4 * count]))
p, s, h = bx[b'stsc']
o = p + h + 4
n = u32(data, o)
stsc = [struct.unpack('>III', data[o + 4 + i * 12:o + 16 + i * 12]) for i in range(n)]
p, s, h = bx[b'stco']
o = p + h + 4
nc = u32(data, o)
chunks = list(struct.unpack('>%dI' % nc, data[o + 4:o + 4 + 4 * nc]))
offsets = []
si = 0
for ci, coff in enumerate(chunks):
    spc = 1
    for (first, per, desc) in stsc:
        if ci + 1 >= first:
            spc = per
    pos = coff
    for _ in range(spc):
        if si >= len(sizes):
            break
        offsets.append((pos, sizes[si]))
        pos += sizes[si]
        si += 1

p, s, h = bx[b'stss']
o = p + h + 4
nk = u32(data, o)
stss = list(struct.unpack('>%dI' % nk, data[o + 4:o + 4 + 4 * nk]))

print(f'{os.path.basename(path)}: {len(stss)} IDR samples')
print(f'{"sample":>7} {"bytes":>9} {"nals":>5} {"errors":>7} {"mean":>6} {"sd":>6} {"uniq":>5}')

picked = stss[:6] + stss[len(stss) // 2:len(stss) // 2 + 4] + stss[-4:]
for sn in picked:
    off_, ln_ = offsets[sn - 1]
    blob = data[off_:off_ + ln_]
    # walk NALs
    namelist = []
    pos = 0
    while pos + L <= len(blob):
        nl = int.from_bytes(blob[pos:pos + L], 'big')
        pos += L
        if nl <= 0 or pos + nl > len(blob):
            break
        nal = blob[pos:pos + nl]
        namelist.append((nal[0] & 0x1F, nal))
        pos += nl
    # build annex-b: SPS, PPS, then the sample's own NALs (skip duplicate in-band sps/pps)
    raw = bytearray()
    for sp in sps:
        raw += b'\x00\x00\x00\x01' + sp
    for pp in pps:
        raw += b'\x00\x00\x00\x01' + pp
    for t, nal in namelist:
        raw += b'\x00\x00\x00\x01' + nal
    f = os.path.join(outdir, f'idr_{sn:05d}.264')
    open(f, 'wb').write(bytes(raw))

    r = subprocess.run(['ffmpeg', '-hide_banner', '-v', 'error', '-i', f,
                        '-frames:v', '1', '-vf', 'scale=48:107,format=gray',
                        '-f', 'rawvideo', '-'], capture_output=True)
    errs = len([l for l in r.stderr.decode('utf-8', 'replace').splitlines() if l.strip()])
    frame = r.stdout
    npx = 48 * 107
    if len(frame) >= npx:
        g = frame[:npx]
        mean = sum(g) / npx
        sd = (sum((b - mean) ** 2 for b in g) / npx) ** 0.5
        uniq = len(set(g))
    else:
        mean = sd = uniq = None
    print(f'{sn:7d} {ln_:9,} {len(namelist):5d} {errs:7d} '
          f'{mean if mean is None else round(mean,1):>6} {sd if sd is None else round(sd,1):>6} {uniq if uniq is None else uniq:>5}')