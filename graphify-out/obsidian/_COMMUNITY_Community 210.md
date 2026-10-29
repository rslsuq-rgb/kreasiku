---
type: community
cohesion: 0.13
members: 26
---

# Community 210

**Cohesion:** 0.13 - loosely connected
**Members:** 26 nodes

## Members
- [[A UTF-16 (BOM) .graphifyignore — what PowerShell Set-Content and Notepad…]] - rationale - graphify/tests/test_ignore_file_encoding.py
- [[Direct check the decoded text is clean UTF-16, not latin-1 mojibake.]] - rationale - graphify/tests/test_ignore_file_encoding.py
- [[Read an ignore file, preferring UTF-8 but never silently dropping a rule. These…]] - rationale - graphify/graphify/detect.py
- [[The actual regression every rule survives, even if a third encoding renders it…]] - rationale - graphify/tests/test_ignore_file_encoding.py
- [[The control the format we document keeps working, with no warning.]] - rationale - graphify/tests/test_ignore_file_encoding.py
- [[The existing NFCNFD guarantee must survive the new decode path.]] - rationale - graphify/tests/test_ignore_file_encoding.py
- [[The previous contract reading an ignore file cannot blow up a scan.]] - rationale - graphify/tests/test_ignore_file_encoding.py
- [[The reported case a cp1252 .graphifyignore must still exclude.]] - rationale - graphify/tests/test_ignore_file_encoding.py
- [[_corpus()_6]] - code - graphify/tests/test_ignore_file_encoding.py
- [[_read_ignore_text()]] - code - graphify/graphify/detect.py
- [[_scanned()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[parametrize_31]] - code
- [[rAn ignore file that is not valid UTF-8 must not silently lose its rules.…]] - rationale - graphify/tests/test_ignore_file_encoding.py
- [[test_ansi_encoded_rule_still_excludes()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_ansi_encoded_rule_warns_once_naming_the_file()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_ascii_rules_are_untouched()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_decoding_never_raises_on_arbitrary_bytes()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_empty_file_is_empty()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_ignore_file_encoding.py]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_no_byte_is_dropped_from_a_mis_encoded_file()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_no_warning_for_a_clean_utf8_file()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_utf16_bom_encoded_rule_still_excludes()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_utf16_is_decoded_without_nul_garbage()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_utf8_rule_is_unaffected()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_utf8_rules_still_match_across_normalisation_forms()]] - code - graphify/tests/test_ignore_file_encoding.py
- [[test_utf8_with_bom_is_still_stripped()]] - code - graphify/tests/test_ignore_file_encoding.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_210
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_Community 5]]
- 4 edges to [[_COMMUNITY_Community 33]]
- 2 edges to [[_COMMUNITY_Community 176]]
- 1 edge to [[_COMMUNITY_Community 108]]
- 1 edge to [[_COMMUNITY_Community 59]]

## Top bridge nodes
- [[test_ignore_file_encoding.py]] - degree 20, connects to 4 communities
- [[_read_ignore_text()]] - degree 11, connects to 2 communities
- [[test_utf8_rules_still_match_across_normalisation_forms()]] - degree 7, connects to 2 communities
- [[test_ansi_encoded_rule_still_excludes()]] - degree 5, connects to 1 community
- [[test_utf16_bom_encoded_rule_still_excludes()]] - degree 5, connects to 1 community