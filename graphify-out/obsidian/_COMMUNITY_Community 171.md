---
type: community
cohesion: 0.08
members: 30
---

# Community 171

**Cohesion:** 0.08 - loosely connected
**Members:** 30 nodes

## Members
- [[1059 after the primary rebuild, the lock-holder must loop and drain any paths…]] - rationale - graphify/tests/test_watch.py
- [[1059 changed_paths=None means a full-corpus rebuild — the queue must not be…]] - rationale - graphify/tests/test_watch.py
- [[1059 the process that acquires the lock must drain .pending_changes and pass…]] - rationale - graphify/tests/test_watch.py
- [[4274 a full request queued while an incremental rebuild holds the lock must…]] - rationale - graphify/tests/test_watch.py
- [[4274 an incremental holder that finds a full marker already queued runs a…]] - rationale - graphify/tests/test_watch.py
- [[4274 incremental work queued after a full rebuild walked the corpus must be…]] - rationale - graphify/tests/test_watch.py
- [[Append ``changed_paths`` to ``out_dir.pending_changes`` (one per line). Used…]] - rationale - graphify/graphify/watch.py
- [[Empty change set must not create an empty .pending_changes file.]] - rationale - graphify/tests/test_watch.py
- [[Read + unlink ``out_dir.pending_changes`` and return deduplicated paths.…]] - rationale - graphify/graphify/watch.py
- [[Record that a full-corpus rebuild was requested but could not run. Full…]] - rationale - graphify/graphify/watch.py
- [[Repeated appends across concurrent contenders must dedupe; partial writes…]] - rationale - graphify/tests/test_watch.py
- [[_drain_pending()]] - code - graphify/graphify/watch.py
- [[_queue_pending writes one path per line; _drain_pending reads + unlinks and…]] - rationale - graphify/tests/test_watch.py
- [[_queue_pending()]] - code - graphify/graphify/watch.py
- [[_queue_pending_full()]] - code - graphify/graphify/watch.py
- [[fake_inner()]] - code - graphify/tests/test_watch.py
- [[fake_inner()_1]] - code - graphify/tests/test_watch.py
- [[fake_inner()_2]] - code - graphify/tests/test_watch.py
- [[fake_inner()_3]] - code - graphify/tests/test_watch.py
- [[fake_inner()_4]] - code - graphify/tests/test_watch.py
- [[recording_inner()]] - code - graphify/tests/test_watch.py
- [[test_drain_pending_dedupes_and_skips_blank_lines()]] - code - graphify/tests/test_watch.py
- [[test_queue_and_drain_pending_round_trip()]] - code - graphify/tests/test_watch.py
- [[test_queue_pending_noop_on_empty_list()]] - code - graphify/tests/test_watch.py
- [[test_rebuild_code_drains_late_arrivals()]] - code - graphify/tests/test_watch.py
- [[test_rebuild_code_full_corpus_skips_pending_queue()]] - code - graphify/tests/test_watch.py
- [[test_rebuild_code_full_pass_upgrades_from_queued_marker()]] - code - graphify/tests/test_watch.py
- [[test_rebuild_code_full_rebuild_drains_late_arrivals()]] - code - graphify/tests/test_watch.py
- [[test_rebuild_code_holder_runs_queued_full_pass()]] - code - graphify/tests/test_watch.py
- [[test_rebuild_code_merges_pending_on_acquire()]] - code - graphify/tests/test_watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_171
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_Community 6]]
- 9 edges to [[_COMMUNITY_Community 34]]
- 6 edges to [[_COMMUNITY_Community 18]]

## Top bridge nodes
- [[_queue_pending()]] - degree 12, connects to 3 communities
- [[_drain_pending()]] - degree 7, connects to 3 communities
- [[_queue_pending_full()]] - degree 6, connects to 2 communities
- [[test_rebuild_code_full_corpus_skips_pending_queue()]] - degree 6, connects to 2 communities
- [[test_rebuild_code_full_pass_upgrades_from_queued_marker()]] - degree 6, connects to 2 communities