---
type: community
cohesion: 0.12
members: 16
---

# Community 353

**Cohesion:** 0.12 - loosely connected
**Members:** 16 nodes

## Members
- [[A ``--- text`` line is skipped; the next whole ``---`` line closes.]] - rationale - graphify/tests/test_cache.py
- [[A document opening with a ``----`` thematic break has no frontmatter; a later…]] - rationale - graphify/tests/test_cache.py
- [[For well-formed frontmatter the stripped body must stay byte-identical to the…]] - rationale - graphify/tests/test_cache.py
- [[Strip YAML frontmatter from Markdown content, returning only the body.]] - rationale - graphify/graphify/cache.py
- [[_body_content correctly strips YAML frontmatter.]] - rationale - graphify/tests/test_cache.py
- [[_body_content returns content unchanged when no frontmatter present.]] - rationale - graphify/tests/test_cache.py
- [[_body_content()]] - code - graphify/graphify/cache.py
- [[``--- text`` and ``----`` lines inside opened frontmatter are not the close;…]] - rationale - graphify/tests/test_cache.py
- [[``--- title`` on the first line is prose, not an open delimiter.]] - rationale - graphify/tests/test_cache.py
- [[test_body_content_dash_text_line_is_not_close_delimiter()]] - code - graphify/tests/test_cache.py
- [[test_body_content_dash_title_start_is_not_frontmatter()]] - code - graphify/tests/test_cache.py
- [[test_body_content_hr_start_is_not_frontmatter()]] - code - graphify/tests/test_cache.py
- [[test_body_content_later_proper_close_skips_dash_text_lines()]] - code - graphify/tests/test_cache.py
- [[test_body_content_no_frontmatter()]] - code - graphify/tests/test_cache.py
- [[test_body_content_strips_frontmatter()]] - code - graphify/tests/test_cache.py
- [[test_body_content_well_formed_output_byte_identical()]] - code - graphify/tests/test_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_353
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_Community 21]]
- 2 edges to [[_COMMUNITY_Community 26]]

## Top bridge nodes
- [[_body_content()]] - degree 11, connects to 2 communities
- [[test_body_content_dash_text_line_is_not_close_delimiter()]] - degree 3, connects to 1 community
- [[test_body_content_dash_title_start_is_not_frontmatter()]] - degree 3, connects to 1 community
- [[test_body_content_hr_start_is_not_frontmatter()]] - degree 3, connects to 1 community
- [[test_body_content_later_proper_close_skips_dash_text_lines()]] - degree 3, connects to 1 community