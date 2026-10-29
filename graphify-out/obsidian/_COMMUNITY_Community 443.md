---
type: community
cohesion: 0.20
members: 12
---

# Community 443

**Cohesion:** 0.20 - loosely connected
**Members:** 12 nodes

## Members
- [[--no-cluster's exclusion-only early exit must still scrub the excluded file's…]] - rationale - graphify/tests/test_extract_cli.py
- [[Post-1897 state the excluded file IS manifest-listed. It must be pruned from…]] - rationale - graphify/tests/test_extract_cli.py
- [[Seed a graph with nodes for x.py, drop x.py from the manifest (pre-1897…]] - rationale - graphify/tests/test_extract_cli.py
- [[_introspect()]] - code - graphify/tests/test_extract_cli.py
- [[_node_sources()]] - code - graphify/tests/test_extract_cli.py
- [[_run()_35]] - code - graphify/tests/test_extract_cli.py
- [[_two_file_corpus()_1]] - code - graphify/tests/test_extract_cli.py
- [[parametrize_76]] - code
- [[test_incremental_extract_prunes_excluded_file_listed_in_manifest()]] - code - graphify/tests/test_extract_cli.py
- [[test_incremental_extract_prunes_newly_excluded_file_not_in_manifest()]] - code - graphify/tests/test_extract_cli.py
- [[test_no_cluster_incremental_prunes_newly_excluded_file()]] - code - graphify/tests/test_extract_cli.py
- [[test_pathless_postgres_extract_initializes_empty_detection()]] - code - graphify/tests/test_extract_cli.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_443
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_Community 342]]
- 6 edges to [[_COMMUNITY_Community 397]]
- 2 edges to [[_COMMUNITY_Community 22]]
- 2 edges to [[_COMMUNITY_Community 398]]

## Top bridge nodes
- [[test_incremental_extract_prunes_excluded_file_listed_in_manifest()]] - degree 6, connects to 3 communities
- [[test_incremental_extract_prunes_newly_excluded_file_not_in_manifest()]] - degree 6, connects to 3 communities
- [[test_no_cluster_incremental_prunes_newly_excluded_file()]] - degree 6, connects to 3 communities
- [[_node_sources()]] - degree 8, connects to 2 communities
- [[_two_file_corpus()_1]] - degree 5, connects to 2 communities