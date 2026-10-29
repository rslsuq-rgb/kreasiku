---
type: community
cohesion: 0.25
members: 8
---

# Community 527

**Cohesion:** 0.25 - loosely connected
**Members:** 8 nodes

## Members
- [[True when tokens x and y read as one word misspelt, not two words (2576). A…]] - rationale - graphify/graphify/dedup.py
- [[True when two equal-token-count labels differ in at least one swapped content…]] - rationale - graphify/graphify/dedup.py
- [[_content_token_swap fires when any same-position pair is a swap of two distinct…]] - rationale - graphify/tests/test_dedup.py
- [[_content_token_swap()]] - code - graphify/graphify/dedup.py
- [[_same_word_variant separates one-word misspellings from two words (2576 DELTA…]] - rationale - graphify/tests/test_dedup.py
- [[_same_word_variant()]] - code - graphify/graphify/dedup.py
- [[test_content_token_swap_helper()]] - code - graphify/tests/test_dedup.py
- [[test_same_word_variant_helper()]] - code - graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_527
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Community 15]]
- 2 edges to [[_COMMUNITY_Community 63]]
- 1 edge to [[_COMMUNITY_Community 196]]

## Top bridge nodes
- [[_content_token_swap()]] - degree 7, connects to 3 communities
- [[_same_word_variant()]] - degree 5, connects to 2 communities
- [[test_content_token_swap_helper()]] - degree 3, connects to 1 community
- [[test_same_word_variant_helper()]] - degree 3, connects to 1 community