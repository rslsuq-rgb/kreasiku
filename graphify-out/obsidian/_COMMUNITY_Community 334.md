---
type: community
cohesion: 0.21
members: 17
---

# Community 334

**Cohesion:** 0.21 - loosely connected
**Members:** 17 nodes

## Members
- [[An incremental rebuild must not reuse a saved label for a community whose…]] - rationale - graphify/tests/test_watch.py
- [[Deterministic, LLM-free community labels — `label_communities_by_hub`. Names…]] - rationale - graphify/tests/test_community_hub_labels.py
- [[Deterministic, LLM-free community labels name each community after its…]] - rationale - graphify/graphify/cluster.py
- [[Per-community membership fingerprints ``{cid sha256(sorted member ids)}``.…]] - rationale - graphify/graphify/cluster.py
- [[_g()_1]] - code - graphify/tests/test_community_hub_labels.py
- [[community_member_sigs()]] - code - graphify/graphify/cluster.py
- [[label_communities_by_hub()]] - code - graphify/graphify/cluster.py
- [[test_absent_members_fall_back_to_placeholder()]] - code - graphify/tests/test_community_hub_labels.py
- [[test_community_hub_labels.py]] - code - graphify/tests/test_community_hub_labels.py
- [[test_community_member_sigs_are_deterministic_and_order_independent()]] - code - graphify/tests/test_community_hub_labels.py
- [[test_community_member_sigs_change_when_membership_changes()]] - code - graphify/tests/test_community_hub_labels.py
- [[test_labels_by_highest_degree_hub()]] - code - graphify/tests/test_community_hub_labels.py
- [[test_multiple_communities_each_get_their_own_hub()]] - code - graphify/tests/test_community_hub_labels.py
- [[test_node_without_label_attr_uses_id()]] - code - graphify/tests/test_community_hub_labels.py
- [[test_not_a_placeholder_for_a_real_community()]] - code - graphify/tests/test_community_hub_labels.py
- [[test_rebuild_code_drops_labels_whose_community_changed()]] - code - graphify/tests/test_watch.py
- [[test_tie_breaks_deterministically_by_node_id()]] - code - graphify/tests/test_community_hub_labels.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_334
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_Community 17]]
- 4 edges to [[_COMMUNITY_Community 62]]
- 3 edges to [[_COMMUNITY_Community 34]]
- 3 edges to [[_COMMUNITY_Community 23]]
- 2 edges to [[_COMMUNITY_Community 18]]
- 2 edges to [[_COMMUNITY_Community 6]]
- 1 edge to [[_COMMUNITY_Community 453]]
- 1 edge to [[_COMMUNITY_Community 80]]

## Top bridge nodes
- [[community_member_sigs()]] - degree 13, connects to 7 communities
- [[label_communities_by_hub()]] - degree 14, connects to 4 communities
- [[test_community_hub_labels.py]] - degree 14, connects to 2 communities
- [[test_rebuild_code_drops_labels_whose_community_changed()]] - degree 4, connects to 2 communities
- [[_g()_1]] - degree 7, connects to 1 community