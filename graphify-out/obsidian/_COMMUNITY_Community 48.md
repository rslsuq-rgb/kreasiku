---
type: community
cohesion: 0.03
members: 82
---

# Community 48

**Cohesion:** 0.03 - loosely connected
**Members:** 82 nodes

## Members
- [[1007 manifest stores absolute paths, graph nodes store relative paths.…]] - rationale - graphify/tests/test_build.py
- [[1007 prune_sources with Windows-style backslash absolute paths must still…]] - rationale - graphify/tests/test_build.py
- [[3411 Re-extracting B.csproj (which has a ProjectReference to A.csproj) must…]] - rationale - graphify/tests/test_build.py
- [[3411 Re-extracting a .sln must replace only the .sln's AST contribution.…]] - rationale - graphify/tests/test_build.py
- [[3411 build_merge honors ast_sources argument when passed explicitly.]] - rationale - graphify/tests/test_build.py
- [[3411 merge_raw_extraction shares the same explicit extraction provenance…]] - rationale - graphify/tests/test_build.py
- [[3477 When build() is called without protected_ids (cold build), normal global…]] - rationale - graphify/tests/test_build_merge_dedup_scope.py
- [[A numeric endpoint with no node of its own must behave like a string one. Both…]] - rationale - graphify/tests/test_non_string_node_ids.py
- [[AST node in graph.json has relative source_file; incoming semantic node has…]] - rationale - graphify/tests/test_issue_3472_source_file_collision.py
- [[An explicit directed=TrueFalse from the caller must still win over whatever is…]] - rationale - graphify/tests/test_build.py
- [[Arrival order independence if semantic chunk arrives before AST chunk, the…]] - rationale - graphify/tests/test_issue_3472_source_file_collision.py
- [[Coerce numeric node ids and edgehyperedge references to str, in place (2326).…]] - rationale - graphify/graphify/build.py
- [[Coercing node ids without coercing endpoints would orphan the edge.]] - rationale - graphify/tests/test_non_string_node_ids.py
- [[Merge multiple extraction results into one graph. directed=True produces a…]] - rationale - graphify/graphify/build.py
- [[Nodes are root-relative by dedup time; run from a subdirectory of the root, a…]] - rationale - graphify/tests/test_dedup.py
- [[Non-string node ids from LLM backends must not crash the build (2326). A…]] - rationale - graphify/tests/test_non_string_node_ids.py
- [[Only numeric scalars are coerced; str(None) == 'None' would be a lie.]] - rationale - graphify/tests/test_non_string_node_ids.py
- [[Re-extracting a CHANGED file must REPLACE its prior nodesedges, not accumulate…]] - rationale - graphify/tests/test_build.py
- [[Regression for 2342. build_merge with no explicit `directed=` must honor the…]] - rationale - graphify/tests/test_build.py
- [[Regression for 2342 once build_merge correctly inherits the on-disk…]] - rationale - graphify/tests/test_build.py
- [[Regression for 760. When the callee is defined before the caller in source,…]] - rationale - graphify/tests/test_build.py
- [[Regression guard the normal path must be byte-identical.]] - rationale - graphify/tests/test_non_string_node_ids.py
- [[Reloading a persisted graph does not go through build()dedup.]] - rationale - graphify/tests/test_non_string_node_ids.py
- [[Semantic edges reach dedup with an ABSOLUTE source_file while nodes are already…]] - rationale - graphify/tests/test_dedup.py
- [[Skill contract the extraction subagent must emit source_file as the verbatim…]] - rationale - graphify/tests/test_build.py
- [[Tests for issue 3472 Same file, two path forms absolute source_file from…]] - rationale - graphify/tests/test_issue_3472_source_file_collision.py
- [[The complete build keeps every marked reference stub and the definition. This…]] - rationale - graphify/tests/test_build.py
- [[The default build path must not discard semantic enrichment (2091).]] - rationale - graphify/tests/test_dedup.py
- [[The full build path (dedup runs before build_from_json) keeps both files' nodes…]] - rationale - graphify/tests/test_dedup.py
- [[Two genuinely different files that happen to mint the same ID must still be…]] - rationale - graphify/tests/test_issue_3472_source_file_collision.py
- [[When root is omitted, build_merge infers _eff_root and passes it downstream, so…]] - rationale - graphify/tests/test_issue_3472_source_file_collision.py
- [[_coerce_non_string_ids()]] - code - graphify/graphify/build.py
- [[_edge()_4]] - code - graphify/tests/test_non_string_node_ids.py
- [[_node()_9]] - code - graphify/tests/test_non_string_node_ids.py
- [[build()_1]] - code - graphify/graphify/build.py
- [[build() passes root through to build_from_json (932).]] - rationale - graphify/tests/test_build.py
- [[build() should deduplicate near-identical nodes across extractions.]] - rationale - graphify/tests/test_dedup.py
- [[build_from_json's sorted(node_set) crashed even with nothing to dedup.]] - rationale - graphify/tests/test_non_string_node_ids.py
- [[dedup reads the legacy fromto aliases (803), so they need it as well.]] - rationale - graphify/tests/test_non_string_node_ids.py
- [[dedup._pick_winner regex-searched the raw id (the issue's traceback). Driven…]] - rationale - graphify/tests/test_non_string_node_ids.py
- [[definition_file should also be normalized to repo-relative against root.]] - rationale - graphify/tests/test_issue_3472_source_file_collision.py
- [[graph_for()_2]] - code - graphify/tests/test_non_string_node_ids.py
- [[parametrize_84]] - code
- [[test_bool_id_is_not_coerced()]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_build_accepts_a_single_int_id_node_with_no_duplicate()]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_build_calls_dedup()]] - code - graphify/tests/test_dedup.py
- [[test_build_dedup_preserves_semantic_attributes()]] - code - graphify/tests/test_dedup.py
- [[test_build_from_json_coerces_on_the_direct_entry()]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_build_from_subdirectory_moves_edges_to_renamed_node()]] - code - graphify/tests/test_dedup.py
- [[test_build_merge_directed_edge_direction_survives_round_trip()]] - code - graphify/tests/test_build.py
- [[test_build_merge_explicit_ast_sources_argument()]] - code - graphify/tests/test_build.py
- [[test_build_merge_explicit_directed_overrides_disk_flag()]] - code - graphify/tests/test_build.py
- [[test_build_merge_infers_root_for_semantic_absolute_path()]] - code - graphify/tests/test_issue_3472_source_file_collision.py
- [[test_build_merge_inherits_directed_flag_from_disk()]] - code - graphify/tests/test_build.py
- [[test_build_merge_preserves_call_edge_direction()]] - code - graphify/tests/test_build.py
- [[test_build_merge_project_reference_stub_does_not_replace_referenced_project()]] - code - graphify/tests/test_build.py
- [[test_build_merge_prune_absolute_paths_match_relative_nodes()]] - code - graphify/tests/test_build.py
- [[test_build_merge_prune_windows_backslash_paths()]] - code - graphify/tests/test_build.py
- [[test_build_merge_replaces_changed_file_stale_edges()]] - code - graphify/tests/test_build.py
- [[test_build_merge_root_collapses_convention_drift()]] - code - graphify/tests/test_build.py
- [[test_build_merge_sln_stub_does_not_replace_referenced_csproj()]] - code - graphify/tests/test_build.py
- [[test_build_relativizes_absolute_source_file()]] - code - graphify/tests/test_build.py
- [[test_build_with_absolute_edge_paths_moves_edges_to_renamed_node()]] - code - graphify/tests/test_dedup.py
- [[test_definition_file_normalized_before_dedup()]] - code - graphify/tests/test_issue_3472_source_file_collision.py
- [[test_float_id_is_coerced_too()]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_full_build_protected_ids_none_retains_global_dedup()]] - code - graphify/tests/test_build_merge_dedup_scope.py
- [[test_genuine_cross_file_collision_remains_isolated()]] - code - graphify/tests/test_issue_3472_source_file_collision.py
- [[test_hyperedge_members_are_coerced_with_their_nodes()]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_int_id_endpoints_stay_connected_after_coercion()]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_int_id_survives_a_fuzzy_dedup_group()]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_issue_3472_source_file_collision.py]] - code - graphify/tests/test_issue_3472_source_file_collision.py
- [[test_legacy_from_to_endpoints_are_coerced()]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_marked_cross_document_stubs_survive_issue_4738_collisions()]] - code - graphify/tests/test_build.py
- [[test_merge_raw_extraction_cross_file_stub_parity()]] - code - graphify/tests/test_build.py
- [[test_non_scalar_ids_are_left_for_validation()]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_non_string_node_ids.py]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_numeric_endpoint_with_no_matching_node_matches_the_string_case()]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_path_dropped_through_build()]] - code - graphify/tests/test_dedup.py
- [[test_pick_winner_survives_int_id_in_duplicate_group()]] - code - graphify/tests/test_non_string_node_ids.py
- [[test_semantic_absolute_path_inverse_arrival_order()]] - code - graphify/tests/test_issue_3472_source_file_collision.py
- [[test_semantic_absolute_path_same_file_retains_attributes()]] - code - graphify/tests/test_issue_3472_source_file_collision.py
- [[test_string_ids_are_untouched()]] - code - graphify/tests/test_non_string_node_ids.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_48
SORT file.name ASC
```

## Connections to other communities
- 23 edges to [[_COMMUNITY_Community 9]]
- 15 edges to [[_COMMUNITY_Community 41]]
- 7 edges to [[_COMMUNITY_Community 15]]
- 6 edges to [[_COMMUNITY_Community 209]]
- 6 edges to [[_COMMUNITY_Community 53]]
- 5 edges to [[_COMMUNITY_Community 172]]
- 5 edges to [[_COMMUNITY_Community 281]]
- 5 edges to [[_COMMUNITY_Community 173]]
- 4 edges to [[_COMMUNITY_Community 7]]
- 4 edges to [[_COMMUNITY_Community 23]]
- 3 edges to [[_COMMUNITY_Community 395]]
- 3 edges to [[_COMMUNITY_Community 347]]
- 3 edges to [[_COMMUNITY_Community 115]]
- 2 edges to [[_COMMUNITY_Community 107]]
- 2 edges to [[_COMMUNITY_Community 17]]
- 2 edges to [[_COMMUNITY_Community 506]]
- 2 edges to [[_COMMUNITY_Community 32]]
- 2 edges to [[_COMMUNITY_Community 321]]
- 2 edges to [[_COMMUNITY_Community 174]]
- 2 edges to [[_COMMUNITY_Community 286]]
- 2 edges to [[_COMMUNITY_Community 111]]
- 2 edges to [[_COMMUNITY_Community 289]]
- 2 edges to [[_COMMUNITY_Community 319]]
- 2 edges to [[_COMMUNITY_Community 13]]
- 2 edges to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 146]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[build()_1]] - degree 92, connects to 21 communities
- [[test_issue_3472_source_file_collision.py]] - degree 13, connects to 6 communities
- [[test_non_string_node_ids.py]] - degree 21, connects to 4 communities
- [[test_build_merge_directed_edge_direction_survives_round_trip()]] - degree 6, connects to 4 communities
- [[test_build_merge_preserves_call_edge_direction()]] - degree 6, connects to 4 communities