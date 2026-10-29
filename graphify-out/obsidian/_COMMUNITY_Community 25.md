---
type: community
cohesion: 0.04
members: 111
---

# Community 25

**Cohesion:** 0.04 - loosely connected
**Members:** 111 nodes

## Members
- [[1403 on Windows, Hermes scans %LOCALAPPDATA%hermesskills, so the global…]] - rationale - graphify/tests/test_install.py
- [[1568 installing from an older package would downgrade the skill.]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[1805 a package upgrade must not leave the installed skills behind. `uv tool…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[3144 the stale-skill warning must be actionable, and local SKILL.md edits…]] - rationale - graphify/tests/test_install_version_warning.py
- [[A file system that refuses to lock (some network mounts) install goes ahead as…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[A project-scope install writes into the user's repository; the lock file must…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[Checking what is installed must not rewrite it (4545); the stale copy is still…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[Direction-aware skill-version mismatch warning (1568). `_check_skill_version`…]] - rationale - graphify/tests/test_skill_version_warning.py
- [[Every platform with a user-scope skill directory, gemini included.]] - rationale - graphify/graphify/__main__.py
- [[Install and uninstall take the same lock as the refresh, but wait for it…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[Lay down `name`'s skill as an older release left it.]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[Non-Windows hermes destination is unchanged (~.hermesskills).]] - rationale - graphify/tests/test_install.py
- [[Often the first command after an upgrade; it must fix the skills, not just warn…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[On Windows gemini and agents both install into ~.agentsskills (2800).]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[Parse a version string into a comparable integer tuple (``0.9.2`` - ``(0, 9,…]] - rationale - graphify/graphify/__main__.py
- [[Path_82]] - code
- [[Path_83]] - code
- [[Path_84]] - code
- [[Popen]] - code
- [[Refresh user-scope skills left behind by a package upgrade (1805). Upgrading…]] - rationale - graphify/graphify/__main__.py
- [[Return the skill destination for a platform and scope.]] - rationale - graphify/graphify/install.py
- [[Stale when first checked, current once the lock is ours another process…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[Stale when first checked, uninstalled by another process before the lock is…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[The OS drops the lock with its holder no timeout, and the lock file it leaves…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[The lock file lives outside the skill directory and is never deleted, so it…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[The version stamped beside ``skill_dst`` if it is older than the package.]] - rationale - graphify/graphify/__main__.py
- [[Two platform dirs linked to one real dir hold ONE copy, like the shared dirs…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[Warn if the installed skill is from an older graphify version.…]] - rationale - graphify/graphify/__main__.py
- [[_check_skill_version()]] - code - graphify/graphify/__main__.py
- [[_copy_skill_file stages through fixed .tmp names; a second process writing the…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[_copy_skill_file's per-file install lines are noise on every CLI run; only…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[_hold_lock()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[_lock()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[_lock_is_free()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[_make_skill()]] - code - graphify/tests/test_skill_version_warning.py
- [[_packaged()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[_platform_skill_destination()]] - code - graphify/graphify/install.py
- [[_posix_skill_layout()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[_refresh_enabled()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[_refresh_stale_skills()]] - code - graphify/graphify/__main__.py
- [[_run_cli()_1]] - code - graphify/graphify/__main__.py
- [[_skill_platforms()]] - code - graphify/graphify/__main__.py
- [[_stale()_1]] - code - graphify/tests/test_install_version_warning.py
- [[_stale()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[_stale_stamp()]] - code - graphify/graphify/__main__.py
- [[_stamp()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[_version_tuple()]] - code - graphify/graphify/__main__.py
- [[`graphify query what does --help do` is a real query, not a help request.]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[`graphify vscode install` writes a different SKILL.md to the same dir as the…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[boom()_2]] - code - graphify/tests/test_skill_auto_refresh.py
- [[boom()_3]] - code - graphify/tests/test_skill_auto_refresh.py
- [[boom()_4]] - code - graphify/tests/test_skill_auto_refresh.py
- [[claude and windows share ~.claudeskills; refresh writes the variant a plain…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[fixture_9]] - code
- [[fixture_10]] - code
- [[gemini and hermes install to different directories on Windows; these tests…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[gemini is not in _PLATFORM_CONFIG, so the version check never saw its ~.gemini…]] - rationale - graphify/tests/test_skill_auto_refresh.py
- [[lock_after_an_uninstall()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[lock_after_the_other_process()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[no_locks()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[parametrize_40]] - code
- [[sandbox_home()]] - code - graphify/tests/test_install_version_warning.py
- [[stop()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_current_skill_is_untouched_and_silent()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_current_skill_stays_silent()]] - code - graphify/tests/test_install_version_warning.py
- [[test_a_directory_another_process_is_refreshing_is_skipped()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_directory_shared_by_two_platforms_is_not_guessed()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_directory_shared_through_a_symlink_is_not_guessed()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_failed_refresh_never_breaks_the_command()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_falsy_opt_out_value_keeps_it_on()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_local_edit_survives_as_bak()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_locally_edited_skill_is_backed_up_and_announced()]] - code - graphify/tests/test_install_version_warning.py
- [[test_a_newer_skill_is_never_downgraded()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_platform_that_was_never_installed_is_not_created()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_process_that_died_holding_the_lock_does_not_block()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_refresh_finished_by_another_process_is_not_redone()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_refresh_reports_only_the_result_and_the_backup()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_skill_uninstalled_meanwhile_is_not_brought_back()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_stale_gemini_skill_gets_the_warning_too()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_a_stamp_without_skill_md_is_left_for_the_repair_warning()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_an_unmodified_reinstall_writes_no_backup()]] - code - graphify/tests/test_install_version_warning.py
- [[test_every_stale_platform_is_refreshed_not_only_the_detected_one()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_graphify_update_refreshes_before_it_runs()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_help_text_given_to_a_free_text_command_still_refreshes()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_hermes_skill_destination_posix_uses_home()]] - code - graphify/tests/test_install.py
- [[test_hermes_skill_destination_windows_uses_localappdata()]] - code - graphify/tests/test_install.py
- [[test_install_and_hook_commands_skip_the_refresh()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_install_and_uninstall_wait_for_a_refresh_in_progress()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_install_version_warning.py]] - code - graphify/tests/test_install_version_warning.py
- [[test_matching_version_is_silent()]] - code - graphify/tests/test_skill_version_warning.py
- [[test_one_unresolvable_destination_does_not_cancel_the_others()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_skill_auto_refresh.py]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_skill_newer_than_package_recommends_upgrade_not_install()]] - code - graphify/tests/test_skill_version_warning.py
- [[test_skill_older_than_package_recommends_install()]] - code - graphify/tests/test_skill_version_warning.py
- [[test_skill_version_warning.py]] - code - graphify/tests/test_skill_version_warning.py
- [[test_the_claude_dir_gets_the_host_variant()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_the_copilot_dir_shared_with_vscode_is_not_guessed()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_the_env_opt_out_disables_it()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_the_first_cli_run_after_an_upgrade_refreshes_and_stays_quiet()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_the_lock_file_stays_out_of_the_skill_directory()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_the_lock_is_released_after_a_failed_refresh()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_the_lock_is_released_after_a_refresh()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_the_version_stamp_is_written_beside_the_skill()]] - code - graphify/tests/test_install_version_warning.py
- [[test_the_warning_names_the_stale_destination_and_the_exact_command()]] - code - graphify/tests/test_install_version_warning.py
- [[test_uninstall_after_a_refresh_leaves_no_directory_behind()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_uninstall_after_the_lock_was_taken_leaves_no_directory_behind()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_version_and_help_leave_a_stale_skill_alone()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_version_tuple_orders_numerically()]] - code - graphify/tests/test_skill_version_warning.py
- [[test_what_the_refresh_skips_still_gets_the_warning()]] - code - graphify/tests/test_skill_auto_refresh.py
- [[test_without_a_platform_name_the_generic_command_is_kept()]] - code - graphify/tests/test_install_version_warning.py
- [[test_without_file_locking_install_still_works_and_the_refresh_skips()]] - code - graphify/tests/test_skill_auto_refresh.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_25
SORT file.name ASC
```

## Connections to other communities
- 39 edges to [[_COMMUNITY_Community 4]]
- 6 edges to [[_COMMUNITY_Community 52]]
- 3 edges to [[_COMMUNITY_Community 22]]
- 3 edges to [[_COMMUNITY_Community 19]]
- 3 edges to [[_COMMUNITY_Community 59]]
- 2 edges to [[_COMMUNITY_Community 5]]
- 2 edges to [[_COMMUNITY_Community 61]]
- 2 edges to [[_COMMUNITY_Community 91]]
- 2 edges to [[_COMMUNITY_Community 10]]
- 2 edges to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 17]]
- 1 edge to [[_COMMUNITY_Community 109]]
- 1 edge to [[_COMMUNITY_Community 233]]

## Top bridge nodes
- [[test_skill_auto_refresh.py]] - degree 53, connects to 6 communities
- [[_platform_skill_destination()]] - degree 30, connects to 5 communities
- [[_run_cli()_1]] - degree 20, connects to 4 communities
- [[test_install_version_warning.py]] - degree 15, connects to 3 communities
- [[test_skill_version_warning.py]] - degree 9, connects to 3 communities