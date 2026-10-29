---
type: community
cohesion: 0.10
members: 45
---

# Community 97

**Cohesion:** 0.10 - loosely connected
**Members:** 45 nodes

## Members
- [[A hook-style partial rebuild must not re-point edges from untouched files.…]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[An aliased internal qualified type points to its package definition.]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[An imported internal package selector resolves despite same-name decoys.]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[Changed callers still resolve calls and types defined in unchanged files.]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[Exported wrapper + unexported worker of the same name, plus a decoy.]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[Methods ``Get`` and ``get`` on the same type in one file are two symbols, not…]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[Only the members of a collision group can move the other types in the file,…]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[Path_246]] - code
- [[Regression coverage for package-qualified Go calls and type references.]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[The exported member keeps the plain id whether or not a sibling exists. Cross-…]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[The exported type and its methods keep the ids they have with no unexported…]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[The struct's methods hang off the struct, not off the interface, and a method…]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[When no member is the unique exported one (``Run`` and ``RUN`` both start…]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[_by_label()_3]] - code - graphify/tests/test_go_qualified_resolution.py
- [[_case_only_sibling_corpus()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[_extract()_57]] - code - graphify/tests/test_go_qualified_resolution.py
- [[_gin_corpus()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[_ids()_3]] - code - graphify/tests/test_go_qualified_resolution.py
- [[_owners()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[``testing.T`` must not reference an unrelated local function ``T``.]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[``Run`` and ``run`` in one file are two symbols, not one.]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[``Run`` calls its own file's ``run``, never another package's.]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[``errors.New`` must not become a call to an unrelated local ``New``.]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[``type ResponseWriter`` and ``type responseWriter`` in one file are two types…]] - rationale - graphify/tests/test_go_qualified_resolution.py
- [[ids()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[ids()_1]] - code - graphify/tests/test_go_qualified_resolution.py
- [[interface_ids()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_case_only_sibling_all_exported_are_both_extracted()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_case_only_sibling_does_not_bind_to_another_package()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_case_only_sibling_exported_keeps_stable_id()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_case_only_sibling_exported_type_keeps_stable_ids()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_case_only_sibling_functions_are_both_extracted()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_case_only_sibling_methods_are_both_extracted()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_case_only_sibling_type_field_reference_lands_on_the_struct()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_case_only_sibling_type_ids_do_not_depend_on_declaration_order()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_case_only_sibling_type_keeps_its_own_methods()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_case_only_sibling_types_are_both_extracted()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_external_package_new_does_not_bind_to_local_new()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_external_qualified_type_does_not_bind_to_local_function()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_go_qualified_resolution.py]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_incremental_qualified_resolution_uses_unchanged_context()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_incremental_sibling_addition_keeps_cross_package_edge()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_internal_aliased_package_new_resolves_exact_import()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_internal_qualified_type_resolves_exact_import()]] - code - graphify/tests/test_go_qualified_resolution.py
- [[test_non_colliding_types_keep_their_ids_beside_a_colliding_pair()]] - code - graphify/tests/test_go_qualified_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_97
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_Community 14]]
- 2 edges to [[_COMMUNITY_Community 41]]
- 2 edges to [[_COMMUNITY_Community 9]]
- 2 edges to [[_COMMUNITY_Community 7]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_go_qualified_resolution.py]] - degree 30, connects to 6 communities
- [[test_incremental_sibling_addition_keeps_cross_package_edge()]] - degree 8, connects to 4 communities
- [[_extract()_57]] - degree 15, connects to 1 community
- [[test_incremental_qualified_resolution_uses_unchanged_context()]] - degree 6, connects to 1 community