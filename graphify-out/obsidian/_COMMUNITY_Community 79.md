---
type: community
cohesion: 0.04
members: 53
---

# Community 79

**Cohesion:** 0.04 - loosely connected
**Members:** 53 nodes

## Members
- [[2166 a space must not empty the pin. The install-time allowlist had no space,…]] - rationale - graphify/tests/test_hooks.py
- [[3265 `.graphify_root` sits inside graphify-out, a directory the documented…]] - rationale - graphify/tests/test_hooks.py
- [[A pin is only worth writing if it still resolves tomorrow. graphify installed…]] - rationale - graphify/tests/test_hooks.py
- [[A set-but-empty GRAPHIFY_OUT must resolve to graphify-out like every other…]] - rationale - graphify/tests/test_hooks.py
- [[Both hooks must short-circuit in a linked worktree (git-dir != common-dir), and…]] - rationale - graphify/tests/test_hooks.py
- [[Both the launcher and the rebuild body it re-executes must parse, so a quoting…]] - rationale - graphify/tests/test_hooks.py
- [[Every hook cds to the checkout's top level before anything reads graphify-out…]] - rationale - graphify/tests/test_hooks.py
- [[Extract the `python -c payload` the hook hands to GRAPHIFY_PYTHON. The…]] - rationale - graphify/tests/test_hooks.py
- [[GRAPHIFY_SKIP_HOOK=1 must suppress BOTH hooks. post-checkout previously lacked…]] - rationale - graphify/tests/test_hooks.py
- [[Git for Windows' bundled shell ships no `nohup``setsid`, so the old `nohup ...…]] - rationale - graphify/tests/test_hooks.py
- [[Git for WindowsMSYS hooks can expose fragile pipe handles to spawned…]] - rationale - graphify/tests/test_hooks.py
- [[Pull the `.graphify_root` - `_root` snippet out of a rebuild body, so a test…]] - rationale - graphify/tests/test_hooks.py
- [[Return sys.executable if its path is shell-safe, else an empty string. Applies…]] - rationale - graphify/graphify/hooks.py
- [[The launcher is carried inside a shell double-quoted `-c ...` argument, so it…]] - rationale - graphify/tests/test_hooks.py
- [[The legitimate case the 3265 guard must not break a subdirectory-scoped root…]] - rationale - graphify/tests/test_hooks.py
- [[The no-SIGALRM fallback killing children before os._exit is not enough on…]] - rationale - graphify/tests/test_hooks.py
- [[The rebuild must honour the persisted scan root rather than hardcoding the repo…]] - rationale - graphify/tests/test_hooks.py
- [[The rebuild must survive a marker written by Windows PowerShell 5.1 (3028).…]] - rationale - graphify/tests/test_hooks.py
- [[The replacement detaches via Python start_new_session on POSIX and…]] - rationale - graphify/tests/test_hooks.py
- [[The rotating-prefix rule must not swallow ordinary installs. Control for the…]] - rationale - graphify/tests/test_hooks.py
- [[True if `path` lives under a directory the packaging system rotates. A pin is…]] - rationale - graphify/graphify/hooks.py
- [[Widening the allowlist for spaces (2166) must not admit anything that can…]] - rationale - graphify/tests/test_hooks.py
- [[Windows has no signal.SIGALRM, so the 791 rebuild timeout never armed there at…]] - rationale - graphify/tests/test_hooks.py
- [[_extract_root_resolution()]] - code - graphify/tests/test_hooks.py
- [[_is_rotating_prefix()]] - code - graphify/graphify/hooks.py
- [[_launcher_payload()]] - code - graphify/tests/test_hooks.py
- [[_pinned_python()]] - code - graphify/graphify/hooks.py
- [[_stmt_index_calling()]] - code - graphify/tests/test_hooks.py
- [[_stmt_index_calling()_1]] - code - graphify/tests/test_hooks.py
- [[git exports GIT_DIR to hooks, so the rev-parse fallback should only run when…]] - rationale - graphify/tests/test_hooks.py
- [[os._exit() terminates only the rebuild process itself, not any…]] - rationale - graphify/tests/test_hooks.py
- [[parametrize_107]] - code
- [[test_hooks_anchor_to_the_top_level_after_the_worktree_guard()]] - code - graphify/tests/test_hooks.py
- [[test_hooks_do_not_use_nohup()]] - code - graphify/tests/test_hooks.py
- [[test_hooks_honor_skip_env()]] - code - graphify/tests/test_hooks.py
- [[test_hooks_limit_windows_workers_by_default()]] - code - graphify/tests/test_hooks.py
- [[test_hooks_reuse_git_dir_from_env()]] - code - graphify/tests/test_hooks.py
- [[test_hooks_skip_linked_worktrees()]] - code - graphify/tests/test_hooks.py
- [[test_hooks_use_cross_platform_detach()]] - code - graphify/tests/test_hooks.py
- [[test_launcher_and_rebuild_body_are_valid_python()]] - code - graphify/tests/test_hooks.py
- [[test_launcher_payload_is_shell_quote_safe()]] - code - graphify/tests/test_hooks.py
- [[test_pinned_python_accepts_paths_containing_spaces()]] - code - graphify/tests/test_hooks.py
- [[test_pinned_python_refuses_a_rotating_snap_revision()]] - code - graphify/tests/test_hooks.py
- [[test_pinned_python_still_pins_a_stable_path()]] - code - graphify/tests/test_hooks.py
- [[test_pinned_python_still_rejects_shell_metacharacters()]] - code - graphify/tests/test_hooks.py
- [[test_rebuild_bodies_arm_a_timeout_without_sigalrm()]] - code - graphify/tests/test_hooks.py
- [[test_rebuild_bodies_honour_an_in_repo_graphify_root()]] - code - graphify/tests/test_hooks.py
- [[test_rebuild_bodies_kill_children_before_os_exit()]] - code - graphify/tests/test_hooks.py
- [[test_rebuild_bodies_read_graphify_root()]] - code - graphify/tests/test_hooks.py
- [[test_rebuild_bodies_reject_an_out_of_repo_graphify_root()]] - code - graphify/tests/test_hooks.py
- [[test_rebuild_bodies_tolerate_a_bom_in_graphify_root()]] - code - graphify/tests/test_hooks.py
- [[test_rebuild_bodies_treat_blank_graphify_out_as_default()]] - code - graphify/tests/test_hooks.py
- [[test_sigalrm_handler_kills_children_before_raising()]] - code - graphify/tests/test_hooks.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_79
SORT file.name ASC
```

## Connections to other communities
- 26 edges to [[_COMMUNITY_Community 44]]
- 6 edges to [[_COMMUNITY_Community 152]]
- 3 edges to [[_COMMUNITY_Community 130]]
- 1 edge to [[_COMMUNITY_Community 110]]
- 1 edge to [[_COMMUNITY_Community 550]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[parametrize_107]] - degree 28, connects to 4 communities
- [[_pinned_python()]] - degree 11, connects to 3 communities
- [[_extract_root_resolution()]] - degree 6, connects to 2 communities
- [[_launcher_payload()]] - degree 4, connects to 1 community
- [[test_launcher_and_rebuild_body_are_valid_python()]] - degree 4, connects to 1 community