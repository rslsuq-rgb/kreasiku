---
type: community
cohesion: 0.10
members: 30
---

# Community 170

**Cohesion:** 0.10 - loosely connected
**Members:** 30 nodes

## Members
- [[A corpus with a PREFERRED node (2 useful), a TENTATIVE node (1 useful), a…]] - rationale - graphify/tests/test_reflect.py
- [[A label shared by 1 node id (ambiguous) or absent from the graph (unresolved)…]] - rationale - graphify/tests/test_reflect.py
- [[A node cited by 5 useful results keeps exactly the 5 most-recent in provenance…]] - rationale - graphify/tests/test_reflect.py
- [[Build a lookup from node id AND node label - community label, or None if the…]] - rationale - graphify/graphify/reflect.py
- [[In a flat layout (graph.json at the project root), the resolver must use the…]] - rationale - graphify/tests/test_reflect.py
- [[Path_49]] - code
- [[Regression with a RELATIVE source_file and graph.json under graphify-out, a…]] - rationale - graphify/tests/test_reflect.py
- [[Scan ``memory_dir``, write the lessons doc to ``out_path``, return (path, agg).…]] - rationale - graphify/graphify/reflect.py
- [[The set of node ids AND labels in the current graph, or None if unavailable.…]] - rationale - graphify/graphify/reflect.py
- [[Two reflect runs on identical input + fixed `now` produce a byte-identical…]] - rationale - graphify/tests/test_reflect.py
- [[When a committed .graphify_root marker records the project root (e.g. a…]] - rationale - graphify/tests/test_reflect.py
- [[Write a memory doc with a controlled date so ordering is deterministic to…]] - rationale - graphify/tests/test_reflect.py
- [[Write a minimal graph.json under ``out`` with the given node dicts.]] - rationale - graphify/tests/test_reflect.py
- [[_load_known_nodes()]] - code - graphify/graphify/reflect.py
- [[_load_node_community()]] - code - graphify/graphify/reflect.py
- [[_overlay_corpus()]] - code - graphify/tests/test_reflect.py
- [[_overlay_graph()]] - code - graphify/tests/test_reflect.py
- [[_write_raw_doc()]] - code - graphify/tests/test_reflect.py
- [[load_learning_overlay recomputes the file fingerprint unchanged source =…]] - rationale - graphify/tests/test_reflect.py
- [[reflect with a graph writes .graphify_learning.json next to graph.json with the…]] - rationale - graphify/tests/test_reflect.py
- [[reflect()]] - code - graphify/graphify/reflect.py
- [[test_ambiguous_or_unresolved_citation_is_skipped()]] - code - graphify/tests/test_reflect.py
- [[test_flat_layout_does_not_match_same_named_file_one_dir_up()]] - code - graphify/tests/test_reflect.py
- [[test_loader_marks_entry_stale_when_source_file_changes()]] - code - graphify/tests/test_reflect.py
- [[test_provenance_capped_to_five_most_recent()]] - code - graphify/tests/test_reflect.py
- [[test_reflect_writes_lessons_file()]] - code - graphify/tests/test_reflect.py
- [[test_relative_source_file_not_spuriously_stale_in_graphify_out_layout()]] - code - graphify/tests/test_reflect.py
- [[test_relative_source_file_resolved_via_graphify_root_marker()]] - code - graphify/tests/test_reflect.py
- [[test_sidecar_is_byte_identical_across_runs()]] - code - graphify/tests/test_reflect.py
- [[test_sidecar_write_classifies_and_keys_by_canonical_id()]] - code - graphify/tests/test_reflect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_170
SORT file.name ASC
```

## Connections to other communities
- 16 edges to [[_COMMUNITY_Community 87]]
- 13 edges to [[_COMMUNITY_Community 119]]
- 7 edges to [[_COMMUNITY_Community 115]]
- 3 edges to [[_COMMUNITY_Community 531]]
- 2 edges to [[_COMMUNITY_Community 255]]
- 2 edges to [[_COMMUNITY_Community 17]]
- 1 edge to [[_COMMUNITY_Community 290]]
- 1 edge to [[_COMMUNITY_Community 47]]

## Top bridge nodes
- [[reflect()]] - degree 24, connects to 5 communities
- [[test_flat_layout_does_not_match_same_named_file_one_dir_up()]] - degree 6, connects to 3 communities
- [[_write_raw_doc()]] - degree 14, connects to 2 communities
- [[_overlay_graph()]] - degree 11, connects to 2 communities
- [[test_ambiguous_or_unresolved_citation_is_skipped()]] - degree 6, connects to 2 communities