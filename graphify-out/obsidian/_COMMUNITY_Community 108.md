---
type: community
cohesion: 0.06
members: 42
---

# Community 108

**Cohesion:** 0.06 - loosely connected
**Members:** 42 nodes

## Members
- [[build must not match srcbuild.]] - rationale - graphify/tests/test_detect.py
- [[inbox must not match srcinbox — only inbox at the anchor root.]] - rationale - graphify/tests/test_detect.py
- [[inbox must still match inbox at the anchor root (positive case).]] - rationale - graphify/tests/test_detect.py
- [[srcinbox must match srcinbox but not xsrcinbox.]] - rationale - graphify/tests/test_detect.py
- [[A ! re-include cannot un-ignore a file whose parent dir is excluded (882).]] - rationale - graphify/tests/test_detect.py
- [[A ! re-include must still un-ignore a file when no ancestor is excluded (882).]] - rationale - graphify/tests/test_detect.py
- [[A HOME holding a .git git would reject, plus a .gitignore, above a project…]] - rationale - graphify/tests/test_detect.py
- [[A shared _cache must not change _is_ignored results, including negation. Builds…]] - rationale - graphify/tests/test_detect.py
- [[An empty or incomplete .git dir is skipped, so a home .gitignore does not leak…]] - rationale - graphify/tests/test_detect.py
- [[Each supported pattern form matchesmisses exactly as before the string-space…]] - rationale - graphify/tests/test_detect.py
- [[If the ancestor dir itself is re-included, its children should not be blocked…]] - rationale - graphify/tests/test_detect.py
- [[Linked worktrees and submodules have a .git FILE starting with gitdir.]] - rationale - graphify/tests/test_detect.py
- [[Read .graphifyignore files and return (anchor_dir, pattern) pairs. Patterns are…]] - rationale - graphify/graphify/detect.py
- [[Return True if the path should be ignored per .graphifyignore patterns. Uses…]] - rationale - graphify/graphify/detect.py
- [[Siblings under the same subtree must share the cached parent result (1235).…]] - rationale - graphify/tests/test_detect.py
- [[Walk upward from start; return the first directory containing a VCS marker.…]] - rationale - graphify/graphify/detect.py
- [[__setitem__()]] - code - graphify/tests/test_detect.py
- [[_eval must not build pathlib objects per pattern. The old shape called…]] - rationale - graphify/tests/test_detect.py
- [[_find_vcs_root()]] - code - graphify/graphify/detect.py
- [[_home_with_invalid_git()]] - code - graphify/tests/test_detect.py
- [[_is_ignored()]] - code - graphify/graphify/detect.py
- [[_load_graphifyignore()]] - code - graphify/graphify/detect.py
- [[counting_relative_to()]] - code - graphify/tests/test_detect.py
- [[inbox (no leading ) must still match srcinbox anywhere in the tree.]] - rationale - graphify/tests/test_detect.py
- [[infoexclude is loaded at lowest priority, so a later .gitignore `!` negation…]] - rationale - graphify/tests/test_detect.py
- [[test_anchored_dir_matches_at_root()]] - code - graphify/tests/test_detect.py
- [[test_anchored_dir_not_matched_at_depth()]] - code - graphify/tests/test_detect.py
- [[test_anchored_file_not_matched_at_depth()]] - code - graphify/tests/test_detect.py
- [[test_anchored_multi_segment_pattern()]] - code - graphify/tests/test_detect.py
- [[test_git_file_with_gitdir_is_a_vcs_root()]] - code - graphify/tests/test_detect.py
- [[test_git_file_without_gitdir_is_skipped()]] - code - graphify/tests/test_detect.py
- [[test_git_info_exclude_ranks_below_gitignore_negation()]] - code - graphify/tests/test_detect.py
- [[test_invalid_git_dir_is_not_a_vcs_root()]] - code - graphify/tests/test_detect.py
- [[test_is_ignored_cache_evaluates_each_dir_once()]] - code - graphify/tests/test_detect.py
- [[test_is_ignored_cache_matches_uncached_results()]] - code - graphify/tests/test_detect.py
- [[test_is_ignored_no_per_pattern_path_construction()]] - code - graphify/tests/test_detect.py
- [[test_negation_ancestor_itself_reincluded()]] - code - graphify/tests/test_detect.py
- [[test_negation_cannot_rescue_file_under_excluded_dir()]] - code - graphify/tests/test_detect.py
- [[test_negation_works_when_no_ancestor_excluded()]] - code - graphify/tests/test_detect.py
- [[test_string_matcher_preserves_pattern_forms()]] - code - graphify/tests/test_detect.py
- [[test_unanchored_dir_still_matches_at_depth()]] - code - graphify/tests/test_detect.py
- [[test_valid_git_dir_is_a_vcs_root()]] - code - graphify/tests/test_detect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_108
SORT file.name ASC
```

## Connections to other communities
- 28 edges to [[_COMMUNITY_Community 5]]
- 14 edges to [[_COMMUNITY_Community 33]]
- 7 edges to [[_COMMUNITY_Community 2]]
- 5 edges to [[_COMMUNITY_Community 18]]
- 4 edges to [[_COMMUNITY_Community 1]]
- 3 edges to [[_COMMUNITY_Community 232]]
- 2 edges to [[_COMMUNITY_Community 54]]
- 1 edge to [[_COMMUNITY_Community 180]]
- 1 edge to [[_COMMUNITY_Community 52]]
- 1 edge to [[_COMMUNITY_Community 24]]
- 1 edge to [[_COMMUNITY_Community 210]]

## Top bridge nodes
- [[_load_graphifyignore()]] - degree 34, connects to 7 communities
- [[_is_ignored()]] - degree 30, connects to 7 communities
- [[_find_vcs_root()]] - degree 16, connects to 5 communities
- [[test_valid_git_dir_is_a_vcs_root()]] - degree 5, connects to 2 communities
- [[test_invalid_git_dir_is_not_a_vcs_root()]] - degree 7, connects to 1 community