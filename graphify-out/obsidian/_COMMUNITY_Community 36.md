---
type: community
cohesion: 0.02
members: 97
---

# Community 36

**Cohesion:** 0.02 - loosely connected
**Members:** 97 nodes

## Members
- [[2172 `${VAR}` must resolve against the variable's tracked base. 2079 always…]] - rationale - graphify/tests/test_extract.py
- [[2978 x=$(helper) inside a function must emit a calls edge to helper().]] - rationale - graphify/tests/test_extract.py
- [[3802 $PYTHON scriptsstage_two.py — the command word is itself an…]] - rationale - graphify/tests/test_extract.py
- [[A non-shell interpreter running a .sh file (unusual but not impossible) must…]] - rationale - graphify/tests/test_extract.py
- [[A plain command that happens to take a .py argument (cp, a custom tool, ...)…]] - rationale - graphify/tests/test_extract.py
- [[A variable-built PATH command (`$DIRrun.sh stage.py`) runs run.sh with…]] - rationale - graphify/tests/test_extract.py
- [[A variable-built source path with no matching file on disk must emit no import…]] - rationale - graphify/tests/test_extract.py
- [[An untracked variable (assigned from the environment, or not assigned in this…]] - rationale - graphify/tests/test_extract.py
- [[Bash extractor must route node metadata through sanitize_metadata so HTML-…]] - rationale - graphify/tests/test_extract.py
- [[Calls made inside a nested (inner) function body must be collected.]] - rationale - graphify/tests/test_extract.py
- [[Entrypoint node must have a distinct ID from a function also named 'script'.…]] - rationale - graphify/tests/test_extract.py
- [[Every bash file produces a `bash_entrypoint` node distinct from the file node,…]] - rationale - graphify/tests/test_extract.py
- [[Extract functions, source imports, and cross-function calls from a .sh file.]] - rationale - graphify/graphify/extractors/bash.py
- [[Form 3 (2596) `source $(dirname $VAR)liby.sh` — command substitution in…]] - rationale - graphify/tests/test_extract.py
- [[Form 3 hardening (2596) the `$(dirname …)` base is a guessed directory, so a…]] - rationale - graphify/tests/test_extract.py
- [[Form 3 with an untracked variable `source $(dirname $SCRIPT_DIR)liby.sh`…]] - rationale - graphify/tests/test_extract.py
- [[Form 4 (2596) `source $VAR..liby.sh` — `..` in the literal suffix. When…]] - rationale - graphify/tests/test_extract.py
- [[Form 4 guard `..` in the suffix must still be rejected when the base is the…]] - rationale - graphify/tests/test_extract.py
- [[Form 4 hardening (2596) a tracked base legitimately reaches a sibling via…]] - rationale - graphify/tests/test_extract.py
- [[Path_142]] - code
- [[Resolve a top-level assignment's value to a directory, or None if untracked.…]] - rationale - graphify/graphify/extractors/bash.py
- [[Return the literal path suffix of a variable-built `source` argument, or None…]] - rationale - graphify/graphify/extractors/bash.py
- [[The 2171 bare-name branch keeps the existence gate a name that resolves to no…]] - rationale - graphify/tests/test_extract.py
- [[The canonical script-dir idiom must keep working (2079 regression guard).]] - rationale - graphify/tests/test_extract.py
- [[Top-level function call attaches to the entrypoint node, not orphaned.]] - rationale - graphify/tests/test_extract.py
- [[True if target is ceiling or lives beneath it, compared lexically…]] - rationale - graphify/graphify/extractors/bash.py
- [[User-defined function shadowing an external command (installfindetc.) must…]] - rationale - graphify/tests/test_extract.py
- [[When 'source' is a user-defined function, 'source .file.sh' must emit a calls…]] - rationale - graphify/tests/test_extract.py
- [[_bash_assignment_base()]] - code - graphify/graphify/extractors/bash.py
- [[_bash_call_in_command_allowed()]] - code - graphify/graphify/extractors/bash.py
- [[_bash_func_name()]] - code - graphify/graphify/extractors/bash.py
- [[_bash_source_suffix()]] - code - graphify/graphify/extractors/bash.py
- [[_prescan_functions()]] - code - graphify/graphify/extractors/bash.py
- [[_within_tree()]] - code - graphify/graphify/extractors/bash.py
- [[`$(build)` must not be recorded as a call edge to build().]] - rationale - graphify/tests/test_extract.py
- [[`(helper)` (process substitution) must not be recorded as a call edge.]] - rationale - graphify/tests/test_extract.py
- [[`source $CONFIG_FILE` strips to an empty suffix — nothing literal is left to…]] - rationale - graphify/tests/test_extract.py
- [[`source ${DIR}libx.sh` (the `dirname ${BASH_SOURCE0}` idiom) must…]] - rationale - graphify/tests/test_extract.py
- [[`source ${D}..secret.sh` must hit the ``..`` guard. The target file exists…]] - rationale - graphify/tests/test_extract.py
- [[`source lib${X}.sh` keeps an expansion in the suffix, so the ``$``-in-suffix…]] - rationale - graphify/tests/test_extract.py
- [[add_edge()_21]] - code - graphify/graphify/extractors/bash.py
- [[add_node()_22]] - code - graphify/graphify/extractors/bash.py
- [[extract_bash must surface the data cross-file resolution needs a…]] - rationale - graphify/tests/test_extract.py
- [[extract_bash returns error dict when tree-sitter-bash not installed (mocked).]] - rationale - graphify/tests/test_extract.py
- [[extract_bash()]] - code - graphify/graphify/extractors/bash.py
- [[is_inside_expansion()]] - code - graphify/graphify/extractors/bash.py
- [[literal()]] - code - graphify/graphify/extractors/bash.py
- [[patched()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_attributes_script_invocation_to_function()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_attributes_variable_built_invocation_to_function()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_bare_source_missing_file_fabricates_nothing()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_calls_have_extracted_confidence()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_command_substitution_in_assignment_emits_call()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_creates_entrypoint_node()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_emits_calls_edges()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_emits_defines_edges()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_emits_invokes_for_a_bare_interpreter_variable()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_emits_raw_calls_and_bash_sources_for_sourced_calls()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_emits_source_imports_from()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_entrypoint_no_collision_with_function_named_script()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_finds_functions()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_invokes_targets_a_bash_entrypoint_when_the_target_is_sh()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_missing_grammar_returns_error()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_nested_function_calls_recorded()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_no_dangling_edges()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_no_self_loops()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_node_metadata_is_sanitized()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_process_substitution_not_recorded()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_rejects_command_substitution_as_call()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_shadowing_function_is_recorded()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_skip_builtins_in_calls()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_skips_dynamic_script_invocation()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_skips_invokes_for_a_missing_script()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_skips_invokes_for_a_non_interpreter_command()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_skips_missing_and_shadowed_script_invocations()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_dirname_cmdsubst_in_argument()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_dirname_cmdsubst_rejects_traversal()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_dirname_cmdsubst_untracked_var()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_dotdot_suffix_script_dir_guess_still_rejected()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_dotdot_suffix_with_tracked_var()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_dotdot_tracked_var_cannot_escape_to_root()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_suffix_guard_mid_path_variable()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_suffix_guard_rejects_traversal()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_suffix_guard_whole_variable_path()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_user_defined_emits_calls_not_imports_from()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_via_variable_path_no_match_emits_no_dead_edge()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_via_variable_path_resolves_to_real_file()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_top_level_call_attributes_to_entrypoint()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_var_source_script_dir_idiom_still_resolves()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_var_source_untracked_var_keeps_script_dir_guess()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_var_source_uses_tracked_assignment_base()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_variable_built_invocation_no_on_disk_match_emits_no_edge()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_variable_built_invocation_with_dynamic_stem_emits_no_edge()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_variable_path_command_does_not_invoke_its_argument()]] - code - graphify/tests/test_extract.py
- [[text()]] - code - graphify/graphify/extractors/bash.py
- [[walk()_22]] - code - graphify/graphify/extractors/bash.py
- [[walk_calls()_10]] - code - graphify/graphify/extractors/bash.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_36
SORT file.name ASC
```

## Connections to other communities
- 46 edges to [[_COMMUNITY_Community 2]]
- 11 edges to [[_COMMUNITY_Community 3]]
- 4 edges to [[_COMMUNITY_Community 69]]
- 2 edges to [[_COMMUNITY_Community 16]]
- 2 edges to [[_COMMUNITY_Community 188]]
- 1 edge to [[_COMMUNITY_Community 24]]
- 1 edge to [[_COMMUNITY_Community 37]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 42]]
- 1 edge to [[_COMMUNITY_Community 52]]

## Top bridge nodes
- [[extract_bash()]] - degree 72, connects to 6 communities
- [[walk()_22]] - degree 12, connects to 3 communities
- [[text()]] - degree 5, connects to 2 communities
- [[test_extract_bash_skip_builtins_in_calls()]] - degree 3, connects to 2 communities
- [[walk_calls()_10]] - degree 5, connects to 1 community