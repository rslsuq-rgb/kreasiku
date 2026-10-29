#!/usr/bin/env python3
"""Full-decode audit of one video: how many frames actually decode, where errors cluster."""
import re
import subprocess
import sys
import collections

path = sys.argv[1]

cmd = ['ffmpeg', '-hide_banner', '-nostdin', '-v', 'error', '-i', path,
       '-map', '0:v:0', '-f', 'null', '-', '-progress', 'pipe:1']
p = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='replace')

frames = 0
last_ts = ''
for line in p.stdout.splitlines():
    if line.startswith('frame='):
        try:
            frames = int(line.split('=', 1)[1])
        except ValueError:
            pass
    elif line.startswith('out_time='):
        last_ts = line.split('=', 1)[1]

errs = [l for l in p.stderr.splitlines() if l.strip()]
counts = collections.Counter()
for l in errs:
    m = re.sub(r'^\[[^\]]*\]\s*', '', l)
    m = re.sub(r'\d+', 'N', m)
    counts[m] += 1

print(f'file  : {path}')
print(f'frames decoded : {frames}   last out_time: {last_ts}')
print(f'stderr lines   : {len(errs)}')
print('top error patterns:')
for msg, n in counts.most_common(12):
    print(f'  {n:6d}  {msg[:110]}')
