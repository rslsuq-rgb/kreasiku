---
type: community
cohesion: 0.05
members: 53
---

# Community 78

**Cohesion:** 0.05 - loosely connected
**Members:** 53 nodes

## Members
- [[2880 review catch `0` means no retries of ANY kind. Bounding only the…]] - rationale - graphify/tests/test_llm_backends.py
- [[2880 a hollow response is retried as-is, never bisected. Bisecting cannot…]] - rationale - graphify/tests/test_llm_backends.py
- [[A hollow response that clears on retry costs 2 calls, not 15.]] - rationale - graphify/tests/test_llm_backends.py
- [[BaseException]] - code
- [[Classify an exception as a recognized subprocess or SDK timeout.]] - rationale - graphify/graphify/llm.py
- [[Extract a chunk; if the response is truncated (`finish_reason=length`), the…]] - rationale - graphify/graphify/llm.py
- [[Guard the other side the cap must not silently disable the retry path.]] - rationale - graphify/tests/test_llm_backends.py
- [[Heuristically classify an exception as a context-window overflow. Different…]] - rationale - graphify/graphify/llm.py
- [[Source paths covered by a chunk, for marking a chunk that truncated to an EMPTY…]] - rationale - graphify/graphify/llm.py
- [[Tag every nodeedgehyperedge in a truncated chunk result with an internal…]] - rationale - graphify/graphify/llm.py
- [[Union of the ``_partial_files`` carried by each result (survives merges).]] - rationale - graphify/graphify/llm.py
- [[_chunk_partial_files()]] - code - graphify/graphify/llm.py
- [[_extract_with_adaptive_retry()]] - code - graphify/graphify/llm.py
- [[_looks_like_context_exceeded()]] - code - graphify/graphify/llm.py
- [[_looks_like_timeout()]] - code - graphify/graphify/llm.py
- [[_mark_partial()]] - code - graphify/graphify/llm.py
- [[_merge_two()]] - code - graphify/graphify/llm.py
- [[_merged_partial_files()]] - code - graphify/graphify/llm.py
- [[_ok()]] - code - graphify/tests/test_llm_backends.py
- [[_run_one()]] - code - graphify/graphify/llm.py
- [[_split_lone_slice()]] - code - graphify/graphify/llm.py
- [[always_timeout()]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()_1]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()_2]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()_3]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()_4]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()_5]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()_6]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()_7]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()_8]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()_9]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()_10]] - code - graphify/tests/test_llm_backends.py
- [[fake_extract()_11]] - code - graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_bisects_on_truncated_response()]] - code - graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_does_not_bisect_a_hollow_response()]] - code - graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_gives_up_on_single_file_overflow()]] - code - graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_gives_up_on_single_file_timeout()]] - code - graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_re_raises_unrelated_errors()]] - code - graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_recovers_a_transient_hollow_response()]] - code - graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_splits_on_context_exceeded()]] - code - graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_splits_on_subprocess_timeout()]] - code - graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_splits_single_slice_on_timeout()]] - code - graphify/tests/test_llm_backends.py
- [[test_adaptive_retry_timeout_caps_at_max_depth()]] - code - graphify/tests/test_llm_backends.py
- [[test_extract_corpus_parallel_ollama_parallel_env_restores_concurrency()]] - code - graphify/tests/test_llm_backends.py
- [[test_extract_corpus_parallel_ollama_runs_serially()]] - code - graphify/tests/test_llm_backends.py
- [[test_hollow_retries_still_run_at_the_default_depth()]] - code - graphify/tests/test_llm_backends.py
- [[test_looks_like_context_exceeded_ignores_unrelated_errors()]] - code - graphify/tests/test_llm_backends.py
- [[test_looks_like_context_exceeded_matches_common_messages()]] - code - graphify/tests/test_llm_backends.py
- [[test_looks_like_timeout_ignores_unrelated_errors()]] - code - graphify/tests/test_llm_backends.py
- [[test_looks_like_timeout_matches_concrete_classes()]] - code - graphify/tests/test_llm_backends.py
- [[test_mark_partial_and_partial_source_files()]] - code - graphify/tests/test_partial_cache.py
- [[test_max_retry_depth_zero_disables_hollow_retries_too()]] - code - graphify/tests/test_llm_backends.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_78
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_Community 20]]
- 12 edges to [[_COMMUNITY_Community 32]]
- 7 edges to [[_COMMUNITY_Community 38]]
- 6 edges to [[_COMMUNITY_Community 58]]
- 2 edges to [[_COMMUNITY_Community 216]]

## Top bridge nodes
- [[_extract_with_adaptive_retry()]] - degree 36, connects to 4 communities
- [[test_adaptive_retry_splits_single_slice_on_timeout()]] - degree 5, connects to 2 communities
- [[_chunk_partial_files()]] - degree 4, connects to 2 communities
- [[test_extract_corpus_parallel_ollama_runs_serially()]] - degree 4, connects to 2 communities
- [[test_extract_corpus_parallel_ollama_parallel_env_restores_concurrency()]] - degree 3, connects to 2 communities