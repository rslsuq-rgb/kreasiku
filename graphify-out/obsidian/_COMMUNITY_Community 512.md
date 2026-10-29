---
type: community
cohesion: 0.28
members: 9
---

# Community 512

**Cohesion:** 0.28 - loosely connected
**Members:** 9 nodes

## Members
- [[A run with multiple files exceeding the cap must produce exactly one warning,…]] - rationale - graphify/tests/test_file_truncation_warning.py
- [[Path_208]] - code
- [[Tests for file truncation warning in _read_files when exceeding _FILE_CHAR_CAP…]] - rationale - graphify/tests/test_file_truncation_warning.py
- [[_reset_warn_flag()]] - code - graphify/tests/test_file_truncation_warning.py
- [[fixture_30]] - code
- [[test_file_truncation_warning.py]] - code - graphify/tests/test_file_truncation_warning.py
- [[test_read_files_exceeding_char_cap_warns()]] - code - graphify/tests/test_file_truncation_warning.py
- [[test_read_files_under_char_cap_does_not_warn()]] - code - graphify/tests/test_file_truncation_warning.py
- [[test_read_files_warns_once_across_multiple_oversized_files()]] - code - graphify/tests/test_file_truncation_warning.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_512
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_Community 38]]
- 1 edge to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 58]]

## Top bridge nodes
- [[test_file_truncation_warning.py]] - degree 9, connects to 4 communities
- [[test_read_files_warns_once_across_multiple_oversized_files()]] - degree 4, connects to 1 community
- [[test_read_files_exceeding_char_cap_warns()]] - degree 3, connects to 1 community
- [[test_read_files_under_char_cap_does_not_warn()]] - degree 3, connects to 1 community