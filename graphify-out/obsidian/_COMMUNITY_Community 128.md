---
type: community
cohesion: 0.07
members: 37
---

# Community 128

**Cohesion:** 0.07 - loosely connected
**Members:** 37 nodes

## Members
- [[A graph.json like the 4500 reporter's parallel links stored while the…]] - rationale - graphify/tests/test_serve.py
- [[A truncated answer says how to get all of it `explain --all`, and the exact…]] - rationale - graphify/tests/test_truncation_full_answer.py
- [[One output line per relationship incident to ``nid``. Parallel edges between…]] - rationale - graphify/graphify/serve.py
- [[Render pre-built lines under the same ~3-charstoken budget rule as…]] - rationale - graphify/graphify/serve.py
- [[Strip control characters and cap length. Safe for embedding in JSON data…]] - rationale - graphify/graphify/security.py
- [[The node identifier a lookup tool was called with.…]] - rationale - graphify/graphify/serve.py
- [[_budget_hint()]] - code - graphify/tests/test_truncation_full_answer.py
- [[_chain_graph()]] - code - graphify/tests/test_truncation_full_answer.py
- [[_cut_lines_to_budget()]] - code - graphify/graphify/serve.py
- [[_edge_at()]] - code - graphify/graphify/serve.py
- [[_explain()]] - code - graphify/tests/test_truncation_full_answer.py
- [[_neighbor_lines()]] - code - graphify/graphify/serve.py
- [[_node_arg()]] - code - graphify/graphify/serve.py
- [[_parallel_edge_graph_json()]] - code - graphify/tests/test_serve.py
- [[_tool_get_community()]] - code - graphify/graphify/serve.py
- [[_tool_get_neighbors()]] - code - graphify/graphify/serve.py
- [[_tool_get_node()]] - code - graphify/graphify/serve.py
- [[_write_hub_graph()]] - code - graphify/tests/test_truncation_full_answer.py
- [[sanitize_label()]] - code - graphify/graphify/security.py
- [[test_cut_lines_to_budget_over_budget_announces_at_top()]] - code - graphify/tests/test_serve.py
- [[test_cut_lines_to_budget_under_budget_is_byte_identical()]] - code - graphify/tests/test_serve.py
- [[test_explain_all_lists_every_connection()]] - code - graphify/tests/test_truncation_full_answer.py
- [[test_explain_cut_names_the_total_and_the_option()]] - code - graphify/tests/test_truncation_full_answer.py
- [[test_line_list_truncation_gives_the_exact_budget_for_the_full_answer()]] - code - graphify/tests/test_truncation_full_answer.py
- [[test_load_graph_repairs_multigraph_false_with_parallel_links()]] - code - graphify/tests/test_serve.py
- [[test_neighbor_lines_relation_filter_applies_per_edge()]] - code - graphify/tests/test_serve.py
- [[test_neighbor_lines_shows_every_parallel_relationship()]] - code - graphify/tests/test_serve.py
- [[test_node_arg_accepts_label_node_id_and_id_aliases()]] - code - graphify/tests/test_serve.py
- [[test_query_graph_text_surfaces_parallel_relationships()]] - code - graphify/tests/test_serve.py
- [[test_query_truncation_gives_the_exact_budget_for_the_full_answer()]] - code - graphify/tests/test_truncation_full_answer.py
- [[test_sanitize_label_caps_at_256()]] - code - graphify/tests/test_security.py
- [[test_sanitize_label_none_returns_empty()]] - code - graphify/tests/test_security.py
- [[test_sanitize_label_passthrough_html_chars()]] - code - graphify/tests/test_security.py
- [[test_sanitize_label_safe_passthrough()]] - code - graphify/tests/test_security.py
- [[test_sanitize_label_strips_control_chars()]] - code - graphify/tests/test_security.py
- [[test_subgraph_to_text_renders_every_parallel_edge()]] - code - graphify/tests/test_serve.py
- [[test_truncation_full_answer.py]] - code - graphify/tests/test_truncation_full_answer.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_128
SORT file.name ASC
```

## Connections to other communities
- 18 edges to [[_COMMUNITY_Community 12]]
- 9 edges to [[_COMMUNITY_Community 57]]
- 6 edges to [[_COMMUNITY_Community 64]]
- 5 edges to [[_COMMUNITY_Community 103]]
- 4 edges to [[_COMMUNITY_Community 211]]
- 3 edges to [[_COMMUNITY_Community 3]]
- 2 edges to [[_COMMUNITY_Community 17]]
- 2 edges to [[_COMMUNITY_Community 7]]
- 1 edge to [[_COMMUNITY_Community 81]]
- 1 edge to [[_COMMUNITY_Community 46]]
- 1 edge to [[_COMMUNITY_Community 9]]
- 1 edge to [[_COMMUNITY_Community 159]]
- 1 edge to [[_COMMUNITY_Community 22]]
- 1 edge to [[_COMMUNITY_Community 4]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 23]]

## Top bridge nodes
- [[sanitize_label()]] - degree 25, connects to 9 communities
- [[test_truncation_full_answer.py]] - degree 16, connects to 6 communities
- [[_neighbor_lines()]] - degree 10, connects to 3 communities
- [[test_query_graph_text_surfaces_parallel_relationships()]] - degree 4, connects to 3 communities
- [[_cut_lines_to_budget()]] - degree 9, connects to 2 communities