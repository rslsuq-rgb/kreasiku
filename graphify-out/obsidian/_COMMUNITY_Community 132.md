---
type: community
cohesion: 0.11
members: 35
---

# Community 132

**Cohesion:** 0.11 - loosely connected
**Members:** 35 nodes

## Members
- [[3014 every input graph numbers its communities from 0, so a merge carrying…]] - rationale - graphify/tests/test_global_graph.py
- [[F4 global_add must refuse to read a source graph.json that exceeds the size…]] - rationale - graphify/tests/test_global_graph.py
- [[Build a simple nx.Graph from node dicts.]] - rationale - graphify/tests/test_global_graph.py
- [[Edges incident to an external node that gets deduplicated against an already-…]] - rationale - graphify/tests/test_global_graph.py
- [[Remove all nodes tagged with repo_tag from G in-place. Returns count removed.]] - rationale - graphify/graphify/build.py
- [[Return a copy of G with all node IDs prefixed with repo_tag. Labels are…]] - rationale - graphify/graphify/build.py
- [[Tests for the global graph infrastructure (graphifyglobal_graph.py),…]] - rationale - graphify/tests/test_global_graph.py
- [[The default offset must be a no-op — no community rewrite, no local_community…]] - rationale - graphify/tests/test_global_graph.py
- [[_graph_to_json()]] - code - graphify/tests/test_global_graph.py
- [[_make_graph()_4]] - code - graphify/tests/test_global_graph.py
- [[merge-graphs should prefix node IDs with repo name to avoid silent collision.]] - rationale - graphify/tests/test_global_graph.py
- [[prefix_graph_for_global must update directional edge attributes (_src_tgt) so…]] - rationale - graphify/tests/test_global_graph.py
- [[prefix_graph_for_global()]] - code - graphify/graphify/build.py
- [[prune_repo_from_graph()]] - code - graphify/graphify/build.py
- [[test_dedup_ok_with_no_repo_attr()]] - code - graphify/tests/test_global_graph.py
- [[test_dedup_ok_with_single_repo()]] - code - graphify/tests/test_global_graph.py
- [[test_dedup_raises_on_cross_repo_nodes()]] - code - graphify/tests/test_global_graph.py
- [[test_global_add_collision_warning()]] - code - graphify/tests/test_global_graph.py
- [[test_global_add_creates_global_graph()]] - code - graphify/tests/test_global_graph.py
- [[test_global_add_rejects_oversized_source_graph()]] - code - graphify/tests/test_global_graph.py
- [[test_global_add_rewires_edges_to_deduplicated_externals()]] - code - graphify/tests/test_global_graph.py
- [[test_global_add_skip_on_unchanged_hash()]] - code - graphify/tests/test_global_graph.py
- [[test_global_add_two_repos_no_collision()]] - code - graphify/tests/test_global_graph.py
- [[test_global_graph.py]] - code - graphify/tests/test_global_graph.py
- [[test_global_remove()]] - code - graphify/tests/test_global_graph.py
- [[test_global_remove_unknown_tag_raises()]] - code - graphify/tests/test_global_graph.py
- [[test_merge_graphs_prefixes_ids()]] - code - graphify/tests/test_global_graph.py
- [[test_prefix_graph_offsets_community_ids()]] - code - graphify/tests/test_global_graph.py
- [[test_prefix_graph_preserves_label()]] - code - graphify/tests/test_global_graph.py
- [[test_prefix_graph_rewrites_edge_directional_attributes()]] - code - graphify/tests/test_global_graph.py
- [[test_prefix_graph_rewrites_edges()]] - code - graphify/tests/test_global_graph.py
- [[test_prefix_graph_sets_repo_and_local_id()]] - code - graphify/tests/test_global_graph.py
- [[test_prefix_graph_zero_offset_leaves_communities_untouched()]] - code - graphify/tests/test_global_graph.py
- [[test_prune_repo_removes_correct_nodes()]] - code - graphify/tests/test_global_graph.py
- [[test_prune_repo_returns_zero_if_not_present()]] - code - graphify/tests/test_global_graph.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_132
SORT file.name ASC
```

## Connections to other communities
- 23 edges to [[_COMMUNITY_Community 17]]
- 4 edges to [[_COMMUNITY_Community 15]]
- 3 edges to [[_COMMUNITY_Community 9]]
- 2 edges to [[_COMMUNITY_Community 23]]
- 2 edges to [[_COMMUNITY_Community 208]]
- 2 edges to [[_COMMUNITY_Community 53]]
- 1 edge to [[_COMMUNITY_Community 41]]
- 1 edge to [[_COMMUNITY_Community 253]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 19]]

## Top bridge nodes
- [[prefix_graph_for_global()]] - degree 21, connects to 7 communities
- [[test_global_graph.py]] - degree 34, connects to 6 communities
- [[prune_repo_from_graph()]] - degree 9, connects to 3 communities
- [[test_global_add_rewires_edges_to_deduplicated_externals()]] - degree 6, connects to 1 community
- [[test_global_remove()]] - degree 6, connects to 1 community