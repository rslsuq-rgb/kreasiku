---
source_file: "graphify/graphify/file_slice.py"
type: "code"
community: "Community 38"
location: "L104"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_38
---

# FileSlice

## Connections
- [[A contiguous ``start, end)`` character range of a splittable text file.…]] - `rationale_for` [EXTRACTED]
- [[_dispatched_source_text()]] - `uses` [INFERRED]
- [[_estimate_file_tokens()]] - `uses` [INFERRED]
- [[_extract_with_adaptive_retry()]] - `uses` [INFERRED]
- [[_pack_chunks_by_tokens()]] - `uses` [INFERRED]
- [[_partition_semantic_files()]] - `uses` [INFERRED]
- [[_read_files()]] - `uses` [INFERRED]
- [[bisect_slice()]] - `calls` [EXTRACTED]
- [[expand_oversized_files()]] - `calls` [EXTRACTED]
- [[extract_corpus_parallel()]] - `uses` [INFERRED]
- [[extract_files_direct()]] - `uses` [INFERRED]
- [[file_slice.py]] - `contains` [EXTRACTED]
- [[llm.py]] - `imports` [EXTRACTED]
- [[read_slice_text()]] - `references` [EXTRACTED]
- [[test_adaptive_retry_splits_single_slice_on_timeout()]] - `calls` [EXTRACTED]
- [[test_an_oversized_pdf_is_sliced()]] - `uses` [INFERRED]
- [[test_bisect_slice_of_a_pdf_indexes_extracted_text_not_bytes()]] - `calls` [EXTRACTED]
- [[test_bisect_slice_returns_none_for_tiny()]] - `calls` [EXTRACTED]
- [[test_bisect_slice_splits_at_newline()]] - `calls` [EXTRACTED]
- [[test_checkpoint_caches_sliced_document_chunks()]] - `uses` [INFERRED]
- [[test_chunking.py]] - `imports` [EXTRACTED]
- [[test_estimate_tokens_for_slice_scales_with_range()]] - `calls` [EXTRACTED]
- [[test_evidence_binding.py]] - `imports` [EXTRACTED]
- [[test_evidence_binding_handles_file_slice()]] - `calls` [EXTRACTED]
- [[test_expand_oversized_markdown_is_sliced_with_full_coverage()]] - `uses` [INFERRED]
- [[test_file_slice.py]] - `imports` [EXTRACTED]
- [[test_llm_backends.py]] - `imports` [EXTRACTED]
- [[test_partition_keeps_slices_as_text()]] - `calls` [EXTRACTED]
- [[test_pdf_slicing.py]] - `imports` [EXTRACTED]
- [[test_read_files_keys_every_slice_to_parent_path()]] - `uses` [INFERRED]
- [[test_unit_path_resolves_slice_and_path()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_38