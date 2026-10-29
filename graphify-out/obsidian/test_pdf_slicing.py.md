---
source_file: "graphify/tests/test_pdf_slicing.py"
type: "code"
community: "Community 38"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_38
---

# test_pdf_slicing.py

## Connections
- [[A PDF over the character cap must be sliced, not truncated. `_read_files` caps…]] - `rationale_for` [EXTRACTED]
- [[FileSlice]] - `imports` [EXTRACTED]
- [[_file_to_text()]] - `indirect_call` [INFERRED]
- [[_make_pdf()]] - `contains` [EXTRACTED]
- [[_read_files()]] - `imports` [EXTRACTED]
- [[big_pdf()]] - `contains` [EXTRACTED]
- [[bisect_slice()]] - `imports` [EXTRACTED]
- [[expand_oversized_files()]] - `imports` [EXTRACTED]
- [[file_slice.py]] - `imports_from` [EXTRACTED]
- [[is_splittable_text()]] - `imports` [EXTRACTED]
- [[llm.py]] - `imports_from` [EXTRACTED]
- [[pathlib]] - `imports_from` [EXTRACTED]
- [[pytest]] - `imports` [EXTRACTED]
- [[read_slice_text()]] - `imports` [EXTRACTED]
- [[test_a_corrupt_pdf_does_not_break_the_pass()]] - `contains` [EXTRACTED]
- [[test_a_pdf_is_splittable()]] - `contains` [EXTRACTED]
- [[test_a_rewritten_pdf_is_re_read()]] - `contains` [EXTRACTED]
- [[test_a_slice_indexes_text_not_bytes()]] - `contains` [EXTRACTED]
- [[test_a_small_pdf_still_passes_through_whole()]] - `contains` [EXTRACTED]
- [[test_an_oversized_pdf_is_sliced()]] - `contains` [EXTRACTED]
- [[test_bisect_slice_of_a_pdf_indexes_extracted_text_not_bytes()]] - `contains` [EXTRACTED]
- [[test_images_and_code_are_still_not_sliced()]] - `contains` [EXTRACTED]
- [[test_no_slice_exceeds_the_cap()]] - `contains` [EXTRACTED]
- [[test_plain_text_slicing_is_unchanged()]] - `contains` [EXTRACTED]
- [[test_repeated_reads_agree()]] - `contains` [EXTRACTED]
- [[test_the_fixture_is_the_shape_the_bug_needs()]] - `contains` [EXTRACTED]
- [[test_the_slices_tile_the_extracted_text_exactly()]] - `contains` [EXTRACTED]
- [[test_the_tail_reaches_the_prompt()]] - `contains` [EXTRACTED]
- [[unit_source_text()]] - `imports` [EXTRACTED]
- [[zlib]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_38