---
type: community
cohesion: 0.04
members: 76
---

# Community 53

**Cohesion:** 0.04 - loosely connected
**Members:** 76 nodes

## Members
- [[2618 an absolute source_file is left alone whichever OS wrote it.]] - rationale - graphify/tests/test_build.py
- [[Add a leaf node for an external import target so the edge is not dangling. The…]] - rationale - graphify/graphify/build.py
- [[Anonymous Rust constants must not replace their owning file node.]] - rationale - graphify/tests/test_rust_anonymous_const.py
- [[Canonical dedup key — Unicode-aware, preserves CJKword characters.]] - rationale - graphify/graphify/build.py
- [[Coerce a hyperedge member list to hashable scalar ids, deduped in order.…]] - rationale - graphify/graphify/build.py
- [[Derive the scan root from absolute prune paths that matched nothing (2446).…]] - rationale - graphify/graphify/build.py
- [[End-to-end a freshly extracted graph containing a .mcp.json — nested or at the…]] - rationale - graphify/tests/test_build.py
- [[File-node labels are disambiguated when basenames collide (2032). In…]] - rationale - graphify/tests/test_file_label_disambiguation.py
- [[Fold the ``type_only`` marker of two import edges that collapse to one.…]] - rationale - graphify/graphify/build.py
- [[Full pipeline two entry-point index.ts files get distinguishable labels and…]] - rationale - graphify/tests/test_file_label_disambiguation.py
- [[Given (key, label, source_file) triples, return {key new_label} for file nodes…]] - rationale - graphify/graphify/build.py
- [[Hyperedges must survive the dual-slot persistence round-trip (2485). to_json…]] - rationale - graphify/tests/test_hyperedge_roundtrip.py
- [[MCP ingest stamps every node with L1 (JSON has no line info), so global ids…]] - rationale - graphify/tests/test_build.py
- [[Merge nodes that share a normalised label, rewriting edge references. Prefers…]] - rationale - graphify/graphify/build.py
- [[No imports at all several files inherit a `Settings` defined exactly once. The…]] - rationale - graphify/tests/test_python_reexport_type_binding.py
- [[Path_215]] - code
- [[Path_216]] - code
- [[Pre-migration stem forms a semantic fragment may have used for ``rel``. Ordered…]] - rationale - graphify/graphify/build.py
- [[Regression lock-in for 4262 a cross-module reference to a type defined…]] - rationale - graphify/tests/test_python_reexport_type_binding.py
- [[Relabel colliding-basename file nodes on a graph (2032). Idsedges are never…]] - rationale - graphify/graphify/build.py
- [[Relabel colliding-basename file nodes on a raw node-dict list, in place…]] - rationale - graphify/graphify/build.py
- [[Return a str for a numeric id, else the value unchanged. ``bool`` is excluded…]] - rationale - graphify/graphify/build.py
- [[Shortest trailing path suffix (basename + k parent dirs) of sf that is unique…]] - rationale - graphify/graphify/build.py
- [[The exemption is narrow file-derived MCP kinds stay under detection, and a…]] - rationale - graphify/tests/test_build.py
- [[The extract --no-cluster path writes the merged node dicts directly (bypassing…]] - rationale - graphify/tests/test_file_label_disambiguation.py
- [[The legacy-ID probe derives a stem from source_file, so it must skip an…]] - rationale - graphify/tests/test_build.py
- [[The prune-root recovery skips any prune source it thinks is relative. With a…]] - rationale - graphify/tests/test_build.py
- [[The read-only-consumer nudge (queryserve) flags a pre-1504 graph and leaves a…]] - rationale - graphify/tests/test_build.py
- [[Whether label is a file node's label for source_file — the bare basename,…]] - rationale - graphify/graphify/build.py
- [[Whether ``node``'s ID is global by construction rather than file-derived.]] - rationale - graphify/graphify/build.py
- [[Whether a loaded graph still uses pre-1504 node IDs (parent-dir  filename…]] - rationale - graphify/graphify/build.py
- [[_coerce_hyperedge_member_refs()]] - code - graphify/graphify/build.py
- [[_coerce_id()]] - code - graphify/graphify/build.py
- [[_derive_prune_root()]] - code - graphify/graphify/build.py
- [[_disambiguate_file_node_labels()]] - code - graphify/graphify/build.py
- [[_edge_set()_1]] - code - graphify/tests/test_python_reexport_type_binding.py
- [[_execution_wins()]] - code - graphify/graphify/build.py
- [[_file_label_reassignments()]] - code - graphify/graphify/build.py
- [[_file_node()_2]] - code - graphify/tests/test_file_label_disambiguation.py
- [[_has_global_id()]] - code - graphify/graphify/build.py
- [[_is_file_node_label()]] - code - graphify/graphify/build.py
- [[_mint_external_stub()]] - code - graphify/graphify/build.py
- [[_node()_12]] - code - graphify/tests/test_hyperedge_roundtrip.py
- [[_norm_label()]] - code - graphify/graphify/build.py
- [[_old_file_stems()]] - code - graphify/graphify/build.py
- [[_roundtrip()]] - code - graphify/tests/test_hyperedge_roundtrip.py
- [[_settings_stub_count()]] - code - graphify/tests/test_python_reexport_type_binding.py
- [[_shortest_unique_suffix()]] - code - graphify/graphify/build.py
- [[deduplicate_by_label()]] - code - graphify/graphify/build.py
- [[disambiguate_file_labels_in_nodes()]] - code - graphify/graphify/build.py
- [[graph_has_legacy_ids()]] - code - graphify/graphify/build.py
- [[graphifybuild.py]] - code - graphify/graphify/build.py
- [[parametrize_93]] - code
- [[test_anonymous_constants_preserve_file_identity()]] - code - graphify/tests/test_rust_anonymous_const.py
- [[test_colliding_file_labels_are_qualified_uniques_left_bare()]] - code - graphify/tests/test_file_label_disambiguation.py
- [[test_derive_prune_root_recovers_root_from_posix_absolute_prune_sources()]] - code - graphify/tests/test_build.py
- [[test_disambiguate_raw_node_list_for_no_cluster_path()]] - code - graphify/tests/test_file_label_disambiguation.py
- [[test_disambiguation_is_idempotent()]] - code - graphify/tests/test_file_label_disambiguation.py
- [[test_end_to_end_build_and_lookup()]] - code - graphify/tests/test_file_label_disambiguation.py
- [[test_file_label_disambiguation.py]] - code - graphify/tests/test_file_label_disambiguation.py
- [[test_fresh_mcp_graph_is_not_flagged_legacy()]] - code - graphify/tests/test_build.py
- [[test_full_wipeout_emits_one_aggregate_warning()]] - code - graphify/tests/test_hyperedge_roundtrip.py
- [[test_graph_has_legacy_ids_detects_old_scheme()]] - code - graphify/tests/test_build.py
- [[test_graph_has_legacy_ids_ignores_global_mcp_ids()]] - code - graphify/tests/test_build.py
- [[test_graph_has_legacy_ids_skips_absolute_from_either_platform()]] - code - graphify/tests/test_build.py
- [[test_graph_has_legacy_ids_still_checks_file_scoped_mcp_nodes()]] - code - graphify/tests/test_build.py
- [[test_hyperedge_roundtrip.py]] - code - graphify/tests/test_hyperedge_roundtrip.py
- [[test_is_file_node_label_and_suffix_helpers()]] - code - graphify/tests/test_file_label_disambiguation.py
- [[test_nested_only_slot_is_read_and_reexported_to_both_slots()]] - code - graphify/tests/test_hyperedge_roundtrip.py
- [[test_python_reexport_type_binding.py]] - code - graphify/tests/test_python_reexport_type_binding.py
- [[test_reexported_type_reference_binds_to_single_located_def()]] - code - graphify/tests/test_python_reexport_type_binding.py
- [[test_rust_anonymous_const.py]] - code - graphify/tests/test_rust_anonymous_const.py
- [[test_semantic_rekey_skips_absolute_from_either_platform()]] - code - graphify/tests/test_build.py
- [[test_three_way_collision_grows_suffix_until_unique()]] - code - graphify/tests/test_file_label_disambiguation.py
- [[test_top_level_slot_roundtrips_unchanged()]] - code - graphify/tests/test_hyperedge_roundtrip.py
- [[test_unresolved_type_references_coalesce_to_unique_def()]] - code - graphify/tests/test_python_reexport_type_binding.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_53
SORT file.name ASC
```

## Connections to other communities
- 31 edges to [[_COMMUNITY_Community 9]]
- 11 edges to [[_COMMUNITY_Community 107]]
- 10 edges to [[_COMMUNITY_Community 41]]
- 9 edges to [[_COMMUNITY_Community 17]]
- 9 edges to [[_COMMUNITY_Community 45]]
- 8 edges to [[_COMMUNITY_Community 14]]
- 8 edges to [[_COMMUNITY_Community 3]]
- 6 edges to [[_COMMUNITY_Community 48]]
- 6 edges to [[_COMMUNITY_Community 23]]
- 5 edges to [[_COMMUNITY_Community 176]]
- 5 edges to [[_COMMUNITY_Community 18]]
- 5 edges to [[_COMMUNITY_Community 7]]
- 5 edges to [[_COMMUNITY_Community 115]]
- 4 edges to [[_COMMUNITY_Community 146]]
- 4 edges to [[_COMMUNITY_Community 155]]
- 4 edges to [[_COMMUNITY_Community 352]]
- 3 edges to [[_COMMUNITY_Community 277]]
- 3 edges to [[_COMMUNITY_Community 298]]
- 3 edges to [[_COMMUNITY_Community 47]]
- 3 edges to [[_COMMUNITY_Community 524]]
- 3 edges to [[_COMMUNITY_Community 11]]
- 3 edges to [[_COMMUNITY_Community 1]]
- 3 edges to [[_COMMUNITY_Community 19]]
- 2 edges to [[_COMMUNITY_Community 132]]
- 2 edges to [[_COMMUNITY_Community 100]]
- 2 edges to [[_COMMUNITY_Community 12]]
- 2 edges to [[_COMMUNITY_Community 215]]
- 2 edges to [[_COMMUNITY_Community 253]]
- 2 edges to [[_COMMUNITY_Community 57]]
- 2 edges to [[_COMMUNITY_Community 73]]
- 2 edges to [[_COMMUNITY_Community 46]]
- 2 edges to [[_COMMUNITY_Community 49]]
- 1 edge to [[_COMMUNITY_Community 65]]
- 1 edge to [[_COMMUNITY_Community 15]]
- 1 edge to [[_COMMUNITY_Community 158]]
- 1 edge to [[_COMMUNITY_Community 295]]
- 1 edge to [[_COMMUNITY_Community 34]]
- 1 edge to [[_COMMUNITY_Community 72]]
- 1 edge to [[_COMMUNITY_Community 58]]
- 1 edge to [[_COMMUNITY_Community 123]]
- 1 edge to [[_COMMUNITY_Community 124]]
- 1 edge to [[_COMMUNITY_Community 135]]
- 1 edge to [[_COMMUNITY_Community 148]]
- 1 edge to [[_COMMUNITY_Community 168]]
- 1 edge to [[_COMMUNITY_Community 172]]
- 1 edge to [[_COMMUNITY_Community 174]]
- 1 edge to [[_COMMUNITY_Community 184]]
- 1 edge to [[_COMMUNITY_Community 2]]
- 1 edge to [[_COMMUNITY_Community 208]]
- 1 edge to [[_COMMUNITY_Community 209]]
- 1 edge to [[_COMMUNITY_Community 213]]
- 1 edge to [[_COMMUNITY_Community 227]]
- 1 edge to [[_COMMUNITY_Community 231]]
- 1 edge to [[_COMMUNITY_Community 235]]
- 1 edge to [[_COMMUNITY_Community 26]]
- 1 edge to [[_COMMUNITY_Community 279]]
- 1 edge to [[_COMMUNITY_Community 281]]
- 1 edge to [[_COMMUNITY_Community 285]]
- 1 edge to [[_COMMUNITY_Community 287]]
- 1 edge to [[_COMMUNITY_Community 30]]
- 1 edge to [[_COMMUNITY_Community 315]]
- 1 edge to [[_COMMUNITY_Community 319]]
- 1 edge to [[_COMMUNITY_Community 347]]
- 1 edge to [[_COMMUNITY_Community 349]]
- 1 edge to [[_COMMUNITY_Community 427]]
- 1 edge to [[_COMMUNITY_Community 430]]
- 1 edge to [[_COMMUNITY_Community 506]]
- 1 edge to [[_COMMUNITY_Community 51]]
- 1 edge to [[_COMMUNITY_Community 514]]
- 1 edge to [[_COMMUNITY_Community 515]]
- 1 edge to [[_COMMUNITY_Community 62]]
- 1 edge to [[_COMMUNITY_Community 561]]

## Top bridge nodes
- [[graphifybuild.py]] - degree 136, connects to 65 communities
- [[graph_has_legacy_ids()]] - degree 20, connects to 8 communities
- [[_is_file_node_label()]] - degree 16, connects to 7 communities
- [[Path_215]] - degree 8, connects to 5 communities
- [[test_file_label_disambiguation.py]] - degree 17, connects to 4 communities