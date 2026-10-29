---
type: community
cohesion: 0.40
members: 5
---

# Community 599

**Cohesion:** 0.40 - moderately connected
**Members:** 5 nodes

## Members
- [[The three-file case fed in reverse order keeps the same nodes (4281).]] - rationale - graphify/tests/test_dedup.py
- [[_three_bare_protocols()]] - code - graphify/tests/test_dedup.py
- [[protocol.md exists and the other two files each have only a bare `protocol`.…]] - rationale - graphify/tests/test_dedup.py
- [[test_bare_ids_in_three_files_keep_one_node_per_file()]] - code - graphify/tests/test_dedup.py
- [[test_top_level_collision_result_does_not_depend_on_input_order()]] - code - graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_599
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Community 15]]

## Top bridge nodes
- [[test_bare_ids_in_three_files_keep_one_node_per_file()]] - degree 4, connects to 1 community
- [[test_top_level_collision_result_does_not_depend_on_input_order()]] - degree 4, connects to 1 community
- [[_three_bare_protocols()]] - degree 3, connects to 1 community