---
type: community
cohesion: 0.16
members: 22
---

# Community 254

**Cohesion:** 0.16 - loosely connected
**Members:** 22 nodes

## Members
- [[1909 must keep working an alive file excluded by ignore rules is provably…]] - rationale - graphify/tests/test_stale_prune.py
- [[2210 incremental extract's graph-layer prune must not evict ALIVE files.…]] - rationale - graphify/tests/test_stale_prune.py
- [[(a) NFD spelling on disk vs NFC spelling in the graph NOT stale.]] - rationale - graphify/tests/test_stale_prune.py
- [[(b) fail-closed a legacy bare-basename source_file whose file is alive at…]] - rationale - graphify/tests/test_stale_prune.py
- [[(c) a source_file with no file on disk anywhere IS pruned.]] - rationale - graphify/tests/test_stale_prune.py
- [[Fail-closed an alive in-root file missing from the corpus without provable…]] - rationale - graphify/tests/test_stale_prune.py
- [[NFC-normalize a path string. macOS (HFS+APFS) reports filenames in NFD while…]] - rationale - graphify/graphify/paths.py
- [[Source files graph.json still references but the current scan no longer…]] - rationale - graphify/graphify/cli.py
- [[_abs()]] - code - graphify/graphify/watch.py
- [[_in_seen()]] - code - graphify/graphify/cli.py
- [[_provably_excluded()]] - code - graphify/graphify/cli.py
- [[_scan()]] - code - graphify/tests/test_stale_prune.py
- [[_stale_graph_sources()]] - code - graphify/graphify/cli.py
- [[_within_root()]] - code - graphify/graphify/cli.py
- [[_write_graph()_8]] - code - graphify/tests/test_stale_prune.py
- [[nfc()]] - code - graphify/graphify/paths.py
- [[test_alive_but_ignored_source_is_pruned()]] - code - graphify/tests/test_stale_prune.py
- [[test_alive_unproven_exclusion_kept_with_warning()]] - code - graphify/tests/test_stale_prune.py
- [[test_bare_basename_alive_elsewhere_not_pruned()]] - code - graphify/tests/test_stale_prune.py
- [[test_genuinely_deleted_source_still_pruned()]] - code - graphify/tests/test_stale_prune.py
- [[test_nfd_disk_nfc_graph_source_not_pruned()]] - code - graphify/tests/test_stale_prune.py
- [[test_stale_prune.py]] - code - graphify/tests/test_stale_prune.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_254
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_Community 17]]
- 3 edges to [[_COMMUNITY_Community 115]]
- 3 edges to [[_COMMUNITY_Community 5]]
- 2 edges to [[_COMMUNITY_Community 34]]
- 1 edge to [[_COMMUNITY_Community 18]]
- 1 edge to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 176]]
- 1 edge to [[_COMMUNITY_Community 33]]

## Top bridge nodes
- [[test_stale_prune.py]] - degree 14, connects to 5 communities
- [[nfc()]] - degree 11, connects to 4 communities
- [[_stale_graph_sources()]] - degree 16, connects to 3 communities
- [[_scan()]] - degree 7, connects to 1 community
- [[_write_graph()_8]] - degree 7, connects to 1 community