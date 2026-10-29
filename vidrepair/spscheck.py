#!/usr/bin/env python3
"""Parse in-band SPS/PPS and the first slice headers from an AVCC MP4, compare with avcC."""
import os
import struct
import sys

path = sys.argv[1]
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


class BR:
    def __init__(self, b):
        self.b = b
        self.i = 0

    def u(self, n):
        v = 0
        for _ in range(n):
            byte = self.b[self.i >> 3]
            v = (v << 1) | ((byte >> (7 - (self.i & 7))) & 1)
            self.i += 1
        return v

    def ue(self):
        z = 0
        while self.i < len(self.b) * 8 and self.u(1) == 0:
            z += 1
        return (1 << z) - 1 + (self.u(z) if z else 0)

    def se(self):
        k = self.ue()
        return (k + 1) // 2 if k & 1 else -(k // 2)


def unescape(b):
    out = bytearray()
    i = 0
    while i < len(b):
        if i + 2 < len(b) and b[i] == 0 and b[i + 1] == 0 and b[i + 2] == 3:
            out += b[i:i + 2]
            i += 3
        else:
            out.append(b[i])
            i += 1
    return bytes(out)


def parse_sps(nal):
    r = BR(unescape(nal[1:]))
    prof = r.u(8)
    r.u(8)  # constraint flags
    level = r.u(8)
    sps_id = r.ue()
    chroma = 1
    if prof in (100, 110, 122, 244, 44, 83, 86, 118, 128, 138, 139, 134, 135):
        chroma = r.ue()
        if chroma == 3:
            r.u(1)
        r.ue(); r.ue(); r.u(1)
        if r.u(1):
            for i in range(8 if chroma != 3 else 12):
                if r.u(1):
                    last = 8
                    nxt = 8
                    for _ in range(16 if i < 6 else 64):
                        if nxt:
                            nxt = (last + r.se() + 256) % 256
                        last = nxt if nxt else last
    log2_max_frame_num = r.ue() + 4
    poc_type = r.ue()
    if poc_type == 0:
        r.ue()
    elif poc_type == 1:
        r.u(1); r.se(); r.se()
        for _ in range(r.ue()):
            r.se()
    ref_frames = r.ue()
    r.u(1)
    w_mbs = r.ue() + 1
    h_map = r.ue() + 1
    frame_mbs_only = r.u(1)
    if not frame_mbs_only:
        r.u(1)
    r.u(1)
    crop = [0, 0, 0, 0]
    if r.u(1):
        crop = [r.ue(), r.ue(), r.ue(), r.ue()]
    subw, subh = (2, 2) if chroma == 1 else (1, 1)
    cw = 16 * w_mbs - (subw * crop[0] + subw * crop[1])
    ch = (16 * h_map) * (2 - frame_mbs_only) - (subh * crop[2] + subh * crop[3])
    return dict(profile=prof, level=level, sps_id=sps_id, chroma=chroma,
                log2_max_frame_num=log2_max_frame_num, poc_type=poc_type,
                num_ref=ref_frames, mb_w=w_mbs, mb_h=h_map,
                frame_mbs_only=frame_mbs_only, width=cw, height=ch,
                bits=r.i)


def parse_slice(nal):
    r = BR(unescape(nal[1:]))
    first_mb = r.ue()
    stype = r.ue()
    pps_id = r.ue()
    names = {0: 'P', 1: 'B', 2: 'I', 3: 'SP', 4: 'SI'}
    return dict(first_mb=first_mb, slice_type=names.get(stype % 5, stype),
                raw_type=stype, pps_id=pps_id)


moov = next(((p, s, h) for p, s, t, h in walk(data, 0, sz) if t == b'moov'))
trak = next(((p, s, h) for p, s, t, h in walk(data, moov[0] + moov[2], moov[0] + moov[1]) if t == b'trak'))
stbl = descend(data, trak[0] + trak[2], trak[0] + trak[1], [b'mdia', b'minf', b'stbl'])
sb, se = stbl[0] + stbl[2], stbl[0] + stbl[1]
bx = {t: (p, s, h) for p, s, t, h in walk(data, sb, se)}

p, s, h = bx[b'stsd']
o = p + h + 8
ent_end = o + u32(data, o)
avcc = None
for ep, es, et, eh in walk(data, o + 86, ent_end):
    if et == b'avcC':
        avcc = data[ep + eh:ep + es]

print(f'{os.path.basename(path)}')
print('--- avcC (container header) ---')
nal_len = (avcc[4] & 3) + 1
cnt = avcc[5] & 0x1F
off = 6
sps_list = []
for _ in range(cnt):
    ln = struct.unpack('>H', avcc[off:off + 2])[0]
    sps_list.append(avcc[off + 2:off + 2 + ln])
    off += 2 + ln
pps_list = []
cnt2 = avcc[off]
off += 1
for _ in range(cnt2):
    ln = struct.unpack('>H', avcc[off:off + 2])[0]
    pps_list.append(avcc[off + 2:off + 2 + ln])
    off += 2 + ln
print(f'  lengthSize={nal_len}  SPS count={cnt}  PPS count={cnt2}')
for sp in sps_list:
    print('  SPS bytes:', sp.hex())
    try:
        print('  parsed   :', parse_sps(sp))
    except Exception as e:
        print('  parse fail:', e)

# sample table
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

print('--- in-band parameter sets & slice headers ---')
found_sps = found_pps = 0
slice_dump = []
for idx, (off_, ln_) in enumerate(offsets):
    pos, endp = off_, off_ + ln_
    while pos < endp:
        L = int.from_bytes(data[pos:pos + nal_len], 'big')
        pos += nal_len
        nal = data[pos:pos + L]
        pos += L
        if not nal:
            continue
        t = nal[0] & 0x1F
        if t == 7:
            found_sps += 1
            print(f'  sample#{idx} in-band SPS:', nal.hex())
            try:
                print('     parsed:', parse_sps(nal))
            except Exception as e:
                print('     parse fail:', e)
        elif t == 8:
            found_pps += 1
            print(f'  sample#{idx} in-band PPS:', nal.hex())
        elif t in (1, 5) and len(slice_dump) < 6:
            try:
                slice_dump.append((idx, t, parse_slice(nal)))
            except Exception as e:
                slice_dump.append((idx, t, f'parse fail {e}'))
    if found_sps and found_pps and len(slice_dump) >= 6:
        break

for idx, t, info in slice_dump:
    kind = 'IDR' if t == 5 else 'non-IDR'
    print(f'  sample#{idx} {kind} slice: {info}')