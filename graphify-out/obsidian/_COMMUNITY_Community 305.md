---
type: community
cohesion: 0.16
members: 19
---

# Community 305

**Cohesion:** 0.16 - loosely connected
**Members:** 19 nodes

## Members
- [[1764's concern was a view that reads `react - react`; H3 only covers imports.]] - rationale - graphify/tests/test_extract.py
- [[A manifest's entries for dependency `name`, found by their place in the graph…]] - rationale - graphify/tests/test_extract.py
- [[_built()]] - code - graphify/tests/test_extract.py
- [[_entries()]] - code - graphify/tests/test_extract.py
- [[_hops()]] - code - graphify/tests/test_extract.py
- [[_manifest()_1]] - code - graphify/tests/test_extract.py
- [[_node()_4]] - code - graphify/tests/test_extract.py
- [[is_entry()]] - code - graphify/tests/test_extract.py
- [[test_a_dependency_entry_is_connected_to_the_code_that_imports_the_package()]] - code - graphify/tests/test_extract.py
- [[test_a_dependency_has_a_single_node_labelled_with_its_bare_name()]] - code - graphify/tests/test_extract.py
- [[test_a_dependency_named_like_a_local_module_stays_a_namespaced_external_ref()]] - code - graphify/tests/test_extract.py
- [[test_every_dependency_block_connects_its_entries_to_the_importing_code()]] - code - graphify/tests/test_extract.py
- [[test_in_a_two_manifest_corpus_the_code_reaches_its_own_manifest_entry()]] - code - graphify/tests/test_extract.py
- [[test_no_edge_of_any_relation_joins_two_nodes_with_the_same_label()]] - code - graphify/tests/test_extract.py
- [[test_no_import_runs_between_two_nodes_with_the_same_label_and_no_edge_is_a_self_loop()]] - code - graphify/tests/test_extract.py
- [[test_the_line_that_declares_a_dependency_is_still_recorded()]] - code - graphify/tests/test_extract.py
- [[test_the_package_name_resolves_to_a_single_node_for_explain_and_affected()]] - code - graphify/tests/test_extract.py
- [[test_two_manifests_that_depend_on_react_each_keep_their_declaring_line()]] - code - graphify/tests/test_extract.py
- [[xfail]] - code

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_305
SORT file.name ASC
```

## Connections to other communities
- 15 edges to [[_COMMUNITY_Community 2]]
- 1 edge to [[_COMMUNITY_Community 9]]
- 1 edge to [[_COMMUNITY_Community 14]]
- 1 edge to [[_COMMUNITY_Community 145]]
- 1 edge to [[_COMMUNITY_Community 47]]
- 1 edge to [[_COMMUNITY_Community 69]]
- 1 edge to [[_COMMUNITY_Community 57]]

## Top bridge nodes
- [[_built()]] - degree 14, connects to 4 communities
- [[test_the_package_name_resolves_to_a_single_node_for_explain_and_affected()]] - degree 4, connects to 3 communities
- [[test_every_dependency_block_connects_its_entries_to_the_importing_code()]] - degree 6, connects to 2 communities
- [[_entries()]] - degree 9, connects to 1 community
- [[test_in_a_two_manifest_corpus_the_code_reaches_its_own_manifest_entry()]] - degree 6, connects to 1 community