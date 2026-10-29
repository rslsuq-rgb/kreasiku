#!/usr/bin/env python3
"""Full-res frame forensics: histogram spread, edge energy, and a contrast-stretched preview."""
import subprocess
import sys

path = sys.argv[1]
t = sys.argv[2] if len(sys.argv) > 2 else '60'
out = sys.argv[3] if len(sys.argv) > 3 else 'probe_frame.png'
W, H = 540, 1200

cmd = ['ffmpeg', '-hide_banner', '-nostdin', '-v', 'quiet', '-err_detect', 'ignore_err',
       '-ss', t, '-i', path, '-frames:v', '1', '-vf', f'scale={W}:{H},format=gray',
       '-f', 'rawvideo', '-']
raw = subprocess.run(cmd, capture_output=True).stdout
print('bytes:', len(raw), 'expected:', W * H)

n = len(raw) // (W * H)
for k in range(n):
    f = raw[k * W * H:(k + 1) * W * H]
    srt = sorted(f)
    p = lambda q: srt[int(q * (len(srt) - 1))]
    mean = sum(f) / len(f)
    # horizontal gradient energy
    grad = 0
    for y in range(0, H, 4):
        row = f[y * W:(y + 1) * W]
        for x in range(1, W):
            grad += abs(row[x] - row[x - 1])
    print(f'frame {k}: min={srt[0]} p1={p(.01)} p5={p(.05)} p25={p(.25)} med={p(.5)} '
          f'p75={p(.75)} p95={p(.95)} p99={p(.99)} max={srt[-1]} mean={mean:.1f}')
    print(f'         horiz gradient energy per px = {grad / (H / 4 * W):.2f}')

# contrast-stretched preview
vf = (f'scale={W}:{H},format=gray,'
      f'eq=contrast=8:brightness=0.5,scale=360:-2')
subprocess.run(['ffmpeg', '-hide_banner', '-nostdin', '-y', '-v', 'quiet', '-err_detect', 'ignore_err',
                '-ss', t, '-i', path, '-frames:v', '1', '-vf', vf, out])
print('wrote', out)