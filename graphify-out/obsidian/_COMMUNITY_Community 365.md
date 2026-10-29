---
type: community
cohesion: 0.13
members: 15
---

# Community 365

**Cohesion:** 0.13 - loosely connected
**Members:** 15 nodes

## Members
- [[Lowercase + collapse non-word runs to space (Unicode-aware). Combining marks…]] - rationale - graphify/graphify/dedup.py
- [[Shannon entropy in bitschar of the normalised label.]] - rationale - graphify/graphify/dedup.py
- [[The prefix-extension guard must fire for pairs where one is a strict prefix of…]] - rationale - graphify/tests/test_dedup.py
- [[The prefix-extension guard must not fire for same-length pairs — only strict…]] - rationale - graphify/tests/test_dedup.py
- [[True for a character that belongs to a word in a label. Letters and digits,…]] - rationale - graphify/graphify/dedup.py
- [[_entropy()]] - code - graphify/graphify/dedup.py
- [[_is_label_char()]] - code - graphify/graphify/dedup.py
- [[_norm()_1]] - code - graphify/graphify/dedup.py
- [[test_entropy_empty_string()]] - code - graphify/tests/test_dedup.py
- [[test_entropy_normal_label_high()]] - code - graphify/tests/test_dedup.py
- [[test_entropy_short_label_low()]] - code - graphify/tests/test_dedup.py
- [[test_norm_keeps_combining_marks()]] - code - graphify/tests/test_dedup.py
- [[test_norm_still_separates_punctuation_for_latin()]] - code - graphify/tests/test_dedup.py
- [[test_prefix_guard_does_not_block_same_length_typos()]] - code - graphify/tests/test_dedup.py
- [[test_prefix_guard_fires_for_extension_pairs()]] - code - graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_365
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_Community 15]]
- 4 edges to [[_COMMUNITY_Community 63]]
- 1 edge to [[_COMMUNITY_Community 196]]

## Top bridge nodes
- [[_norm()_1]] - degree 12, connects to 3 communities
- [[_entropy()]] - degree 8, connects to 2 communities
- [[_is_label_char()]] - degree 3, connects to 1 community
- [[test_prefix_guard_does_not_block_same_length_typos()]] - degree 3, connects to 1 community
- [[test_prefix_guard_fires_for_extension_pairs()]] - degree 3, connects to 1 community