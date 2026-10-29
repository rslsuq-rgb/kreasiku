---
type: community
cohesion: 0.13
members: 26
---

# Community 209

**Cohesion:** 0.13 - loosely connected
**Members:** 26 nodes

## Members
- [[A dedup remap built from union-find is fully flattened (path-compressed), so a…]] - rationale - graphify/tests/test_dedup_remaps_hyperedges.py
- [[Dedup must rewire hyperedge members onto survivors, not drop them. `build()`…]] - rationale - graphify/tests/test_dedup_remaps_hyperedges.py
- [[Members are tolerated as bare ids or as objects carrying one.]] - rationale - graphify/tests/test_dedup_remaps_hyperedges.py
- [[Rewire hyperedge member ids onto dedup survivors, in place. Members come in…]] - rationale - graphify/graphify/dedup.py
- [[Sub-two-member hyperedges are kept by design (build_from_json only drops the…]] - rationale - graphify/tests/test_dedup_remaps_hyperedges.py
- [[The quiet part a group of 3 became a group of 2, which can drop it below the…]] - rationale - graphify/tests/test_dedup_remaps_hyperedges.py
- [[They were the same entity, so one entry is right. The old code shrank the group…]] - rationale - graphify/tests/test_dedup_remaps_hyperedges.py
- [[Two nodes that normalise to the same label, so dedup merges them; the hyperedge…]] - rationale - graphify/tests/test_dedup_remaps_hyperedges.py
- [[_extraction()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[_members()_1]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[_node()_1]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[_remap_hyperedge_members()]] - code - graphify/graphify/dedup.py
- [[parametrize_30]] - code
- [[test_a_hyperedge_collapsing_to_one_member_is_kept()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_an_empty_remap_changes_nothing()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_an_untouched_hyperedge_is_unchanged()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_chained_collapse_lands_on_the_final_survivor()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_dedup_remaps_hyperedges.py]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_malformed_hyperedges_do_not_raise()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_member_follows_the_survivor_instead_of_vanishing()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_member_order_is_preserved()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_no_member_is_left_pointing_at_a_merged_away_id()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_object_members_keep_their_other_fields()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_object_shaped_members_are_remapped_too()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_the_group_keeps_its_size()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py
- [[test_two_members_collapsing_onto_one_survivor_dedupe()]] - code - graphify/tests/test_dedup_remaps_hyperedges.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_209
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 48]]
- 2 edges to [[_COMMUNITY_Community 63]]
- 1 edge to [[_COMMUNITY_Community 15]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 53]]

## Top bridge nodes
- [[test_dedup_remaps_hyperedges.py]] - degree 21, connects to 4 communities
- [[_remap_hyperedge_members()]] - degree 11, connects to 2 communities
- [[test_object_shaped_members_are_remapped_too()]] - degree 5, connects to 1 community
- [[test_the_group_keeps_its_size()]] - degree 5, connects to 1 community
- [[test_an_untouched_hyperedge_is_unchanged()]] - degree 4, connects to 1 community