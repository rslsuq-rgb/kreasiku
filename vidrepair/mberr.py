#!/usr/bin/env python3
"""Where exactly do the macroblock errors occur? Fixed position => systematic corruption."""
import re
import subprocess
import sys
import collections

path = sys.argv[1]
cmd = ['ffmpeg', '-hide_banner', '-nostdin', '-v', 'error', '-i', path,
       '-map', '0:v:0', '-f', 'null', '-']
p = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='replace')

mb = []
for l in p.stderr.splitlines():
    m = re.search(r'error while decoding MB (\d+) (\d+)', l)
    if m:
        mb.append((int(m.group(1)), int(m.group(2))))

print(f'errors: {len(mb)}')
if mb:
    xs = collections.Counter(x for x, y in mb)
    ys = collections.Counter(y for x, y in mb)
    print('distinct MB x:', len(xs), '  top x:', xs.most_common(5))
    print('distinct MB y:', len(ys), '  top y:', ys.most_common(5))
    first = mb[:12]
    print('first 12 positions:', first)
    # monotonic?
    uniq = sorted(set(mb))
    print(f'unique positions: {len(uniq)}  sample: {uniq[:10]}')