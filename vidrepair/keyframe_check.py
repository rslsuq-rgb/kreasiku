#!/usr/bin/env python3
"""Decode only keyframes and measure each one's real visual content."""
import subprocess
import sys

path = sys.argv[1]
W, H = 48, 108

cmd = ['ffmpeg', '-hide_banner', '-nostdin', '-v', 'quiet', '-err_detect', 'ignore_err',
       '-skip_frame', 'nokey', '-i', path, '-map', '0:v:0',
       '-vf', f'scale={W}:{H},format=gray', '-f', 'rawvideo', '-']
raw = subprocess.run(cmd, capture_output=True).stdout
n = len(raw) // (W * H)
print(f'keyframes decoded: {n}')

good = flat = 0
for i in range(n):
    f = raw[i * W * H:(i + 1) * W * H]
    mean = sum(f) / len(f)
    sd = (sum((b - mean) ** 2 for b in f) / len(f)) ** 0.5
    uniq = len(set(f))
    if sd > 12:
        good += 1
        tag = 'GOOD'
    elif sd <= 4:
        flat += 1
        tag = 'flat'
    else:
        tag = '??  '
    if i < 30:
        print(f'  keyframe {i:3d}: mean={mean:6.1f} sd={sd:6.1f} uniq={uniq:4d} {tag}')
print(f'\nsummary: {good} good, {flat} flat, {n - good - flat} ambiguous  (of {n})')