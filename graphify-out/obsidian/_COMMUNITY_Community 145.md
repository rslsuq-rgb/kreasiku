---
type: community
cohesion: 0.08
members: 33
---

# Community 145

**Cohesion:** 0.08 - loosely connected
**Members:** 33 nodes

## Members
- [[A caller whose call site (L158) differs from its own def line (L90).]] - rationale - graphify/tests/test_affected_cli.py
- [[A graph persisted with directed=false must still recover caller-callee…]] - rationale - graphify/tests/test_affected_cli.py
- [[A trailing path separator must not change the match (parity with explain's…]] - rationale - graphify/tests/test_affected_cli.py
- [[An absolute seed that is NOT under the derived repo root must report a clean…]] - rationale - graphify/tests/test_affected_cli.py
- [[An absolute-path seed resolves off the graph's location, not the cwd (2706).…]] - rationale - graphify/tests/test_affected_cli.py
- [[An edge with no stored location honestly falls back to the node's def line.]] - rationale - graphify/tests/test_affected_cli.py
- [[Fallback layout when --graph points at a graph.json NOT under the graphify-out…]] - rationale - graphify/tests/test_affected_cli.py
- [[Several nodes share a source_file but none is the L1 file node and none's…]] - rationale - graphify/tests/test_affected_cli.py
- [[_write_callsite_graph()]] - code - graphify/tests/test_affected_cli.py
- [[_write_graph()_4]] - code - graphify/tests/test_affected_cli.py
- [[`.x.py`, an absolute path and `x.py` name one file and must resolve alike. The…]] - rationale - graphify/tests/test_affected_cli.py
- [[graphify's `extract` writes graph.json with an edges key (not networkx's…]] - rationale - graphify/tests/test_affected_cli.py
- [[resolve_seed()]] - code - graphify/graphify/affected.py
- [[test_affected_absolute_seed_outside_root_misses_cleanly()]] - code - graphify/tests/test_affected_cli.py
- [[test_affected_absolute_seed_resolves_via_graph_root_off_cwd()]] - code - graphify/tests/test_affected_cli.py
- [[test_affected_absolute_seed_with_graph_not_under_out_dir()]] - code - graphify/tests/test_affected_cli.py
- [[test_affected_cli.py]] - code - graphify/tests/test_affected_cli.py
- [[test_affected_cli_forces_directed_on_undirected_graph()]] - code - graphify/tests/test_affected_cli.py
- [[test_affected_cli_loads_edges_keyed_graph()]] - code - graphify/tests/test_affected_cli.py
- [[test_affected_cli_relation_filter_limits_reverse_traversal()]] - code - graphify/tests/test_affected_cli.py
- [[test_affected_cli_reverse_traverses_impact_edges()]] - code - graphify/tests/test_affected_cli.py
- [[test_affected_cli_source_file_path_uses_file_level_node()]] - code - graphify/tests/test_affected_cli.py
- [[test_affected_falls_back_to_def_line_when_edge_has_no_location()]] - code - graphify/tests/test_affected_cli.py
- [[test_affected_reports_call_site_line_not_def_line()]] - code - graphify/tests/test_affected_cli.py
- [[test_affected_resolves_equivalent_path_forms()]] - code - graphify/tests/test_affected_cli.py
- [[test_resolve_seed_bare_name_matches_callable_label()]] - code - graphify/tests/test_affected_cli.py
- [[test_resolve_seed_bare_name_tie_still_returns_none()]] - code - graphify/tests/test_affected_cli.py
- [[test_resolve_seed_decorated_query_matches_bare_label()]] - code - graphify/tests/test_affected_cli.py
- [[test_resolve_seed_matches_unicode_normalized_label()]] - code - graphify/tests/test_affected_cli.py
- [[test_resolve_seed_preserves_distinct_accents()]] - code - graphify/tests/test_affected_cli.py
- [[test_resolve_seed_source_file_ambiguous_no_file_node_returns_none()]] - code - graphify/tests/test_affected_cli.py
- [[test_resolve_seed_source_file_path_prefers_file_level_node()]] - code - graphify/tests/test_affected_cli.py
- [[test_resolve_seed_source_file_trailing_slash_parity()]] - code - graphify/tests/test_affected_cli.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_145
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_Community 22]]
- 8 edges to [[_COMMUNITY_Community 176]]
- 7 edges to [[_COMMUNITY_Community 230]]
- 1 edge to [[_COMMUNITY_Community 159]]
- 1 edge to [[_COMMUNITY_Community 305]]
- 1 edge to [[_COMMUNITY_Community 57]]
- 1 edge to [[_COMMUNITY_Community 129]]
- 1 edge to [[_COMMUNITY_Community 2]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 23]]
- 1 edge to [[_COMMUNITY_Community 4]]
- 1 edge to [[_COMMUNITY_Community 103]]

## Top bridge nodes
- [[resolve_seed()]] - degree 30, connects to 7 communities
- [[test_affected_cli.py]] - degree 26, connects to 4 communities
- [[test_affected_absolute_seed_outside_root_misses_cleanly()]] - degree 3, connects to 1 community
- [[test_affected_absolute_seed_resolves_via_graph_root_off_cwd()]] - degree 3, connects to 1 community
- [[test_affected_absolute_seed_with_graph_not_under_out_dir()]] - degree 3, connects to 1 community