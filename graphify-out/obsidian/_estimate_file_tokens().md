---
source_file: "graphify/graphify/llm.py"
type: "code"
community: "Community 85"
location: "L2264"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_85
---

# _estimate_file_tokens()

## Connections
- [[Estimate the prompt-token cost of a file or slice under `_read_files` rules.…]] - `rationale_for` [EXTRACTED]
- [[FileSlice]] - `uses` [INFERRED]
- [[_is_vision_image()]] - `calls` [EXTRACTED]
- [[_pack_chunks_by_tokens()]] - `calls` [EXTRACTED]
- [[_pdf_text_for_estimate()]] - `calls` [EXTRACTED]
- [[_read_source_text()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[read_slice_text()]] - `calls` [EXTRACTED]
- [[test_a_rewritten_pdf_is_re_estimated()]] - `calls` [EXTRACTED]
- [[test_an_unreadable_pdf_estimates_zero_instead_of_raising()]] - `calls` [EXTRACTED]
- [[test_compression_does_not_change_the_estimate()]] - `calls` [EXTRACTED]
- [[test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer()]] - `calls` [EXTRACTED]
- [[test_estimate_file_tokens_handles_tiktoken_special_token()]] - `calls` [EXTRACTED]
- [[test_estimate_file_tokens_uses_tiktoken_when_available()]] - `calls` [EXTRACTED]
- [[test_estimate_is_not_derived_from_file_size()]] - `calls` [EXTRACTED]
- [[test_estimate_tokens_for_slice_scales_with_range()]] - `calls` [EXTRACTED]
- [[test_estimate_tracks_the_prompt_it_will_build()]] - `calls` [EXTRACTED]
- [[test_image_token_estimate_is_flat()]] - `calls` [EXTRACTED]
- [[test_non_pdf_estimates_are_unchanged()]] - `calls` [EXTRACTED]
- [[test_pdf_token_estimate.py]] - `imports` [EXTRACTED]
- [[test_repeated_estimates_agree()]] - `calls` [EXTRACTED]
- [[test_the_cap_still_applies()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_85