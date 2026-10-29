---
type: community
cohesion: 0.06
members: 81
---

# Community 49

**Cohesion:** 0.06 - loosely connected
**Members:** 81 nodes

## Members
- [[A `variable``output` block names its secret in the block LABEL, not in an…]] - rationale - graphify/tests/test_terraform.py
- [[A local variable that happens to be NAMED `provider` is a local definition, not…]] - rationale - graphify/tests/test_terraform.py
- [[A secret nested inside a list — a list of objects, or a nested list — must be…]] - rationale - graphify/tests/test_terraform.py
- [[Attribute values are persisted to graph.json and surfaced to the model, so a…]] - rationale - graphify/tests/test_terraform.py
- [[End-to-end a `password` inside a tuple-of-objects attribute must not reach the…]] - rationale - graphify/tests/test_terraform.py
- [[Extract TerraformHCL blocks and the references between them via tree-sitter.…]] - rationale - graphify/graphify/extractors/terraform.py
- [[Local Terraform module topology, including incremental graph reconciliation.]] - rationale - graphify/tests/test_terraform_modules.py
- [[Path_198]] - code
- [[Path_199]] - code
- [[Redact a sensitive attribute value; recurse into map AND list values so a…]] - rationale - graphify/graphify/extractors/terraform.py
- [[Tests for the TerraformHCL extractor (graphifyextract.py, issue 187).]] - rationale - graphify/tests/test_terraform.py
- [[The common case, a single provider block for a type with no `alias`, must be…]] - rationale - graphify/tests/test_terraform.py
- [[The namevalue-pair idiom (ECS `environment`  `secrets`, any `{ name, value…]] - rationale - graphify/tests/test_terraform.py
- [[Two `provider aws {...}` blocks distinguished only by `alias` must not…]] - rationale - graphify/tests/test_terraform.py
- [[_add_edge()_2]] - code - graphify/graphify/extractors/terraform.py
- [[_add_node()_1]] - code - graphify/graphify/extractors/terraform.py
- [[_assert_integrity()]] - code - graphify/tests/test_terraform_modules.py
- [[_block_parts()]] - code - graphify/graphify/extractors/terraform.py
- [[_body_of()]] - code - graphify/graphify/extractors/terraform.py
- [[_clean_val_str()]] - code - graphify/graphify/extractors/terraform.py
- [[_collect_direct_attributes()]] - code - graphify/graphify/extractors/terraform.py
- [[_collect_refs()]] - code - graphify/graphify/extractors/terraform.py
- [[_extract()_39]] - code - graphify/tests/test_terraform_modules.py
- [[_head_and_attrs()]] - code - graphify/graphify/extractors/terraform.py
- [[_label_text()]] - code - graphify/graphify/extractors/terraform.py
- [[_labels()_25]] - code - graphify/tests/test_terraform.py
- [[_module_edges()_1]] - code - graphify/tests/test_terraform_modules.py
- [[_node()_10]] - code - graphify/tests/test_terraform_modules.py
- [[_parse_attr_value()]] - code - graphify/graphify/extractors/terraform.py
- [[_provider_ref_address()]] - code - graphify/graphify/extractors/terraform.py
- [[_read()_2]] - code - graphify/graphify/extractors/terraform.py
- [[_redact_value()]] - code - graphify/graphify/extractors/terraform.py
- [[_ref_address()]] - code - graphify/graphify/extractors/terraform.py
- [[_rel_pairs()_1]] - code - graphify/tests/test_terraform.py
- [[_write()_59]] - code - graphify/tests/test_terraform_modules.py
- [[_write()_39]] - code - graphify/tests/test_terraform.py
- [[`provider = aws.west` inside a resource names the ALIASED provider block, not a…]] - rationale - graphify/tests/test_terraform.py
- [[`provider = aws` with no alias must resolve to the plain `provider.aws` node,…]] - rationale - graphify/tests/test_terraform.py
- [[extract_terraform()]] - code - graphify/graphify/extractors/terraform.py
- [[parametrize_85]] - code
- [[rebuild()_1]] - code - graphify/tests/test_terraform_modules.py
- [[rebuild()_2]] - code - graphify/tests/test_terraform_modules.py
- [[test_a_local_named_provider_is_not_misread_as_a_provider_reference()]] - code - graphify/tests/test_terraform.py
- [[test_aliased_providers_of_the_same_type_get_distinct_nodes()]] - code - graphify/tests/test_terraform.py
- [[test_bare_provider_reference_resolves_to_the_unaliased_block()]] - code - graphify/tests/test_terraform.py
- [[test_cache_recomputes_topology_and_ids_are_portable()]] - code - graphify/tests/test_terraform_modules.py
- [[test_cross_file_references_resolve_after_merge()]] - code - graphify/tests/test_terraform.py
- [[test_depends_on_edge()]] - code - graphify/tests/test_terraform.py
- [[test_empty_and_commentonly_files_are_safe()]] - code - graphify/tests/test_terraform.py
- [[test_environment_application_base_topology_and_source_provenance()]] - code - graphify/tests/test_terraform_modules.py
- [[test_file_contains_blocks()]] - code - graphify/tests/test_terraform.py
- [[test_ignored_outside_and_non_tf_targets_are_not_followed()]] - code - graphify/tests/test_terraform_modules.py
- [[test_incremental_exclusion_removes_incoming_module_links()]] - code - graphify/tests/test_terraform_modules.py
- [[test_incremental_source_change_target_addition_and_deletion()]] - code - graphify/tests/test_terraform_modules.py
- [[test_meta_heads_not_emitted()]] - code - graphify/tests/test_terraform.py
- [[test_multiple_calls_share_one_module_and_cycles_are_finite()]] - code - graphify/tests/test_terraform_modules.py
- [[test_no_error_and_all_block_types_become_nodes()]] - code - graphify/tests/test_terraform.py
- [[test_provider_reference_resolves_to_its_aliased_block()]] - code - graphify/tests/test_terraform.py
- [[test_raw_extractor_scopes_ids_by_full_directory()]] - code - graphify/tests/test_terraform_modules.py
- [[test_reference_edges()]] - code - graphify/tests/test_terraform.py
- [[test_same_named_directories_and_cross_file_references_stay_separate()]] - code - graphify/tests/test_terraform_modules.py
- [[test_source_literals_escapes_and_nested_source_attributes()]] - code - graphify/tests/test_terraform_modules.py
- [[test_symlink_targets_respect_scan_boundary()]] - code - graphify/tests/test_terraform_modules.py
- [[test_terraform.py]] - code - graphify/tests/test_terraform.py
- [[test_terraform_attributes_collections()]] - code - graphify/tests/test_terraform.py
- [[test_terraform_attributes_context_rendering()]] - code - graphify/tests/test_terraform.py
- [[test_terraform_attributes_expressions_and_references()]] - code - graphify/tests/test_terraform.py
- [[test_terraform_attributes_primitive_literals()]] - code - graphify/tests/test_terraform.py
- [[test_terraform_attributes_query_and_search_discovery()]] - code - graphify/tests/test_terraform.py
- [[test_terraform_attributes_round_trip_serialization()]] - code - graphify/tests/test_terraform.py
- [[test_terraform_modules.py]] - code - graphify/tests/test_terraform_modules.py
- [[test_terraform_multiple_attributes_and_nested_block_isolation()]] - code - graphify/tests/test_terraform.py
- [[test_terraform_name_value_pair_secret_is_redacted()]] - code - graphify/tests/test_terraform.py
- [[test_terraform_redact_value_recurses_into_lists()]] - code - graphify/tests/test_terraform.py
- [[test_terraform_secret_in_list_of_objects_is_redacted()]] - code - graphify/tests/test_terraform.py
- [[test_terraform_secret_named_variable_default_and_output_value_are_redacted()]] - code - graphify/tests/test_terraform.py
- [[test_terraform_sensitive_attribute_values_are_redacted()]] - code - graphify/tests/test_terraform.py
- [[test_tfvars_key_value_is_safe()]] - code - graphify/tests/test_terraform.py
- [[test_unaliased_provider_keeps_its_plain_id()]] - code - graphify/tests/test_terraform.py
- [[test_unresolved_sources_do_not_create_topology()]] - code - graphify/tests/test_terraform_modules.py
- [[unexpected_parse()]] - code - graphify/tests/test_terraform_modules.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_49
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_Community 3]]
- 7 edges to [[_COMMUNITY_Community 9]]
- 3 edges to [[_COMMUNITY_Community 34]]
- 3 edges to [[_COMMUNITY_Community 1]]
- 2 edges to [[_COMMUNITY_Community 103]]
- 2 edges to [[_COMMUNITY_Community 12]]
- 2 edges to [[_COMMUNITY_Community 14]]
- 2 edges to [[_COMMUNITY_Community 159]]
- 2 edges to [[_COMMUNITY_Community 115]]
- 2 edges to [[_COMMUNITY_Community 23]]
- 2 edges to [[_COMMUNITY_Community 59]]
- 2 edges to [[_COMMUNITY_Community 7]]
- 2 edges to [[_COMMUNITY_Community 53]]
- 2 edges to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 17]]
- 1 edge to [[_COMMUNITY_Community 37]]
- 1 edge to [[_COMMUNITY_Community 620]]
- 1 edge to [[_COMMUNITY_Community 109]]

## Top bridge nodes
- [[test_terraform_modules.py]] - degree 29, connects to 11 communities
- [[test_terraform.py]] - degree 38, connects to 8 communities
- [[extract_terraform()]] - degree 49, connects to 5 communities
- [[test_terraform_attributes_round_trip_serialization()]] - degree 6, connects to 3 communities
- [[test_environment_application_base_topology_and_source_provenance()]] - degree 8, connects to 2 communities