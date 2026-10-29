---
type: community
cohesion: 0.09
members: 33
---

# Community 146

**Cohesion:** 0.09 - loosely connected
**Members:** 33 nodes

## Members
- [[4495 end to end a graph carrying the exact warning text from the issue must…]] - rationale - graphify/tests/test_alias_folding.py
- [[4495 a hyperedge carries the same confidenceconfidence_score pair an edge…]] - rationale - graphify/tests/test_alias_folding.py
- [[4529 end to end a drifted node confidence reaches the built graph folded onto…]] - rationale - graphify/tests/test_alias_folding.py
- [[4529 a node carrying a confidenceconfidence_score pair gets the same fold…]] - rationale - graphify/tests/test_alias_folding.py
- [[A case variant of a real enum value (4495) IS the enum value, just mis-cased…]] - rationale - graphify/tests/test_alias_folding.py
- [[A string that DOES parse as a float still backfills confidence_score, the same…]] - rationale - graphify/tests/test_alias_folding.py
- [[Fold a legacydrifted ``confidence`` onto the enum, in place (2194, 4495).…]] - rationale - graphify/graphify/build.py
- [[Fold legacy edge field aliases onto canonical keys, in place (2194).…]] - rationale - graphify/graphify/build.py
- [[Fold legacy node field aliases onto canonical keys, in place (2194). ``name``…]] - rationale - graphify/graphify/build.py
- [[LLM field aliases node filepathfilepath - source_file, edge relationship -…]] - rationale - graphify/tests/test_alias_folding.py
- [[No behavior change for graphs whose nodes carry no confidence (4529).]] - rationale - graphify/tests/test_alias_folding.py
- [[_fold_confidence()]] - code - graphify/graphify/build.py
- [[_fold_edge_aliases()]] - code - graphify/graphify/build.py
- [[_fold_node_aliases()]] - code - graphify/graphify/build.py
- [[test_alias_folding.py]] - code - graphify/tests/test_alias_folding.py
- [[test_build_from_json_normalizes_drifted_confidence_without_warning()]] - code - graphify/tests/test_alias_folding.py
- [[test_build_from_json_normalizes_node_confidence()]] - code - graphify/tests/test_alias_folding.py
- [[test_build_from_json_normalizes_without_validation_warnings()]] - code - graphify/tests/test_alias_folding.py
- [[test_edge_relation_wins_over_relationship()]] - code - graphify/tests/test_alias_folding.py
- [[test_edge_relationship_folds_to_relation()]] - code - graphify/tests/test_alias_folding.py
- [[test_hyperedge_confidence_folds_the_same_way()]] - code - graphify/tests/test_alias_folding.py
- [[test_lowercase_confidence_is_case_corrected_not_treated_as_drift()]] - code - graphify/tests/test_alias_folding.py
- [[test_model_drifted_string_confidence_folds_to_inferred()]] - code - graphify/tests/test_alias_folding.py
- [[test_node_confidence_folds_the_same_way()]] - code - graphify/tests/test_alias_folding.py
- [[test_node_file_folds_to_source_file()]] - code - graphify/tests/test_alias_folding.py
- [[test_node_filepath_folds_to_source_file()]] - code - graphify/tests/test_alias_folding.py
- [[test_node_path_folds_to_source_file()]] - code - graphify/tests/test_alias_folding.py
- [[test_node_source_file_wins_over_alias()]] - code - graphify/tests/test_alias_folding.py
- [[test_node_without_confidence_is_left_untouched()]] - code - graphify/tests/test_alias_folding.py
- [[test_numeric_confidence_does_not_override_an_existing_score()]] - code - graphify/tests/test_alias_folding.py
- [[test_numeric_confidence_folds_to_inferred_and_backfills_score()]] - code - graphify/tests/test_alias_folding.py
- [[test_numeric_looking_string_confidence_backfills_score()]] - code - graphify/tests/test_alias_folding.py
- [[test_valid_enum_confidences_are_left_untouched()]] - code - graphify/tests/test_alias_folding.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_146
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_Community 9]]
- 4 edges to [[_COMMUNITY_Community 53]]
- 3 edges to [[_COMMUNITY_Community 62]]
- 1 edge to [[_COMMUNITY_Community 48]]
- 1 edge to [[_COMMUNITY_Community 17]]
- 1 edge to [[_COMMUNITY_Community 4]]

## Top bridge nodes
- [[test_alias_folding.py]] - degree 26, connects to 4 communities
- [[_fold_edge_aliases()]] - degree 14, connects to 3 communities
- [[_fold_node_aliases()]] - degree 12, connects to 3 communities
- [[_fold_confidence()]] - degree 7, connects to 2 communities
- [[test_build_from_json_normalizes_drifted_confidence_without_warning()]] - degree 4, connects to 2 communities