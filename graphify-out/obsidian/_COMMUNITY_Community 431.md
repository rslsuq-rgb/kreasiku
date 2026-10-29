---
type: community
cohesion: 0.15
members: 13
---

# Community 431

**Cohesion:** 0.15 - loosely connected
**Members:** 13 nodes

## Members
- [[1795 retained under 2495 evicting an alive file now requires POSITIVE…]] - rationale - graphify/tests/test_watch.py
- [[3695 invariant 1 & 2 AST ownership pass must not evict AST-tier nodes…]] - rationale - graphify/tests/test_watch.py
- [[3695 invariant 1 An alive source removed from the detected corpus survives a…]] - rationale - graphify/tests/test_watch.py
- [[3695 invariant 3 When a shrink occurs on a rebuild that also has fail-closed…]] - rationale - graphify/tests/test_watch.py
- [[narrowed()]] - code - graphify/tests/test_watch.py
- [[narrowed()_1]] - code - graphify/tests/test_watch.py
- [[narrowed()_2]] - code - graphify/tests/test_watch.py
- [[narrowed()_3]] - code - graphify/tests/test_watch.py
- [[reconcile_with_eviction()]] - code - graphify/tests/test_watch.py
- [[test_ast_ownership_does_not_evict_fail_closed_preserved_node()]] - code - graphify/tests/test_watch.py
- [[test_full_rebuild_preserves_alive_source_removed_from_detected_corpus()]] - code - graphify/tests/test_watch.py
- [[test_shrink_involving_fail_closed_sources_does_not_deadlock_shrink_guard()]] - code - graphify/tests/test_watch.py
- [[test_update_keeps_alive_file_dropped_from_corpus_without_ignore_rule()]] - code - graphify/tests/test_watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_431
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_Community 34]]
- 4 edges to [[_COMMUNITY_Community 6]]

## Top bridge nodes
- [[test_ast_ownership_does_not_evict_fail_closed_preserved_node()]] - degree 6, connects to 2 communities
- [[test_full_rebuild_preserves_alive_source_removed_from_detected_corpus()]] - degree 5, connects to 2 communities
- [[test_shrink_involving_fail_closed_sources_does_not_deadlock_shrink_guard()]] - degree 5, connects to 2 communities
- [[test_update_keeps_alive_file_dropped_from_corpus_without_ignore_rule()]] - degree 4, connects to 2 communities