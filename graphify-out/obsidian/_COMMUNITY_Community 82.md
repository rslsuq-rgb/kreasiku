---
type: community
cohesion: 0.06
members: 52
---

# Community 82

**Cohesion:** 0.06 - loosely connected
**Members:** 52 nodes

## Members
- [[2202 - hook reminders arrive in the agent's tool-result stream. Phrased as…]] - rationale - graphify/tests/test_hook_nudge_wording.py
- [[Force the flavour `_is_cwd_relative` selects, so both platforms' rules can be…]] - rationale - graphify/tests/test_hook_out_of_project_paths.py
- [[Identifier-like words in a search pattern (regex escapes and declaration…]] - rationale - graphify/graphify/cli.py
- [[On POSIX `root` is set exactly when the path is absolute and `drive` is always…]] - rationale - graphify/tests/test_hook_out_of_project_paths.py
- [[Resolve strict mode GRAPHIFY_HOOK_STRICT env overrides the baked-in flag…]] - rationale - graphify/graphify/cli.py
- [[Shell-agnostic PreToolUse guard (522). Reads the tool-call JSON from stdin…]] - rationale - graphify/graphify/cli.py
- [[The Bash search guard fires on executed commands, not on prose (3121).…]] - rationale - graphify/tests/test_hook_guard_token_match.py
- [[The guard must keep firing for the paths it exists to catch.]] - rationale - graphify/tests/test_hook_out_of_project_paths.py
- [[The property the above table samples on POSIX, `_is_cwd_relative` is exactly…]] - rationale - graphify/tests/test_hook_out_of_project_paths.py
- [[The read target as a root-relative POSIX path, the form graph.json stores.]] - rationale - graphify/graphify/cli.py
- [[Unchanged behaviour, kept as the control for the cases above.]] - rationale - graphify/tests/test_hook_out_of_project_paths.py
- [[Whether a Bash command actually RUNS a search tool (3121). The old test was a…]] - rationale - graphify/graphify/cli.py
- [[Words the agent searched for the Grep `pattern`, or the pattern argument of a…]] - rationale - graphify/graphify/cli.py
- [[_bash_invokes_search()]] - code - graphify/graphify/cli.py
- [[_fake_os_name()]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[_hook_strict_enabled()]] - code - graphify/graphify/cli.py
- [[_invoke()_2]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[_is_cwd_relative()]] - code - graphify/graphify/cli.py
- [[_is_under_out()]] - code - graphify/graphify/cli.py
- [[_pattern_terms()]] - code - graphify/graphify/cli.py
- [[_project()_5]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[_rel_to_root()]] - code - graphify/graphify/cli.py
- [[_run_hook_guard()]] - code - graphify/graphify/cli.py
- [[_search_hint_terms()]] - code - graphify/graphify/cli.py
- [[parametrize_108]] - code
- [[parametrize_109]] - code
- [[parametrize_110]] - code
- [[rThe read hook's out-of-project guard must not treat a rooted-but-driveless…]] - rationale - graphify/tests/test_hook_out_of_project_paths.py
- [[rWhether value is anchored at the current working directory. The hook's…]] - rationale - graphify/graphify/cli.py
- [[skipif_16]] - code
- [[test_a_heredoc_body_mentioning_search_tools_stays_quiet()]] - code - graphify/tests/test_hook_guard_token_match.py
- [[test_a_search_after_a_heredoc_still_fires()]] - code - graphify/tests/test_hook_guard_token_match.py
- [[test_absolute_path_outside_the_project_is_still_silent()]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[test_an_unterminated_heredoc_cannot_fire_from_its_body()]] - code - graphify/tests/test_hook_guard_token_match.py
- [[test_driveless_rooted_path_outside_the_project_is_silent()]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[test_emitted_reminder_has_no_commands()]] - code - graphify/tests/test_hook_nudge_wording.py
- [[test_empty_path_is_treated_as_cwd_relative()]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[test_hook_guard_token_match.py]] - code - graphify/tests/test_hook_guard_token_match.py
- [[test_hook_nudge_wording.py]] - code - graphify/tests/test_hook_nudge_wording.py
- [[test_hook_out_of_project_paths.py]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[test_in_project_absolute_path_still_nudges()]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[test_in_project_relative_path_still_nudges()]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[test_matches_is_absolute_on_every_posix_input()]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[test_nudges_state_facts_not_commands()]] - code - graphify/tests/test_hook_nudge_wording.py
- [[test_posix_rules_are_unchanged()]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[test_prose_and_lookalikes_stay_quiet()]] - code - graphify/tests/test_hook_guard_token_match.py
- [[test_quoted_command_names_do_not_fire()]] - code - graphify/tests/test_hook_guard_token_match.py
- [[test_real_searches_fire()]] - code - graphify/tests/test_hook_guard_token_match.py
- [[test_strict_deny_does_not_ask_to_spread_itself_to_subagents()]] - code - graphify/tests/test_hook_nudge_wording.py
- [[test_strict_enabled_env_precedence()]] - code - graphify/tests/test_hook_strict.py
- [[test_windows_cwd_relative_forms()]] - code - graphify/tests/test_hook_out_of_project_paths.py
- [[test_windows_non_cwd_relative_forms()]] - code - graphify/tests/test_hook_out_of_project_paths.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_82
SORT file.name ASC
```

## Connections to other communities
- 19 edges to [[_COMMUNITY_Community 17]]
- 5 edges to [[_COMMUNITY_Community 19]]
- 3 edges to [[_COMMUNITY_Community 3]]
- 3 edges to [[_COMMUNITY_Community 115]]
- 3 edges to [[_COMMUNITY_Community 59]]
- 2 edges to [[_COMMUNITY_Community 223]]
- 2 edges to [[_COMMUNITY_Community 62]]
- 1 edge to [[_COMMUNITY_Community 191]]
- 1 edge to [[_COMMUNITY_Community 4]]

## Top bridge nodes
- [[test_hook_nudge_wording.py]] - degree 11, connects to 6 communities
- [[_run_hook_guard()]] - degree 22, connects to 5 communities
- [[test_hook_out_of_project_paths.py]] - degree 21, connects to 5 communities
- [[_bash_invokes_search()]] - degree 11, connects to 2 communities
- [[test_hook_guard_token_match.py]] - degree 10, connects to 2 communities