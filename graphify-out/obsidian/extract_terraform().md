---
source_file: "graphify/graphify/extractors/terraform.py"
type: "code"
community: "Community 49"
location: "L178"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_49
---

# extract_terraform()

## Connections
- [[Extract TerraformHCL blocks and the references between them via tree-sitter.…]] - `rationale_for` [EXTRACTED]
- [[Path_198]] - `references` [EXTRACTED]
- [[_add_edge()_2]] - `contains` [EXTRACTED]
- [[_add_node()_1]] - `contains` [EXTRACTED]
- [[_block_parts()]] - `contains` [EXTRACTED]
- [[_body_of()]] - `contains` [EXTRACTED]
- [[_clean_val_str()]] - `contains` [EXTRACTED]
- [[_collect_direct_attributes()]] - `contains` [EXTRACTED]
- [[_collect_refs()]] - `contains` [EXTRACTED]
- [[_head_and_attrs()]] - `contains` [EXTRACTED]
- [[_label_text()]] - `contains` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[_parse_attr_value()]] - `contains` [EXTRACTED]
- [[_provider_ref_address()]] - `contains` [EXTRACTED]
- [[_read()_2]] - `contains` [EXTRACTED]
- [[_read_source_bytes()]] - `calls` [EXTRACTED]
- [[_ref_address()]] - `contains` [EXTRACTED]
- [[_scope_id()]] - `calls` [EXTRACTED]
- [[e()]] - `indirect_call` [INFERRED]
- [[extract.py]] - `indirect_call` [INFERRED]
- [[extractors__init__.py]] - `indirect_call` [INFERRED]
- [[json]] - `calls` [EXTRACTED]
- [[terraform.py]] - `contains` [EXTRACTED]
- [[test_a_local_named_provider_is_not_misread_as_a_provider_reference()]] - `calls` [INFERRED]
- [[test_aliased_providers_of_the_same_type_get_distinct_nodes()]] - `calls` [INFERRED]
- [[test_bare_provider_reference_resolves_to_the_unaliased_block()]] - `calls` [INFERRED]
- [[test_cross_file_references_resolve_after_merge()]] - `calls` [INFERRED]
- [[test_depends_on_edge()]] - `calls` [INFERRED]
- [[test_empty_and_commentonly_files_are_safe()]] - `calls` [INFERRED]
- [[test_extractors_registry.py]] - `imports` [EXTRACTED]
- [[test_file_contains_blocks()]] - `calls` [INFERRED]
- [[test_meta_heads_not_emitted()]] - `calls` [INFERRED]
- [[test_no_error_and_all_block_types_become_nodes()]] - `calls` [INFERRED]
- [[test_provider_reference_resolves_to_its_aliased_block()]] - `calls` [INFERRED]
- [[test_raw_extractor_scopes_ids_by_full_directory()]] - `calls` [INFERRED]
- [[test_reference_edges()]] - `calls` [INFERRED]
- [[test_terraform_attributes_collections()]] - `calls` [INFERRED]
- [[test_terraform_attributes_context_rendering()]] - `calls` [INFERRED]
- [[test_terraform_attributes_expressions_and_references()]] - `calls` [INFERRED]
- [[test_terraform_attributes_primitive_literals()]] - `calls` [INFERRED]
- [[test_terraform_attributes_query_and_search_discovery()]] - `calls` [INFERRED]
- [[test_terraform_attributes_round_trip_serialization()]] - `calls` [INFERRED]
- [[test_terraform_multiple_attributes_and_nested_block_isolation()]] - `calls` [INFERRED]
- [[test_terraform_name_value_pair_secret_is_redacted()]] - `calls` [INFERRED]
- [[test_terraform_secret_in_list_of_objects_is_redacted()]] - `calls` [INFERRED]
- [[test_terraform_secret_named_variable_default_and_output_value_are_redacted()]] - `calls` [INFERRED]
- [[test_terraform_sensitive_attribute_values_are_redacted()]] - `calls` [INFERRED]
- [[test_tfvars_key_value_is_safe()]] - `calls` [INFERRED]
- [[test_unaliased_provider_keeps_its_plain_id()]] - `calls` [INFERRED]

#graphify/code #graphify/INFERRED #community/Community_49