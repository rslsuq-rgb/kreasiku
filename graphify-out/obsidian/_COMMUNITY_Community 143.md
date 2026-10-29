---
type: community
cohesion: 0.10
members: 34
---

# Community 143

**Cohesion:** 0.10 - loosely connected
**Members:** 34 nodes

## Members
- [[Byte-level forensics fill patterns, longest runs, cross-file data reuse.]] - rationale - vidrepair/fillcheck.py
- [[Deep MP4 sample-table audit verify every sample offsetsize and NAL header.]] - rationale - vidrepair/mp4deep.py
- [[Extract a contiguous run of samples as Annex-B, so reference chains stay intact.]] - rationale - vidrepair/gop_extract.py
- [[Extract each IDR sample standalone (SPS+PPS+IDR) and decode it alone. If an…]] - rationale - vidrepair/idr_isolate.py
- [[MP4 structural scanner walk top-level boxes, and locate moovmdatmvex etc.]] - rationale - vidrepair/mp4scan.py
- [[Probe one MP4 sample table sanity, zero-hole detection, NAL start-code census.]] - rationale - vidrepair/probe.py
- [[Validate AVCC-style NAL framing inside every sample, and dump SPSPPS config.]] - rationale - vidrepair/nalcheck.py
- [[audit()]] - code - vidrepair/mp4deep.py
- [[boxes()]] - code - vidrepair/mp4scan.py
- [[descend()]] - code - vidrepair/gop_extract.py
- [[descend()_1]] - code - vidrepair/idr_isolate.py
- [[descend()_2]] - code - vidrepair/nalcheck.py
- [[fillcheck.py]] - code - vidrepair/fillcheck.py
- [[find()]] - code - vidrepair/mp4deep.py
- [[find_path()]] - code - vidrepair/mp4deep.py
- [[gop_extract.py]] - code - vidrepair/gop_extract.py
- [[idr_isolate.py]] - code - vidrepair/idr_isolate.py
- [[inspect()]] - code - vidrepair/mp4scan.py
- [[longest_run()]] - code - vidrepair/fillcheck.py
- [[mdat_span()]] - code - vidrepair/fillcheck.py
- [[mp4deep.py]] - code - vidrepair/mp4deep.py
- [[mp4scan.py]] - code - vidrepair/mp4scan.py
- [[nalcheck.py]] - code - vidrepair/nalcheck.py
- [[parse_boxes()]] - code - vidrepair/mp4deep.py
- [[path_to()]] - code - vidrepair/probe.py
- [[probe.py]] - code - vidrepair/probe.py
- [[struct]] - concept
- [[u32()]] - code - vidrepair/mp4deep.py
- [[u32()_1]] - code - vidrepair/mp4scan.py
- [[u64()]] - code - vidrepair/mp4deep.py
- [[walk()_6]] - code - vidrepair/gop_extract.py
- [[walk()_7]] - code - vidrepair/idr_isolate.py
- [[walk()_8]] - code - vidrepair/nalcheck.py
- [[walk()_9]] - code - vidrepair/probe.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_143
SORT file.name ASC
```

## Connections to other communities
- 14 edges to [[_COMMUNITY_Community 19]]
- 6 edges to [[_COMMUNITY_Community 432]]
- 4 edges to [[_COMMUNITY_Community 312]]
- 2 edges to [[_COMMUNITY_Community 463]]
- 2 edges to [[_COMMUNITY_Community 109]]
- 1 edge to [[_COMMUNITY_Community 126]]

## Top bridge nodes
- [[struct]] - degree 26, connects to 3 communities
- [[gop_extract.py]] - degree 8, connects to 3 communities
- [[mp4deep.py]] - degree 11, connects to 2 communities
- [[mp4scan.py]] - degree 8, connects to 2 communities
- [[fillcheck.py]] - degree 7, connects to 2 communities