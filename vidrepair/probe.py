#!/usr/bin/env python3
"""Probe one MP4: sample table sanity, zero-hole detection, NAL start-code census."""
import os
import struct
import sys
import collections

path = sys.argv[1]
sz = os.path.getsize(path)
data = open(path, 'rb').read()

# ---------- generic box walking ----------
def walk(d, start, end):
    pos = start
    while pos + 8 <= end:
        size = struct.unpack('>I', d[pos:pos + 4])[0]
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


def path_to(d, start, end, names):
    cur = (start, end)
    trail = []
    for want in names:
        hit = None
        for pos, size, typ, hdr in walk(d, cur[0], cur[1]):
            if typ == want:
                hit = (pos, size, hdr, typ)
                break
        if hit is None:
            print(f'  !! missing box {want.decode()} while searching under {cur} trail={trail}')
            return None
        trail.append((hit[3].decode(), hit[0], hit[1]))
        cur = (hit[0] + hit[2], hit[0] + hit[1])
        last = hit
    return last, trail


u32 = lambda d, o: struct.unpack('>I', d[o:o + 4])[0]

print('=' * 70)
print(os.path.basename(path), f'{sz:,} bytes')

moov = next(((p, s, h) for p, s, t, h in walk(data, 0, sz) if t == b'moov'), None)
top = [(t.decode(), p, s) for p, s, t, h in walk(data, 0, sz)]
print('  top boxes:', top)
if not moov:
    sys.exit('no moov')

trak = next(((p, s, h) for p, s, t, h in walk(data, moov[0] + moov[2], moov[0] + moov[1]) if t == b'trak'), None)
r = path_to(data, trak[0] + trak[2], trak[0] + trak[1], [b'mdia', b'minf', b'stbl'])
if not r:
    sys.exit('stbl not found')
(last, trail) = r
print('  box trail:', trail)
stbl = (last[0], last[1], last[2])
sbase, send = stbl[0] + stbl[2], stbl[0] + stbl[1]

boxes = {t: (p, s, h) for p, s, t, h in walk(data, sbase, send)}
print('  stbl children:', {k.decode(): (v[0], v[1]) for k, v in boxes.items()})

# stsz
p, s, h = boxes[b'stsz']
o = p + h + 4
const, count = u32(data, o), u32(data, o + 4)
sizes = [const] * count if const else list(struct.unpack('>%dI' % count, data[o + 8:o + 8 + 4 * count]))

# stsc
p, s, h = boxes[b'stsc']
o = p + h + 4
n = u32(data, o)
stsc = [struct.unpack('>III', data[o + 4 + i * 12:o + 16 + i * 12]) for i in range(n)]

# stco / co64
if b'stco' in boxes:
    p, s, h = boxes[b'stco']
    o = p + h + 4
    nc = u32(data, o)
    chunks = list(struct.unpack('>%dI' % nc, data[o + 4:o + 4 + 4 * nc]))
else:
    p, s, h = boxes[b'co64']
    o = p + h + 4
    nc = u32(data, o)
    chunks = list(struct.unpack('>%dQ' % nc, data[o + 4:o + 4 + 8 * nc]))

# map samples -> offsets
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

mdat = next(((p, s, h) for p, s, t, h in walk(data, 0, sz) if t == b'mdat'), None)
mstart, mend = mdat[0] + mdat[2], mdat[0] + mdat[1]
print(f'  samples={len(sizes)} chunks={nc} stsc={stsc}')
print(f'  mdat payload {mstart:,}..{mend:,}  sum(sizes)={sum(sizes):,}  payload={mend - mstart:,}')
asc = all(offsets[i + 1][0] > offsets[i][0] for i in range(len(offsets) - 1))
print(f'  offsets strictly ascending: {asc}')
print(f'  first 5 samples: {offsets[:5]}')
print(f'  last 3 samples : {offsets[-3:]}')
print(f'  samples outside mdat: {sum(1 for o, s in offsets if o < mstart or o + s > mend)}')

# ---------- zero-hole detection in mdat ----------
blob = data[mstart:mend]
holes, run, total_hole = [], 0, 0
for i, b in enumerate(blob):
    if b == 0:
        run += 1
    else:
        if run >= 4096:
            holes.append((i - run, run))
            total_hole += run
        run = 0
if run >= 4096:
    holes.append((len(blob) - run, run))
print(f'  zero-runs >=4KB: {len(holes)}  total {total_hole:,} bytes ({total_hole / len(blob) * 100:.1f}% of mdat)')
for off, ln in holes[:10]:
    print(f'      hole @ payload+{off:,}  len {ln:,}')

# ---------- NAL start-code census ----------
sc4 = sc3 = 0
naltypes = collections.Counter()
i = 0
n = len(blob)
while True:
    i = blob.find(b'\x00\x00\x01', i)
    if i < 0:
        break
    if i >= 1 and blob[i - 1] == 0:
        sc4 += 1
    else:
        sc3 += 1
    if i + 3 < n:
        naltypes[blob[i + 3] & 0x1F] += 1
    i += 3
print(f'  start codes: 4-byte={sc4:,}  3-byte={sc3:,}')
print(f'  NAL types seen: {dict(sorted(naltypes.items()))}')