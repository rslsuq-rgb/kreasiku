---
type: community
cohesion: 0.10
members: 38
---

# Community 124

**Cohesion:** 0.10 - loosely connected
**Members:** 38 nodes

## Members
- [[Default undirected graph b imports a at runtime, a only `import type`s b. The…]] - rationale - graphify/tests/test_type_only_import_cycles.py
- [[One runtime leg + one type-only leg no runtime cycle exists.]] - rationale - graphify/tests/test_type_only_import_cycles.py
- [[The `else` of the guard and `if not TYPE_CHECKING` run at import time.]] - rationale - graphify/tests/test_type_only_import_cycles.py
- [[The reporter's shape, in the default undirected build.]] - rationale - graphify/tests/test_type_only_import_cycles.py
- [[The same merge hid a real cycle for TypeScript (3123).]] - rationale - graphify/tests/test_type_only_import_cycles.py
- [[The shape in the issue, in a directed build.]] - rationale - graphify/tests/test_type_only_import_cycles.py
- [[Type-only imports must not manufacture Import Cycles (3123). `import type` …]] - rationale - graphify/tests/test_type_only_import_cycles.py
- [[Undirected, a pair is one edge a.py's guarded `import pkg.b` folds with b.py's…]] - rationale - graphify/tests/test_type_only_import_cycles.py
- [[_cycles()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[_extract()_2]] - code - graphify/tests/test_type_only_import_cycles.py
- [[_module_edges()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[_names()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[_stamped_by_line()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[`import type from '.x.js'` imports a value whose name is `type` — erased by…]] - rationale - graphify/tests/test_type_only_import_cycles.py
- [[`import { type B, C }` still imports C at runtime.]] - rationale - graphify/tests/test_type_only_import_cycles.py
- [[build_from_json drops a lower-confidence duplicate of an edge it already holds;…]] - rationale - graphify/tests/test_type_only_import_cycles.py
- [[edge()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[parametrize_8]] - code
- [[test_a_cycle_with_one_type_only_leg_is_not_a_cycle()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_a_default_binding_named_type_is_a_runtime_import()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_a_mixed_specifier_list_stays_a_runtime_edge()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_a_real_runtime_cycle_is_still_reported()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_a_runtime_import_dropped_by_the_merge_still_clears_the_marker()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_a_type_import_beside_a_value_import_of_the_same_file_keeps_the_cycle()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_export_type_reexport_is_stamped()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_import_type_statement_is_stamped()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_plain_imports_are_untouched()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_python_guard_in_one_direction_keeps_the_runtime_import_in_the_other()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_python_imports_that_run_are_not_stamped()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_python_imports_under_type_checking_are_stamped()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_python_ring_through_a_submodule_import_and_a_guard_keeps_its_cycle()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_python_runtime_and_guarded_import_of_one_module_keep_the_cycle()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_python_three_file_ring_closes_only_through_a_runtime_import()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_python_two_file_cycle_closes_only_through_a_runtime_import()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_the_reporters_two_file_cycle_is_gone()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_type_only_import_cycles.py]] - code - graphify/tests/test_type_only_import_cycles.py
- [[test_undirected_graph_keeps_the_marker_when_the_reverse_import_is_dropped()]] - code - graphify/tests/test_type_only_import_cycles.py
- [[{line some edge of that import statement is stamped} for one file.]] - rationale - graphify/tests/test_type_only_import_cycles.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_124
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_Community 11]]
- 3 edges to [[_COMMUNITY_Community 9]]
- 2 edges to [[_COMMUNITY_Community 17]]
- 2 edges to [[_COMMUNITY_Community 14]]
- 2 edges to [[_COMMUNITY_Community 7]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 53]]

## Top bridge nodes
- [[test_type_only_import_cycles.py]] - degree 34, connects to 9 communities
- [[_cycles()]] - degree 15, connects to 3 communities
- [[_extract()_2]] - degree 11, connects to 2 communities
- [[test_a_runtime_import_dropped_by_the_merge_still_clears_the_marker()]] - degree 6, connects to 2 communities