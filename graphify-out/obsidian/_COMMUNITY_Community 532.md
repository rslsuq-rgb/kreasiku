---
type: community
cohesion: 0.25
members: 8
---

# Community 532

**Cohesion:** 0.25 - loosely connected
**Members:** 8 nodes

## Members
- [[Invalid JSON returns an error instead of raising.]] - rationale - graphify/tests/test_semantic_cleanup.py
- [[Load and validate a semantic chunk, rejecting oversize files before parsing.…]] - rationale - graphify/graphify/semantic_cleanup.py
- [[Oversize files are rejected by stat() — payload is never parsed.]] - rationale - graphify/tests/test_semantic_cleanup.py
- [[Path_217]] - code
- [[load_validated_semantic_fragment()]] - code - graphify/graphify/semantic_cleanup.py
- [[test_load_validated_semantic_fragment_accepts_valid()]] - code - graphify/tests/test_semantic_cleanup.py
- [[test_load_validated_semantic_fragment_rejects_invalid_json()]] - code - graphify/tests/test_semantic_cleanup.py
- [[test_load_validated_semantic_fragment_rejects_oversize_before_parse()]] - code - graphify/tests/test_semantic_cleanup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_532
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Community 241]]
- 2 edges to [[_COMMUNITY_Community 17]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 524]]

## Top bridge nodes
- [[load_validated_semantic_fragment()]] - degree 10, connects to 4 communities
- [[test_load_validated_semantic_fragment_accepts_valid()]] - degree 3, connects to 1 community
- [[test_load_validated_semantic_fragment_rejects_invalid_json()]] - degree 3, connects to 1 community
- [[test_load_validated_semantic_fragment_rejects_oversize_before_parse()]] - degree 3, connects to 1 community