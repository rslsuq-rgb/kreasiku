---
type: community
cohesion: 0.07
members: 28
---

# Community 189

**Cohesion:** 0.07 - loosely connected
**Members:** 28 nodes

## Members
- [[Chinese text should use the cached jieba module and keep the original term.]] - rationale - graphify/tests/test_serve.py
- [[End-to-end for 1900 a German question over a graph with German heading-noise…]] - rationale - graphify/tests/test_serve.py
- [[Mixed Chinese and English text should be handled correctly.]] - rationale - graphify/tests/test_serve.py
- [[Segment Chinese text and keep the original term for exact matching.]] - rationale - graphify/graphify/serve.py
- [[Split a query into searchable terms, segmenting Chinese text, then drop…]] - rationale - graphify/graphify/serve.py
- [[Splitting on `_` broadens seeding, so an unrelated single-token node can now be…]] - rationale - graphify/tests/test_serve.py
- [[Splitting on `_` must not break plain snake_case lookups.]] - rationale - graphify/tests/test_serve.py
- [[True if term is Chinese, non-English, or an English word longer than 2 chars.]] - rationale - graphify/graphify/serve.py
- [[_has_chinese()]] - code - graphify/graphify/serve.py
- [[_is_searchable()]] - code - graphify/graphify/serve.py
- [[_query_terms()]] - code - graphify/graphify/serve.py
- [[_segment_chinese()]] - code - graphify/graphify/serve.py
- [[cut()]] - code - graphify/tests/test_serve.py
- [[cut()_1]] - code - graphify/tests/test_serve.py
- [[rSeparator-blind seeding `_` must split like `-` does. `w` counts `_` as a…]] - rationale - graphify/tests/test_serve.py
- [[test_pick_seeds_german_query_seeds_content_node_not_heading_noise()]] - code - graphify/tests/test_serve.py
- [[test_query_terms_all_german_stopwords_falls_back_to_unfiltered()]] - code - graphify/tests/test_serve.py
- [[test_query_terms_all_stopwords_falls_back_to_unfiltered()]] - code - graphify/tests/test_serve.py
- [[test_query_terms_chinese_mixed()]] - code - graphify/tests/test_serve.py
- [[test_query_terms_chinese_segments_with_cached_jieba()]] - code - graphify/tests/test_serve.py
- [[test_query_terms_drops_german_question_stopwords()]] - code - graphify/tests/test_serve.py
- [[test_query_terms_drops_get_question_filler()]] - code - graphify/tests/test_serve.py
- [[test_query_terms_drops_question_stopwords()]] - code - graphify/tests/test_serve.py
- [[test_query_terms_filters_only_short_english_terms()]] - code - graphify/tests/test_serve.py
- [[test_query_terms_strips_search_punctuation()]] - code - graphify/tests/test_serve.py
- [[test_snake_case_identifier_still_matches_itself()]] - code - graphify/tests/test_serve.py
- [[test_underscore_query_does_not_let_a_single_token_outrank_the_real_match()]] - code - graphify/tests/test_serve.py
- [[test_underscore_query_matches_hyphenated_label()]] - code - graphify/tests/test_serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_189
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_Community 12]]
- 5 edges to [[_COMMUNITY_Community 57]]
- 2 edges to [[_COMMUNITY_Community 238]]
- 2 edges to [[_COMMUNITY_Community 237]]
- 1 edge to [[_COMMUNITY_Community 159]]
- 1 edge to [[_COMMUNITY_Community 165]]

## Top bridge nodes
- [[_query_terms()]] - degree 27, connects to 5 communities
- [[test_pick_seeds_german_query_seeds_content_node_not_heading_noise()]] - degree 5, connects to 3 communities
- [[test_query_terms_chinese_segments_with_cached_jieba()]] - degree 4, connects to 1 community
- [[test_snake_case_identifier_still_matches_itself()]] - degree 4, connects to 1 community
- [[test_underscore_query_does_not_let_a_single_token_outrank_the_real_match()]] - degree 4, connects to 1 community