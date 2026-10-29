---
type: community
cohesion: 0.16
members: 25
---

# Community 224

**Cohesion:** 0.16 - loosely connected
**Members:** 25 nodes

## Members
- [[2197 an item whose source_file is absolute is persisted root-relative posix,…]] - rationale - graphify/tests/test_stat_index_portability.py
- [[2199 — stat-index.json must be portable and self-pruning. The on-disk stat…]] - rationale - graphify/tests/test_stat_index_portability.py
- [[A Windows-shaped absolute source_file (backslash separators) must be slash-…]] - rationale - graphify/tests/test_stat_index_portability.py
- [[A pre-2199 index keyed by absolute paths still resolves to the right digest on…]] - rationale - graphify/tests/test_stat_index_portability.py
- [[Backdate mtime past the racily-clean window so the stat fastpath is allowed to…]] - rationale - graphify/tests/test_stat_index_portability.py
- [[Path_70]] - code
- [[Run A under tmpa, copy the corpus (with graphify-out) to tmpb run B must be…]] - rationale - graphify/tests/test_stat_index_portability.py
- [[The stat-index locationanchor are chosen once per process via module globals…_1]] - rationale - graphify/tests/test_stat_index_portability.py
- [[When an old absolute key and a new relative key resolve to the same file, the…]] - rationale - graphify/tests/test_stat_index_portability.py
- [[Wrap Path.read_bytes with a call counter (file_hash's content read).]] - rationale - graphify/tests/test_stat_index_portability.py
- [[_count_read_bytes()]] - code - graphify/tests/test_stat_index_portability.py
- [[_fail_compute()]] - code - graphify/tests/test_stat_index_portability.py
- [[_read_index()]] - code - graphify/tests/test_stat_index_portability.py
- [[_reset_stat_index()_1]] - code - graphify/tests/test_stat_index_portability.py
- [[_settle()_1]] - code - graphify/tests/test_stat_index_portability.py
- [[_stat_index_path()]] - code - graphify/tests/test_stat_index_portability.py
- [[counting()]] - code - graphify/tests/test_stat_index_portability.py
- [[test_cache_hits_survive_corpus_move()]] - code - graphify/tests/test_stat_index_portability.py
- [[test_deleted_entries_are_pruned_on_flush()]] - code - graphify/tests/test_stat_index_portability.py
- [[test_legacy_absolute_index_migrates_gracefully()]] - code - graphify/tests/test_stat_index_portability.py
- [[test_out_of_root_key_round_trips_absolute()]] - code - graphify/tests/test_stat_index_portability.py
- [[test_relative_key_wins_over_colliding_legacy_absolute()]] - code - graphify/tests/test_stat_index_portability.py
- [[test_semantic_cache_normalizes_absolute_source_file()]] - code - graphify/tests/test_stat_index_portability.py
- [[test_semantic_cache_normalizes_backslash_poisoned_source_file()]] - code - graphify/tests/test_stat_index_portability.py
- [[test_stat_index_portability.py]] - code - graphify/tests/test_stat_index_portability.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_224
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_Community 26]]
- 3 edges to [[_COMMUNITY_Community 21]]
- 2 edges to [[_COMMUNITY_Community 19]]
- 2 edges to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 4]]

## Top bridge nodes
- [[test_stat_index_portability.py]] - degree 21, connects to 5 communities
- [[test_cache_hits_survive_corpus_move()]] - degree 10, connects to 1 community
- [[test_legacy_absolute_index_migrates_gracefully()]] - degree 9, connects to 1 community
- [[test_out_of_root_key_round_trips_absolute()]] - degree 7, connects to 1 community
- [[test_deleted_entries_are_pruned_on_flush()]] - degree 5, connects to 1 community