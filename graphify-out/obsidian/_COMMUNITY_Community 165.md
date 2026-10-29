---
type: community
cohesion: 0.08
members: 31
---

# Community 165

**Cohesion:** 0.08 - loosely connected
**Members:** 31 nodes

## Members
- [[Five terms with exact label matches; apple is common (eight more labels…]] - rationale - graphify/tests/test_query_seed_order.py
- [[FooBarService at 1000 vs error nodes at 1.0 → only 1 seed chosen.]] - rationale - graphify/tests/test_serve.py
- [[Gbest_seed_by_term are optional and default to None existing callers see…]] - rationale - graphify/tests/test_serve.py
- [[Many nodes sharing one generic label (e.g. framework `GET` handlers) must…]] - rationale - graphify/tests/test_serve.py
- [[Never return more than max_k seeds even when all scores are close.]] - rationale - graphify/tests/test_serve.py
- [[Reproduces 1445 a vague natural-language query where one term's incidental…]] - rationale - graphify/tests/test_serve.py
- [[Select BFS seed nodes, stopping when score drops too far below the top.…]] - rationale - graphify/graphify/serve.py
- [[The per-term guarantee loop must honor the same per-label cap, so it can't add…]] - rationale - graphify/tests/test_serve.py
- [[The per-term guaranteed seeds follow the strength of each term's best match,…]] - rationale - graphify/tests/test_query_seed_order.py
- [[When all scores are within 20% of the top, keep up to 3 seeds.]] - rationale - graphify/tests/test_serve.py
- [[_five_term_graph()]] - code - graphify/tests/test_query_seed_order.py
- [[_graph()_9]] - code - graphify/tests/test_query_seed_order.py
- [[_pick_seeds()]] - code - graphify/graphify/serve.py
- [[_seed_label_key()]] - code - graphify/graphify/serve.py
- [[`GET``Get``get` are the same generic label and must dedup together.]] - rationale - graphify/tests/test_serve.py
- [[test_pick_seeds_appends_terms_missing_from_term_order_in_sorted_order()]] - code - graphify/tests/test_query_seed_order.py
- [[test_pick_seeds_close_scores_keeps_multiple()]] - code - graphify/tests/test_serve.py
- [[test_pick_seeds_dedup_key_is_case_and_diacritic_normalized()]] - code - graphify/tests/test_serve.py
- [[test_pick_seeds_dedups_homonymous_generic_labels()]] - code - graphify/tests/test_serve.py
- [[test_pick_seeds_diversity_recovers_starved_term()]] - code - graphify/tests/test_serve.py
- [[test_pick_seeds_dominant_identifier_gives_one_seed()]] - code - graphify/tests/test_serve.py
- [[test_pick_seeds_empty()]] - code - graphify/tests/test_serve.py
- [[test_pick_seeds_follows_term_order_when_given()]] - code - graphify/tests/test_query_seed_order.py
- [[test_pick_seeds_keeps_sorted_term_order_without_it()]] - code - graphify/tests/test_query_seed_order.py
- [[test_pick_seeds_per_term_guarantee_does_not_reintroduce_generic_dupe()]] - code - graphify/tests/test_serve.py
- [[test_pick_seeds_respects_max_k()]] - code - graphify/tests/test_serve.py
- [[test_pick_seeds_single()]] - code - graphify/tests/test_serve.py
- [[test_pick_seeds_without_diversity_args_is_unchanged()]] - code - graphify/tests/test_serve.py
- [[test_query_prints_the_stronger_guaranteed_seed_first_and_is_deterministic()]] - code - graphify/tests/test_query_seed_order.py
- [[test_query_seed_order.py]] - code - graphify/tests/test_query_seed_order.py
- [[test_score_query_orders_terms_by_their_best_match_strength()]] - code - graphify/tests/test_query_seed_order.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_165
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_Community 12]]
- 7 edges to [[_COMMUNITY_Community 57]]
- 3 edges to [[_COMMUNITY_Community 159]]
- 3 edges to [[_COMMUNITY_Community 238]]
- 3 edges to [[_COMMUNITY_Community 23]]
- 2 edges to [[_COMMUNITY_Community 237]]
- 1 edge to [[_COMMUNITY_Community 189]]

## Top bridge nodes
- [[_pick_seeds()]] - degree 26, connects to 6 communities
- [[test_query_seed_order.py]] - degree 13, connects to 3 communities
- [[test_pick_seeds_diversity_recovers_starved_term()]] - degree 4, connects to 2 communities
- [[test_pick_seeds_per_term_guarantee_does_not_reintroduce_generic_dupe()]] - degree 4, connects to 2 communities
- [[_graph()_9]] - degree 6, connects to 1 community