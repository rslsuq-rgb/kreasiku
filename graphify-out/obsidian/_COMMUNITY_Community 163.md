---
type: community
cohesion: 0.13
members: 31
---

# Community 163

**Cohesion:** 0.13 - loosely connected
**Members:** 31 nodes

## Members
- [[A `.svelte` file need not have a `script` block at all.]] - rationale - graphify/tests/test_svelte_extraction.py
- [[A `` comment ending one block must not hide a block on the same line.]] - rationale - graphify/tests/test_svelte_extraction.py
- [[A file that cannot be read is reported, not returned as an empty result.]] - rationale - graphify/tests/test_svelte_extraction.py
- [[A statement with no `;` before the `` comment still ends at the block.]] - rationale - graphify/tests/test_svelte_extraction.py
- [[Extract imports and symbols from .svelte files script-block AST + template…]] - rationale - graphify/graphify/extract.py
- [[Label - source_location for every node except the file node._1]] - rationale - graphify/tests/test_svelte_extraction.py
- [[Masking must not cost the imports the regex rescue already recovered.]] - rationale - graphify/tests/test_svelte_extraction.py
- [[Path_41]] - code
- [[Svelte 5 `script module` and the instance block are both code.]] - rationale - graphify/tests/test_svelte_extraction.py
- [[Tests for `.svelte` extraction (3928). A `.svelte` file is markup with one or…]] - rationale - graphify/tests/test_svelte_extraction.py
- [[The template is not JS; only `script` bodies are parsed (3928). Parsing the…]] - rationale - graphify/tests/test_svelte_extraction.py
- [[Two script bodies on one line must not parse as a single statement.]] - rationale - graphify/tests/test_svelte_extraction.py
- [[_import_targets()_1]] - code - graphify/tests/test_svelte_extraction.py
- [[_labels()_2]] - code - graphify/tests/test_svelte_extraction.py
- [[_write()_9]] - code - graphify/tests/test_svelte_extraction.py
- [[`script lang=ts` must be parsed with the TS grammar, not JS.]] - rationale - graphify/tests/test_svelte_extraction.py
- [[`script type=applicationld+json` is data, not statements.]] - rationale - graphify/tests/test_svelte_extraction.py
- [[`{await import('.X.svelte')}` lives in markup, so the regex pass owns it.]] - rationale - graphify/tests/test_svelte_extraction.py
- [[extract_svelte()]] - code - graphify/graphify/extract.py
- [[test_extract_svelte_comment_after_unterminated_statement()]] - code - graphify/tests/test_svelte_extraction.py
- [[test_extract_svelte_dynamic_import_in_template()]] - code - graphify/tests/test_svelte_extraction.py
- [[test_extract_svelte_lang_ts_parses_type_syntax()]] - code - graphify/tests/test_svelte_extraction.py
- [[test_extract_svelte_line_comment_does_not_swallow_next_script()]] - code - graphify/tests/test_svelte_extraction.py
- [[test_extract_svelte_markup_only_component_does_not_crash()]] - code - graphify/tests/test_svelte_extraction.py
- [[test_extract_svelte_non_js_script_type_is_not_parsed_as_code()]] - code - graphify/tests/test_svelte_extraction.py
- [[test_extract_svelte_parses_module_and_instance_scripts()]] - code - graphify/tests/test_svelte_extraction.py
- [[test_extract_svelte_scripts_on_one_line_do_not_merge()]] - code - graphify/tests/test_svelte_extraction.py
- [[test_extract_svelte_static_import_still_resolves()]] - code - graphify/tests/test_svelte_extraction.py
- [[test_extract_svelte_template_is_not_a_parse_error()]] - code - graphify/tests/test_svelte_extraction.py
- [[test_extract_svelte_unreadable_file_reports_error()]] - code - graphify/tests/test_svelte_extraction.py
- [[test_svelte_extraction.py]] - code - graphify/tests/test_svelte_extraction.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_163
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 1]]
- 3 edges to [[_COMMUNITY_Community 3]]
- 2 edges to [[_COMMUNITY_Community 13]]
- 1 edge to [[_COMMUNITY_Community 0]]
- 1 edge to [[_COMMUNITY_Community 56]]
- 1 edge to [[_COMMUNITY_Community 54]]
- 1 edge to [[_COMMUNITY_Community 37]]

## Top bridge nodes
- [[extract_svelte()]] - degree 26, connects to 7 communities
- [[test_svelte_extraction.py]] - degree 18, connects to 2 communities