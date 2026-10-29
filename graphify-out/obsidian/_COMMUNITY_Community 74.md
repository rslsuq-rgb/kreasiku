---
type: community
cohesion: 0.04
members: 55
---

# Community 74

**Cohesion:** 0.04 - loosely connected
**Members:** 55 nodes

## Members
- [[A PowerShell enum member is a discriminant case, so it must get a `case_of`…]] - rationale - graphify/tests/test_languages.py
- [[A PowerShell enum must be a real definition, and `Enum` refs resolve to it.…]] - rationale - graphify/tests/test_languages.py
- [[A call at script scope (outside any function) is attributed to the file (4356).]] - rationale - graphify/tests/test_languages.py
- [[Dot-source `. .Shared.psm1` emits an imports_from edge.]] - rationale - graphify/tests/test_languages.py
- [[Dot-source `. .Utils.ps1` (backslash path) emits an imports_from edge.]] - rationale - graphify/tests/test_languages.py
- [[Dot-source inside a function body still produces an imports_from edge.]] - rationale - graphify/tests/test_languages.py
- [[Dot-source with a quoted or $PSScriptRoot-based path emits imports_from (4356).]] - rationale - graphify/tests/test_languages.py
- [[Extract functions, classes, methods, and using statements from a .ps1 file.]] - rationale - graphify/graphify/extractors/powershell.py
- [[Fail-closed a method call on an unknown receiver (`$obj.Process()`) must NOT…]] - rationale - graphify/tests/test_languages.py
- [[Import-Module -Name Bar.psm1 resolves to module stem 'bar'.]] - rationale - graphify/tests/test_languages.py
- [[Import-Module Foo at top level emits an imports_from edge.]] - rationale - graphify/tests/test_languages.py
- [[Import-Module inside a function body still produces an imports_from edge.]] - rationale - graphify/tests/test_languages.py
- [[Import-Module must not appear in raw_calls (it is an import, not a function…]] - rationale - graphify/tests/test_languages.py
- [[Positive control the bare-command call path that already worked must keep…]] - rationale - graphify/tests/test_languages.py
- [[The static `CalcMake()` form is also an `invokation_expression` and must…]] - rationale - graphify/tests/test_languages.py
- [[Walking the file root must not re-attribute calls made inside function bodies.]] - rationale - graphify/tests/test_languages.py
- [[_find_script_block_body()]] - code - graphify/graphify/extractors/powershell.py
- [[_ps_type_name()]] - code - graphify/graphify/extractors/powershell.py
- [[`$this.Square(3)` inside a class method is a call to a sibling method and must…]] - rationale - graphify/tests/test_languages.py
- [[add_edge()_29]] - code - graphify/graphify/extractors/powershell.py
- [[add_node()_30]] - code - graphify/graphify/extractors/powershell.py
- [[ensure_named_node()_6]] - code - graphify/graphify/extractors/powershell.py
- [[extract_powershell()]] - code - graphify/graphify/extractors/powershell.py
- [[parametrize_106]] - code
- [[test_powershell_class_base_type_emits_inherits_edge()]] - code - graphify/tests/test_languages.py
- [[test_powershell_command_call_still_resolves()]] - code - graphify/tests/test_languages.py
- [[test_powershell_complete_static_type_literal_resolves()]] - code - graphify/tests/test_languages.py
- [[test_powershell_dot_source_backslash_emits_edge()]] - code - graphify/tests/test_languages.py
- [[test_powershell_dot_source_forward_slash_emits_edge()]] - code - graphify/tests/test_languages.py
- [[test_powershell_dot_source_inside_function_emits_edge()]] - code - graphify/tests/test_languages.py
- [[test_powershell_dot_source_quoted_or_variable_path_emits_edge()]] - code - graphify/tests/test_languages.py
- [[test_powershell_duplicate_class_names_do_not_guess()]] - code - graphify/tests/test_languages.py
- [[test_powershell_enum_is_extracted_and_reference_resolves()]] - code - graphify/tests/test_languages.py
- [[test_powershell_enum_members_emit_case_of_not_contains()]] - code - graphify/tests/test_languages.py
- [[test_powershell_finds_class_and_method()]] - code - graphify/tests/test_languages.py
- [[test_powershell_functions_in_file_scope_begin_block_are_extracted()]] - code - graphify/tests/test_languages.py
- [[test_powershell_import_module_emits_edge()]] - code - graphify/tests/test_languages.py
- [[test_powershell_import_module_inside_function_emits_edge()]] - code - graphify/tests/test_languages.py
- [[test_powershell_import_module_not_a_raw_call()]] - code - graphify/tests/test_languages.py
- [[test_powershell_import_module_with_name_param()]] - code - graphify/tests/test_languages.py
- [[test_powershell_member_call_does_not_bind_to_free_function()]] - code - graphify/tests/test_languages.py
- [[test_powershell_member_calls_keep_receiver_class()]] - code - graphify/tests/test_languages.py
- [[test_powershell_method_parameter_and_return_type_contexts()]] - code - graphify/tests/test_languages.py
- [[test_powershell_no_error()]] - code - graphify/tests/test_languages.py
- [[test_powershell_property_field_type_context()]] - code - graphify/tests/test_languages.py
- [[test_powershell_property_reads_and_nested_calls()]] - code - graphify/tests/test_languages.py
- [[test_powershell_script_scope_call_is_recorded()]] - code - graphify/tests/test_languages.py
- [[test_powershell_script_scope_walk_does_not_duplicate_function_calls()]] - code - graphify/tests/test_languages.py
- [[test_powershell_static_method_call_resolves()]] - code - graphify/tests/test_languages.py
- [[test_powershell_this_method_call_resolves()]] - code - graphify/tests/test_languages.py
- [[test_powershell_uncertain_receivers_remain_raw()]] - code - graphify/tests/test_languages.py
- [[test_verilog_family_dispatch()]] - code - graphify/tests/test_languages.py
- [[test_verilog_header_collection_and_extraction()]] - code - graphify/tests/test_languages.py
- [[walk()_28]] - code - graphify/graphify/extractors/powershell.py
- [[walk_calls()_13]] - code - graphify/graphify/extractors/powershell.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_74
SORT file.name ASC
```

## Connections to other communities
- 40 edges to [[_COMMUNITY_Community 8]]
- 7 edges to [[_COMMUNITY_Community 3]]
- 4 edges to [[_COMMUNITY_Community 16]]
- 2 edges to [[_COMMUNITY_Community 226]]
- 1 edge to [[_COMMUNITY_Community 14]]
- 1 edge to [[_COMMUNITY_Community 2]]
- 1 edge to [[_COMMUNITY_Community 67]]
- 1 edge to [[_COMMUNITY_Community 316]]
- 1 edge to [[_COMMUNITY_Community 1]]

## Top bridge nodes
- [[extract_powershell()]] - degree 44, connects to 5 communities
- [[test_verilog_header_collection_and_extraction()]] - degree 5, connects to 3 communities
- [[walk()_28]] - degree 8, connects to 2 communities
- [[test_verilog_family_dispatch()]] - degree 3, connects to 2 communities
- [[parametrize_106]] - degree 8, connects to 1 community