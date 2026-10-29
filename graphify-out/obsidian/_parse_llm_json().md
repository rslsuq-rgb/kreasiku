---
source_file: "graphify/graphify/llm.py"
type: "code"
community: "Community 72"
location: "L1198"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_72
---

# _parse_llm_json()

## Connections
- [[Strip optional markdown fences and parse JSON. Returns empty fragment on…]] - `rationale_for` [EXTRACTED]
- [[_call_azure()]] - `calls` [EXTRACTED]
- [[_call_bedrock()]] - `calls` [EXTRACTED]
- [[_call_claude()]] - `calls` [EXTRACTED]
- [[_call_claude_cli()]] - `calls` [EXTRACTED]
- [[_call_openai_compat()]] - `calls` [EXTRACTED]
- [[_json_fragment_candidates()]] - `calls` [EXTRACTED]
- [[_sanitize_fragment()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_a_genuinely_empty_extraction_is_still_returned()]] - `calls` [EXTRACTED]
- [[test_candidate_scan_is_bounded()]] - `calls` [EXTRACTED]
- [[test_chain_of_thought_preamble_then_bare_json()]] - `calls` [EXTRACTED]
- [[test_empty_fragment_outranks_a_non_fragment_object()]] - `calls` [EXTRACTED]
- [[test_empty_response_returns_empty_fragment()]] - `calls` [EXTRACTED]
- [[test_empty_restatement_without_a_fence_does_not_shadow_either()]] - `calls` [EXTRACTED]
- [[test_empty_schema_restatement_does_not_shadow_the_answer()]] - `calls` [EXTRACTED]
- [[test_fence_with_uppercase_language_tag()]] - `calls` [EXTRACTED]
- [[test_fence_without_closing_backticks()]] - `calls` [EXTRACTED]
- [[test_merge_after_sanitize_does_not_raise_on_source_file_access()]] - `calls` [EXTRACTED]
- [[test_narration_fence_precedes_the_answer_fence()]] - `calls` [EXTRACTED]
- [[test_parse_llm_json_fenced_response_is_sanitized()]] - `calls` [EXTRACTED]
- [[test_parse_llm_json_sanitizes_stray_list_in_edges()]] - `calls` [EXTRACTED]
- [[test_parseable_prose_object_does_not_shadow_the_answer()]] - `calls` [EXTRACTED]
- [[test_preamble_then_fence_is_parsed()]] - `calls` [EXTRACTED]
- [[test_prose_wrapped_json_without_fence_is_parsed()]] - `calls` [EXTRACTED]
- [[test_pure_prose_reply_still_degrades_to_empty_fragment()]] - `calls` [EXTRACTED]
- [[test_raw_json_still_works()]] - `calls` [EXTRACTED]
- [[test_semantic_fragment_sanitize.py]] - `imports` [EXTRACTED]
- [[test_string_list_sketch_alone_sanitizes_to_empty()]] - `calls` [EXTRACTED]
- [[test_string_list_sketch_does_not_shadow_the_real_answer()]] - `calls` [EXTRACTED]
- [[test_think_block_is_stripped_before_parsing()]] - `calls` [EXTRACTED]
- [[test_total_refusal_returns_empty_fragment()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_72