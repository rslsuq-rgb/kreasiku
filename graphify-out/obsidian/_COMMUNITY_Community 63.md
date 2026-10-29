---
type: community
cohesion: 0.05
members: 63
---

# Community 63

**Cohesion:** 0.05 - loosely connected
**Members:** 63 nodes

## Members
- [[2532 `plans_done` sorts before `plansin-progress` lexically ('_'  'i'), so…]] - rationale - graphify/tests/test_dedup.py
- [[0 for activein-progress paths, 2 for archiveddone paths, 1 otherwise. Judged…]] - rationale - graphify/graphify/dedup.py
- [[A file's own node, a stamped `page``heading` node, and any node missing an id…]] - rationale - graphify/tests/test_dedup.py
- [[A file-level semantic node whose id is exactly the slugified path (no `_entity`…]] - rationale - graphify/tests/test_dedup.py
- [[A total order for choosing the survivor of an ID collision, independent of the…]] - rationale - graphify/graphify/dedup.py
- [[Entity deduplication pipeline for graphify knowledge graphs. Pipeline exact…]] - rationale - graphify/graphify/dedup.py
- [[Fill the survivor's absentNone attributes from a same-source duplicate,…]] - rationale - graphify/graphify/dedup.py
- [[Keep ``x.py`` and ``x.html`` apart when both derive the same ID (4281). The ID…]] - rationale - graphify/graphify/dedup.py
- [[Keep marked cross-document reference stubs distinct (4738). Semantic…]] - rationale - graphify/graphify/dedup.py
- [[Negative control an ordinary ASCII path's reconstructed prefixes must be…]] - rationale - graphify/tests/test_dedup.py
- [[Path_230]] - code
- [[Path-qualify semantic ids that dropped the directory, per file (4281).…]] - rationale - graphify/graphify/dedup.py
- [[Report an ID collision in proportion to what dropping the loser actually costs.…]] - rationale - graphify/graphify/dedup.py
- [[Root-relative files that have a node spelled with their own full stem (4281).…]] - rationale - graphify/graphify/dedup.py
- [[The ID prefixes a node extracted from ``source_file`` may legitimately mint. An…]] - rationale - graphify/graphify/dedup.py
- [[The definer flag outranks the lifecycle penalty a node that owns its ID…]] - rationale - graphify/tests/test_dedup.py
- [[The documented limit of the structural half (296) `node_kind` is what marks a…]] - rationale - graphify/tests/test_dedup.py
- [[The extension-stripped, slugified full-path stem a file's own IDs start with.]] - rationale - graphify/graphify/dedup.py
- [[The root-relative form of ``source_file`` used for collision ranking. With a…]] - rationale - graphify/graphify/dedup.py
- [[True for AST-extracted code symbols. Code-node identity is the node ID (which…]] - rationale - graphify/graphify/dedup.py
- [[True when exact-ID records came from the same source file. Exact IDs can also…]] - rationale - graphify/graphify/dedup.py
- [[True when the node reads as an entity found inside its file, rather than as the…]] - rationale - graphify/graphify/dedup.py
- [[True when the node's own source_file is the file its ID encodes. A doc that…]] - rationale - graphify/graphify/dedup.py
- [[Whether semantic extraction marked a node as a cross-document stub.]] - rationale - graphify/graphify/dedup.py
- [[_collision_rank()]] - code - graphify/graphify/dedup.py
- [[_defines_id()]] - code - graphify/graphify/dedup.py
- [[_disambiguate_defining_collisions()]] - code - graphify/graphify/dedup.py
- [[_extension_qualified_id()]] - code - graphify/graphify/dedup.py
- [[_full_stem()]] - code - graphify/graphify/dedup.py
- [[_id_prefixes()]] - code - graphify/graphify/dedup.py
- [[_is_code()]] - code - graphify/graphify/dedup.py
- [[_is_reference_stub()]] - code - graphify/graphify/dedup.py
- [[_lifecycle_penalty()]] - code - graphify/graphify/dedup.py
- [[_mentions()]] - code - graphify/graphify/dedup.py
- [[_merge_missing_attributes()]] - code - graphify/graphify/dedup.py
- [[_namespace_reference_stub_collisions()]] - code - graphify/graphify/dedup.py
- [[_own_page_files()]] - code - graphify/graphify/dedup.py
- [[_path_qualify_dropped_collisions()]] - code - graphify/graphify/dedup.py
- [[_rank_path()]] - code - graphify/graphify/dedup.py
- [[_reads_as_file_entity()]] - code - graphify/graphify/dedup.py
- [[_report_id_collision()]] - code - graphify/graphify/dedup.py
- [[_same_source_entity()]] - code - graphify/graphify/dedup.py
- [[_slice_references()]] - code - graphify/graphify/dedup.py
- [[``(id, file)`` of nodes whose id is a SHORTER path slice of a file that has its…]] - rationale - graphify/graphify/dedup.py
- [[``(id, root-relative file)`` of nodes read as a MENTION of a document (4281).…]] - rationale - graphify/graphify/dedup.py
- [[``x.html``'s own spelling of an ID it shares with ``x.py`` (4281). Only…]] - rationale - graphify/graphify/dedup.py
- [[dedup.py]] - code - graphify/graphify/dedup.py
- [[key()_2]] - code - graphify/graphify/dedup.py
- [[key()_3]] - code - graphify/graphify/dedup.py
- [[key()_4]] - code - graphify/graphify/dedup.py
- [[key()_5]] - code - graphify/graphify/dedup.py
- [[qualified_id()]] - code - graphify/graphify/dedup.py
- [[rapidfuzz_distance]] - concept
- [[test_archived_definer_beats_active_reference()]] - code - graphify/tests/test_dedup.py
- [[test_archived_path_ranks_below_active_despite_ascii_order()]] - code - graphify/tests/test_dedup.py
- [[test_bare_file_node_defines_its_own_id()]] - code - graphify/tests/test_dedup.py
- [[test_defines_id_helper()]] - code - graphify/tests/test_dedup.py
- [[test_defines_id_recognizes_a_non_latin_path()]] - code - graphify/tests/test_dedup.py
- [[test_id_prefixes_ascii_path_unchanged()]] - code - graphify/tests/test_dedup.py
- [[test_id_prefixes_preserves_non_latin_segments()]] - code - graphify/tests/test_dedup.py
- [[test_lifecycle_penalty_on_relative_segments()]] - code - graphify/tests/test_dedup.py
- [[test_reads_as_file_entity_helper()]] - code - graphify/tests/test_dedup.py
- [[test_reads_as_file_entity_trusts_the_node_kind_stamp_only()]] - code - graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_63
SORT file.name ASC
```

## Connections to other communities
- 30 edges to [[_COMMUNITY_Community 15]]
- 7 edges to [[_COMMUNITY_Community 196]]
- 5 edges to [[_COMMUNITY_Community 126]]
- 5 edges to [[_COMMUNITY_Community 45]]
- 4 edges to [[_COMMUNITY_Community 365]]
- 3 edges to [[_COMMUNITY_Community 107]]
- 3 edges to [[_COMMUNITY_Community 179]]
- 2 edges to [[_COMMUNITY_Community 209]]
- 2 edges to [[_COMMUNITY_Community 527]]
- 2 edges to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 20]]
- 1 edge to [[_COMMUNITY_Community 39]]
- 1 edge to [[_COMMUNITY_Community 319]]
- 1 edge to [[_COMMUNITY_Community 430]]
- 1 edge to [[_COMMUNITY_Community 176]]
- 1 edge to [[_COMMUNITY_Community 7]]
- 1 edge to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 312]]

## Top bridge nodes
- [[dedup.py]] - degree 58, connects to 18 communities
- [[_id_prefixes()]] - degree 11, connects to 2 communities
- [[_path_qualify_dropped_collisions()]] - degree 10, connects to 2 communities
- [[_report_id_collision()]] - degree 5, connects to 2 communities
- [[_collision_rank()]] - degree 10, connects to 1 community