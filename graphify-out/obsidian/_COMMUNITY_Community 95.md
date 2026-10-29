---
type: community
cohesion: 0.09
members: 45
---

# Community 95

**Cohesion:** 0.09 - loosely connected
**Members:** 45 nodes

## Members
- [[(key text, key node, value node) for a composed mapping, in the order the…]] - rationale - graphify/graphify/extractors/yaml_config.py
- [[A config-named YAML with thousands of keys is bounded by the 500-pair cap.]] - rationale - graphify/tests/test_yaml_extraction.py
- [[A flat all-scalar data bundle with no config key (an i18n-style file) is…]] - rationale - graphify/tests/test_yaml_extraction.py
- [[A k8s-style multi-document stream (`---` separators) is the headline use case;…]] - rationale - graphify/tests/test_yaml_extraction.py
- [[A stable label for one document of a multi-document YAML stream.]] - rationale - graphify/graphify/extractors/yaml_config.py
- [[An OpenAPISwagger spec is data-heavy API description, not a config to walk.]] - rationale - graphify/tests/test_yaml_extraction.py
- [[Any_17]] - code
- [[Every key node and its contains edge point at the line the key is on, not L1…]] - rationale - graphify/tests/test_yaml_extraction.py
- [[Extract structural nodesedges from a ``.yaml````.yml`` file. Uses PyYAML…]] - rationale - graphify/graphify/extractors/yaml_config.py
- [[Path_244]] - code
- [[Path_245]] - code
- [[Structural YAML extraction (2214). YAML was previously classified as a…]] - rationale - graphify/tests/test_yaml_extraction.py
- [[True if a YAML document is a recognized configmanifest worth extracting.…]] - rationale - graphify/graphify/extractors/yaml_config.py
- [[YAML 1.1 resolves a bare `on` to the boolean True, so the constructed key of…]] - rationale - graphify/tests/test_yaml_extraction.py
- [[_by_label()_2]] - code - graphify/tests/test_yaml_extraction.py
- [[_doc_label()]] - code - graphify/graphify/extractors/yaml_config.py
- [[_is_config_yaml()]] - code - graphify/graphify/extractors/yaml_config.py
- [[_mapping_pairs()]] - code - graphify/graphify/extractors/yaml_config.py
- [[_top_keys()]] - code - graphify/graphify/extractors/yaml_config.py
- [[_write()_47]] - code - graphify/tests/test_yaml_extraction.py
- [[` anchor` contributes the anchored keys (as safe_load does), an explicit…]] - rationale - graphify/tests/test_yaml_extraction.py
- [[`on` is in the config-key probe, but its constructed key is True; a flat…]] - rationale - graphify/tests/test_yaml_extraction.py
- [[add_edge()_31]] - code - graphify/graphify/extractors/yaml_config.py
- [[add_node()_32]] - code - graphify/graphify/extractors/yaml_config.py
- [[extract_yaml must use safe_load (never load) a `!!python...` tag raises…]] - rationale - graphify/tests/test_yaml_extraction.py
- [[extract_yaml()]] - code - graphify/graphify/extractors/yaml_config.py
- [[test_data_yaml_is_skipped()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_extract_yaml_caps_bound_output()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_extract_yaml_empty_document()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_extract_yaml_ids_are_stable_across_runs()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_extract_yaml_keys_carry_their_own_line()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_extract_yaml_nested_keys_are_contains_edges()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_extract_yaml_scalar_document_is_skipped()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_extract_yaml_top_level_keys()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_github_workflow_on_key_keeps_its_spelling()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_merge_keys_are_expanded_like_the_constructed_mapping()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_multi_document_yaml_document_nodes_carry_their_line()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_multi_document_yaml_extracts_each_document()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_on_key_counts_as_a_config_key_outside_github_workflows()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_openapi_spec_yaml_is_skipped()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_top_level_data_array_is_skipped()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_unsafe_yaml_tag_does_not_execute()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_yaml_and_yml_classify_as_code()]] - code - graphify/tests/test_yaml_extraction.py
- [[test_yaml_extraction.py]] - code - graphify/tests/test_yaml_extraction.py
- [[walk()_30]] - code - graphify/graphify/extractors/yaml_config.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_95
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_Community 3]]
- 4 edges to [[_COMMUNITY_Community 35]]
- 2 edges to [[_COMMUNITY_Community 45]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 33]]

## Top bridge nodes
- [[extract_yaml()]] - degree 30, connects to 3 communities
- [[test_yaml_extraction.py]] - degree 26, connects to 3 communities
- [[walk()_30]] - degree 6, connects to 2 communities
- [[_is_config_yaml()]] - degree 5, connects to 1 community
- [[_mapping_pairs()]] - degree 5, connects to 1 community