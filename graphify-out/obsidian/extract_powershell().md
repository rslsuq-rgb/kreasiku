---
source_file: "graphify/graphify/extractors/powershell.py"
type: "code"
community: "Community 74"
location: "L11"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_74
---

# extract_powershell()

## Connections
- [[Extract functions, classes, methods, and using statements from a .ps1 file.]] - `rationale_for` [EXTRACTED]
- [[Path_125]] - `references` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_find_script_block_body()]] - `contains` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[_ps_type_name()]] - `contains` [EXTRACTED]
- [[_read_source_bytes()]] - `calls` [EXTRACTED]
- [[_read_text()]] - `calls` [EXTRACTED]
- [[add_edge()_29]] - `contains` [EXTRACTED]
- [[add_node()_30]] - `contains` [EXTRACTED]
- [[ensure_named_node()_6]] - `contains` [EXTRACTED]
- [[extract.py]] - `indirect_call` [INFERRED]
- [[extractors__init__.py]] - `indirect_call` [INFERRED]
- [[powershell.py]] - `contains` [EXTRACTED]
- [[test_powershell_class_base_type_emits_inherits_edge()]] - `calls` [INFERRED]
- [[test_powershell_command_call_still_resolves()]] - `calls` [INFERRED]
- [[test_powershell_complete_static_type_literal_resolves()]] - `calls` [INFERRED]
- [[test_powershell_dot_source_backslash_emits_edge()]] - `calls` [INFERRED]
- [[test_powershell_dot_source_forward_slash_emits_edge()]] - `calls` [INFERRED]
- [[test_powershell_dot_source_inside_function_emits_edge()]] - `calls` [INFERRED]
- [[test_powershell_dot_source_quoted_or_variable_path_emits_edge()]] - `calls` [INFERRED]
- [[test_powershell_duplicate_class_names_do_not_guess()]] - `calls` [INFERRED]
- [[test_powershell_enum_is_extracted_and_reference_resolves()]] - `calls` [INFERRED]
- [[test_powershell_enum_members_emit_case_of_not_contains()]] - `calls` [INFERRED]
- [[test_powershell_finds_class_and_method()]] - `calls` [INFERRED]
- [[test_powershell_functions_in_file_scope_begin_block_are_extracted()]] - `calls` [INFERRED]
- [[test_powershell_import_module_emits_edge()]] - `calls` [INFERRED]
- [[test_powershell_import_module_inside_function_emits_edge()]] - `calls` [INFERRED]
- [[test_powershell_import_module_not_a_raw_call()]] - `calls` [INFERRED]
- [[test_powershell_import_module_with_name_param()]] - `calls` [INFERRED]
- [[test_powershell_member_call_does_not_bind_to_free_function()]] - `calls` [INFERRED]
- [[test_powershell_member_calls_keep_receiver_class()]] - `calls` [INFERRED]
- [[test_powershell_method_parameter_and_return_type_contexts()]] - `calls` [INFERRED]
- [[test_powershell_no_error()]] - `calls` [INFERRED]
- [[test_powershell_property_field_type_context()]] - `calls` [INFERRED]
- [[test_powershell_property_reads_and_nested_calls()]] - `calls` [INFERRED]
- [[test_powershell_psm1_dispatched_and_extracted()]] - `calls` [INFERRED]
- [[test_powershell_script_scope_call_is_recorded()]] - `calls` [INFERRED]
- [[test_powershell_script_scope_walk_does_not_duplicate_function_calls()]] - `calls` [INFERRED]
- [[test_powershell_static_method_call_resolves()]] - `calls` [INFERRED]
- [[test_powershell_this_method_call_resolves()]] - `calls` [INFERRED]
- [[test_powershell_uncertain_receivers_remain_raw()]] - `calls` [INFERRED]
- [[walk()_28]] - `contains` [EXTRACTED]
- [[walk_calls()_13]] - `contains` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/Community_74