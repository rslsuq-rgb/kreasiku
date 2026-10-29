#!/usr/bin/env python3
"""Reveal hidden low-contrast content: extract frame, histogram-equalize + stretch."""
import os
import subprocess
import sys

path = sys.argv[1]
outdir = sys.argv[2]
frames = [int(x) for x in sys.argv[3].split(',')]
W, H = 540, 1200
os.makedirs(outdir, exist_ok=True)
tag = os.path.splitext(os.path.basename(path))[0]

for n in frames:
    vf_raw = f'scale={W}:{H},format=gray'
    r = subprocess.run(['ffmpeg', '-hide_banner', '-nostdin', '-v', 'quiet',
                        '-err_detect', 'ignore_err', '-i', path,
                        '-vf', f"select='eq(n\\,{n})',{vf_raw}",
                        '-fps_mode', 'passthrough', '-frames:v', '1',
                        '-f', 'rawvideo', '-'], capture_output=True)
    g = r.stdout[:W * H]
    if len(g) < W * H:
        print(f'{tag} frame {n}: decode failed')
        continue
    vals = sorted(g)
    lo, hi = vals[int(0.002 * len(vals))], vals[int(0.998 * len(vals))]
    mean = sum(g) / len(g)
    sd = (sum((b - mean) ** 2 for b in g) / len(g)) ** 0.5
    print(f'{tag} frame {n}: mean={mean:.2f} sd={sd:.3f} p0.2%={lo} p99.8%={hi} '
          f'spread={hi - lo} uniq={len(set(g))}')

    # 1) normalized stretch of the p0.2..p99.8 window
    span = max(1, hi - lo)
    vf = (f"select='eq(n\\,{n})',scale={W}:{H},format=gray,"
          f"lut=y='clip((val-{lo})*255/{span},0,255)'")
    subprocess.run(['ffmpeg', '-hide_banner', '-nostdin', '-y', '-v', 'quiet',
                    '-err_detect', 'ignore_err', '-i', path, '-vf', vf,
                    '-fps_mode', 'passthrough', '-frames:v', '1',
                    os.path.join(outdir, f'{tag}_f{n}_stretch.png')])

    # 2) full histogram equalization
    vf2 = f"select='eq(n\\,{n})',scale={W}:{H},format=gray,histeq=strength=1:intensity=1"
    subprocess.run(['ffmpeg', '-hide_banner', '-nostdin', '-y', '-v', 'quiet',
                    '-err_detect', 'ignore_err', '-i', path, '-vf', vf2,
                    '-fps_mode', 'passthrough', '-frames:v', '1',
                    os.path.join(outdir, f'{tag}_f{n}_histeq.png')])
print('done ->', outdir)