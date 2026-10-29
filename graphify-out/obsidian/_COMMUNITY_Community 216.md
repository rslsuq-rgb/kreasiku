---
type: community
cohesion: 0.11
members: 25
---

# Community 216

**Cohesion:** 0.11 - loosely connected
**Members:** 25 nodes

## Members
- [[1950 empty-parse gap a chunk that truncates to an empty parse produces NO…]] - rationale - graphify/tests/test_partial_cache.py
- [[2543 code files whose AST extract failed (missing extra) stay unstamped.]] - rationale - graphify/tests/test_partial_cache.py
- [[A file sliced across chunks an earlier truncated slice must not be dropped…]] - rationale - graphify/tests/test_partial_cache.py
- [[A truncated file produced output this run but is left unstamped in the manifest…]] - rationale - graphify/tests/test_partial_cache.py
- [[Ordering guard once a file is partial (from an empty-parse truncation, so no…]] - rationale - graphify/tests/test_partial_cache.py
- [[Source files known partial those carrying a ``_partial`` item marker, plus any…]] - rationale - graphify/graphify/llm.py
- [[Tests for partial-extraction cache promotion. A truncated LLM chunk…]] - rationale - graphify/tests/test_partial_cache.py
- [[True if any nodeedgehyperedge in a per-file group carries the internal…]] - rationale - graphify/graphify/cache.py
- [[_doc()_1]] - code - graphify/tests/test_partial_cache.py
- [[_group_has_partial_marker()]] - code - graphify/graphify/cache.py
- [[_partial_source_files must surface a file recorded in _partial_files even when…]] - rationale - graphify/tests/test_partial_cache.py
- [[_partial_source_files()]] - code - graphify/graphify/llm.py
- [[test_clean_slice_does_not_repromote_empty_parse_partial()]] - code - graphify/tests/test_partial_cache.py
- [[test_group_has_partial_marker()]] - code - graphify/tests/test_partial_cache.py
- [[test_intrinsic_partial_marker_makes_entry_a_cache_miss()]] - code - graphify/tests/test_partial_cache.py
- [[test_merge_existing_accumulates_slices_and_stays_partial()]] - code - graphify/tests/test_partial_cache.py
- [[test_non_partial_entry_loads_normally()]] - code - graphify/tests/test_partial_cache.py
- [[test_partial_cache.py]] - code - graphify/tests/test_partial_cache.py
- [[test_partial_entry_self_heals_on_complete_reextraction()]] - code - graphify/tests/test_partial_cache.py
- [[test_partial_files_carries_empty_parse_truncation()]] - code - graphify/tests/test_partial_cache.py
- [[test_partial_source_files_arg_stamps_entry()]] - code - graphify/tests/test_partial_cache.py
- [[test_partial_source_files_empty_when_unmarked()]] - code - graphify/tests/test_partial_cache.py
- [[test_save_stamps_partial_file_with_no_items()]] - code - graphify/tests/test_partial_cache.py
- [[test_stamped_manifest_excludes_failed_ast_sources()]] - code - graphify/tests/test_partial_cache.py
- [[test_stamped_manifest_excludes_partial_files()]] - code - graphify/tests/test_partial_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_216
SORT file.name ASC
```

## Connections to other communities
- 17 edges to [[_COMMUNITY_Community 21]]
- 6 edges to [[_COMMUNITY_Community 17]]
- 2 edges to [[_COMMUNITY_Community 26]]
- 2 edges to [[_COMMUNITY_Community 78]]
- 2 edges to [[_COMMUNITY_Community 58]]
- 1 edge to [[_COMMUNITY_Community 32]]
- 1 edge to [[_COMMUNITY_Community 19]]

## Top bridge nodes
- [[test_partial_cache.py]] - degree 23, connects to 6 communities
- [[_partial_source_files()]] - degree 8, connects to 4 communities
- [[_group_has_partial_marker()]] - degree 5, connects to 2 communities
- [[test_clean_slice_does_not_repromote_empty_parse_partial()]] - degree 5, connects to 1 community
- [[test_merge_existing_accumulates_slices_and_stays_partial()]] - degree 5, connects to 1 community