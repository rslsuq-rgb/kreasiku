---
type: community
cohesion: 0.06
members: 34
---

# Community 137

**Cohesion:** 0.06 - loosely connected
**Members:** 34 nodes

## Members
- [[A relationship entry whose `symbol` is a non-string is silently skipped.]] - rationale - graphify/tests/test_scip_ingest.py
- [[A relationship targeting a symbol NOT in any document creates a stub external…]] - rationale - graphify/tests/test_scip_ingest.py
- [[A symbol with `kind` as a non-string falls back to 'unknown'.]] - rationale - graphify/tests/test_scip_ingest.py
- [[A symbol with `relationships None` ingests without error and emits no edges.]] - rationale - graphify/tests/test_scip_ingest.py
- [[Convert a SCIP-style JSON document into Graphify nodes and edges. Parameter…]] - rationale - graphify/graphify/scip_ingest.py
- [[Cross-document relationship resolves to the target document's node id.]] - rationale - graphify/tests/test_scip_ingest.py
- [[Document relative_path takes precedence over the source_file parameter.]] - rationale - graphify/tests/test_scip_ingest.py
- [[Multiple symbols in a single document all become nodes.]] - rationale - graphify/tests/test_scip_ingest.py
- [[Non-dict entries in the documents list are silently skipped.]] - rationale - graphify/tests/test_scip_ingest.py
- [[Result passes Graphify's validate_extraction and build_from_json keeps the…]] - rationale - graphify/tests/test_scip_ingest.py
- [[SCIP relationship payloads embedded in edge metadata must be sanitized.]] - rationale - graphify/tests/test_scip_ingest.py
- [[The source_file param provides a fallback when doc has no relative_path.]] - rationale - graphify/tests/test_scip_ingest.py
- [[When a target symbol is defined in exactly ONE other document, the edge still…]] - rationale - graphify/tests/test_scip_ingest.py
- [[When doc has no language field, uses the language function parameter.]] - rationale - graphify/tests/test_scip_ingest.py
- [[When kind is missing, metadata uses 'unknown'.]] - rationale - graphify/tests/test_scip_ingest.py
- [[When occurrences list is empty, source_location is empty string.]] - rationale - graphify/tests/test_scip_ingest.py
- [[`documents` as a non-list returns the empty result.]] - rationale - graphify/tests/test_scip_ingest.py
- [[ingest_scip_json()]] - code - graphify/graphify/scip_ingest.py
- [[test_documents_field_non_list_returns_empty()]] - code - graphify/tests/test_scip_ingest.py
- [[test_ingest_document_item_not_a_dict_is_skipped()]] - code - graphify/tests/test_scip_ingest.py
- [[test_ingest_document_relative_path_overrides_source_file_param()]] - code - graphify/tests/test_scip_ingest.py
- [[test_ingest_document_without_language_defaults_to_function_param()]] - code - graphify/tests/test_scip_ingest.py
- [[test_ingest_multiple_symbols_in_one_document()]] - code - graphify/tests/test_scip_ingest.py
- [[test_ingest_relationship_metadata_sanitized()]] - code - graphify/tests/test_scip_ingest.py
- [[test_ingest_source_file_falls_back_to_function_param()]] - code - graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_without_kind_defaults_to_unknown()]] - code - graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_without_occurrences_has_empty_source_location()]] - code - graphify/tests/test_scip_ingest.py
- [[test_non_string_kind_falls_back_to_unknown()]] - code - graphify/tests/test_scip_ingest.py
- [[test_relationship_edges_survive_validate_extraction_and_build()]] - code - graphify/tests/test_scip_ingest.py
- [[test_relationship_symbol_non_string_is_skipped()]] - code - graphify/tests/test_scip_ingest.py
- [[test_relationship_target_across_documents_resolves_via_index()]] - code - graphify/tests/test_scip_ingest.py
- [[test_relationship_target_unknown_emits_stub_node()]] - code - graphify/tests/test_scip_ingest.py
- [[test_relationships_none_is_treated_as_empty()]] - code - graphify/tests/test_scip_ingest.py
- [[test_unique_cross_document_symbol_still_resolves()]] - code - graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_137
SORT file.name ASC
```

## Connections to other communities
- 23 edges to [[_COMMUNITY_Community 142]]
- 13 edges to [[_COMMUNITY_Community 194]]
- 6 edges to [[_COMMUNITY_Community 188]]
- 1 edge to [[_COMMUNITY_Community 9]]
- 1 edge to [[_COMMUNITY_Community 851]]
- 1 edge to [[_COMMUNITY_Community 846]]
- 1 edge to [[_COMMUNITY_Community 850]]
- 1 edge to [[_COMMUNITY_Community 870]]
- 1 edge to [[_COMMUNITY_Community 859]]
- 1 edge to [[_COMMUNITY_Community 869]]
- 1 edge to [[_COMMUNITY_Community 868]]
- 1 edge to [[_COMMUNITY_Community 861]]
- 1 edge to [[_COMMUNITY_Community 860]]
- 1 edge to [[_COMMUNITY_Community 865]]
- 1 edge to [[_COMMUNITY_Community 862]]
- 1 edge to [[_COMMUNITY_Community 878]]
- 1 edge to [[_COMMUNITY_Community 857]]
- 1 edge to [[_COMMUNITY_Community 877]]
- 1 edge to [[_COMMUNITY_Community 858]]
- 1 edge to [[_COMMUNITY_Community 864]]
- 1 edge to [[_COMMUNITY_Community 856]]
- 1 edge to [[_COMMUNITY_Community 640]]
- 1 edge to [[_COMMUNITY_Community 863]]
- 1 edge to [[_COMMUNITY_Community 866]]
- 1 edge to [[_COMMUNITY_Community 841]]
- 1 edge to [[_COMMUNITY_Community 874]]
- 1 edge to [[_COMMUNITY_Community 872]]
- 1 edge to [[_COMMUNITY_Community 871]]
- 1 edge to [[_COMMUNITY_Community 873]]
- 1 edge to [[_COMMUNITY_Community 875]]
- 1 edge to [[_COMMUNITY_Community 849]]
- 1 edge to [[_COMMUNITY_Community 876]]
- 1 edge to [[_COMMUNITY_Community 867]]
- 1 edge to [[_COMMUNITY_Community 845]]
- 1 edge to [[_COMMUNITY_Community 843]]
- 1 edge to [[_COMMUNITY_Community 842]]
- 1 edge to [[_COMMUNITY_Community 844]]
- 1 edge to [[_COMMUNITY_Community 855]]
- 1 edge to [[_COMMUNITY_Community 848]]
- 1 edge to [[_COMMUNITY_Community 854]]
- 1 edge to [[_COMMUNITY_Community 853]]
- 1 edge to [[_COMMUNITY_Community 840]]
- 1 edge to [[_COMMUNITY_Community 852]]
- 1 edge to [[_COMMUNITY_Community 847]]
- 1 edge to [[_COMMUNITY_Community 73]]

## Top bridge nodes
- [[ingest_scip_json()]] - degree 83, connects to 43 communities
- [[test_relationship_edges_survive_validate_extraction_and_build()]] - degree 5, connects to 3 communities
- [[test_documents_field_non_list_returns_empty()]] - degree 3, connects to 1 community
- [[test_ingest_document_item_not_a_dict_is_skipped()]] - degree 3, connects to 1 community
- [[test_ingest_document_relative_path_overrides_source_file_param()]] - degree 3, connects to 1 community