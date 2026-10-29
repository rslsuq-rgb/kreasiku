#!/usr/bin/env python3
"""Compare mdat payloads: byte entropy, zero fraction, and whether files share identical data."""
import glob
import hashlib
import math
import os
import struct
import sys


def mdat_span(data):
    pos = 0
    while pos + 8 <= len(data):
        size = struct.unpack('>I', data[pos:pos + 4])[0]
        typ = data[pos + 4:pos + 8]
        if size == 1:
            size = struct.unpack('>Q', data[pos + 8:pos + 16])[0]
            hdr = 16
        else:
            hdr = 8
        if typ == b'mdat':
            return pos + hdr, min(len(data), pos + size)
        if size < 8:
            break
        pos += size
    return None, None


rows = []
for p in sorted(glob.glob(os.path.join(sys.argv[1], '*.mp4'))):
    data = open(p, 'rb').read()
    s, e = mdat_span(data)
    if s is None:
        print(os.path.basename(p), 'no mdat')
        continue
    blob = data[s:e]
    step = max(1, len(blob) // 4_000_000)
    smp = blob[::step]
    hist = [0] * 256
    for b in smp:
        hist[b] += 1
    n = len(smp)
    ent = -sum((c / n) * math.log2(c / n) for c in hist if c)
    zeros = hist[0] / n
    top = max(hist) / n
    md5 = hashlib.md5(smp).hexdigest()[:10]
    rows.append((os.path.basename(p), len(blob), ent, zeros, top, md5))

print(f'{"file":16s} {"mdat MB":>8s} {"entropy":>8s} {"zero%":>6s} {"topbyte%":>9s}  md5head')
for name, ln, ent, z, top, md5 in rows:
    print(f'{name:16s} {ln/1e6:8.1f} {ent:8.2f} {z*100:6.1f} {top*100:9.1f}  {md5}')

print()
seen = {}
for name, ln, ent, z, top, md5 in rows:
    if md5 in seen:
        print(f'!! DUPLICATE DATA: {name} == {seen[md5]}')
    seen[md5] = name