---
type: community
cohesion: 0.09
members: 35
---

# Community 135

**Cohesion:** 0.09 - loosely connected
**Members:** 35 nodes

## Members
- [[10 - 10 semantic nodes with completely different IDs is not flagged as a…]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[AST node with _origin='ast'.]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[Deterministic ASTcode shrinkage (10 - 1) is never flagged as unverified…]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[Growth in B (3 - 20) cannot mask unverified shrink in A (6 - 2).]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[Multiple chunks for the same source are summed before comparison (2 + 2 = 4 =…]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[Passing --allow-partial permits an intentional semantic reduction and stamps…]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[Path_27]] - code
- [[Reproduce 3203 Initial 3 nodes for README.md - re-extracted with 1 node. The…]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[Semantic growth (3 - 4) is unaffected.]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[Semantic node without _origin.]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[Semantic source with 3 prior nodes re-extracted with 1 node is flagged on…]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[Surviving semantic node renamed (n0 - renamed_concept) still flags based on…]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[Tests for unverified semantic document node shrink protection (3203). When an…]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[_ast_node()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[_mock_llm_run1()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[_mock_llm_run1()_1]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[_mock_llm_run2()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[_mock_llm_run2()_1]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[_run_cli()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[_sem_node()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[_write_graph()_3]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[build_merge must NOT raise an exception on own-file shrink; it returns G.]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[merge_raw_extraction also flags unverified semantic shrink.]] - rationale - graphify/tests/test_unverified_semantic_shrink.py
- [[test_3203_allow_partial_override_permits_intentional_reduction()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[test_3203_e2e_repro_protected_and_manifest_unstamped()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[test_build_merge_aggregates_multiple_chunks_per_source()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[test_build_merge_does_not_flag_ast_code_shrink()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[test_build_merge_equal_count_different_ids_not_flagged()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[test_build_merge_flags_shrink_when_surviving_id_is_renamed()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[test_build_merge_flags_unverified_semantic_shrink()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[test_build_merge_own_file_shrink_remains_non_fatal()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[test_build_merge_semantic_growth_not_flagged()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[test_build_merge_source_specific_growth_cannot_mask_shrink()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[test_merge_raw_extraction_parity()]] - code - graphify/tests/test_unverified_semantic_shrink.py
- [[test_unverified_semantic_shrink.py]] - code - graphify/tests/test_unverified_semantic_shrink.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_135
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_Community 41]]
- 2 edges to [[_COMMUNITY_Community 107]]
- 1 edge to [[_COMMUNITY_Community 22]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 4]]
- 1 edge to [[_COMMUNITY_Community 58]]
- 1 edge to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 53]]

## Top bridge nodes
- [[test_unverified_semantic_shrink.py]] - degree 24, connects to 8 communities
- [[test_build_merge_aggregates_multiple_chunks_per_source()]] - degree 5, connects to 1 community
- [[test_build_merge_does_not_flag_ast_code_shrink()]] - degree 5, connects to 1 community
- [[test_build_merge_equal_count_different_ids_not_flagged()]] - degree 5, connects to 1 community
- [[test_build_merge_flags_shrink_when_surviving_id_is_renamed()]] - degree 5, connects to 1 community