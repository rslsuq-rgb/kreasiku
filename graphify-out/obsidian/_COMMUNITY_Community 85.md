---
type: community
cohesion: 0.05
members: 51
---

# Community 85

**Cohesion:** 0.05 - loosely connected
**Members:** 51 nodes

## Members
- [[A PDF's token estimate must measure the text the prompt actually carries.…]] - rationale - graphify/tests/test_pdf_token_estimate.py
- [[A compressed PDF is a fraction of its text's size; the estimate must not follow…]] - rationale - graphify/tests/test_pdf_token_estimate.py
- [[A doc containing a literal tiktoken special token (e.g. endoftext) must not…]] - rationale - graphify/tests/test_chunking.py
- [[A file larger than the budget can't be split — it goes alone in a chunk.]] - rationale - graphify/tests/test_chunking.py
- [[A minimal one-page PDF with a real text layer, stored raw or FlateDecode.]] - rationale - graphify/tests/test_pdf_token_estimate.py
- [[A very long PDF is truncated at _FILE_CHAR_CAP by _read_files, so the estimate…]] - rationale - graphify/tests/test_pdf_token_estimate.py
- [[End to end packing a corpus that includes a special-token doc must not raise…]] - rationale - graphify/tests/test_chunking.py
- [[Estimate the prompt-token cost of a file or slice under `_read_files` rules.…]] - rationale - graphify/graphify/llm.py
- [[Files in the same directory should land in the same chunk when they fit.]] - rationale - graphify/tests/test_chunking.py
- [[Greedily pack filesslices into chunks that fit a token budget. Units are first…]] - rationale - graphify/graphify/llm.py
- [[Many small files should land in a single chunk, not one chunk per file.]] - rationale - graphify/tests/test_chunking.py
- [[Packing must not blow up on a corrupt file.]] - rationale - graphify/tests/test_pdf_token_estimate.py
- [[Packing probes the same file repeatedly; the memo must not drift.]] - rationale - graphify/tests/test_pdf_token_estimate.py
- [[Path_240]] - code
- [[Precondition only the storage differs, so any estimate gap is the bug.]] - rationale - graphify/tests/test_pdf_token_estimate.py
- [[Return a tiktoken encoder for accurate token counts, or None if tiktoken is not…]] - rationale - graphify/graphify/llm.py
- [[The fix is scoped to PDFs; a text file still measures its own bytes.]] - rationale - graphify/tests/test_pdf_token_estimate.py
- [[The memo keys on size and mtime, so editing a paper mid-run must not serve the…]] - rationale - graphify/tests/test_pdf_token_estimate.py
- [[The tell identical text stored two ways must estimate the same. It used to…]] - rationale - graphify/tests/test_pdf_token_estimate.py
- [[When the next file would push the chunk past the budget, start a new chunk.…]] - rationale - graphify/tests/test_chunking.py
- [[When tiktoken is installed, the estimator should call into it for accurate…]] - rationale - graphify/tests/test_chunking.py
- [[Without tiktoken installed, the estimator falls back to chars4.]] - rationale - graphify/tests/test_chunking.py
- [[_actual_tokens()]] - code - graphify/tests/test_pdf_token_estimate.py
- [[_estimate_file_tokens()]] - code - graphify/graphify/llm.py
- [[_get_tokenizer()]] - code - graphify/graphify/llm.py
- [[_is_vision_image()]] - code - graphify/graphify/llm.py
- [[_make_pdf()_1]] - code - graphify/tests/test_pdf_token_estimate.py
- [[_pack_chunks_by_tokens()]] - code - graphify/graphify/llm.py
- [[fixture_33]] - code
- [[parametrize_112]] - code
- [[pdfs()]] - code - graphify/tests/test_pdf_token_estimate.py
- [[test_a_rewritten_pdf_is_re_estimated()]] - code - graphify/tests/test_pdf_token_estimate.py
- [[test_an_unreadable_pdf_estimates_zero_instead_of_raising()]] - code - graphify/tests/test_pdf_token_estimate.py
- [[test_chunk_packing_caps_images_per_chunk()]] - code - graphify/tests/test_image_vision.py
- [[test_compression_does_not_change_the_estimate()]] - code - graphify/tests/test_pdf_token_estimate.py
- [[test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer()]] - code - graphify/tests/test_chunking.py
- [[test_estimate_file_tokens_handles_tiktoken_special_token()]] - code - graphify/tests/test_chunking.py
- [[test_estimate_file_tokens_uses_tiktoken_when_available()]] - code - graphify/tests/test_chunking.py
- [[test_estimate_is_not_derived_from_file_size()]] - code - graphify/tests/test_pdf_token_estimate.py
- [[test_estimate_tracks_the_prompt_it_will_build()]] - code - graphify/tests/test_pdf_token_estimate.py
- [[test_non_pdf_estimates_are_unchanged()]] - code - graphify/tests/test_pdf_token_estimate.py
- [[test_pack_chunks_groups_by_directory()]] - code - graphify/tests/test_chunking.py
- [[test_pack_chunks_oversized_file_gets_its_own_chunk()]] - code - graphify/tests/test_chunking.py
- [[test_pack_chunks_packs_small_files_together()]] - code - graphify/tests/test_chunking.py
- [[test_pack_chunks_starts_new_chunk_when_budget_would_overflow()]] - code - graphify/tests/test_chunking.py
- [[test_pack_chunks_with_special_token_doc_does_not_crash()]] - code - graphify/tests/test_chunking.py
- [[test_pdf_token_estimate.py]] - code - graphify/tests/test_pdf_token_estimate.py
- [[test_repeated_estimates_agree()]] - code - graphify/tests/test_pdf_token_estimate.py
- [[test_the_cap_still_applies()]] - code - graphify/tests/test_pdf_token_estimate.py
- [[test_the_two_encodings_hold_the_same_text()]] - code - graphify/tests/test_pdf_token_estimate.py
- [[zlib]] - concept

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_85
SORT file.name ASC
```

## Connections to other communities
- 19 edges to [[_COMMUNITY_Community 38]]
- 10 edges to [[_COMMUNITY_Community 32]]
- 5 edges to [[_COMMUNITY_Community 59]]
- 5 edges to [[_COMMUNITY_Community 58]]
- 2 edges to [[_COMMUNITY_Community 3]]
- 2 edges to [[_COMMUNITY_Community 42]]

## Top bridge nodes
- [[_estimate_file_tokens()]] - degree 22, connects to 4 communities
- [[test_pdf_token_estimate.py]] - degree 21, connects to 4 communities
- [[_pack_chunks_by_tokens()]] - degree 16, connects to 4 communities
- [[test_the_cap_still_applies()]] - degree 7, connects to 2 communities
- [[_is_vision_image()]] - degree 6, connects to 2 communities