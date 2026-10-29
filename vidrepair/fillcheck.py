#!/usr/bin/env python3
"""Byte-level forensics: fill patterns, longest runs, cross-file data reuse."""
import collections
import os
import struct
import sys


def mdat_span(data):
    pos = 0
    while pos + 8 <= len(data):
        size = struct.unpack('>I', data[pos:pos + 4])[0]
        typ = data[pos + 4:pos + 8]
        hdr = 8
        if size == 1:
            size = struct.unpack('>Q', data[pos + 8:pos + 16])[0]
            hdr = 16
        elif size == 0:
            size = len(data) - pos
        if typ == b'mdat':
            return pos + hdr, min(len(data), pos + size)
        if size < 8:
            break
        pos += size
    return None, None


def longest_run(blob):
    best, bestb = 0, None
    run, prev = 1, blob[0]
    for b in blob[1:]:
        if b == prev:
            run += 1
        else:
            if run > best:
                best, bestb = run, prev
            run, prev = 1, b
    if run > best:
        best, bestb = run, prev
    return best, bestb


for path in sys.argv[1:]:
    data = open(path, 'rb').read()
    s, e = mdat_span(data)
    blob = data[s:e]
    n = len(blob)
    hist = collections.Counter(blob)
    lr, lb = longest_run(blob)
    be = hist[0xBE] / n * 100
    zero = hist[0] / n * 100
    ff = hist[0xFF] / n * 100
    pat = blob.count(b'\xbe\xbe\xbe\xbe')
    print(f'{os.path.basename(path):14s} mdat={n / 1e6:7.1f}MB  '
          f'0xBE={be:5.2f}%  0x00={zero:5.2f}%  0xFF={ff:5.2f}%  '
          f'0xBEx4={pat:6d}  longest run={lr:,} of 0x{lb:02X}')
    top = hist.most_common(6)
    print('      top bytes:', ' '.join(f'{b:02X}:{c / n * 100:.2f}%' for b, c in top))