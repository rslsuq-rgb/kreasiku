---
type: community
cohesion: 0.14
members: 14
---

# Community 395

**Cohesion:** 0.14 - loosely connected
**Members:** 14 nodes

## Members
- [[Guards determinism of the new pass reversed input must give the same result.…]] - rationale - graphify/tests/test_dedup.py
- [[Once bx.md leaves the corpus there is no collision, but ax.md must keep `a_x`…]] - rationale - graphify/tests/test_dedup.py
- [[Round-tripping a built graph through build() again must not keep renaming the…]] - rationale - graphify/tests/test_dedup.py
- [[Two docs whose semantic ids dropped the directory both mint `x``x_intro`.]] - rationale - graphify/tests/test_dedup.py
- [[_path_dropped_input()]] - code - graphify/tests/test_dedup.py
- [[ax.md and bx.md both mint `x`; neither may be dropped, and each file's edge…]] - rationale - graphify/tests/test_dedup.py
- [[c.md points at the bare `x`. It cannot be attributed to ax.md or bx.md, so it…]] - rationale - graphify/tests/test_dedup.py
- [[c.md's reference to the bare `x` cannot be attributed, so build() ends up with…]] - rationale - graphify/tests/test_dedup.py
- [[test_path_dropped_doc_id_keeps_both_files()]] - code - graphify/tests/test_dedup.py
- [[test_path_dropped_foreign_reference_edge_is_dropped_by_build()]] - code - graphify/tests/test_dedup.py
- [[test_path_dropped_foreign_reference_is_not_guessed()]] - code - graphify/tests/test_dedup.py
- [[test_path_dropped_id_stays_qualified_after_collision_disappears()]] - code - graphify/tests/test_dedup.py
- [[test_path_dropped_rebuild_is_idempotent()]] - code - graphify/tests/test_dedup.py
- [[test_path_dropped_rename_is_order_independent()]] - code - graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_395
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_Community 15]]
- 3 edges to [[_COMMUNITY_Community 48]]

## Top bridge nodes
- [[test_path_dropped_foreign_reference_edge_is_dropped_by_build()]] - degree 4, connects to 2 communities
- [[test_path_dropped_id_stays_qualified_after_collision_disappears()]] - degree 4, connects to 2 communities
- [[test_path_dropped_rebuild_is_idempotent()]] - degree 4, connects to 2 communities
- [[_path_dropped_input()]] - degree 8, connects to 1 community
- [[test_path_dropped_doc_id_keeps_both_files()]] - degree 4, connects to 1 community