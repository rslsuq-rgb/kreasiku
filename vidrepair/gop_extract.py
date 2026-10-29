#!/usr/bin/env python3
"""Extract a contiguous run of samples as Annex-B, so reference chains stay intact."""
import collections
import os
import struct
import subprocess
import sys

path = sys.argv[1]
out = sys.argv[2]
start = int(sys.argv[3]) if len(sys.argv) > 3 else 1
count = int(sys.argv[4]) if len(sys.argv) > 4 else 30

data = open(path, 'rb').read()
sz = len(data)
u32 = lambda d, o: struct.unpack('>I', d[o:o + 4])[0]


def walk(d, s, e):
    pos = s
    while pos + 8 <= e:
        size = u32(d, pos)
        typ = d[pos + 4:pos + 8]
        hdr = 8
        if size == 1:
            size = struct.unpack('>Q', d[pos + 8:pos + 16])[0]
            hdr = 16
        elif size == 0:
            size = e - pos
        if size < hdr or pos + size > e:
            return
        yield pos, size, typ, hdr
        pos += size


def descend(d, s, e, names):
    cur = (s, e)
    hit = None
    for want in names:
        hit = next(((p, sz2, h) for p, sz2, t, h in walk(d, cur[0], cur[1]) if t == want), None)
        if not hit:
            return None
        cur = (hit[0] + hit[2], hit[0] + hit[1])
    return hit


moov = next(x for x in walk(data, 0, sz) if x[2] == b'moov')
trak = next(x for x in walk(data, moov[0] + moov[3], moov[0] + moov[1]) if x[2] == b'trak')
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

off = 6
sps_list = []
for _ in range(avcc[5] & 0x1F):
    ln = struct.unpack('>H', avcc[off:off + 2])[0]
    sps_list.append(avcc[off + 2:off + 2 + ln])
    off += 2 + ln
pps_list = []
for _ in range(avcc[off]):
    off += 1
    ln = struct.unpack('>H', avcc[off:off + 2])[0]
    pps_list.append(avcc[off + 2:off + 2 + ln])
    off += 2 + ln

ntypes = []

p, s, h = bx[b'stsz']
o = p + h + 4
const, total = u32(data, o), u32(data, o + 4)
sizes = [const] * total if const else list(struct.unpack('>%dI' % total, data[o + 8:o + 8 + 4 * total]))
p, s, h = bx[b'stsc']
o = p + h + 4
n = u32(data, o)
stsc = [struct.unpack('>III', data[o + 4 + i * 12:o + 16 + i * 12]) for i in range(n)]
p, s, h = bx[b'stco'] if b'stco' in bx else bx[b'co64']
o = p + h + 4
nc = u32(data, o)
if b'stco' in bx:
    chunks = list(struct.unpack('>%dI' % nc, data[o + 4:o + 4 + 4 * nc]))
else:
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

raw = bytearray()
for sp in sps_list:
    raw += b'\x00\x00\x00\x01' + sp
for pp in pps_list:
    raw += b'\x00\x00\x00\x01' + pp
for i in range(start - 1, min(start - 1 + count, len(offsets))):
    off_, ln_ = offsets[i]
    blob = data[off_:off_ + ln_]
    pos = 0
    while pos + L <= len(blob):
        nl = int.from_bytes(blob[pos:pos + L], 'big')
        pos += L
        if nl <= 0 or pos + nl > len(blob):
            break
        nal = blob[pos:pos + nl]
        ntypes.append(nal[0] & 0x1F)
        raw += b'\x00\x00\x00\x01' + nal
        pos += nl
open(out, 'wb').write(bytes(raw))
print(f'wrote {out}: samples {start}..{start + count - 1}, {len(raw):,} bytes')
print(f'NAL types written: {collections.Counter(ntypes)}')

r = subprocess.run(['ffmpeg', '-hide_banner', '-v', 'error', '-i', out,
                    '-vf', 'scale=64:142,format=gray', '-f', 'rawvideo', '-'],
                   capture_output=True)
errs = [l for l in r.stderr.decode('utf-8', 'replace').splitlines() if l.strip()]
npx = 64 * 142
nf = len(r.stdout) // npx
print(f'frames decoded: {nf}  stderr lines: {len(errs)}')
for e in errs[:6]:
    print('   ', e)
for k in range(min(nf, 10)):
    g = r.stdout[k * npx:(k + 1) * npx]
    mean = sum(g) / npx
    sd = (sum((b - mean) ** 2 for b in g) / npx) ** 0.5
    print(f'   frame {k}: mean={mean:.1f} sd={sd:.1f} uniq={len(set(g))}')