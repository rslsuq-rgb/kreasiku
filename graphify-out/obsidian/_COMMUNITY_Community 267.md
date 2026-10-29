---
type: community
cohesion: 0.18
members: 21
---

# Community 267

**Cohesion:** 0.18 - loosely connected
**Members:** 21 nodes

## Members
- [[A builtin `append` call must not create an edge to the user's method.]] - rationale - graphify/tests/test_go_builtin_call_targets.py
- [[A method named `append` in one file, builtin `append` calls in another.]] - rationale - graphify/tests/test_go_builtin_call_targets.py
- [[Cross-language guard `new` must stay resolvable in Rust. Rust normalizes…]] - rationale - graphify/tests/test_go_builtin_call_targets.py
- [[Filtering call targets must not delete the same-named user symbol.]] - rationale - graphify/tests/test_go_builtin_call_targets.py
- [[Go predeclared functions must not bind to same-named user symbols.…]] - rationale - graphify/tests/test_go_builtin_call_targets.py
- [[Same-file binding needs the guard too, not just the cross-file pass.…]] - rationale - graphify/tests/test_go_builtin_call_targets.py
- [[The guard is a no-op for genuine user symbols. Uses a plain package-level call…]] - rationale - graphify/tests/test_go_builtin_call_targets.py
- [[_edges_between()_2]] - code - graphify/tests/test_go_builtin_call_targets.py
- [[_extract_go()]] - code - graphify/tests/test_go_builtin_call_targets.py
- [[_label()_3]] - code - graphify/tests/test_go_builtin_call_targets.py
- [[_nodes_by_file()_1]] - code - graphify/tests/test_go_builtin_call_targets.py
- [[`h.append(v)` is a real method call — the filter must not reach it. The callee…]] - rationale - graphify/tests/test_go_builtin_call_targets.py
- [[builtin_shadow_repo()]] - code - graphify/tests/test_go_builtin_call_targets.py
- [[fixture_14]] - code
- [[test_builtin_append_does_not_bind_in_file()]] - code - graphify/tests/test_go_builtin_call_targets.py
- [[test_builtin_append_does_not_bind_to_user_method()]] - code - graphify/tests/test_go_builtin_call_targets.py
- [[test_go_builtin_call_targets.py]] - code - graphify/tests/test_go_builtin_call_targets.py
- [[test_go_selector_call_to_shadowing_method_survives()]] - code - graphify/tests/test_go_builtin_call_targets.py
- [[test_non_builtin_cross_file_call_still_resolves()]] - code - graphify/tests/test_go_builtin_call_targets.py
- [[test_rust_in_file_type_new_edge_survives()]] - code - graphify/tests/test_go_builtin_call_targets.py
- [[test_user_method_node_survives_the_filter()_1]] - code - graphify/tests/test_go_builtin_call_targets.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_267
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_Community 14]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 59]]

## Top bridge nodes
- [[test_go_builtin_call_targets.py]] - degree 15, connects to 3 communities
- [[_extract_go()]] - degree 7, connects to 1 community
- [[test_rust_in_file_type_new_edge_survives()]] - degree 6, connects to 1 community