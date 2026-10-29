---
type: community
cohesion: 0.08
members: 50
---

# Community 90

**Cohesion:** 0.08 - loosely connected
**Members:** 50 nodes

## Members
- [[A mention whose edge is already in the graph still counts as citing its target.…]] - rationale - graphify/tests/test_markdown_code_spans.py
- [[A node's label as a document would write it no ``()``, no leading dot.]] - rationale - graphify/graphify/markdown_resolution.py
- [[A trailing () is explicit evidence, so the owner does not have to be cited…]] - rationale - graphify/tests/test_markdown_code_spans.py
- [[Any_16]] - code
- [[Classify one inline code span as a symbol mention, or None. Returns ``(path,…]] - rationale - graphify/graphify/extractors/markdown.py
- [[Cross-file resolution of code-span mentions in Markdown documents.…]] - rationale - graphify/graphify/markdown_resolution.py
- [[Labels a dotted mention may qualify ``node_id`` with. The labels of every node…]] - rationale - graphify/graphify/markdown_resolution.py
- [[Markdown code-span mentions become heading --references-- symbol edges.…]] - rationale - graphify/tests/test_markdown_code_spans.py
- [[The extra owner test is scoped to methods; a free function label stays evidence…]] - rationale - graphify/tests/test_markdown_code_spans.py
- [[The owner evidence is per document one doc's mention cannot license another's…]] - rationale - graphify/tests/test_markdown_code_spans.py
- [[The scanned source file a ``pathName`` mention names, or None. Tries the path…]] - rationale - graphify/graphify/markdown_resolution.py
- [[The watch reconcile owns authored ``link(file)`` edges, not mentions. A…]] - rationale - graphify/tests/test_markdown_code_spans.py
- [[Turn ``language markdown`` raw calls into ``references`` edges in place.]] - rationale - graphify/graphify/markdown_resolution.py
- [[_add()_5]] - code - graphify/graphify/markdown_resolution.py
- [[_code_span_mention()]] - code - graphify/graphify/extractors/markdown.py
- [[_evidence()]] - code - graphify/graphify/markdown_resolution.py
- [[_extract()_56]] - code - graphify/tests/test_markdown_code_spans.py
- [[_is_file_node()_2]] - code - graphify/graphify/markdown_resolution.py
- [[_markdown_raw_calls()]] - code - graphify/graphify/markdown_resolution.py
- [[_match_cited_file()]] - code - graphify/graphify/markdown_resolution.py
- [[_method_owner()_1]] - code - graphify/graphify/markdown_resolution.py
- [[_node()_15]] - code - graphify/tests/test_markdown_code_spans.py
- [[_pairs()_4]] - code - graphify/tests/test_markdown_code_spans.py
- [[_posix()]] - code - graphify/graphify/markdown_resolution.py
- [[_references()_1]] - code - graphify/tests/test_markdown_code_spans.py
- [[_resolve_chain()]] - code - graphify/graphify/markdown_resolution.py
- [[_symbol_label()]] - code - graphify/graphify/markdown_resolution.py
- [[_target()]] - code - graphify/graphify/markdown_resolution.py
- [[`redis` the server is prose, not a reference to whichever method is named redis…]] - rationale - graphify/tests/test_markdown_code_spans.py
- [[`successWithWarnings` next to `HandlerResult` is a real reference (4609).]] - rationale - graphify/tests/test_markdown_code_spans.py
- [[add_mention()]] - code - graphify/graphify/extractors/markdown.py
- [[markdown_resolution.py]] - code - graphify/graphify/markdown_resolution.py
- [[mention_edges()]] - code - graphify/tests/test_markdown_code_spans.py
- [[resolve_markdown_mentions()]] - code - graphify/graphify/markdown_resolution.py
- [[test_ambiguous_bare_name_yields_no_edge()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_bare_function_mention_still_resolves_without_its_owner()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_bare_lowercase_word_does_not_link_to_an_unrelated_method()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_bare_method_mention_survives_when_the_document_cites_its_class()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_bare_method_with_parentheses_still_resolves()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_cited_file_matching()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_code_span_mentions_are_classified()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_dotted_mentions_need_qualifier_evidence()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_extract_markdown_heading_code_span_belongs_to_that_heading()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_extract_markdown_reports_mentions_as_markdown_raw_calls()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_markdown_code_spans.py]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_mentions_resolve_to_references_edges_end_to_end()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_mentions_survive_a_rebuild_over_an_existing_graph()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_mentions_survive_the_extraction_cache()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_owner_cited_in_another_document_does_not_count()]] - code - graphify/tests/test_markdown_code_spans.py
- [[test_owner_evidence_survives_an_edge_that_already_exists()]] - code - graphify/tests/test_markdown_code_spans.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_90
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 3]]
- 4 edges to [[_COMMUNITY_Community 67]]
- 3 edges to [[_COMMUNITY_Community 1]]
- 3 edges to [[_COMMUNITY_Community 19]]
- 2 edges to [[_COMMUNITY_Community 107]]
- 2 edges to [[_COMMUNITY_Community 14]]
- 2 edges to [[_COMMUNITY_Community 34]]
- 1 edge to [[_COMMUNITY_Community 18]]
- 1 edge to [[_COMMUNITY_Community 115]]

## Top bridge nodes
- [[test_markdown_code_spans.py]] - degree 31, connects to 7 communities
- [[markdown_resolution.py]] - degree 14, connects to 3 communities
- [[_extract()_56]] - degree 12, connects to 2 communities
- [[_is_file_node()_2]] - degree 6, connects to 2 communities
- [[resolve_markdown_mentions()]] - degree 13, connects to 1 community