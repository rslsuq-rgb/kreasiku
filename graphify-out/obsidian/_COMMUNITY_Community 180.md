---
type: community
cohesion: 0.08
members: 29
---

# Community 180

**Cohesion:** 0.08 - loosely connected
**Members:** 29 nodes

## Members
- [[A graph-specific exclusion remains authoritative for tracked paths.]] - rationale - graphify/tests/test_detect.py
- [[A linked worktree whose main checkout is also inside the scan root is a second…]] - rationale - graphify/tests/test_detect.py
- [[A missingbroken Git command must not fail open or abort discovery.]] - rationale - graphify/tests/test_detect.py
- [[A worktree whose main checkout is outside the scan root is the only copy in the…]] - rationale - graphify/tests/test_detect.py
- [[CLIpersisted excludes are graph-level intent, not Git ignore rules.]] - rationale - graphify/tests/test_detect.py
- [[Gitignore rules do not apply to tracked files, matching Git itself (2759).]] - rationale - graphify/tests/test_detect.py
- [[Optimization (2759) a git repo with no .gitignore in play must not pay the…]] - rationale - graphify/tests/test_detect.py
- [[Scanning the linked worktree itself still indexes it (4683).]] - rationale - graphify/tests/test_detect.py
- [[Tracked paths are repo-relative even when the requested scan root is nested.]] - rationale - graphify/tests/test_detect.py
- [[Watch reconciliation must agree with detect() for tracked paths (2759).]] - rationale - graphify/tests/test_detect.py
- [[_git()_1]] - code - graphify/tests/test_detect.py
- [[_git_unavailable()]] - code - graphify/tests/test_detect.py
- [[_git_workspace_with_worktree()]] - code - graphify/tests/test_detect.py
- [[_spy()]] - code - graphify/tests/test_detect.py
- [[os.walk silently skips a subtree whose scandir raises (permissions, or a dir…]] - rationale - graphify/tests/test_detect.py
- [[skipif_5]] - code
- [[test_detect_indexes_worktree_as_scan_root()]] - code - graphify/tests/test_detect.py
- [[test_detect_keeps_worktree_whose_main_is_outside_root()]] - code - graphify/tests/test_detect.py
- [[test_detect_prunes_sibling_linked_worktree()]] - code - graphify/tests/test_detect.py
- [[test_detect_surfaces_unreadable_dir_instead_of_silent_skip()]] - code - graphify/tests/test_detect.py
- [[test_extra_exclude_still_excludes_git_tracked_file()]] - code - graphify/tests/test_detect.py
- [[test_git_lsfiles_skipped_when_no_gitignore_contributes()]] - code - graphify/tests/test_detect.py
- [[test_git_tracking_probe_failure_preserves_ignore_behavior()]] - code - graphify/tests/test_detect.py
- [[test_gitignore_keeps_tracked_file_but_drops_untracked_sibling()]] - code - graphify/tests/test_detect.py
- [[test_graphifyignore_still_excludes_git_tracked_file()]] - code - graphify/tests/test_detect.py
- [[test_ignored_predicate_keeps_git_tracked_ignored_file()]] - code - graphify/tests/test_detect.py
- [[test_real_git_repo_and_worktree_are_vcs_roots()]] - code - graphify/tests/test_detect.py
- [[test_tracked_gitignore_exemption_works_for_subdirectory_scan()]] - code - graphify/tests/test_detect.py
- [[ws holding a repo and a linked worktree of it as siblings (4683).]] - rationale - graphify/tests/test_detect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_180
SORT file.name ASC
```

## Connections to other communities
- 27 edges to [[_COMMUNITY_Community 5]]
- 1 edge to [[_COMMUNITY_Community 108]]
- 1 edge to [[_COMMUNITY_Community 232]]
- 1 edge to [[_COMMUNITY_Community 33]]

## Top bridge nodes
- [[_git()_1]] - degree 12, connects to 2 communities
- [[test_ignored_predicate_keeps_git_tracked_ignored_file()]] - degree 4, connects to 2 communities
- [[test_real_git_repo_and_worktree_are_vcs_roots()]] - degree 4, connects to 2 communities
- [[test_detect_indexes_worktree_as_scan_root()]] - degree 6, connects to 1 community
- [[test_detect_keeps_worktree_whose_main_is_outside_root()]] - degree 6, connects to 1 community