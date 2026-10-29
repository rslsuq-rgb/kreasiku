---
type: community
cohesion: 0.11
members: 27
---

# Community 199

**Cohesion:** 0.11 - loosely connected
**Members:** 27 nodes

## Members
- [[A real cross-file call must resolve to the SRC definition even when a same-…]] - rationale - graphify/tests/test_symbol_resolution.py
- [[A test file calling save() with both a src def and a test-local def present…]] - rationale - graphify/tests/test_symbol_resolution.py
- [[Build label - node id list for conservative cross-file resolution. An enum…]] - rationale - graphify/graphify/symbol_resolution.py
- [[Normalize a node label into the key used for call resolution.]] - rationale - graphify/graphify/symbol_resolution.py
- [[One src def plus many same-named test stubs exactly one edge to src.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[Resolve unqualified raw calls conservatively after all files are known. This…]] - rationale - graphify/graphify/symbol_resolution.py
- [[Tests for graphify.symbol_resolution.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[The python cross-file resolver returns  (not crash) on bad raw_calls.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[Two genuine NON-test defs of the same name the god-node guard must still hold…]] - rationale - graphify/tests/test_symbol_resolution.py
- [[build_label_index()]] - code - graphify/graphify/symbol_resolution.py
- [[label index must not include documentpaperimage nodes even when label and id…]] - rationale - graphify/tests/test_symbol_resolution.py
- [[normalise_callable_label()]] - code - graphify/graphify/symbol_resolution.py
- [[resolve_cross_file_raw_calls()]] - code - graphify/graphify/symbol_resolution.py
- [[test_build_label_index_collects_unique_symbols()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_build_label_index_excludes_non_code_nodes()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_build_python_symbol_index_uses_module_stem_and_label()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_node_is_resolvable_symbol_skips_rationale_and_doc_tags()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_normalise_callable_label_strips_function_punctuation()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_call_site_is_test_prefers_test_local()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_emits_unique_unqualified_call()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_n_mock_scale()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_real_edge_survives_test_mock()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_skips_ambiguous_duplicate_labels()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_skips_existing_pair()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_skips_member_calls()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_survives_malformed_raw_calls()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_symbol_resolution.py]] - code - graphify/tests/test_symbol_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_199
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_Community 242]]
- 15 edges to [[_COMMUNITY_Community 200]]
- 6 edges to [[_COMMUNITY_Community 389]]
- 5 edges to [[_COMMUNITY_Community 533]]
- 3 edges to [[_COMMUNITY_Community 552]]
- 1 edge to [[_COMMUNITY_Community 298]]
- 1 edge to [[_COMMUNITY_Community 645]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_symbol_resolution.py]] - degree 56, connects to 7 communities
- [[resolve_cross_file_raw_calls()]] - degree 16, connects to 3 communities
- [[build_label_index()]] - degree 9, connects to 1 community
- [[normalise_callable_label()]] - degree 7, connects to 1 community
- [[test_build_python_symbol_index_uses_module_stem_and_label()]] - degree 2, connects to 1 community