---
type: community
cohesion: 0.08
members: 53
---

# Community 80

**Cohesion:** 0.08 - loosely connected
**Members:** 53 nodes

## Members
- [[CLI entry point resolve a backend, name communities, and degrade to…]] - rationale - graphify/graphify/llm.py
- [[Concurrency must not change the result same cid-name map either way.]] - rationale - graphify/tests/test_labeling.py
- [[One prompt line per community (largest first), sampling up to ``top_k``…]] - rationale - graphify/graphify/llm.py
- [[Return a complete ``{cid name}`` map using ``backend`` for naming. Communities…]] - rationale - graphify/graphify/llm.py
- [[Tests for LLM-backed community labeling (issue 1097). Backend calls are mocked…]] - rationale - graphify/tests/test_labeling.py
- [[The prompt line used to read Community {cid} ... — the exact string of the…]] - rationale - graphify/tests/test_labeling.py
- [[_community_label_lines()]] - code - graphify/graphify/llm.py
- [[_graph()_22]] - code - graphify/tests/test_labeling.py
- [[_many_communities()]] - code - graphify/tests/test_labeling.py
- [[_merge()_3]] - code - graphify/graphify/llm.py
- [[_peak_tracker()]] - code - graphify/tests/test_labeling.py
- [[_placeholder_community_labels()]] - code - graphify/graphify/llm.py
- [[_wide_graph()]] - code - graphify/tests/test_labeling.py
- [[always_fail()]] - code - graphify/tests/test_labeling.py
- [[fake_batch()]] - code - graphify/tests/test_labeling.py
- [[fake_batch()_1]] - code - graphify/tests/test_labeling.py
- [[fake_batch()_2]] - code - graphify/tests/test_labeling.py
- [[fake_call()]] - code - graphify/tests/test_labeling.py
- [[fake_call()_1]] - code - graphify/tests/test_labeling.py
- [[fake_call()_2]] - code - graphify/tests/test_labeling.py
- [[fake_call()_3]] - code - graphify/tests/test_labeling.py
- [[fake_call()_4]] - code - graphify/tests/test_labeling.py
- [[fake_call()_5]] - code - graphify/tests/test_labeling.py
- [[fake_call()_6]] - code - graphify/tests/test_labeling.py
- [[fake_call()_7]] - code - graphify/tests/test_labeling.py
- [[generate_community_labels()]] - code - graphify/graphify/llm.py
- [[god_nodes() returns listdict with an 'id' key, not bare ids.]] - rationale - graphify/tests/test_labeling.py
- [[label_communities()]] - code - graphify/graphify/llm.py
- [[ollamaclaude-cli must stay serial regardless of --max-concurrency.]] - rationale - graphify/tests/test_labeling.py
- [[test_empty_communities_returns_placeholders()]] - code - graphify/tests/test_labeling.py
- [[test_generate_community_labels_degrades_on_error()]] - code - graphify/tests/test_labeling.py
- [[test_generate_community_labels_no_backend()]] - code - graphify/tests/test_labeling.py
- [[test_generate_community_labels_success()]] - code - graphify/tests/test_labeling.py
- [[test_generate_community_labels_warns_on_partial_success()]] - code - graphify/tests/test_labeling.py
- [[test_gods_as_dicts_do_not_crash()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_accumulates_token_usage()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_all_batches_fail_raises()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_batch_size_controls_batch_count()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_batches_when_over_batch_size()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_counts_tokens_for_failed_batch()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_forces_serial_for_ollama()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_happy_path()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_malformed_raises()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_max_communities_caps_total()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_parallel_matches_sequential()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_partial_batch_failure_keeps_successful_batches()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_partial_reply_fills_placeholder()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_passes_model_override()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_runs_batches_concurrently()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_salvages_truncated_reply()]] - code - graphify/tests/test_labeling.py
- [[test_label_communities_strips_code_fences()]] - code - graphify/tests/test_labeling.py
- [[test_label_prompt_lines_use_bare_cid_keys()]] - code - graphify/tests/test_labeling.py
- [[test_labeling.py]] - code - graphify/tests/test_labeling.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_80
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_Community 191]]
- 5 edges to [[_COMMUNITY_Community 58]]
- 4 edges to [[_COMMUNITY_Community 17]]
- 4 edges to [[_COMMUNITY_Community 453]]
- 3 edges to [[_COMMUNITY_Community 131]]
- 3 edges to [[_COMMUNITY_Community 528]]
- 3 edges to [[_COMMUNITY_Community 558]]
- 2 edges to [[_COMMUNITY_Community 606]]
- 2 edges to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 18]]
- 1 edge to [[_COMMUNITY_Community 219]]
- 1 edge to [[_COMMUNITY_Community 334]]
- 1 edge to [[_COMMUNITY_Community 23]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 233]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 19]]

## Top bridge nodes
- [[test_labeling.py]] - degree 62, connects to 14 communities
- [[generate_community_labels()]] - degree 17, connects to 4 communities
- [[label_communities()]] - degree 26, connects to 2 communities
- [[_community_label_lines()]] - degree 5, connects to 1 community
- [[_placeholder_community_labels()]] - degree 3, connects to 1 community