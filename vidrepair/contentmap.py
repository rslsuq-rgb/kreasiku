#!/usr/bin/env python3
"""Per-second content map: decode 1 fps to tiny grayscale, measure variance per frame."""
import subprocess
import sys

path = sys.argv[1]
W, H, FPS = 64, 144, 1

cmd = ['ffmpeg', '-hide_banner', '-nostdin', '-v', 'quiet', '-err_detect', 'ignore_err',
       '-i', path, '-map', '0:v:0', '-vf', f'fps={FPS},scale={W}:{H},format=gray',
       '-f', 'rawvideo', '-']
p = subprocess.run(cmd, capture_output=True)
raw = p.stdout
n = len(raw) // (W * H)
print(f'decoded {n} sampled frames ({W}x{H})')

rows = []
for i in range(n):
    frame = raw[i * W * H:(i + 1) * W * H]
    mean = sum(frame) / len(frame)
    var = sum((b - mean) ** 2 for b in frame) / len(frame)
    sd = var ** 0.5
    uniq = len(set(frame))
    rows.append((i, mean, sd, uniq))

good = sum(1 for r in rows if r[2] > 15)
flat = sum(1 for r in rows if r[2] <= 5)
print(f'frames with real content (sd>15): {good}/{n}')
print(f'frames flat/concealed  (sd<=5) : {flat}/{n}')
print()
print(' sec   mean    sd   uniq   bar')
for i, mean, sd, uniq in rows:
    bar = '#' * min(60, int(sd))
    tag = ' FLAT' if sd <= 5 else ('  ok ' if sd > 15 else '  ?? ')
    print(f'{i:4d} {mean:6.1f} {sd:6.1f} {uniq:5d} {tag} {bar}')
