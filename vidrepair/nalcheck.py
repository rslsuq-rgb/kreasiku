#!/usr/bin/env python3
"""Validate AVCC-style NAL framing inside every sample, and dump SPS/PPS config."""
import os
import struct
import sys
import collections

path = sys.argv[1]
sz = os.path.getsize(path)
data = open(path, 'rb').read()
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


moov = next(((p, s, h) for p, s, t, h in walk(data, 0, sz) if t == b'moov'))
trak = next(((p, s, h) for p, s, t, h in walk(data, moov[0] + moov[2], moov[0] + moov[1]) if t == b'trak'))
stbl = descend(data, trak[0] + trak[2], trak[0] + trak[1], [b'mdia', b'minf', b'stbl'])
sb, se = stbl[0] + stbl[2], stbl[0] + stbl[1]
bx = {t: (p, s, h) for p, s, t, h in walk(data, sb, se)}

# ---- stsd / avcC ----
p, s, h = bx[b'stsd']
o = p + h + 8
codec = data[o + 4:o + 8]
w, hh = struct.unpack('>HH', data[o + 32:o + 36])
# find avcC inside this entry
ent_end = o + u32(data, o)
avcc = None
for ep, es, et, eh in walk(data, o + 86, ent_end):
    if et == b'avcC':
        avcc = data[ep + eh:ep + es]
print(f'{os.path.basename(path)}  codec={codec}  {w}x{hh}  avcC={len(avcc) if avcc else None} bytes')
if avcc:
    print('  avcC hex:', avcc.hex(' '))
    nal_len_size = (avcc[4] & 3) + 1
    n_sps = avcc[5] & 0x1F
    print(f'  lengthSizeMinusOne={(avcc[4] & 3)} -> NAL length field = {nal_len_size} bytes, SPS count={n_sps}')
    print(f'  profile={avcc[1]}  level={avcc[3]}')

# ---- samples ----
p, s, h = bx[b'stsz']
o = p + h + 4
const, count = u32(data, o), u32(data, o + 4)
sizes = [const] * count if const else list(struct.unpack('>%dI' % count, data[o + 8:o + 8 + 4 * count]))

p, s, h = bx[b'stsc']
o = p + h + 4
n = u32(data, o)
stsc = [struct.unpack('>III', data[o + 4 + i * 12:o + 16 + i * 12]) for i in range(n)]

if b'stco' in bx:
    p, s, h = bx[b'stco']
    o = p + h + 4
    nc = u32(data, o)
    chunks = list(struct.unpack('>%dI' % nc, data[o + 4:o + 4 + 4 * nc]))
else:
    p, s, h = bx[b'co64']
    o = p + h + 4
    nc = u32(data, o)
    chunks = list(struct.unpack('>%dQ' % nc, data[o + 4:o + 4 + 8 * nc]))

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

# keyframe list
stss = None
if b'stss' in bx:
    p, s, h = bx[b'stss']
    o = p + h + 4
    nk = u32(data, o)
    stss = list(struct.unpack('>%dI' % nk, data[o + 4:o + 4 + 4 * nk]))
    print(f'  sync samples: {len(stss)}  first={stss[:5]}')

L = (avcc[4] & 3) + 1 if avcc else 4
exact = partial = broken = 0
types = collections.Counter()
bad_samples = []
for i, (off, length) in enumerate(offsets):
    pos, endp, ok = off, off + length, True
    while pos < endp:
        if pos + L > endp:
            ok = False
            break
        ln = int.from_bytes(data[pos:pos + L], 'big')
        pos += L
        if ln <= 0 or pos + ln > endp:
            ok = False
            break
        types[data[pos] & 0x1F] += 1
        pos += ln
    if ok and pos == endp:
        exact += 1
    elif ok:
        partial += 1
    else:
        broken += 1
        bad_samples.append(i)

print(f'  samples with perfect NAL framing : {exact}/{len(offsets)}')
print(f'  samples with broken framing      : {broken}')
print(f'  NAL types: {dict(sorted(types.items()))}')
print(f'  first 20 broken sample idx: {bad_samples[:20]}')