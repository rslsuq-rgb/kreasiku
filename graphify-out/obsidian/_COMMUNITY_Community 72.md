---
type: community
cohesion: 0.05
members: 58
---

# Community 72

**Cohesion:** 0.05 - loosely connected
**Members:** 58 nodes

## Members
- [[1631 — a malformed LLM chunk (a stray non-dict entry in edgesnodes) must not…]] - rationale - graphify/tests/test_semantic_fragment_sanitize.py
- [[2882 reasoning-first models narrate before they answer. `nvidianemotron-`,…]] - rationale - graphify/tests/test_llm_parser_reasoning.py
- [[A ```text block in the narration must not swallow the ```json answer. The old…]] - rationale - graphify/tests/test_llm_parser_reasoning.py
- [[A pathological reply full of braces must not turn recovery quadratic.]] - rationale - graphify/tests/test_llm_parser_reasoning.py
- [[A reasoning sketch that lists ids as bare strings (`{nodes A,B}`) has…]] - rationale - graphify/tests/test_llm_parser_reasoning.py
- [[A restated shape carries the extraction keys but no content. Preferring any…]] - rationale - graphify/tests/test_llm_parser_reasoning.py
- [[An earlier object that happens to be valid JSON is not the fragment.]] - rationale - graphify/tests/test_llm_parser_reasoning.py
- [[Claude often prefixes the JSON with a short preamble before the ```json fence.…]] - rationale - graphify/tests/test_llm_parser.py
- [[Default behaviour when the env var is not set, --model is not added so claude-…]] - rationale - graphify/tests/test_llm_parser.py
- [[Extraction instructions must be delivered in the user turn, not via --system-…]] - rationale - graphify/tests/test_llm_parser.py
- [[Force ``nodes````edges````hyperedges`` to lists of dicts, in place. A model…]] - rationale - graphify/graphify/llm.py
- [[GRAPHIFY_CLAUDE_CLI_MODEL must be forwarded to claude -p --model.]] - rationale - graphify/tests/test_llm_parser.py
- [[No answer anywhere the empty fragment, never an exception, so the hollow…]] - rationale - graphify/tests/test_llm_parser_reasoning.py
- [[Regression clean JSON input (the original happy path) must keep parsing…]] - rationale - graphify/tests/test_llm_parser.py
- [[Right shape but empty still beats an object that is not a fragment.]] - rationale - graphify/tests/test_llm_parser_reasoning.py
- [[Some models return prose around bare JSON with no markdown fence. The balanced-…]] - rationale - graphify/tests/test_llm_parser.py
- [[Strip optional markdown fences and parse JSON. Returns empty fragment on…]] - rationale - graphify/graphify/llm.py
- [[Tests for `_parse_llm_json` robustness and the `_call_claude_cli` subprocess…]] - rationale - graphify/tests/test_llm_parser.py
- [[The model looked and found nothing that is a valid answer, and it must keep…]] - rationale - graphify/tests/test_llm_parser_reasoning.py
- [[Truncated response the model started the fence but ran out of tokens before…]] - rationale - graphify/tests/test_llm_parser.py
- [[When the model refuses or returns unrelated prose, the parser must degrade…]] - rationale - graphify/tests/test_llm_parser.py
- [[With no real answer following, a string-list sketch must not masquerade as…]] - rationale - graphify/tests/test_llm_parser_reasoning.py
- [[_make_envelope()]] - code - graphify/tests/test_llm_parser.py
- [[_parse_llm_json()]] - code - graphify/graphify/llm.py
- [[_sanitize_fragment()]] - code - graphify/graphify/llm.py
- [[deepseek-r1  qwq style the chain of thought is tagged, and it is full of…]] - rationale - graphify/tests/test_llm_parser_reasoning.py
- [[patch]] - code
- [[test_a_genuinely_empty_extraction_is_still_returned()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_candidate_scan_is_bounded()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_chain_of_thought_preamble_then_bare_json()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_empty_fragment_outranks_a_non_fragment_object()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_empty_response_returns_empty_fragment()]] - code - graphify/tests/test_llm_parser.py
- [[test_empty_restatement_without_a_fence_does_not_shadow_either()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_empty_schema_restatement_does_not_shadow_the_answer()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_fence_with_uppercase_language_tag()]] - code - graphify/tests/test_llm_parser.py
- [[test_fence_without_closing_backticks()]] - code - graphify/tests/test_llm_parser.py
- [[test_instructions_ride_in_user_turn_not_system_prompt()]] - code - graphify/tests/test_llm_parser.py
- [[test_llm_parser.py]] - code - graphify/tests/test_llm_parser.py
- [[test_llm_parser_reasoning.py]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_merge_after_sanitize_does_not_raise_on_source_file_access()]] - code - graphify/tests/test_semantic_fragment_sanitize.py
- [[test_model_env_var_adds_model_flag()]] - code - graphify/tests/test_llm_parser.py
- [[test_narration_fence_precedes_the_answer_fence()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_no_model_flag_when_env_var_unset()]] - code - graphify/tests/test_llm_parser.py
- [[test_parse_llm_json_fenced_response_is_sanitized()]] - code - graphify/tests/test_semantic_fragment_sanitize.py
- [[test_parse_llm_json_sanitizes_stray_list_in_edges()]] - code - graphify/tests/test_semantic_fragment_sanitize.py
- [[test_parseable_prose_object_does_not_shadow_the_answer()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_preamble_then_fence_is_parsed()]] - code - graphify/tests/test_llm_parser.py
- [[test_prose_wrapped_json_without_fence_is_parsed()]] - code - graphify/tests/test_llm_parser.py
- [[test_pure_prose_reply_still_degrades_to_empty_fragment()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_raw_json_still_works()]] - code - graphify/tests/test_llm_parser.py
- [[test_sanitize_coerces_non_list_values_to_empty()]] - code - graphify/tests/test_semantic_fragment_sanitize.py
- [[test_sanitize_drops_non_dict_edge_entries()]] - code - graphify/tests/test_semantic_fragment_sanitize.py
- [[test_sanitize_fragment_coerces_dict_members_to_strings()]] - code - graphify/tests/test_hyperedge_member_shapes.py
- [[test_semantic_fragment_sanitize.py]] - code - graphify/tests/test_semantic_fragment_sanitize.py
- [[test_string_list_sketch_alone_sanitizes_to_empty()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_string_list_sketch_does_not_shadow_the_real_answer()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_think_block_is_stripped_before_parsing()]] - code - graphify/tests/test_llm_parser_reasoning.py
- [[test_total_refusal_returns_empty_fragment()]] - code - graphify/tests/test_llm_parser.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_72
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_Community 58]]
- 6 edges to [[_COMMUNITY_Community 115]]
- 4 edges to [[_COMMUNITY_Community 39]]
- 3 edges to [[_COMMUNITY_Community 19]]
- 2 edges to [[_COMMUNITY_Community 42]]
- 2 edges to [[_COMMUNITY_Community 514]]
- 1 edge to [[_COMMUNITY_Community 20]]
- 1 edge to [[_COMMUNITY_Community 318]]
- 1 edge to [[_COMMUNITY_Community 53]]
- 1 edge to [[_COMMUNITY_Community 59]]

## Top bridge nodes
- [[_parse_llm_json()]] - degree 32, connects to 5 communities
- [[test_llm_parser.py]] - degree 17, connects to 4 communities
- [[_sanitize_fragment()]] - degree 9, connects to 3 communities
- [[test_llm_parser_reasoning.py]] - degree 15, connects to 2 communities
- [[test_semantic_fragment_sanitize.py]] - degree 10, connects to 2 communities