---
type: community
cohesion: 0.06
members: 85
---

# Community 44

**Cohesion:** 0.06 - loosely connected
**Members:** 85 nodes

## Members
- [[2166 end to end the emitted hooks must carry the real interpreter, not ''.]] - rationale - graphify/tests/test_hooks.py
- [[2166 git runs the merge driver through a shell, so a pinned path with a space…]] - rationale - graphify/tests/test_hooks.py
- [[3869 a relative core.hooksPath that resolves outside the repo is refused.]] - rationale - graphify/tests/test_hooks.py
- [[3869 an absolute core.hooksPath outside the repo must not be created. The…]] - rationale - graphify/tests/test_hooks.py
- [[A Windows-style core.hooksPath must raise (loud failure), not silently create a…]] - rationale - graphify/tests/test_hooks.py
- [[A legitimate POSIX core.hooksPath (Husky-style) must still install.]] - rationale - graphify/tests/test_hooks.py
- [[A pre-existing .gitattributes entry must survive install (no clobber).]] - rationale - graphify/tests/test_hooks.py
- [[A typo in the committed .graphifyrc must not turn the read-only `status`…]] - rationale - graphify/tests/test_hooks.py
- [[Check if graphify hooks are installed.]] - rationale - graphify/graphify/hooks.py
- [[End-to-end the files written to .githooks must be nohup-free (1161).]] - rationale - graphify/tests/test_hooks.py
- [[Hook scripts must embed sys.executable so the hook works without the graphify…]] - rationale - graphify/tests/test_hooks.py
- [[Install graphify's post-commit, post-checkout, post-merge, and post-rewrite…]] - rationale - graphify/graphify/hooks.py
- [[No core.hooksPath - normal .githooks install, no rejection.]] - rationale - graphify/tests/test_hooks.py
- [[Persisting the project default must not clobber an explicit per-run…]] - rationale - graphify/tests/test_hooks.py
- [[Remove graphify's post-commit, post-checkout, post-merge, and post-rewrite…]] - rationale - graphify/graphify/hooks.py
- [[Return the user-editable hooks directory. Husky 9 sets core.hooksPath to…]] - rationale - graphify/graphify/hooks.py
- [[Running install twice must not duplicate the .gitattributes line.]] - rationale - graphify/tests/test_hooks.py
- [[Test 2 Without .graphifyrc, generated hooks omit GRAPHIFY_VIZ_NODE_LIMIT…]] - rationale - graphify/tests/test_hooks.py
- [[Test 3 viz_node_limit from .graphifyrc is baked into both hooks.]] - rationale - graphify/tests/test_hooks.py
- [[Test 4 Re-running install updates existing Graphify hook block with new config.]] - rationale - graphify/tests/test_hooks.py
- [[Test 5 User hook content outside graphify markers survives hook update.]] - rationale - graphify/tests/test_hooks.py
- [[Test 6 graphify hook status exposes configured viz node limit and detects out-…]] - rationale - graphify/tests/test_hooks.py
- [[Test 7 Verify both post-commit and post-checkout hooks receive the setting.]] - rationale - graphify/tests/test_hooks.py
- [[Tests for hooks.py - git hook installuninstall.]] - rationale - graphify/tests/test_hooks.py
- [[Upgrading the package never rewrites hooks already on disk, so a block written…]] - rationale - graphify/tests/test_hooks.py
- [[User commands around the graphify block are not graphify's to judge.]] - rationale - graphify/tests/test_hooks.py
- [[Walk up to find .git directory.]] - rationale - graphify/graphify/hooks.py
- [[_git_root()]] - code - graphify/graphify/hooks.py
- [[_make_git_repo()]] - code - graphify/tests/test_hooks.py
- [[_set_hookspath()]] - code - graphify/tests/test_hooks.py
- [[_status_line()]] - code - graphify/tests/test_hooks.py
- [[_user_hooks_dir()]] - code - graphify/graphify/hooks.py
- [[`_PINNED` is whichever interpreter ran `hook install`. A hook pinned to a…]] - rationale - graphify/tests/test_hooks.py
- [[install()_1]] - code - graphify/graphify/hooks.py
- [[install() must set merge.graphify. via git config and add the .gitattributes…]] - rationale - graphify/tests/test_hooks.py
- [[status()]] - code - graphify/graphify/hooks.py
- [[test_baked_viz_limit_yields_to_an_explicit_per_run_override()]] - code - graphify/tests/test_hooks.py
- [[test_both_hooks_configured()]] - code - graphify/tests/test_hooks.py
- [[test_changing_config_updates_existing_hook()]] - code - graphify/tests/test_hooks.py
- [[test_config_baked_into_generated_hook()]] - code - graphify/tests/test_hooks.py
- [[test_default_hooks_dir_unaffected()]] - code - graphify/tests/test_hooks.py
- [[test_hooks.py]] - code - graphify/tests/test_hooks.py
- [[test_hookspath_outside_repo_falls_back_to_default()]] - code - graphify/tests/test_hooks.py
- [[test_hookspath_relative_escape_falls_back_to_default()]] - code - graphify/tests/test_hooks.py
- [[test_install_appends_to_a_user_post_rewrite_hook_and_uninstall_keeps_it()]] - code - graphify/tests/test_hooks.py
- [[test_install_appends_to_existing_hook()]] - code - graphify/tests/test_hooks.py
- [[test_install_creates_hook()]] - code - graphify/tests/test_hooks.py
- [[test_install_creates_post_checkout_hook()]] - code - graphify/tests/test_hooks.py
- [[test_install_creates_post_merge_hook()]] - code - graphify/tests/test_hooks.py
- [[test_install_creates_post_rewrite_hook()]] - code - graphify/tests/test_hooks.py
- [[test_install_embeds_pinned_interpreter()]] - code - graphify/tests/test_hooks.py
- [[test_install_idempotent()]] - code - graphify/tests/test_hooks.py
- [[test_install_is_executable()]] - code - graphify/tests/test_hooks.py
- [[test_install_merge_driver_idempotent()]] - code - graphify/tests/test_hooks.py
- [[test_install_pins_interpreter_path_with_spaces()]] - code - graphify/tests/test_hooks.py
- [[test_install_post_checkout_is_executable()]] - code - graphify/tests/test_hooks.py
- [[test_install_post_merge_is_executable()]] - code - graphify/tests/test_hooks.py
- [[test_install_post_rewrite_is_executable()]] - code - graphify/tests/test_hooks.py
- [[test_install_preserves_existing_gitattributes()]] - code - graphify/tests/test_hooks.py
- [[test_install_registers_merge_driver()]] - code - graphify/tests/test_hooks.py
- [[test_installed_hooks_contain_no_nohup()]] - code - graphify/tests/test_hooks.py
- [[test_merge_driver_quotes_interpreter_with_spaces()]] - code - graphify/tests/test_hooks.py
- [[test_no_config_preserves_existing_hook()]] - code - graphify/tests/test_hooks.py
- [[test_no_git_repo_raises()]] - code - graphify/tests/test_hooks.py
- [[test_posix_custom_hookspath_still_works()]] - code - graphify/tests/test_hooks.py
- [[test_status_compares_only_the_graphify_block()]] - code - graphify/tests/test_hooks.py
- [[test_status_flags_a_hook_block_from_an_older_graphify()]] - code - graphify/tests/test_hooks.py
- [[test_status_ignores_the_pinned_interpreter()]] - code - graphify/tests/test_hooks.py
- [[test_status_installed()]] - code - graphify/tests/test_hooks.py
- [[test_status_not_installed()]] - code - graphify/tests/test_hooks.py
- [[test_status_reports_configuration()]] - code - graphify/tests/test_hooks.py
- [[test_status_shows_both_hooks()]] - code - graphify/tests/test_hooks.py
- [[test_status_shows_post_merge_hook()]] - code - graphify/tests/test_hooks.py
- [[test_status_shows_post_rewrite_hook()]] - code - graphify/tests/test_hooks.py
- [[test_status_survives_a_malformed_graphifyrc()]] - code - graphify/tests/test_hooks.py
- [[test_uninstall_no_hook()]] - code - graphify/tests/test_hooks.py
- [[test_uninstall_removes_hook()]] - code - graphify/tests/test_hooks.py
- [[test_uninstall_removes_merge_driver_keeps_other_attrs()]] - code - graphify/tests/test_hooks.py
- [[test_uninstall_removes_post_checkout_hook()]] - code - graphify/tests/test_hooks.py
- [[test_uninstall_removes_post_merge_hook()]] - code - graphify/tests/test_hooks.py
- [[test_uninstall_removes_post_rewrite_hook()]] - code - graphify/tests/test_hooks.py
- [[test_user_hook_content_survives_update()]] - code - graphify/tests/test_hooks.py
- [[test_windows_hookspath_rejected_no_junk_dir_on_posix()]] - code - graphify/tests/test_hooks.py
- [[uninstall()]] - code - graphify/graphify/hooks.py
- [[uninstall() must unset merge.graphify. and remove only the graphify…]] - rationale - graphify/tests/test_hooks.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_44
SORT file.name ASC
```

## Connections to other communities
- 28 edges to [[_COMMUNITY_Community 110]]
- 26 edges to [[_COMMUNITY_Community 79]]
- 23 edges to [[_COMMUNITY_Community 130]]
- 17 edges to [[_COMMUNITY_Community 354]]
- 16 edges to [[_COMMUNITY_Community 152]]
- 7 edges to [[_COMMUNITY_Community 166]]
- 6 edges to [[_COMMUNITY_Community 17]]
- 4 edges to [[_COMMUNITY_Community 356]]
- 3 edges to [[_COMMUNITY_Community 4]]
- 3 edges to [[_COMMUNITY_Community 550]]
- 2 edges to [[_COMMUNITY_Community 621]]
- 2 edges to [[_COMMUNITY_Community 637]]
- 2 edges to [[_COMMUNITY_Community 19]]
- 2 edges to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 635]]
- 1 edge to [[_COMMUNITY_Community 636]]
- 1 edge to [[_COMMUNITY_Community 638]]
- 1 edge to [[_COMMUNITY_Community 830]]
- 1 edge to [[_COMMUNITY_Community 831]]
- 1 edge to [[_COMMUNITY_Community 832]]
- 1 edge to [[_COMMUNITY_Community 833]]
- 1 edge to [[_COMMUNITY_Community 834]]
- 1 edge to [[_COMMUNITY_Community 835]]
- 1 edge to [[_COMMUNITY_Community 836]]
- 1 edge to [[_COMMUNITY_Community 837]]
- 1 edge to [[_COMMUNITY_Community 838]]
- 1 edge to [[_COMMUNITY_Community 839]]
- 1 edge to [[_COMMUNITY_Community 250]]
- 1 edge to [[_COMMUNITY_Community 109]]
- 1 edge to [[_COMMUNITY_Community 111]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 318]]

## Top bridge nodes
- [[test_hooks.py]] - degree 161, connects to 30 communities
- [[install()_1]] - degree 67, connects to 7 communities
- [[uninstall()]] - degree 22, connects to 4 communities
- [[status()]] - degree 22, connects to 3 communities
- [[_make_git_repo()]] - degree 52, connects to 2 communities