---
type: community
cohesion: 0.24
members: 12
---

# Community 441

**Cohesion:** 0.24 - loosely connected
**Members:** 12 nodes

## Members
- [[A node whose only edge is a self-loop has no hub to join; it keeps the…]] - rationale - graphify/tests/test_cluster_exclude_hubs.py
- [[A node whose only neighbours are excluded hubs has degree 0 in the partitioned…]] - rationale - graphify/tests/test_cluster_exclude_hubs.py
- [[A self-loop is not a real neighbour a node whose other neighbours are all hubs…]] - rationale - graphify/tests/test_cluster_exclude_hubs.py
- [[Two 4-cliques, one hub H joined to all of A and to b1, and three leaves that…]] - rationale - graphify/tests/test_cluster_exclude_hubs.py
- [[_hub_with_private_leaves()]] - code - graphify/tests/test_cluster_exclude_hubs.py
- [[cluster() under exclude_hubs_percentile keeps hub-only neighbours with their…]] - rationale - graphify/tests/test_cluster_exclude_hubs.py
- [[test_cluster_exclude_hubs.py]] - code - graphify/tests/test_cluster_exclude_hubs.py
- [[test_exclude_hubs_hub_only_neighbour_with_self_loop_joins_its_hub()]] - code - graphify/tests/test_cluster_exclude_hubs.py
- [[test_exclude_hubs_keeps_hub_only_neighbours_with_their_hub()]] - code - graphify/tests/test_cluster_exclude_hubs.py
- [[test_exclude_hubs_leaves_true_isolates_alone()]] - code - graphify/tests/test_cluster_exclude_hubs.py
- [[test_exclude_hubs_self_loop_only_node_is_left_alone()]] - code - graphify/tests/test_cluster_exclude_hubs.py
- [[test_exclude_hubs_without_hubs_is_unchanged()]] - code - graphify/tests/test_cluster_exclude_hubs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_441
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 7]]
- 2 edges to [[_COMMUNITY_Community 23]]
- 1 edge to [[_COMMUNITY_Community 62]]

## Top bridge nodes
- [[test_cluster_exclude_hubs.py]] - degree 10, connects to 3 communities
- [[_hub_with_private_leaves()]] - degree 8, connects to 1 community
- [[test_exclude_hubs_hub_only_neighbour_with_self_loop_joins_its_hub()]] - degree 4, connects to 1 community
- [[test_exclude_hubs_keeps_hub_only_neighbours_with_their_hub()]] - degree 4, connects to 1 community
- [[test_exclude_hubs_self_loop_only_node_is_left_alone()]] - degree 4, connects to 1 community