---
type: community
cohesion: 0.06
members: 68
---

# Community 57

**Cohesion:** 0.06 - loosely connected
**Members:** 68 nodes

## Members
- [[NOTE no decorators here — the handlers below are plain coroutines,]] - rationale - graphify/graphify/serve.py
- [[ADR-0001 finding 1 the resolver both tools now use returns an Ambiguous…]] - rationale - graphify/tests/test_serve.py
- [[Character trigrams of `text`; for 3-char text the whole string is the key.]] - rationale - graphify/graphify/serve.py
- [[Concatenate every field _score_nodes  _find_node match a query against, so one…]] - rationale - graphify/graphify/serve.py
- [[Does the RAW, unsplit query already exact-match some node's own labelid…]] - rationale - graphify/graphify/serve.py
- [[Graph_18]] - code
- [[IDF weights for query terms, cached in G.graph'_idf_cache'. Common terms like…]] - rationale - graphify/graphify/serve.py
- [[Lazily build and cache a trigram - node-position postings map on the graph.…]] - rationale - graphify/graphify/serve.py
- [[NamedTuple]] - code
- [[Node IDs whose text could contain any `needle` as a substring, via the trigram…]] - rationale - graphify/graphify/serve.py
- [[Nodes named by a dotted Python symbol such as `pkg.mod.func` (4366).]] - rationale - graphify/graphify/serve.py
- [[Nodes whose source_file matches path_part and labelid matches symbol_part.…]] - rationale - graphify/graphify/serve.py
- [[One node id per distinct file in tier, or `` for a single file. A file is…]] - rationale - graphify/graphify/serve.py
- [[Per-query scoring result, returned by the private `_score_query` helper.…]] - rationale - graphify/graphify/serve.py
- [[Pick a path endpoint from a _score_nodes result, preferring full-token matches.…]] - rationale - graphify/graphify/serve.py
- [[Prefix matching is how a caller starts typing a name, so it still resolves.]] - rationale - graphify/tests/test_serve.py
- [[Refusal for a `filesymbol` endpoint whose file defines no such symbol…]] - rationale - graphify/graphify/serve.py
- [[Refusal message when the winning tier names more than one node, else None.…]] - rationale - graphify/graphify/serve.py
- [[Refuse a `query``--seed` value only when it is a literal node NAME that…]] - rationale - graphify/graphify/serve.py
- [[Resolve one endpoint of the `path` CLI  `shortest_path` tool (3913). A hit in…]] - rationale - graphify/graphify/serve.py
- [[Return match tiers in precedence order (source_exact, exact, prefix,…]] - rationale - graphify/graphify/serve.py
- [[Return rival candidates when the winning match tier spans several source files.…]] - rationale - graphify/graphify/serve.py
- [[Shared node resolution for the `explain` CLI command and the get_node …]] - rationale - graphify/graphify/serve.py
- [[Single-pass combined scorer that optionally also records the best seed for each…]] - rationale - graphify/graphify/serve.py
- [[Split text into word tokens, stripping punctuation and diacritics. `_` is a…]] - rationale - graphify/graphify/serve.py
- [[The node's `attributes` key-value pairs normalized and tokenized for search.]] - rationale - graphify/graphify/serve.py
- [[The node's `rationale` attribute normalized like a label (diacritics folded,…]] - rationale - graphify/graphify/serve.py
- [[True for a refusal that lists candidates, False for a miss (no node matched).]] - rationale - graphify/graphify/serve.py
- [[_QueryScores]] - code - graphify/graphify/serve.py
- [[_ambiguity_message()]] - code - graphify/graphify/serve.py
- [[_compute_idf()]] - code - graphify/graphify/serve.py
- [[_find_node_tiers()]] - code - graphify/graphify/serve.py
- [[_flatten_attr_text()]] - code - graphify/graphify/serve.py
- [[_get_trigram_index()]] - code - graphify/graphify/serve.py
- [[_infer_context_filters()]] - code - graphify/graphify/serve.py
- [[_is_ambiguity_refusal()]] - code - graphify/graphify/serve.py
- [[_label_has_literal_exact_match()]] - code - graphify/graphify/serve.py
- [[_near_miss_message()]] - code - graphify/graphify/serve.py
- [[_no_scoped_match_message()]] - code - graphify/graphify/serve.py
- [[_node_attributes_text()]] - code - graphify/graphify/serve.py
- [[_node_rationale_text()]] - code - graphify/graphify/serve.py
- [[_node_search_text()]] - code - graphify/graphify/serve.py
- [[_normalize_context_filters()]] - code - graphify/graphify/serve.py
- [[_pick_scored_endpoint()]] - code - graphify/graphify/serve.py
- [[_query_name_refusal()]] - code - graphify/graphify/serve.py
- [[_resolve_context_filters()]] - code - graphify/graphify/serve.py
- [[_resolve_path_endpoint()]] - code - graphify/graphify/serve.py
- [[_resolve_path_scoped_symbol()]] - code - graphify/graphify/serve.py
- [[_resolve_python_qualified()]] - code - graphify/graphify/serve.py
- [[_resolve_single_node()]] - code - graphify/graphify/serve.py
- [[_rivals_across_files()]] - code - graphify/graphify/serve.py
- [[_same_file_ambiguity_message()]] - code - graphify/graphify/serve.py
- [[_score_query()]] - code - graphify/graphify/serve.py
- [[_search_tokens()]] - code - graphify/graphify/serve.py
- [[_strip_diacritics()]] - code - graphify/graphify/serve.py
- [[_tier_refusal()]] - code - graphify/graphify/serve.py
- [[_trigram_candidates()]] - code - graphify/graphify/serve.py
- [[_trigrams()]] - code - graphify/graphify/serve.py
- [[`No exact match`, then the substring matches that are the closest names…]] - rationale - graphify/graphify/serve.py
- [[`path` refuses the same dotted tie `get_node``explain` do (4366).]] - rationale - graphify/tests/test_serve.py
- [[array]] - concept
- [[find_node_ambiguity()]] - code - graphify/graphify/serve.py
- [[jieba]] - concept
- [[serve.py]] - code - graphify/graphify/serve.py
- [[test_dotted_python_symbol_same_file_tie_is_refused_by_path_endpoint()]] - code - graphify/tests/test_serve.py
- [[test_resolve_single_node_shared_by_get_node_and_get_neighbors()]] - code - graphify/tests/test_serve.py
- [[test_resolve_single_node_still_takes_a_prefix_shorthand()]] - code - graphify/tests/test_serve.py
- [[where()]] - code - graphify/graphify/serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_57
SORT file.name ASC
```

## Connections to other communities
- 55 edges to [[_COMMUNITY_Community 12]]
- 13 edges to [[_COMMUNITY_Community 134]]
- 12 edges to [[_COMMUNITY_Community 103]]
- 11 edges to [[_COMMUNITY_Community 238]]
- 9 edges to [[_COMMUNITY_Community 128]]
- 8 edges to [[_COMMUNITY_Community 237]]
- 7 edges to [[_COMMUNITY_Community 165]]
- 7 edges to [[_COMMUNITY_Community 17]]
- 6 edges to [[_COMMUNITY_Community 50]]
- 6 edges to [[_COMMUNITY_Community 86]]
- 5 edges to [[_COMMUNITY_Community 159]]
- 5 edges to [[_COMMUNITY_Community 189]]
- 4 edges to [[_COMMUNITY_Community 65]]
- 4 edges to [[_COMMUNITY_Community 211]]
- 4 edges to [[_COMMUNITY_Community 3]]
- 3 edges to [[_COMMUNITY_Community 551]]
- 3 edges to [[_COMMUNITY_Community 396]]
- 3 edges to [[_COMMUNITY_Community 19]]
- 2 edges to [[_COMMUNITY_Community 11]]
- 2 edges to [[_COMMUNITY_Community 158]]
- 2 edges to [[_COMMUNITY_Community 279]]
- 2 edges to [[_COMMUNITY_Community 53]]
- 2 edges to [[_COMMUNITY_Community 9]]
- 1 edge to [[_COMMUNITY_Community 607]]
- 1 edge to [[_COMMUNITY_Community 119]]
- 1 edge to [[_COMMUNITY_Community 145]]
- 1 edge to [[_COMMUNITY_Community 299]]
- 1 edge to [[_COMMUNITY_Community 300]]
- 1 edge to [[_COMMUNITY_Community 305]]
- 1 edge to [[_COMMUNITY_Community 47]]
- 1 edge to [[_COMMUNITY_Community 2]]
- 1 edge to [[_COMMUNITY_Community 136]]
- 1 edge to [[_COMMUNITY_Community 233]]
- 1 edge to [[_COMMUNITY_Community 23]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 7]]
- 1 edge to [[_COMMUNITY_Community 246]]
- 1 edge to [[_COMMUNITY_Community 312]]

## Top bridge nodes
- [[serve.py]] - degree 119, connects to 35 communities
- [[Graph_18]] - degree 36, connects to 7 communities
- [[_score_query()]] - degree 29, connects to 6 communities
- [[_resolve_single_node()]] - degree 22, connects to 6 communities
- [[_search_tokens()]] - degree 20, connects to 3 communities