---
type: community
cohesion: 0.08
members: 43
---

# Community 103

**Cohesion:** 0.08 - loosely connected
**Members:** 43 nodes

## Members
- [[3878 (serve mirror) a directed path from a symbol out to the file that…]] - rationale - graphify/tests/test_serve.py
- [[A non-decode ValueError (e.g. a non-.json path) must still print the generic…]] - rationale - graphify/tests/test_serve.py
- [[Body of the `shortest_path` MCP tool (module-level so tests can call it without…]] - rationale - graphify/graphify/serve.py
- [[On a plain DiGraph, u-v and v-u become one undirected edge — the same fold…]] - rationale - graphify/tests/test_query_mcp_direction.py
- [[One `calls` edge, on-disk undirected — the `graphify extract` shape.]] - rationale - graphify/tests/test_query_mcp_direction.py
- [[The MCP server's traversal view and shortest-path graphs are built once per…]] - rationale - graphify/tests/test_mcp_graph_view_cache.py
- [[The sorted, materialized graph `_shortest_path_text` searches. Deterministic…]] - rationale - graphify/graphify/serve.py
- [[Undirected copy of `G` for BFSDFS, with true direction kept per edge.…]] - rationale - graphify/graphify/serve.py
- [[_directed_chain()]] - code - graphify/tests/test_serve.py
- [[_fresh()]] - code - graphify/tests/test_mcp_graph_view_cache.py
- [[_load_graph()]] - code - graphify/graphify/serve.py
- [[_path_search_graph()]] - code - graphify/graphify/serve.py
- [[_shortest_path_text()]] - code - graphify/graphify/serve.py
- [[_tool_shortest_path()]] - code - graphify/graphify/serve.py
- [[_traversal_view()]] - code - graphify/graphify/serve.py
- [[_write()_48]] - code - graphify/tests/test_mcp_graph_view_cache.py
- [[_write_calls_graph()]] - code - graphify/tests/test_query_mcp_direction.py
- [[`_query_graph_text` on the directed graph `_load_graph` builds (the MCP path).…]] - rationale - graphify/tests/test_query_mcp_direction.py
- [[alpha --calls-- beta --calls-- gamma, as _load_graph would load it (directed…]] - rationale - graphify/tests/test_serve.py
- [[json.JSONDecodeError is a ValueError subclass, so its except clause must be…]] - rationale - graphify/tests/test_serve.py
- [[networkx_readwrite]] - concept
- [[test_cached_shortest_path_answers_like_a_fresh_one()]] - code - graphify/tests/test_mcp_graph_view_cache.py
- [[test_cached_view_answers_like_a_fresh_one_in_any_order()]] - code - graphify/tests/test_mcp_graph_view_cache.py
- [[test_load_graph_corrupted_json_prints_recovery_message()]] - code - graphify/tests/test_serve.py
- [[test_load_graph_generic_value_error_message_unchanged()]] - code - graphify/tests/test_serve.py
- [[test_load_graph_keeps_simple_graph_simple()]] - code - graphify/tests/test_serve.py
- [[test_load_graph_missing_file()]] - code - graphify/tests/test_serve.py
- [[test_mcp_graph_view_cache.py]] - code - graphify/tests/test_mcp_graph_view_cache.py
- [[test_mcp_query_explicit_context_filter_still_applies()]] - code - graphify/tests/test_query_mcp_direction.py
- [[test_mcp_query_seeded_on_callee_reaches_the_caller()]] - code - graphify/tests/test_query_mcp_direction.py
- [[test_mcp_query_seeded_on_caller_is_unchanged()]] - code - graphify/tests/test_query_mcp_direction.py
- [[test_path_search_graphs_are_built_once_per_direction()]] - code - graphify/tests/test_mcp_graph_view_cache.py
- [[test_query_mcp_direction.py]] - code - graphify/tests/test_query_mcp_direction.py
- [[test_reloaded_graph_gets_its_own_path_graph()]] - code - graphify/tests/test_mcp_graph_view_cache.py
- [[test_reloaded_graph_gets_its_own_view()]] - code - graphify/tests/test_mcp_graph_view_cache.py
- [[test_shortest_path_tool_directed_backwards_is_no_path()]] - code - graphify/tests/test_serve.py
- [[test_shortest_path_tool_directed_respects_direction()]] - code - graphify/tests/test_serve.py
- [[test_shortest_path_tool_routes_through_a_contains_edge()]] - code - graphify/tests/test_serve.py
- [[test_shortest_path_tool_undirected_opt_in()]] - code - graphify/tests/test_serve.py
- [[test_traversal_view_folds_mutual_arcs_like_the_cli_loader()]] - code - graphify/tests/test_query_mcp_direction.py
- [[test_traversal_view_is_built_once_per_graph()]] - code - graphify/tests/test_mcp_graph_view_cache.py
- [[test_traversal_view_keeps_multigraph_parallel_and_mutual_edges()]] - code - graphify/tests/test_query_mcp_direction.py
- [[test_traversal_view_leaves_undirected_graph_alone()]] - code - graphify/tests/test_query_mcp_direction.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_103
SORT file.name ASC
```

## Connections to other communities
- 15 edges to [[_COMMUNITY_Community 12]]
- 12 edges to [[_COMMUNITY_Community 57]]
- 8 edges to [[_COMMUNITY_Community 159]]
- 7 edges to [[_COMMUNITY_Community 23]]
- 5 edges to [[_COMMUNITY_Community 65]]
- 5 edges to [[_COMMUNITY_Community 128]]
- 5 edges to [[_COMMUNITY_Community 71]]
- 5 edges to [[_COMMUNITY_Community 115]]
- 2 edges to [[_COMMUNITY_Community 49]]
- 2 edges to [[_COMMUNITY_Community 134]]
- 2 edges to [[_COMMUNITY_Community 9]]
- 1 edge to [[_COMMUNITY_Community 237]]
- 1 edge to [[_COMMUNITY_Community 551]]
- 1 edge to [[_COMMUNITY_Community 586]]
- 1 edge to [[_COMMUNITY_Community 211]]
- 1 edge to [[_COMMUNITY_Community 145]]
- 1 edge to [[_COMMUNITY_Community 17]]
- 1 edge to [[_COMMUNITY_Community 215]]
- 1 edge to [[_COMMUNITY_Community 22]]
- 1 edge to [[_COMMUNITY_Community 228]]
- 1 edge to [[_COMMUNITY_Community 235]]
- 1 edge to [[_COMMUNITY_Community 295]]
- 1 edge to [[_COMMUNITY_Community 385]]
- 1 edge to [[_COMMUNITY_Community 46]]
- 1 edge to [[_COMMUNITY_Community 513]]

## Top bridge nodes
- [[networkx_readwrite]] - degree 20, connects to 17 communities
- [[_load_graph()]] - degree 34, connects to 7 communities
- [[_shortest_path_text()]] - degree 19, connects to 4 communities
- [[test_mcp_graph_view_cache.py]] - degree 18, connects to 4 communities
- [[test_query_mcp_direction.py]] - degree 15, connects to 4 communities