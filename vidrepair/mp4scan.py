#!/usr/bin/env python3
"""MP4 structural scanner: walk top-level boxes, and locate moov/mdat/mvex etc."""
import os
import struct
import sys
import glob

CONTAINERS = {b'moov', b'trak', b'mdia', b'minf', b'stbl', b'dinf', b'edts', b'mvex', b'moof', b'traf', b'udta'}


def boxes(data, start, end, depth=0, out=None):
    pos = start
    while pos + 8 <= end:
        size = struct.unpack('>I', data[pos:pos + 4])[0]
        typ = data[pos + 4:pos + 8]
        hdr = 8
        if size == 1:
            if pos + 16 > end:
                break
            size = struct.unpack('>Q', data[pos + 8:pos + 16])[0]
            hdr = 16
        elif size == 0:
            size = end - pos
        if size < hdr or pos + size > end:
            out.append((depth, pos, size, typ, 'BAD'))
            break
        out.append((depth, pos, size, typ, ''))
        if typ in CONTAINERS and depth < 4:
            boxes(data, pos + hdr, pos + size, depth + 1, out)
        pos += size


def u32(b, o):
    return struct.unpack('>I', b[o:o + 4])[0]


def inspect(path):
    sz = os.path.getsize(path)
    print('=' * 78)
    print(os.path.basename(path), f'{sz:,} bytes')

    with open(path, 'rb') as f:
        head = f.read(min(sz, 1 << 20))
        out = []
        boxes(head, 0, len(head), 0, out)
        for depth, pos, size, typ, flag in out:
            print('  ' * depth + f'{typ.decode("latin1")} @ {pos:,} size={size:,} {flag}')
            if typ == b'moov':
                print('  ' * depth + '   >>> moov FOUND near start at', pos)

        # scan whole file for atom signatures
        f.seek(0)
        found = {b'moov': [], b'mdat': [], b'moof': [], b'mfra': [], b'sidx': [], b'free': [], b'ftyp': []}
        prev = b''
        chunk = 1 << 22
        base = 0
        while True:
            b = f.read(chunk)
            if not b:
                break
            buf = prev + b
            for key in found:
                i = -1
                while True:
                    i = buf.find(key, i + 1)
                    if i < 0:
                        break
                    found[key].append(base - len(prev) + i)
            prev = buf[-16:]
            base += len(b)

        for key, hits in found.items():
            if hits:
                # filter: plausible box -> preceding 4 bytes give a size that fits file
                plaus = []
                for h in hits:
                    if h - 4 < 0:
                        continue
                    f.seek(h - 4)
                    s = struct.unpack('>I', f.read(4))[0]
                    ok = 8 <= s <= sz - h + 8
                    plaus.append((h, s, ok))
                good = [p for p in plaus if p[2]]
                print(f'  scan {key.decode()}: {len(hits)} hits, {len(good)} plausible')
                for h, s, ok in plaus[:6]:
                    tag = 'ok' if ok else '--'
                    print(f'      {tag} @ {h:,} (declared size {s:,})')

    # try to parse moov from its own offset if not at start
    with open(path, 'rb') as f:
        f.seek(0)
        out2 = []
        data = f.read()
        boxes(data, 0, len(data), 0, out2)
        tops = [o for o in out2 if o[0] == 0]
        print('  top-level walk:', ', '.join(f'{t[3].decode("latin1")}@{t[1]:,}({t[2]:,}){t[4]}' for t in tops) or 'none')
        print('  trailing bytes after last box:', len(data) - (tops[-1][1] + tops[-1][2]) if tops else len(data))
        for depth, pos, size, typ, flag in out2:
            if typ in (b'stco', b'co64', b'stsz', b'stsd', b'mvhd', b'mdhd', b'tkhd', b'hdlr', b'elst'):
                d = data[pos + 8:pos + min(size, 40)]
                print('    ' * depth + f'{typ.decode()} @ {pos:,}: ' + d.hex(' '))


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
            inspect(p)
        except Exception as e:
            print(os.path.basename(p), 'ERROR', type(e).__name__, e)
