---
type: community
cohesion: 0.13
members: 21
---

# Community 265

**Cohesion:** 0.13 - loosely connected
**Members:** 21 nodes

## Members
- [[4199 regression — AMBIGUOUS edges must not pull independent clusters together.…]] - rationale - graphify/tests/test_cluster_ambiguous_scale.py
- [[A non-float env value must not crash cluster(); argument default is used. 4199…]] - rationale - graphify/tests/test_cluster_ambiguous_scale.py
- [[GRAPHIFY_AMBIGUOUS_SCALE=0.25 overrides the argument. Confirms the env hook…]] - rationale - graphify/tests/test_cluster_ambiguous_scale.py
- [[Graph_12]] - code
- [[Property AMBIGUOUS edges in the partitioning input must be weighted strictly…]] - rationale - graphify/tests/test_cluster_ambiguous_scale.py
- [[Two 4-node cliques linked by several AMBIGUOUS edges — enough cross-weight that…]] - rationale - graphify/tests/test_cluster_ambiguous_scale.py
- [[_communities_of()]] - code - graphify/tests/test_cluster_ambiguous_scale.py
- [[_edge_weight_sum()]] - code - graphify/tests/test_cluster_ambiguous_scale.py
- [[_two_cliques_joined_by_ambiguous()]] - code - graphify/tests/test_cluster_ambiguous_scale.py
- [[cluster() must copy before rescaling so the original graph still carries the…]] - rationale - graphify/tests/test_cluster_ambiguous_scale.py
- [[cluster() must skip the copy when the graph has no AMBIGUOUS edges — a corpus…]] - rationale - graphify/tests/test_cluster_ambiguous_scale.py
- [[scale=0.0 drops AMBIGUOUS weight to zero in the partition input. cluster() must…]] - rationale - graphify/tests/test_cluster_ambiguous_scale.py
- [[scale=1.0 is the escape hatch (pre-4199 behavior). The copy-and- rescale step…]] - rationale - graphify/tests/test_cluster_ambiguous_scale.py
- [[test_cluster_ambiguous_scale.py]] - code - graphify/tests/test_cluster_ambiguous_scale.py
- [[test_default_scale_demotes_ambiguous_weight()]] - code - graphify/tests/test_cluster_ambiguous_scale.py
- [[test_env_override_ignored_when_malformed()]] - code - graphify/tests/test_cluster_ambiguous_scale.py
- [[test_env_override_parses_valid_float()]] - code - graphify/tests/test_cluster_ambiguous_scale.py
- [[test_graph_input_not_mutated()]] - code - graphify/tests/test_cluster_ambiguous_scale.py
- [[test_no_copy_when_no_ambiguous_edges()]] - code - graphify/tests/test_cluster_ambiguous_scale.py
- [[test_scale_one_leaves_weights_intact()]] - code - graphify/tests/test_cluster_ambiguous_scale.py
- [[test_scale_zero_still_partitions()]] - code - graphify/tests/test_cluster_ambiguous_scale.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_265
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_Community 7]]
- 3 edges to [[_COMMUNITY_Community 23]]
- 2 edges to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 62]]

## Top bridge nodes
- [[test_cluster_ambiguous_scale.py]] - degree 16, connects to 5 communities
- [[test_graph_input_not_mutated()]] - degree 5, connects to 2 communities
- [[test_no_copy_when_no_ambiguous_edges()]] - degree 4, connects to 2 communities
- [[_two_cliques_joined_by_ambiguous()]] - degree 10, connects to 1 community
- [[test_env_override_ignored_when_malformed()]] - degree 4, connects to 1 community