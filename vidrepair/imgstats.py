#!/usr/bin/env python3
"""Measure real visual content per frame: mean, stddev, and fraction of non-black pixels."""
import os
import sys
import glob
from PIL import Image, ImageStat


def stats(path):
    im = Image.open(path).convert('RGB')
    st = ImageStat.Stat(im)
    mean = st.mean
    var = st.var
    px = im.getdata()
    nonblack = sum(1 for p in px if p[0] + p[1] + p[2] > 24)
    return im.size, mean, max(var) ** 0.5, nonblack / len(px)


for p in sorted(glob.glob(sys.argv[1])):
    size, mean, sd, nz = stats(p)
    print(f'{os.path.basename(p):12s} {size}  meanRGB=({mean[0]:5.1f},{mean[1]:5.1f},{mean[2]:5.1f})  '
          f'sd={sd:5.1f}  nonblack={nz * 100:5.1f}%')