---
type: community
cohesion: 0.06
members: 50
---

# Community 89

**Cohesion:** 0.06 - loosely connected
**Members:** 50 nodes

## Members
- [[4527 a PDF pypdf cannot read still returns , but must say so on stderr…]] - rationale - graphify/tests/test_pdf_extra_warning.py
- [[A PDF larger than the raw cap is skipped before pypdf opens it.]] - rationale - graphify/tests/test_office_limits.py
- [[A corpus of many PDFs with pypdf missing must produce exactly one warning, not…]] - rationale - graphify/tests/test_pdf_extra_warning.py
- [[A normal multi-member office zip passes the streaming-ceiling pass.]] - rationale - graphify/tests/test_office_limits.py
- [[A readable PDF with no text layer is not a failure and stays silent.]] - rationale - graphify/tests/test_pdf_extra_warning.py
- [[A tiny file that expands far past the ratio threshold is rejected.]] - rationale - graphify/tests/test_office_limits.py
- [[An encrypted PDF opened without its password is a failed read, not an empty…]] - rationale - graphify/tests/test_pdf_extra_warning.py
- [[Binary media stays discoverable without being decoded or counted as text.]] - rationale - graphify/tests/test_binary_media_words.py
- [[Convert an .xlsx file to markdown text using openpyxl.]] - rationale - graphify/graphify/detect.py
- [[Extract plain text from a PDF file using pypdf. Returns ```` when the file…]] - rationale - graphify/graphify/detect.py
- [[Path_241]] - code
- [[Reject a zip-based office file that is a likely zipXML bomb. Two layers,…]] - rationale - graphify/graphify/detect.py
- [[Resource-cap guards for parsing untrusted officePDF files (F2). .docx.xlsx…]] - rationale - graphify/tests/test_office_limits.py
- [[Tests for PDF text extraction warning when pypdf is missing (3702).]] - rationale - graphify/tests/test_pdf_extra_warning.py
- [[The live converters bail out (return ) on a bomb before parsing.]] - rationale - graphify/tests/test_office_limits.py
- [[True if path exists and its on-disk size is within cap.]] - rationale - graphify/graphify/detect.py
- [[With a low decompressed cap, content whose actual bytes exceed it is rejected.…]] - rationale - graphify/tests/test_office_limits.py
- [[_file_within_size_cap()]] - code - graphify/graphify/detect.py
- [[_reset_failed_warned()]] - code - graphify/tests/test_pdf_extra_warning.py
- [[_reset_warn_flag()_1]] - code - graphify/tests/test_pdf_extra_warning.py
- [[_write_zip()]] - code - graphify/tests/test_office_limits.py
- [[_zip_within_caps()]] - code - graphify/graphify/detect.py
- [[count_words()]] - code - graphify/graphify/detect.py
- [[detect() and the semantic pass both read the same PDF; one bad file must warn…]] - rationale - graphify/tests/test_pdf_extra_warning.py
- [[extract_pdf_text()]] - code - graphify/graphify/detect.py
- [[fixture_35]] - code
- [[parametrize_114]] - code
- [[test_binary_media_words.py]] - code - graphify/tests/test_binary_media_words.py
- [[test_converters_return_empty_for_bomb()]] - code - graphify/tests/test_office_limits.py
- [[test_count_words_does_not_read_binary_media()]] - code - graphify/tests/test_binary_media_words.py
- [[test_count_words_preserves_document_extraction()]] - code - graphify/tests/test_binary_media_words.py
- [[test_count_words_preserves_text()]] - code - graphify/tests/test_binary_media_words.py
- [[test_count_words_sample_md()]] - code - graphify/tests/test_detect.py
- [[test_detect_keeps_media_without_counting_it()]] - code - graphify/tests/test_binary_media_words.py
- [[test_extract_pdf_text_empty_but_valid_pdf_does_not_warn()]] - code - graphify/tests/test_pdf_extra_warning.py
- [[test_extract_pdf_text_encrypted_pdf_warns()]] - code - graphify/tests/test_pdf_extra_warning.py
- [[test_extract_pdf_text_missing_pypdf_warns()]] - code - graphify/tests/test_pdf_extra_warning.py
- [[test_extract_pdf_text_missing_pypdf_warns_once_across_many_pdfs()]] - code - graphify/tests/test_pdf_extra_warning.py
- [[test_extract_pdf_text_unreadable_pdf_warns()]] - code - graphify/tests/test_pdf_extra_warning.py
- [[test_extract_pdf_text_unreadable_pdf_warns_once_per_file()]] - code - graphify/tests/test_pdf_extra_warning.py
- [[test_file_within_size_cap()]] - code - graphify/tests/test_office_limits.py
- [[test_legit_multi_member_passes_streaming()]] - code - graphify/tests/test_office_limits.py
- [[test_legit_zip_passes()]] - code - graphify/tests/test_office_limits.py
- [[test_non_zip_rejected()]] - code - graphify/tests/test_office_limits.py
- [[test_office_limits.py]] - code - graphify/tests/test_office_limits.py
- [[test_pdf_extra_warning.py]] - code - graphify/tests/test_pdf_extra_warning.py
- [[test_pdf_over_cap_returns_empty()]] - code - graphify/tests/test_office_limits.py
- [[test_streaming_ceiling_rejects_oversized_actual()]] - code - graphify/tests/test_office_limits.py
- [[test_zip_ratio_bomb_rejected()]] - code - graphify/tests/test_office_limits.py
- [[xlsx_to_markdown()]] - code - graphify/graphify/detect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_89
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_Community 33]]
- 8 edges to [[_COMMUNITY_Community 5]]
- 6 edges to [[_COMMUNITY_Community 19]]
- 3 edges to [[_COMMUNITY_Community 251]]
- 3 edges to [[_COMMUNITY_Community 38]]
- 2 edges to [[_COMMUNITY_Community 26]]
- 2 edges to [[_COMMUNITY_Community 59]]
- 2 edges to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 262]]
- 1 edge to [[_COMMUNITY_Community 32]]
- 1 edge to [[_COMMUNITY_Community 58]]
- 1 edge to [[_COMMUNITY_Community 45]]
- 1 edge to [[_COMMUNITY_Community 109]]

## Top bridge nodes
- [[test_binary_media_words.py]] - degree 13, connects to 6 communities
- [[test_pdf_extra_warning.py]] - degree 14, connects to 4 communities
- [[count_words()]] - degree 11, connects to 4 communities
- [[extract_pdf_text()]] - degree 16, connects to 3 communities
- [[test_office_limits.py]] - degree 13, connects to 3 communities