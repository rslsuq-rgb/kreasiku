---
type: community
cohesion: 0.02
members: 153
---

# Community 12

**Cohesion:** 0.02 - loosely connected
**Members:** 153 nodes

## Members
- [[2080 review a straydangling _src_tgt on an edge (hand-edited or adversarial…]] - rationale - graphify/tests/test_serve.py
- [[2080 a valid _src_tgt (the stored direction) is honored even when the…]] - rationale - graphify/tests/test_serve.py
- [[2601 nodes render before edges, so a budget overflow that only trims trailing…]] - rationale - graphify/tests/test_serve.py
- [[2784 once every node fits, edges are never dropped (2601) — but that used to…]] - rationale - graphify/tests/test_serve.py
- [[20 error-handler nodes + 1 rare identifier FooBarService.]] - rationale - graphify/tests/test_serve.py
- [[A doc-derived rule node whose LABEL shares no token with the question while its…]] - rationale - graphify/tests/test_serve.py
- [[A function and a same-named method in one module are a tie, not a guess.]] - rationale - graphify/tests/test_serve.py
- [[A graph large enough that the selectivity guard lets the fast-path fire for…]] - rationale - graphify/tests/test_serve.py
- [[A graph whose ids carry Hangul, large enough that the prefilter really runs.…]] - rationale - graphify/tests/test_serve.py
- [[A high-degree hub plus a low-degree answer node, to force the answer past a…]] - rationale - graphify/tests/test_serve.py
- [[A lone generic-word exact match must not bury a multi-term match. Reproduces…]] - rationale - graphify/tests/test_serve.py
- [[A multi-word query equal to a whole label must resolve uniquely. Regression for…]] - rationale - graphify/tests/test_serve.py
- [[A service, three callers wired via context='call' edges, and a decoy whose…]] - rationale - graphify/tests/test_serve.py
- [[A term matching most nodes should get IDF  1.]] - rationale - graphify/tests/test_serve.py
- [[A term matching only 1 of N nodes should get IDF  1.]] - rationale - graphify/tests/test_serve.py
- [[An annotated node gets a `learning=status` suffix inside its NODE bracket; an…]] - rationale - graphify/tests/test_serve.py
- [[BUG2 regression guard the query path must pass seeds to the renderer (a branch…]] - rationale - graphify/tests/test_serve.py
- [[BUG2 a low-degree answer node passed as a seed is rendered first and survives…]] - rationale - graphify/tests/test_serve.py
- [[Combined query scorer returning the existing ranked `(score, node_id)` list.…]] - rationale - graphify/graphify/serve.py
- [[Coverage scaling must not touch full-coverage queries (coverage == 1). A…]] - rationale - graphify/tests/test_serve.py
- [[Disable the prefilter so a call exercises the original full-node scan.]] - rationale - graphify/tests/test_serve.py
- [[Equal-degree nodes render in a stable order regardless of set iteration.]] - rationale - graphify/tests/test_serve.py
- [[FooBarService error handling' should expand from FooBarService, not from error-…]] - rationale - graphify/tests/test_serve.py
- [[Graph_4]] - code
- [[Guard against a per-label multiplicity penalty leaking into _score_nodes…]] - rationale - graphify/tests/test_serve.py
- [[IDF results are stored in G.graph so repeated queries don't recompute.]] - rationale - graphify/tests/test_serve.py
- [[Japanese kana and Hangul are kept as terms but not segmented as Chinese.]] - rationale - graphify/tests/test_serve.py
- [[Like the source tier, a rationale hit adds recall but must not restore the…]] - rationale - graphify/tests/test_serve.py
- [[Optional tokenizers must remain importable under Python's strict warning mode.]] - rationale - graphify/tests/test_serve.py
- [[Reconstruct community dict from community property stored on nodes.]] - rationale - graphify/graphify/serve.py
- [[Render subgraph as text, cutting at token_budget (approx 3 charstoken). seeds…]] - rationale - graphify/graphify/serve.py
- [[Return node IDs whose label or ID matches the search term (diacritic-…]] - rationale - graphify/graphify/serve.py
- [[Searching for '路由' should match a node with label containing '路由'.]] - rationale - graphify/tests/test_serve.py
- [[Tests for serve.py - MCP graph query helpers (no mcp package required).]] - rationale - graphify/tests/test_serve.py
- [[The honest-overshoot notice is additive a complete answer that already fits…]] - rationale - graphify/tests/test_serve.py
- [[The learning= suffix is part of the NODE line BEFORE the budget cut, so it is…]] - rationale - graphify/tests/test_serve.py
- [[Truncation message must tell Claude what to do, not just say truncated.]] - rationale - graphify/tests/test_serve.py
- [[Two separate graph instances must not share an IDF cache.]] - rationale - graphify/tests/test_serve.py
- [[When jieba is not installed, fallback to character bigrams.]] - rationale - graphify/tests/test_serve.py
- [[Who calls X' must seed on X, not on a decoy that merely prefix-matches the…]] - rationale - graphify/tests/test_serve.py
- [[With no overlay on the graph, NODE lines carry no learning= suffix.]] - rationale - graphify/tests/test_serve.py
- [[_add()_1]] - code - graphify/tests/test_serve.py
- [[_add()_2]] - code - graphify/tests/test_serve.py
- [[_adj()]] - code - graphify/graphify/serve.py
- [[_communities_from_graph()]] - code - graphify/graphify/serve.py
- [[_community_header()]] - code - graphify/graphify/serve.py
- [[_find_node()]] - code - graphify/graphify/serve.py
- [[_force_full_scan()]] - code - graphify/tests/test_serve.py
- [[_make_big_graph()]] - code - graphify/tests/test_serve.py
- [[_make_callers_graph()]] - code - graphify/tests/test_serve.py
- [[_make_graph()]] - code - graphify/tests/test_serve.py
- [[_make_noisy_graph()]] - code - graphify/tests/test_serve.py
- [[_make_non_ascii_id_graph()]] - code - graphify/tests/test_serve.py
- [[_rationale_graph()]] - code - graphify/tests/test_serve.py
- [[_score_nodes()]] - code - graphify/graphify/serve.py
- [[_star_graph()]] - code - graphify/tests/test_serve.py
- [[_subgraph_to_text()]] - code - graphify/graphify/serve.py
- [[`MailController` must not come back as `EmailController` (3917).]] - rationale - graphify/tests/test_serve.py
- [[`pkg.mod.func`  `pkg.modfunc` resolve via the module's file (4366).]] - rationale - graphify/tests/test_serve.py
- [[callers of X' phrasing infers the call context (2507 companion).]] - rationale - graphify/tests/test_serve.py
- [[error' matches 20 nodes, 'foobarservice' matches 1 — IDF should make…]] - rationale - graphify/tests/test_serve.py
- [[test_bfs_depth_1()]] - code - graphify/tests/test_serve.py
- [[test_bfs_depth_2()]] - code - graphify/tests/test_serve.py
- [[test_bfs_disconnected()]] - code - graphify/tests/test_serve.py
- [[test_bfs_returns_edges()]] - code - graphify/tests/test_serve.py
- [[test_communities_from_graph_basic()]] - code - graphify/tests/test_serve.py
- [[test_communities_from_graph_isolated()]] - code - graphify/tests/test_serve.py
- [[test_communities_from_graph_no_community_attr()]] - code - graphify/tests/test_serve.py
- [[test_community_header_falls_back_when_no_name()]] - code - graphify/tests/test_serve.py
- [[test_community_header_sanitizes_name()]] - code - graphify/tests/test_serve.py
- [[test_community_header_shows_real_name()]] - code - graphify/tests/test_serve.py
- [[test_community_header_skips_placeholder_name()]] - code - graphify/tests/test_serve.py
- [[test_dfs_depth_1()]] - code - graphify/tests/test_serve.py
- [[test_dfs_full_chain()]] - code - graphify/tests/test_serve.py
- [[test_dotted_python_symbol_resolves_by_module_path()]] - code - graphify/tests/test_serve.py
- [[test_dotted_python_symbol_same_file_tie_is_refused()]] - code - graphify/tests/test_serve.py
- [[test_find_node_ignores_trailing_punctuation()]] - code - graphify/tests/test_serve.py
- [[test_find_node_label_tokens_branch_covered_by_index()]] - code - graphify/tests/test_serve.py
- [[test_find_node_matches_full_punctuated_unicode_label()]] - code - graphify/tests/test_serve.py
- [[test_find_node_matches_merge_graphs_namespaced_node_id()]] - code - graphify/tests/test_serve.py
- [[test_find_node_matches_non_ascii_node_id_through_prefilter()]] - code - graphify/tests/test_serve.py
- [[test_find_node_matches_punctuated_file_label_exactly()]] - code - graphify/tests/test_serve.py
- [[test_find_node_matches_punctuated_node_id_exactly()]] - code - graphify/tests/test_serve.py
- [[test_find_node_node_id_prefilter_is_identical_to_full_scan()]] - code - graphify/tests/test_serve.py
- [[test_find_node_prefilter_is_identical_to_full_scan()]] - code - graphify/tests/test_serve.py
- [[test_find_node_resolves_when_label_and_norm_label_diverge()]] - code - graphify/tests/test_serve.py
- [[test_find_node_source_file_path_prefers_file_level_node()]] - code - graphify/tests/test_serve.py
- [[test_idf_cached_on_graph()]] - code - graphify/tests/test_serve.py
- [[test_idf_common_term_gets_low_weight()]] - code - graphify/tests/test_serve.py
- [[test_idf_downweights_common_terms()]] - code - graphify/tests/test_serve.py
- [[test_idf_new_graph_starts_fresh()]] - code - graphify/tests/test_serve.py
- [[test_idf_rare_term_gets_high_weight()]] - code - graphify/tests/test_serve.py
- [[test_infer_context_filters_for_callers_question()]] - code - graphify/tests/test_serve.py
- [[test_infer_context_filters_for_calls_question()]] - code - graphify/tests/test_serve.py
- [[test_load_graph_accepts_under_cap()]] - code - graphify/tests/test_serve.py
- [[test_load_graph_rejects_oversized_file()]] - code - graphify/tests/test_serve.py
- [[test_load_graph_roundtrip()]] - code - graphify/tests/test_serve.py
- [[test_near_miss_lists_at_most_five_candidates()]] - code - graphify/tests/test_serve.py
- [[test_node_search_text_appends_folded_non_ascii_node_id()]] - code - graphify/tests/test_serve.py
- [[test_node_search_text_includes_all_matched_fields()]] - code - graphify/tests/test_serve.py
- [[test_node_search_text_includes_rationale_so_trigram_prefilter_stays_complete()]] - code - graphify/tests/test_serve.py
- [[test_pick_seeds_get_question_ignores_framework_hub()]] - code - graphify/tests/test_serve.py
- [[test_query_graph_text_context_filter_aliases_resolve()]] - code - graphify/tests/test_serve.py
- [[test_query_graph_text_explicit_context_filter_changes_traversal()]] - code - graphify/tests/test_serve.py
- [[test_query_graph_text_heuristic_context_filter_changes_traversal()]] - code - graphify/tests/test_serve.py
- [[test_query_graph_text_passes_seeds_so_answer_survives()]] - code - graphify/tests/test_serve.py
- [[test_query_graph_text_seeds_the_node_whose_rationale_answers_a_why_question()]] - code - graphify/tests/test_serve.py
- [[test_query_seeds_from_identifier_not_noise()]] - code - graphify/tests/test_serve.py
- [[test_query_terms_chinese_no_jieba_fallback()]] - code - graphify/tests/test_serve.py
- [[test_query_terms_non_chinese_scripts_are_not_segmented()]] - code - graphify/tests/test_serve.py
- [[test_relational_verb_does_not_seat_decoy_seed()]] - code - graphify/tests/test_serve.py
- [[test_resolve_context_filters_explicit_overrides_heuristic()]] - code - graphify/tests/test_serve.py
- [[test_resolve_single_node_prefers_an_exact_name_over_a_substring()]] - code - graphify/tests/test_serve.py
- [[test_resolve_single_node_reports_a_substring_near_miss_as_such()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_chinese_substring_match()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_coverage_full_coverage_query_is_unchanged()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_coverage_lone_generic_exact_hit_loses_to_multi_term_match()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_exact_label_match()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_ignores_trailing_punctuation()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_multiword_exact_label_outranks_superset()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_no_match()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_prefilter_is_identical_to_full_scan()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_rationale_does_not_count_toward_term_coverage()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_rationale_tier_sits_below_label_substring_and_above_source()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_reads_rationale_when_label_does_not_match()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_scores_identical_labels_equally()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_source_file_partial()]] - code - graphify/tests/test_serve.py
- [[test_score_nodes_tolerates_list_valued_rationale()]] - code - graphify/tests/test_serve.py
- [[test_serve.py]] - code - graphify/tests/test_serve.py
- [[test_serve_import_is_clean_under_syntax_warnings()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_annotates_node_with_learning_status()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_contains_labels()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_edge_included()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_honors_valid_src_tgt_direction()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_ignores_dangling_src_tgt()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_includes_edge_context()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_learning_suffix_counts_against_budget()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_marks_stale_status()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_no_banner_when_only_edges_overflow()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_no_notice_when_under_budget()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_no_overlay_is_unchanged()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_no_overshoot_notice_when_edges_fit_too()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_order_is_deterministic()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_overshoot_notice_when_edges_exceed_budget()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_seed_survives_truncation()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_truncates()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_truncation_hint_is_actionable()]] - code - graphify/tests/test_serve.py
- [[test_subgraph_to_text_truncation_notice_at_top()]] - code - graphify/tests/test_serve.py
- [[test_trigram_candidates_falls_back_on_common_term()]] - code - graphify/tests/test_serve.py
- [[test_trigram_candidates_falls_back_on_short_token()]] - code - graphify/tests/test_serve.py
- [[test_trigram_candidates_fast_path_fires_for_rare_term()]] - code - graphify/tests/test_serve.py
- [[test_trigram_index_cached_and_rebuilt_per_graph()]] - code - graphify/tests/test_serve.py
- [[test_trigrams_basic()]] - code - graphify/tests/test_serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_12
SORT file.name ASC
```

## Connections to other communities
- 55 edges to [[_COMMUNITY_Community 57]]
- 20 edges to [[_COMMUNITY_Community 189]]
- 18 edges to [[_COMMUNITY_Community 237]]
- 18 edges to [[_COMMUNITY_Community 128]]
- 15 edges to [[_COMMUNITY_Community 103]]
- 13 edges to [[_COMMUNITY_Community 159]]
- 12 edges to [[_COMMUNITY_Community 134]]
- 12 edges to [[_COMMUNITY_Community 165]]
- 3 edges to [[_COMMUNITY_Community 238]]
- 3 edges to [[_COMMUNITY_Community 586]]
- 2 edges to [[_COMMUNITY_Community 53]]
- 2 edges to [[_COMMUNITY_Community 49]]
- 1 edge to [[_COMMUNITY_Community 551]]
- 1 edge to [[_COMMUNITY_Community 9]]
- 1 edge to [[_COMMUNITY_Community 7]]
- 1 edge to [[_COMMUNITY_Community 139]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 109]]
- 1 edge to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 176]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 23]]

## Top bridge nodes
- [[test_serve.py]] - degree 203, connects to 16 communities
- [[_subgraph_to_text()]] - degree 32, connects to 6 communities
- [[_score_nodes()]] - degree 35, connects to 4 communities
- [[test_relational_verb_does_not_seat_decoy_seed()]] - degree 6, connects to 3 communities
- [[test_pick_seeds_get_question_ignores_framework_hub()]] - degree 5, connects to 3 communities