---
type: community
cohesion: 0.07
members: 54
---

# Community 77

**Cohesion:** 0.07 - loosely connected
**Members:** 54 nodes

## Members
- [[A JSON file whose root is an array is data, never a configmanifest.]] - rationale - graphify/tests/test_extract.py
- [[A data-shaped .json (eval fixture  dataset) must NOT emit per-key nodes.]] - rationale - graphify/tests/test_extract.py
- [[A dependency must not point at another node carrying its own label.…]] - rationale - graphify/tests/test_extract.py
- [[A hand-written schema carrying only `$schema` + `properties` is still walked.…]] - rationale - graphify/tests/test_json_schema_config.py
- [[An arbitrarily-named JSON with config keys (dependencies) is still extracted.]] - rationale - graphify/tests/test_extract.py
- [[Extract structure and dependency edges from a configmanifest .json file.…]] - rationale - graphify/graphify/extractors/json_config.py
- [[JSON Schema files must not be mistaken for config manifests.…]] - rationale - graphify/tests/test_json_schema_config.py
- [[Only an ``extends`` array is inheritance. ``compilerOptions.lib`` and…]] - rationale - graphify/tests/test_extract.py
- [[Path_234]] - code
- [[True if a .json file is a recognized configmanifest worth AST-extracting.…]] - rationale - graphify/graphify/extractors/json_config.py
- [[Two blocks that each hold `dependencies.semver` mint one key node (its id…]] - rationale - graphify/tests/test_extract.py
- [[_is_config_json()]] - code - graphify/graphify/extractors/json_config.py
- [[_is_skipped()]] - code - graphify/tests/test_json_schema_config.py
- [[_key_text()]] - code - graphify/graphify/extractors/json_config.py
- [[_labels()_33]] - code - graphify/tests/test_json_schema_config.py
- [[_val_node()]] - code - graphify/graphify/extractors/json_config.py
- [[_write()_62]] - code - graphify/tests/test_json_schema_config.py
- [[add_edge()_30]] - code - graphify/graphify/extractors/json_config.py
- [[add_node()_31]] - code - graphify/graphify/extractors/json_config.py
- [[extract_json()]] - code - graphify/graphify/extractors/json_config.py
- [[test_a_key_shared_by_two_sibling_blocks_is_labelled_with_the_range_on_its_own_line()]] - code - graphify/tests/test_extract.py
- [[test_biome_json_with_its_own_schema_key_is_still_extracted()]] - code - graphify/tests/test_json_schema_config.py
- [[test_classification_is_deterministic_across_repeated_calls()]] - code - graphify/tests/test_json_schema_config.py
- [[test_compound_suffix_match_is_unaffected()]] - code - graphify/tests/test_json_schema_config.py
- [[test_dependency_values_that_are_not_strings_are_extracted_as_before()]] - code - graphify/tests/test_extract.py
- [[test_dev_dependencies_probe_still_works()]] - code - graphify/tests/test_json_schema_config.py
- [[test_extract_json_config_by_filename_still_extracted()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_config_by_key_probe()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_data_file_skipped()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_dependencies_become_imports()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_dependency_edges_are_not_label_self_loops()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_extends_resolved()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_handles_invalid_json()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_import_and_extends_targets_are_real_nodes()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_large_file_skipped()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_nested_contains()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_no_self_loops()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_non_extends_arrays_are_not_inheritance()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_top_level_array_skipped()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_top_level_keys()]] - code - graphify/tests/test_extract.py
- [[test_json_schema_config.py]] - code - graphify/tests/test_json_schema_config.py
- [[test_keys_that_are_not_dependencies_are_unchanged()]] - code - graphify/tests/test_extract.py
- [[test_minimal_schema_without_defs_or_id_is_still_walked()]] - code - graphify/tests/test_json_schema_config.py
- [[test_package_json_is_still_extracted()]] - code - graphify/tests/test_json_schema_config.py
- [[test_probe_still_recognises_compileroptions_by_arbitrary_filename()]] - code - graphify/tests/test_json_schema_config.py
- [[test_probe_still_recognises_extends_by_arbitrary_filename()]] - code - graphify/tests/test_json_schema_config.py
- [[test_renovate_json_with_schema_and_extends_is_still_extracted()]] - code - graphify/tests/test_json_schema_config.py
- [[test_root_level_ref_alone_is_skipped()]] - code - graphify/tests/test_json_schema_config.py
- [[test_schema_produces_no_keyword_nodes()]] - code - graphify/tests/test_json_schema_config.py
- [[test_schema_with_defs_in_subdirectory_is_skipped()]] - code - graphify/tests/test_json_schema_config.py
- [[test_schema_with_defs_is_skipped_not_walked()]] - code - graphify/tests/test_json_schema_config.py
- [[test_schema_with_legacy_definitions_is_skipped()]] - code - graphify/tests/test_json_schema_config.py
- [[tsconfig.json must still be AST-extracted even without telltale keys.]] - rationale - graphify/tests/test_extract.py
- [[walk_object()]] - code - graphify/graphify/extractors/json_config.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_77
SORT file.name ASC
```

## Connections to other communities
- 17 edges to [[_COMMUNITY_Community 2]]
- 8 edges to [[_COMMUNITY_Community 3]]
- 4 edges to [[_COMMUNITY_Community 16]]
- 2 edges to [[_COMMUNITY_Community 45]]
- 1 edge to [[_COMMUNITY_Community 9]]
- 1 edge to [[_COMMUNITY_Community 14]]
- 1 edge to [[_COMMUNITY_Community 37]]
- 1 edge to [[_COMMUNITY_Community 69]]
- 1 edge to [[_COMMUNITY_Community 1]]

## Top bridge nodes
- [[extract_json()]] - degree 49, connects to 6 communities
- [[walk_object()]] - degree 8, connects to 3 communities
- [[test_extract_json_import_and_extends_targets_are_real_nodes()]] - degree 4, connects to 3 communities
- [[_is_config_json()]] - degree 5, connects to 2 communities
- [[test_json_schema_config.py]] - degree 21, connects to 1 community