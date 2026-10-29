---
source_file: "graphify/graphify/extractors/resolution.py"
type: "code"
community: "Community 13"
location: "L856"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_13
---

# _resolve_js_module_path()

## Connections
- [[Path_1]] - `references` [EXTRACTED]
- [[Resolve a JSTS module path or specifier to a local source file. With a Path…]] - `rationale_for` [EXTRACTED]
- [[_collect_js_symbol_resolution_facts()]] - `calls` [EXTRACTED]
- [[_find_js_config()]] - `calls` [EXTRACTED]
- [[_find_js_project_anchor()]] - `calls` [EXTRACTED]
- [[_load_tsconfig_aliases()]] - `calls` [EXTRACTED]
- [[_load_tsconfig_base_url()]] - `calls` [EXTRACTED]
- [[_resolve_js_import_path()]] - `calls` [EXTRACTED]
- [[_resolve_js_import_target()]] - `calls` [EXTRACTED]
- [[_resolve_package_import()]] - `calls` [EXTRACTED]
- [[_resolve_rescued_specifier()]] - `calls` [EXTRACTED]
- [[_resolve_tsconfig_alias()]] - `calls` [EXTRACTED]
- [[_resolve_workspace_import()]] - `calls` [EXTRACTED]
- [[extract.py]] - `imports` [EXTRACTED]
- [[resolution.py]] - `contains` [EXTRACTED]
- [[test_declared_native_suffix_can_supply_an_additional_directory_index()]] - `calls` [EXTRACTED]
- [[test_exact_key_and_no_prefix_match()]] - `calls` [EXTRACTED]
- [[test_extensionless_import_finds_declared_source_or_directory_index()]] - `calls` [EXTRACTED]
- [[test_extensionless_js_lookup_does_not_claim_other_declared_languages()]] - `calls` [EXTRACTED]
- [[test_external_target_is_left_to_external_handling()]] - `calls` [EXTRACTED]
- [[test_import_candidates_ignore_mapping_keys_that_are_not_literal_suffixes()]] - `calls` [EXTRACTED]
- [[test_js_inferred_candidates_respect_language_and_native_precedence()]] - `calls` [EXTRACTED]
- [[test_language_override_imports.py]] - `imports` [EXTRACTED]
- [[test_longest_literal_prefix_wins()]] - `calls` [EXTRACTED]
- [[test_native_source_precedence_and_literal_declared_paths_are_preserved()]] - `calls` [EXTRACTED]
- [[test_no_imports_field_is_a_noop()]] - `calls` [EXTRACTED]
- [[test_package_json_subpath_imports.py]] - `imports` [EXTRACTED]
- [[test_resolve_ambient_d_ts_via_bare_path()]] - `calls` [INFERRED]
- [[test_resolve_bare_path_to_svelte()]] - `calls` [INFERRED]
- [[test_resolve_bare_path_to_ts()]] - `calls` [INFERRED]
- [[test_resolve_bare_path_to_tsx()]] - `calls` [INFERRED]
- [[test_resolve_directory_prefers_index_ts_over_index_js()]] - `calls` [INFERRED]
- [[test_resolve_directory_to_index_ts()]] - `calls` [INFERRED]
- [[test_resolve_directory_without_index_returns_unchanged()]] - `calls` [INFERRED]
- [[test_resolve_does_not_match_partial_directory_name()]] - `calls` [INFERRED]
- [[test_resolve_does_not_treat_dotfile_as_extension()]] - `calls` [INFERRED]
- [[test_resolve_file_wins_over_sibling_directory()]] - `calls` [INFERRED]
- [[test_resolve_handles_subpath_into_directory_with_index()]] - `calls` [INFERRED]
- [[test_resolve_js_to_ts_when_real_file_is_ts()]] - `calls` [INFERRED]
- [[test_resolve_js_to_tsx_when_real_file_is_tsx()]] - `calls` [INFERRED]
- [[test_resolve_jsx_to_tsx_when_real_file_is_tsx()]] - `calls` [INFERRED]
- [[test_resolve_multi_dot_helper_file()]] - `calls` [INFERRED]
- [[test_resolve_multi_dot_with_explicit_extension_still_works()]] - `calls` [INFERRED]
- [[test_resolve_prefers_ts_over_svelte_when_both_exist()]] - `calls` [INFERRED]
- [[test_resolve_real_js_stays_js_when_ts_does_not_exist()]] - `calls` [INFERRED]
- [[test_resolve_real_svelte_file_wins_over_svelte_ts_sibling()]] - `calls` [INFERRED]
- [[test_resolve_returns_existing_path_unchanged()]] - `calls` [INFERRED]
- [[test_resolve_returns_unchanged_when_nothing_matches()]] - `calls` [INFERRED]
- [[test_resolve_svelte_prefers_svelte_ts_over_svelte_js()]] - `calls` [INFERRED]
- [[test_resolve_svelte_to_svelte_js_for_javascript_rune_files()]] - `calls` [INFERRED]
- [[test_resolve_svelte_to_svelte_ts_for_rune_files()]] - `calls` [INFERRED]
- [[test_tsconfig_paths_keep_precedence()]] - `calls` [EXTRACTED]
- [[test_unmapped_at_alias_resolution.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_13