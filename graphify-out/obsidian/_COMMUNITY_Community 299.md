---
type: community
cohesion: 0.18
members: 19
---

# Community 299

**Cohesion:** 0.18 - loosely connected
**Members:** 19 nodes

## Members
- [[dot-_make_graph()]] - code - graphify/tests/test_prs.py
- [[dot-test_both_directions_work()]] - code - graphify/tests/test_prs.py
- [[dot-test_empty_files_returns_empty()]] - code - graphify/tests/test_prs.py
- [[dot-test_exact_match()]] - code - graphify/tests/test_prs.py
- [[dot-test_graph_path_longer_with_boundary()]] - code - graphify/tests/test_prs.py
- [[dot-test_matching_both_files()]] - code - graphify/tests/test_prs.py
- [[dot-test_matching_files_returns_correct_communities_and_count()]] - code - graphify/tests/test_prs.py
- [[dot-test_no_double_counting_same_graph_file_matched_by_two_pr_files()]] - code - graphify/tests/test_prs.py
- [[dot-test_no_double_counting_when_basename_matches_multiple_paths()]] - code - graphify/tests/test_prs.py
- [[dot-test_no_false_positive_on_partial_filename()]] - code - graphify/tests/test_prs.py
- [[dot-test_no_matching_files_returns_empty()]] - code - graphify/tests/test_prs.py
- [[3 nodes across 2 communities, 2 distinct source files.]] - rationale - graphify/tests/test_prs.py
- [[Graph_13]] - code
- [[Return (communities_touched, nodes_affected) for a set of changed files. Builds…]] - rationale - graphify/graphify/prs.py
- [[TestComputePrImpact]] - code - graphify/tests/test_prs.py
- [[TestPathMatch]] - code - graphify/tests/test_prs.py
- [[True if graph_src and pr_file refer to the same file (path-boundary safe).]] - rationale - graphify/graphify/prs.py
- [[_path_match()]] - code - graphify/graphify/prs.py
- [[compute_pr_impact()]] - code - graphify/graphify/prs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_299
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Community 133]]
- 2 edges to [[_COMMUNITY_Community 86]]
- 2 edges to [[_COMMUNITY_Community 158]]
- 1 edge to [[_COMMUNITY_Community 211]]
- 1 edge to [[_COMMUNITY_Community 57]]

## Top bridge nodes
- [[compute_pr_impact()]] - degree 14, connects to 5 communities
- [[_path_match()]] - degree 9, connects to 2 communities
- [[TestComputePrImpact]] - degree 8, connects to 1 community
- [[TestPathMatch]] - degree 5, connects to 1 community