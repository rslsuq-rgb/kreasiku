---
type: community
cohesion: 0.06
members: 51
---

# Community 86

**Cohesion:** 0.06 - loosely connected
**Members:** 51 nodes

## Members
- [[dot-test_both_fail_returns_main()]] - code - graphify/tests/test_prs.py
- [[dot-test_contains_pr_metadata_and_count_header()]] - code - graphify/tests/test_prs.py
- [[dot-test_detached_head_does_not_leak_into_next_record()]] - code - graphify/tests/test_prs.py
- [[dot-test_detect_default_branch_decodes_output_as_utf8()]] - code - graphify/tests/test_prs.py
- [[dot-test_detect_default_branch_git_fallback_passes_devnull_stdin()]] - code - graphify/tests/test_prs.py
- [[dot-test_empty_output_returns_empty_dict()]] - code - graphify/tests/test_prs.py
- [[dot-test_empty_pr_list()]] - code - graphify/tests/test_prs.py
- [[dot-test_explicit_repo_gh_fails_returns_main_without_local_git()]] - code - graphify/tests/test_prs.py
- [[dot-test_falls_back_to_git_symbolic_ref()]] - code - graphify/tests/test_prs.py
- [[dot-test_fetch_pr_files_decodes_output_as_utf8()]] - code - graphify/tests/test_prs.py
- [[dot-test_fetch_pr_files_passes_devnull_stdin()]] - code - graphify/tests/test_prs.py
- [[dot-test_fetch_worktrees_decodes_output_as_utf8()]] - code - graphify/tests/test_prs.py
- [[dot-test_fetch_worktrees_passes_devnull_stdin()]] - code - graphify/tests/test_prs.py
- [[dot-test_fixture_is_cp1252_undecodable()]] - code - graphify/tests/test_prs.py
- [[dot-test_gh_decodes_output_as_utf8()]] - code - graphify/tests/test_prs.py
- [[dot-test_gh_passes_devnull_stdin()]] - code - graphify/tests/test_prs.py
- [[dot-test_gh_returns_empty_dict_falls_back()]] - code - graphify/tests/test_prs.py
- [[dot-test_gh_returns_main()]] - code - graphify/tests/test_prs.py
- [[dot-test_git_default_branch_with_slash_is_kept_whole()]] - code - graphify/tests/test_prs.py
- [[dot-test_git_timeout_returns_main()]] - code - graphify/tests/test_prs.py
- [[dot-test_nonzero_returncode_returns_empty_dict()]] - code - graphify/tests/test_prs.py
- [[dot-test_normal_case_maps_branch_to_path()]] - code - graphify/tests/test_prs.py
- [[dot-test_repo_positional_arg_in_gh_repo_view()]] - code - graphify/tests/test_prs.py
- [[dot-test_subprocess_failure_returns_empty_dict()]] - code - graphify/tests/test_prs.py
- [[A default branch named release2.x must not be cut down to 2.x, or every PR…]] - rationale - graphify/tests/test_prs.py
- [[A detached HEAD (no branch line) must not associate its path with the next…]] - rationale - graphify/tests/test_prs.py
- [[Auto-detect the repo's default branch via gh, then git, then fall back to…]] - rationale - graphify/graphify/prs.py
- [[Exception_3]] - code
- [[Guard the fixture's UTF-8 bytes must be undecodable as cp1252, else these…]] - rationale - graphify/tests/test_prs.py
- [[Plain-text PR summary for MCP output (no ANSI).]] - rationale - graphify/graphify/prs.py
- [[Raised by a tool handler to signal an error result. A normal string return is…]] - rationale - graphify/graphify/serve.py
- [[Returns {branch worktree_path}.]] - rationale - graphify/graphify/prs.py
- [[Subprocesses in prs.py must isolate stdin with subprocess.DEVNULL so they never…]] - rationale - graphify/tests/test_prs.py
- [[TestDetectDefaultBranch]] - code - graphify/tests/test_prs.py
- [[TestFetchWorktrees]] - code - graphify/tests/test_prs.py
- [[TestFormatPrsText]] - code - graphify/tests/test_prs.py
- [[TestSubprocessOutputEncoding]] - code - graphify/tests/test_prs.py
- [[TestSubprocessStdinIsolation]] - code - graphify/tests/test_prs.py
- [[ToolError]] - code - graphify/graphify/serve.py
- [[When an explicit repo is supplied and gh fails, return 'main' without…]] - rationale - graphify/tests/test_prs.py
- [[_detect_default_branch()]] - code - graphify/graphify/prs.py
- [[_gh()]] - code - graphify/graphify/prs.py
- [[_tool_get_pr_impact()]] - code - graphify/graphify/serve.py
- [[_tool_list_prs()]] - code - graphify/graphify/serve.py
- [[_tool_triage_prs()]] - code - graphify/graphify/serve.py
- [[fetch_pr_files()]] - code - graphify/graphify/prs.py
- [[fetch_worktrees()]] - code - graphify/graphify/prs.py
- [[format_prs_text()]] - code - graphify/graphify/prs.py
- [[gh repo view takes repo positionally; --repo is not a valid flag (3318).]] - rationale - graphify/tests/test_prs.py
- [[gh returns data but with no defaultBranchRef — should still fall back.]] - rationale - graphify/tests/test_prs.py
- [[prs.py reads ghgitclaude output via subprocess.run(text=True). Without an…]] - rationale - graphify/tests/test_prs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_86
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_Community 133]]
- 11 edges to [[_COMMUNITY_Community 158]]
- 8 edges to [[_COMMUNITY_Community 211]]
- 6 edges to [[_COMMUNITY_Community 57]]
- 4 edges to [[_COMMUNITY_Community 109]]
- 2 edges to [[_COMMUNITY_Community 465]]
- 2 edges to [[_COMMUNITY_Community 299]]
- 1 edge to [[_COMMUNITY_Community 17]]
- 1 edge to [[_COMMUNITY_Community 300]]
- 1 edge to [[_COMMUNITY_Community 115]]

## Top bridge nodes
- [[_gh()]] - degree 13, connects to 8 communities
- [[_detect_default_branch()]] - degree 22, connects to 6 communities
- [[fetch_worktrees()]] - degree 16, connects to 5 communities
- [[fetch_pr_files()]] - degree 10, connects to 5 communities
- [[format_prs_text()]] - degree 8, connects to 4 communities