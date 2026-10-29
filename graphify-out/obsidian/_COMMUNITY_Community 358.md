---
type: community
cohesion: 0.12
members: 16
---

# Community 358

**Cohesion:** 0.12 - loosely connected
**Members:** 16 nodes

## Members
- [[A `---` that is not on line 1 is a horizontal rule.]] - rationale - graphify/tests/test_languages.py
- [[A plain document must not grow an empty frontmatter dict.]] - rationale - graphify/tests/test_languages.py
- [[An opening `---` with no closing fence must not swallow the document.]] - rationale - graphify/tests/test_languages.py
- [[Headings must be filterable. file_type is 'document' for both, so a consumer…]] - rationale - graphify/tests/test_languages.py
- [[Nested blocks (a coherence_check record) must not be flattened away.]] - rationale - graphify/tests/test_languages.py
- [[Write src to a temp .md file and extract it.]] - rationale - graphify/tests/test_languages.py
- [[_md_extract()]] - code - graphify/tests/test_languages.py
- [[`` inside frontmatter is a YAML comment, not an H1.]] - rationale - graphify/tests/test_languages.py
- [[test_markdown_frontmatter_lands_on_page_node()]] - code - graphify/tests/test_languages.py
- [[test_markdown_horizontal_rule_is_not_frontmatter()]] - code - graphify/tests/test_languages.py
- [[test_markdown_malformed_frontmatter_does_not_raise()]] - code - graphify/tests/test_languages.py
- [[test_markdown_nested_frontmatter_survives()]] - code - graphify/tests/test_languages.py
- [[test_markdown_no_frontmatter_key_when_absent()]] - code - graphify/tests/test_languages.py
- [[test_markdown_node_kind_separates_pages_from_headings()]] - code - graphify/tests/test_languages.py
- [[test_markdown_unterminated_frontmatter_fence_is_content()]] - code - graphify/tests/test_languages.py
- [[test_markdown_yaml_comment_is_not_a_heading()]] - code - graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_358
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_Community 8]]
- 4 edges to [[_COMMUNITY_Community 29]]
- 1 edge to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 67]]

## Top bridge nodes
- [[_md_extract()]] - degree 12, connects to 3 communities
- [[test_markdown_horizontal_rule_is_not_frontmatter()]] - degree 4, connects to 2 communities
- [[test_markdown_unterminated_frontmatter_fence_is_content()]] - degree 4, connects to 2 communities
- [[test_markdown_yaml_comment_is_not_a_heading()]] - degree 4, connects to 2 communities
- [[test_markdown_malformed_frontmatter_does_not_raise()]] - degree 3, connects to 2 communities