---
type: community
cohesion: 0.06
members: 52
---

# Community 84

**Cohesion:** 0.06 - loosely connected
**Members:** 52 nodes

## Members
- [[2406 is language-agnostic the shared DIRECT cross-file call pass carries it.]] - rationale - graphify/tests/test_watch.py
- [[2406 keeps the incremental contract only changed files are extracted.]] - rationale - graphify/tests/test_watch.py
- [[2406 a changed target's persisted symbols must never win over fresh ones.]] - rationale - graphify/tests/test_watch.py
- [[2406 a deleted file cannot remain a resolver target.]] - rationale - graphify/tests/test_watch.py
- [[2406 fullincremental parity for edges sourced by the changed file.]] - rationale - graphify/tests/test_watch.py
- [[2406 no import evidence = the persisted target must not be resolved.]] - rationale - graphify/tests/test_watch.py
- [[2437 a changed caller keeps its `service.ping()` edge into an unchanged file.]] - rationale - graphify/tests/test_watch.py
- [[2437 a deleted callee file must not resurrect through the context edges.]] - rationale - graphify/tests/test_watch.py
- [[2437 removing the member call from the caller must remove the edge — the fix…]] - rationale - graphify/tests/test_watch.py
- [[2437 repeated incremental rebuilds neither duplicate the member-call edge nor…]] - rationale - graphify/tests/test_watch.py
- [[2438 degradation contract a graph written before the `_callable` markers…]] - rationale - graphify/tests/test_watch.py
- [[2438 keeps the 15662137 guard a same-named DATA symbol in an unchanged…]] - rationale - graphify/tests/test_watch.py
- [[2438 a deleted callback target must not resurrect through the context nodes.]] - rationale - graphify/tests/test_watch.py
- [[2438 repeated incremental rebuilds neither duplicate the indirect_call edge…]] - rationale - graphify/tests/test_watch.py
- [[2438 the persisted `_callable` marker keeps `pool.submit(handler)` resolving.]] - rationale - graphify/tests/test_watch.py
- [[(source_id, target_id) of every `calls` edge.]] - rationale - graphify/tests/test_watch.py
- [[(source_id, target_id) of every `indirect_call` edge.]] - rationale - graphify/tests/test_watch.py
- [[A changed generic caller retains its call into an unchanged impl block.]] - rationale - graphify/tests/test_watch.py
- [[A collapsed same-file declaration count survives context projection.]] - rationale - graphify/tests/test_watch.py
- [[A pre-marker graph does not guess; re-extraction restores the edge.]] - rationale - graphify/tests/test_watch.py
- [[Build a two-file TS corpus and do the initial full rebuild.]] - rationale - graphify/tests/test_watch.py
- [[Build the indirect-call corpus (py callback into b.py) and full-rebuild it.]] - rationale - graphify/tests/test_watch.py
- [[Build the member-call corpus (TS receiver-typed call) and full-rebuild it.]] - rationale - graphify/tests/test_watch.py
- [[_2406_calls()]] - code - graphify/tests/test_watch.py
- [[_2406_graph()]] - code - graphify/tests/test_watch.py
- [[_2406_nid()]] - code - graphify/tests/test_watch.py
- [[_2406_seed()]] - code - graphify/tests/test_watch.py
- [[_2437_seed()]] - code - graphify/tests/test_watch.py
- [[_2438_indirects()]] - code - graphify/tests/test_watch.py
- [[_2438_seed()]] - code - graphify/tests/test_watch.py
- [[_rust_generic_call()]] - code - graphify/tests/test_watch.py
- [[_rust_generic_seed()]] - code - graphify/tests/test_watch.py
- [[has_call()_2]] - code - graphify/tests/test_watch.py
- [[spy()]] - code - graphify/tests/test_watch.py
- [[test_incremental_indirect_call_parity_and_idempotency()]] - code - graphify/tests/test_watch.py
- [[test_incremental_member_call_parity_and_idempotency()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_callable_guard_excludes_unchanged_data_symbol()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_context_excludes_deleted_target()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_does_not_reparse_unchanged_targets()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_drops_call_when_import_is_removed()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_evicts_indirect_call_when_target_deleted()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_evicts_member_call_when_target_deleted()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_evicts_removed_member_call()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_legacy_graph_without_callable_markers()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_matches_full_rebuild_and_does_not_duplicate()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_preserves_indirect_call_to_unchanged_target()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_preserves_member_call_to_unchanged_target()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_preserves_python_call_to_unchanged_target()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rebuild_uses_fresh_nodes_when_target_also_changed()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rust_generic_self_call_keeps_module_ambiguity()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rust_generic_self_call_legacy_marker_fails_closed()]] - code - graphify/tests/test_watch.py
- [[test_incremental_rust_generic_self_call_uses_unchanged_impl_context()]] - code - graphify/tests/test_watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_84
SORT file.name ASC
```

## Connections to other communities
- 28 edges to [[_COMMUNITY_Community 6]]
- 22 edges to [[_COMMUNITY_Community 34]]

## Top bridge nodes
- [[_2406_seed()]] - degree 8, connects to 2 communities
- [[_2438_seed()]] - degree 8, connects to 2 communities
- [[_2437_seed()]] - degree 7, connects to 2 communities
- [[test_incremental_rebuild_context_excludes_deleted_target()]] - degree 7, connects to 2 communities
- [[test_incremental_rebuild_drops_call_when_import_is_removed()]] - degree 7, connects to 2 communities