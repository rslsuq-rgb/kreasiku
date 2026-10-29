---
type: community
cohesion: 0.05
members: 95
---

# Community 38

**Cohesion:** 0.05 - loosely connected
**Members:** 95 nodes

## Members
- [[A PDF over the character cap must be sliced, not truncated. `_read_files` caps…]] - rationale - graphify/tests/test_pdf_slicing.py
- [[A contiguous ``start, end)`` character range of a splittable text file.…]] - rationale - graphify/graphify/file_slice.py
- [[An image has no addressable text, so it can never be sliced and must pass…]] - rationale - graphify/tests/test_oversized_document_slicing.py
- [[Contiguous ``(start, end)`` ranges covering all of ``text``, each ≤ max_chars.…]] - rationale - graphify/graphify/file_slice.py
- [[Every document type that reaches the semantic pass must be sliceable.…]] - rationale - graphify/tests/test_oversized_document_slicing.py
- [[Extracted text of a PDF — the same string `llm._file_to_text` builds. Imported…]] - rationale - graphify/graphify/file_slice.py
- [[Extracted text of a PDF, memoised for the packing pass.]] - rationale - graphify/graphify/llm.py
- [[FileSlice]] - code - graphify/graphify/file_slice.py
- [[Gap-free and non-overlapping rejoining reproduces the document.]] - rationale - graphify/tests/test_pdf_slicing.py
- [[Intra-file slicing for oversized text documents (1369). The extraction packer…]] - rationale - graphify/graphify/file_slice.py
- [[Map each dispatched text unit's resolved path to the (lower-cased, capped)…]] - rationale - graphify/graphify/llm.py
- [[Path_152]] - code
- [[Path_153]] - code
- [[Path_154]] - code
- [[Path_155]] - code
- [[Precondition small on disk, large in text — which is why file size never…]] - rationale - graphify/tests/test_pdf_slicing.py
- [[Read just this slice's characters from its parent file. Goes through…]] - rationale - graphify/graphify/file_slice.py
- [[Replace each oversized splittable-text file with a list of ``FileSlice``s.…]] - rationale - graphify/graphify/file_slice.py
- [[Return a cut index in ``(start, end`` at the strongest nearby boundary.…]] - rationale - graphify/graphify/file_slice.py
- [[Return a text-like file's content for the extraction prompt. Most files are…]] - rationale - graphify/graphify/llm.py
- [[Return fileslice contents formatted for the extraction prompt. Each unit is…]] - rationale - graphify/graphify/llm.py
- [[Return the resolved path only when it stays inside ``root``.]] - rationale - graphify/graphify/llm.py
- [[Split a chunk into (text-like units, raster-image files). A ``FileSlice`` is…]] - rationale - graphify/graphify/llm.py
- [[Split a slice into two halves at a newline near its midpoint, or None. Used by…]] - rationale - graphify/graphify/file_slice.py
- [[The adaptive-retry path (a lone oversized slice that still overflows) calls…]] - rationale - graphify/tests/test_pdf_slicing.py
- [[The bug in one assertion slicing used to address the container. A slice must…]] - rationale - graphify/tests/test_pdf_slicing.py
- [[The guard against re-drift a plain-text document type that reaches the…]] - rationale - graphify/tests/test_oversized_document_slicing.py
- [[The on-disk path a unit belongs to (the parent file for a slice).]] - rationale - graphify/graphify/file_slice.py
- [[The reader memoises on (path, size, mtime), so a paper replaced mid-run must…]] - rationale - graphify/tests/test_pdf_slicing.py
- [[The symptom a user would notice content past 20k could never become a node…]] - rationale - graphify/tests/test_pdf_slicing.py
- [[The symptom a user would notice content past 20k was invisible to the semantic…]] - rationale - graphify/tests/test_oversized_document_slicing.py
- [[The text a unit contributes to the prompt, whatever its container. Plain-text…]] - rationale - graphify/graphify/file_slice.py
- [[True for document types that may be sliced. Covers plain text read straight off…]] - rationale - graphify/graphify/file_slice.py
- [[_best_cut()]] - code - graphify/graphify/file_slice.py
- [[_dispatched_source_text()]] - code - graphify/graphify/llm.py
- [[_file_to_text()]] - code - graphify/graphify/llm.py
- [[_make_pdf()]] - code - graphify/tests/test_pdf_slicing.py
- [[_partition_semantic_files()]] - code - graphify/graphify/llm.py
- [[_pdf_text()]] - code - graphify/graphify/file_slice.py
- [[_pdf_text_for_estimate()]] - code - graphify/graphify/llm.py
- [[_read_files()]] - code - graphify/graphify/llm.py
- [[_resolve_under_root()]] - code - graphify/graphify/llm.py
- [[_write()_30]] - code - graphify/tests/test_file_slice.py
- [[big_pdf()]] - code - graphify/tests/test_pdf_slicing.py
- [[bisect_slice()]] - code - graphify/graphify/file_slice.py
- [[expand_oversized_files()]] - code - graphify/graphify/file_slice.py
- [[file_slice.py]] - code - graphify/graphify/file_slice.py
- [[fixture_24]] - code
- [[is_splittable_text()]] - code - graphify/graphify/file_slice.py
- [[parametrize_63]] - code
- [[parametrize_64]] - code
- [[read_slice_text()]] - code - graphify/graphify/file_slice.py
- [[slice_boundaries()]] - code - graphify/graphify/file_slice.py
- [[test_a_corrupt_pdf_does_not_break_the_pass()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_a_pdf_is_splittable()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_a_rewritten_pdf_is_re_read()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_a_slice_indexes_text_not_bytes()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_a_small_document_is_still_passed_through_whole()]] - code - graphify/tests/test_oversized_document_slicing.py
- [[test_a_small_pdf_still_passes_through_whole()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_an_oversized_document_reaches_the_model_whole()]] - code - graphify/tests/test_oversized_document_slicing.py
- [[test_an_oversized_pdf_is_sliced()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_bisect_slice_of_a_pdf_indexes_extracted_text_not_bytes()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_bisect_slice_returns_none_for_tiny()]] - code - graphify/tests/test_file_slice.py
- [[test_bisect_slice_splits_at_newline()]] - code - graphify/tests/test_file_slice.py
- [[test_code_files_are_still_not_sliced()]] - code - graphify/tests/test_oversized_document_slicing.py
- [[test_estimate_tokens_for_slice_scales_with_range()]] - code - graphify/tests/test_file_slice.py
- [[test_every_text_document_type_is_splittable()]] - code - graphify/tests/test_oversized_document_slicing.py
- [[test_expand_does_not_slice_code_even_when_oversized()]] - code - graphify/tests/test_file_slice.py
- [[test_expand_oversized_markdown_is_sliced_with_full_coverage()]] - code - graphify/tests/test_file_slice.py
- [[test_expand_small_file_stays_whole()]] - code - graphify/tests/test_file_slice.py
- [[test_expand_unreadable_file_passes_through()]] - code - graphify/tests/test_file_slice.py
- [[test_file_slice.py]] - code - graphify/tests/test_file_slice.py
- [[test_image_documents_are_not_sliced()]] - code - graphify/tests/test_oversized_document_slicing.py
- [[test_images_and_code_are_still_not_sliced()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_no_slice_exceeds_the_cap()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_oversized_document_slicing.py]] - code - graphify/tests/test_oversized_document_slicing.py
- [[test_pack_chunks_handles_slices()]] - code - graphify/tests/test_file_slice.py
- [[test_partition_keeps_slices_as_text()]] - code - graphify/tests/test_file_slice.py
- [[test_pdf_is_not_treated_as_vision_image()]] - code - graphify/tests/test_image_vision.py
- [[test_pdf_slicing.py]] - code - graphify/tests/test_pdf_slicing.py
- [[test_plain_text_slicing_is_unchanged()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_read_files_keys_every_slice_to_parent_path()]] - code - graphify/tests/test_file_slice.py
- [[test_repeated_reads_agree()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_slice_boundaries_full_coverage_and_bounds()]] - code - graphify/tests/test_file_slice.py
- [[test_slice_boundaries_prefers_heading_boundary()]] - code - graphify/tests/test_file_slice.py
- [[test_slice_boundaries_single_huge_line_still_progresses()]] - code - graphify/tests/test_file_slice.py
- [[test_slice_boundaries_small_text_is_one_range()]] - code - graphify/tests/test_file_slice.py
- [[test_slices_stay_within_the_cap()]] - code - graphify/tests/test_oversized_document_slicing.py
- [[test_the_fixture_is_the_shape_the_bug_needs()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_the_slices_tile_the_extracted_text_exactly()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_the_tail_of_a_big_document_reaches_the_prompt()]] - code - graphify/tests/test_oversized_document_slicing.py
- [[test_the_tail_reaches_the_prompt()]] - code - graphify/tests/test_pdf_slicing.py
- [[test_unit_path_resolves_slice_and_path()]] - code - graphify/tests/test_file_slice.py
- [[unit_path()]] - code - graphify/graphify/file_slice.py
- [[unit_source_text()]] - code - graphify/graphify/file_slice.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_38
SORT file.name ASC
```

## Connections to other communities
- 19 edges to [[_COMMUNITY_Community 85]]
- 17 edges to [[_COMMUNITY_Community 58]]
- 12 edges to [[_COMMUNITY_Community 3]]
- 8 edges to [[_COMMUNITY_Community 32]]
- 7 edges to [[_COMMUNITY_Community 78]]
- 7 edges to [[_COMMUNITY_Community 42]]
- 6 edges to [[_COMMUNITY_Community 59]]
- 5 edges to [[_COMMUNITY_Community 20]]
- 4 edges to [[_COMMUNITY_Community 240]]
- 3 edges to [[_COMMUNITY_Community 89]]
- 3 edges to [[_COMMUNITY_Community 512]]
- 2 edges to [[_COMMUNITY_Community 537]]
- 1 edge to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 33]]
- 1 edge to [[_COMMUNITY_Community 1]]

## Top bridge nodes
- [[Path_153]] - degree 13, connects to 7 communities
- [[FileSlice]] - degree 31, connects to 6 communities
- [[_read_files()]] - degree 25, connects to 6 communities
- [[_file_to_text()]] - degree 20, connects to 5 communities
- [[test_pdf_slicing.py]] - degree 30, connects to 4 communities