---
type: community
cohesion: 0.17
members: 24
---

# Community 235

**Cohesion:** 0.17 - loosely connected
**Members:** 24 nodes

## Members
- [[A stub shared by two files must survive when only one referrer is pruned…]] - rationale - graphify/tests/test_prune_sweeps_orphans.py
- [[One file with a real symbol plus an imported external symbol that has no…]] - rationale - graphify/tests/test_prune_sweeps_orphans.py
- [[Only source-less nodes are swept. A node with a real source_file is prunable…]] - rationale - graphify/tests/test_prune_sweeps_orphans.py
- [[Only source-less orphans are the bug. `mod_b_keep` is also isolated after this…]] - rationale - graphify/tests/test_prune_sweeps_orphans.py
- [[Pruning a source file must not leave its external-import nodes behind.…]] - rationale - graphify/tests/test_prune_sweeps_orphans.py
- [[Scoped to what this prune orphans. A source-less node that was already isolated…]] - rationale - graphify/tests/test_prune_sweeps_orphans.py
- [[The 479 shrink guard raises on unexplained node loss. Swept orphans are…]] - rationale - graphify/tests/test_prune_sweeps_orphans.py
- [[The sweep lives inside the prune branch; a plain merge must not touch isolated…]] - rationale - graphify/tests/test_prune_sweeps_orphans.py
- [[The sweep must key on being isolated, not on lacking a source_file an external…]] - rationale - graphify/tests/test_prune_sweeps_orphans.py
- [[_corpus_graph()]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[_extraction()_1]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[_prune()]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[_write_graph()_6]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[test_a_node_isolated_before_the_prune_survives()]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[test_a_prune_that_matches_nothing_sweeps_nothing()]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[test_a_shared_external_node_survives_while_still_referenced()]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[test_a_stub_referenced_by_a_surviving_file_is_not_swept()]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[test_an_isolated_node_that_has_a_source_file_survives()]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[test_external_import_node_goes_with_its_file()]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[test_no_sourceless_orphans_remain_after_a_prune()]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[test_nothing_is_swept_when_no_prune_is_requested()]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[test_prune_sweeps_orphans.py]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[test_pruning_every_file_leaves_an_empty_graph()]] - code - graphify/tests/test_prune_sweeps_orphans.py
- [[test_sweeping_an_orphan_does_not_trip_the_shrink_guard()]] - code - graphify/tests/test_prune_sweeps_orphans.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_235
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 9]]
- 3 edges to [[_COMMUNITY_Community 41]]
- 2 edges to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 7]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 103]]
- 1 edge to [[_COMMUNITY_Community 53]]

## Top bridge nodes
- [[test_prune_sweeps_orphans.py]] - degree 23, connects to 8 communities
- [[_prune()]] - degree 13, connects to 1 community
- [[_corpus_graph()]] - degree 10, connects to 1 community
- [[test_nothing_is_swept_when_no_prune_is_requested()]] - degree 6, connects to 1 community
- [[test_a_node_isolated_before_the_prune_survives()]] - degree 5, connects to 1 community