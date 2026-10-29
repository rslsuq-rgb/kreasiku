---
type: community
cohesion: 0.16
members: 22
---

# Community 253

**Cohesion:** 0.16 - loosely connected
**Members:** 22 nodes

## Members
- [[A graph written before the fix carries `_origin semantic` stubs, some with no…]] - rationale - graphify/tests/test_external_stub_endpoints.py
- [[A sourceless external CALL target is deliberately suppressed (3156) to avoid a…]] - rationale - graphify/tests/test_external_stub_endpoints.py
- [[A stub outlived its last import edge the reload backfill stamped it…]] - rationale - graphify/tests/test_external_stub_endpoints.py
- [[End-to-end `graphify update --no-cluster` writes the raw merged extraction,…]] - rationale - graphify/tests/test_external_stub_endpoints.py
- [[Every edge endpoint in graph.json must be a declared node (2873). `graph.json`…]] - rationale - graphify/tests/test_external_stub_endpoints.py
- [[Mint external stub nodes for import-family links with an undeclared target. The…]] - rationale - graphify/graphify/build.py
- [[Path_85]] - code
- [[Rebuilding an unchanged tree gave external stubs `_origin semantic` that the…]] - rationale - graphify/tests/test_external_stub_endpoints.py
- [[_graph()_11]] - code - graphify/tests/test_external_stub_endpoints.py
- [[_import_extraction()]] - code - graphify/tests/test_external_stub_endpoints.py
- [[_two_file_corpus()]] - code - graphify/tests/test_external_stub_endpoints.py
- [[mint_external_stubs_in_data()]] - code - graphify/graphify/build.py
- [[parametrize_42]] - code
- [[test_build_from_json_mints_external_import_stub()]] - code - graphify/tests/test_external_stub_endpoints.py
- [[test_external_stub_endpoints.py]] - code - graphify/tests/test_external_stub_endpoints.py
- [[test_external_stub_is_dropped_with_its_last_import()]] - code - graphify/tests/test_external_stub_endpoints.py
- [[test_external_stub_makes_serialized_graph_self_consistent()]] - code - graphify/tests/test_external_stub_endpoints.py
- [[test_mint_external_stubs_in_data_is_idempotent()]] - code - graphify/tests/test_external_stub_endpoints.py
- [[test_no_cluster_update_leaves_no_undeclared_endpoint()]] - code - graphify/tests/test_external_stub_endpoints.py
- [[test_non_import_dangling_edge_is_still_dropped()]] - code - graphify/tests/test_external_stub_endpoints.py
- [[test_rebuild_heals_stub_left_by_an_earlier_version()]] - code - graphify/tests/test_external_stub_endpoints.py
- [[test_rebuild_writes_external_stubs_like_a_fresh_build()]] - code - graphify/tests/test_external_stub_endpoints.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_253
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Community 9]]
- 5 edges to [[_COMMUNITY_Community 34]]
- 4 edges to [[_COMMUNITY_Community 115]]
- 2 edges to [[_COMMUNITY_Community 18]]
- 2 edges to [[_COMMUNITY_Community 53]]
- 2 edges to [[_COMMUNITY_Community 23]]
- 1 edge to [[_COMMUNITY_Community 132]]
- 1 edge to [[_COMMUNITY_Community 17]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_external_stub_endpoints.py]] - degree 24, connects to 9 communities
- [[test_no_cluster_update_leaves_no_undeclared_endpoint()]] - degree 6, connects to 3 communities
- [[test_rebuild_heals_stub_left_by_an_earlier_version()]] - degree 7, connects to 2 communities
- [[mint_external_stubs_in_data()]] - degree 5, connects to 2 communities
- [[test_external_stub_is_dropped_with_its_last_import()]] - degree 7, connects to 1 community