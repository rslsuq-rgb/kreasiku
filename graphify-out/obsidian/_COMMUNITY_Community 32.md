---
type: community
cohesion: 0.03
members: 101
---

# Community 32

**Cohesion:** 0.03 - loosely connected
**Members:** 101 nodes

## Members
- [[1632 merged nodeedge order must be deterministic (submission order), not the…]] - rationale - graphify/tests/test_chunking.py
- [[1870 the checkpoint's allowlist must resolve a FileSlice to its parent path…]] - rationale - graphify/tests/test_chunking.py
- [[1890 a chunk can return a clean, non-empty response that omits some of the…]] - rationale - graphify/tests/test_chunking.py
- [[1894 the per-chunk checkpoint must follow the run's mode — a deep_mode=True…]] - rationale - graphify/tests/test_chunking.py
- [[1895 the 1757 cache guard skips the CACHE write for a node attributed to a…]] - rationale - graphify/tests/test_chunking.py
- [[2276 a references edge between two re-extracted pages is kept when the model…]] - rationale - graphify/tests/test_chunking.py
- [[3616 a chunk that raises never got a model response, so its files must not be…]] - rationale - graphify/tests/test_chunking.py
- [[dot-test_failure_count_in_merged_result()]] - code - graphify/tests/test_charmap_encoding.py
- [[dot-test_no_false_alarm_when_all_chunks_succeed()]] - code - graphify/tests/test_charmap_encoding.py
- [[dot-test_summary_printed_when_chunks_fail()]] - code - graphify/tests/test_charmap_encoding.py
- [[A non-splittable single-file truncation keeps its partial result but marks…]] - rationale - graphify/tests/test_chunking.py
- [[A single chunk raising should be logged but not abort the run. Other chunks'…]] - rationale - graphify/tests/test_chunking.py
- [[A single file that truncates can't be split further — surface a warning and…]] - rationale - graphify/tests/test_chunking.py
- [[A single-file chunk that stays truncated is checkpointed as a PARTIAL entry, so…]] - rationale - graphify/tests/test_chunking.py
- [[A summary line must appear on stderr when ≥1 chunk fails.]] - rationale - graphify/tests/test_charmap_encoding.py
- [[A truncation that IS recovered by splitting yields a complete result — it must…]] - rationale - graphify/tests/test_chunking.py
- [[Build a deterministic fake extraction result for a chunk.]] - rationale - graphify/tests/test_chunking.py
- [[Build a stub extraction result with a controllable finish_reason.]] - rationale - graphify/tests/test_chunking.py
- [[Counter-test a clean run records out_of_scope_dropped == 0 and no warning.]] - rationale - graphify/tests/test_chunking.py
- [[End-to-end extract_corpus_parallel routes through adaptive retry, so a chunk…]] - rationale - graphify/tests/test_chunking.py
- [[Extract a corpus in chunks, merging results. Chunking strategy - If…]] - rationale - graphify/graphify/llm.py
- [[Force the chars4 fallback so packing math is deterministic regardless of…]] - rationale - graphify/tests/test_chunking.py
- [[If everything truncates, retries stop at max_depth — partial result kept with a…]] - rationale - graphify/tests/test_chunking.py
- [[No retry when finish_reason='stop' — single call, result passes through.]] - rationale - graphify/tests/test_chunking.py
- [[Return the semantic-extraction system prompt, optionally in deep mode.]] - rationale - graphify/graphify/llm.py
- [[TestLoudChunkFailure]] - code - graphify/tests/test_charmap_encoding.py
- [[Tests for token-aware chunking and parallel chunk execution in graphify.llm.]] - rationale - graphify/tests/test_chunking.py
- [[When all chunks succeed, failed_chunks must be 0 and no failure summary should…]] - rationale - graphify/tests/test_charmap_encoding.py
- [[When chunks fail, extract_corpus_parallel must record failed_chunks  0 in its…]] - rationale - graphify/tests/test_charmap_encoding.py
- [[When even the half-chunk truncates, split again. With 8 files and a truncation…]] - rationale - graphify/tests/test_chunking.py
- [[When recursion caps at max_depth with everything still truncated, the merged…]] - rationale - graphify/tests/test_chunking.py
- [[With max_concurrency  1, total wall time should be ~max(chunk times), not the…]] - rationale - graphify/tests/test_chunking.py
- [[With the default token_budget, many tiny files pack into one chunk.]] - rationale - graphify/tests/test_chunking.py
- [[_checkpoint_chunk()]] - code - graphify/graphify/llm.py
- [[_edge()]] - code - graphify/tests/test_chunking.py
- [[_extraction_system()]] - code - graphify/graphify/llm.py
- [[_node()_5]] - code - graphify/tests/test_chunking.py
- [[_out_of_scope()]] - code - graphify/graphify/llm.py
- [[_resolve_against_root()]] - code - graphify/graphify/llm.py
- [[_stub_chunk_result()]] - code - graphify/tests/test_chunking.py
- [[_stub_with_finish()]] - code - graphify/tests/test_chunking.py
- [[_wc()]] - code - graphify/graphify/detect.py
- [[always_truncate()]] - code - graphify/tests/test_chunking.py
- [[cache_root()]] - code - graphify/tests/test_cache.py
- [[clean()]] - code - graphify/tests/test_chunking.py
- [[extract_corpus_parallel must surface chunk failures loudly — either via non-…]] - rationale - graphify/tests/test_charmap_encoding.py
- [[extract_corpus_parallel()]] - code - graphify/graphify/llm.py
- [[fake()]] - code - graphify/tests/test_chunking.py
- [[finish_reason='length' triggers split-in-half. Both halves succeed on the…]] - rationale - graphify/tests/test_chunking.py
- [[fixture_19]] - code
- [[fixture_20]] - code
- [[fresh()]] - code - graphify/tests/test_chunking.py
- [[latency_skewed()]] - code - graphify/tests/test_chunking.py
- [[max_concurrency=1 should run sequentially (no thread pool).]] - rationale - graphify/tests/test_chunking.py
- [[maybe_fail()]] - code - graphify/tests/test_chunking.py
- [[no_tokenizer()]] - code - graphify/tests/test_chunking.py
- [[ok()]] - code - graphify/tests/test_chunking.py
- [[omit_odd()]] - code - graphify/tests/test_chunking.py
- [[parametrize_51]] - code
- [[record()]] - code - graphify/tests/test_chunking.py
- [[record()_1]] - code - graphify/tests/test_chunking.py
- [[record()_2]] - code - graphify/tests/test_chunking.py
- [[sliced()]] - code - graphify/tests/test_chunking.py
- [[slow_extract()]] - code - graphify/tests/test_chunking.py
- [[stray()]] - code - graphify/tests/test_chunking.py
- [[stray()_1]] - code - graphify/tests/test_chunking.py
- [[stub()]] - code - graphify/tests/test_chunking.py
- [[stub()_1]] - code - graphify/tests/test_chunking.py
- [[stub()_2]] - code - graphify/tests/test_chunking.py
- [[stub()_3]] - code - graphify/tests/test_chunking.py
- [[stub()_4]] - code - graphify/tests/test_chunking.py
- [[stub()_5]] - code - graphify/tests/test_chunking.py
- [[stub()_6]] - code - graphify/tests/test_chunking.py
- [[stub()_7]] - code - graphify/tests/test_chunking.py
- [[test_adaptive_retry_caps_at_max_depth()]] - code - graphify/tests/test_chunking.py
- [[test_adaptive_retry_marks_max_depth_giveup_partial()]] - code - graphify/tests/test_chunking.py
- [[test_adaptive_retry_marks_single_file_truncation_partial()]] - code - graphify/tests/test_chunking.py
- [[test_adaptive_retry_recurses_for_persistent_truncation()]] - code - graphify/tests/test_chunking.py
- [[test_adaptive_retry_returns_directly_when_not_truncated()]] - code - graphify/tests/test_chunking.py
- [[test_adaptive_retry_single_file_truncation_does_not_recurse()]] - code - graphify/tests/test_chunking.py
- [[test_adaptive_retry_splits_when_finish_reason_length()]] - code - graphify/tests/test_chunking.py
- [[test_adaptive_retry_successful_split_is_not_marked_partial()]] - code - graphify/tests/test_chunking.py
- [[test_checkpoint_caches_sliced_document_chunks()]] - code - graphify/tests/test_chunking.py
- [[test_checkpoint_writes_deep_namespace_in_deep_mode()]] - code - graphify/tests/test_chunking.py
- [[test_chunking.py]] - code - graphify/tests/test_chunking.py
- [[test_corpus_parallel_continues_after_chunk_failure()]] - code - graphify/tests/test_chunking.py
- [[test_corpus_parallel_legacy_mode_when_token_budget_is_none()]] - code - graphify/tests/test_chunking.py
- [[test_corpus_parallel_merge_order_is_submission_order_not_completion()]] - code - graphify/tests/test_chunking.py
- [[test_corpus_parallel_runs_chunks_concurrently()]] - code - graphify/tests/test_chunking.py
- [[test_corpus_parallel_sequential_when_max_concurrency_is_one()]] - code - graphify/tests/test_chunking.py
- [[test_corpus_parallel_token_budget_default_packs_files()]] - code - graphify/tests/test_chunking.py
- [[test_corpus_parallel_uses_adaptive_retry()]] - code - graphify/tests/test_chunking.py
- [[test_edge_between_kept_nodes_survives_when_source_file_was_not_dispatched()]] - code - graphify/tests/test_chunking.py
- [[test_files_of_a_failed_chunk_are_not_reported_as_model_omissions()]] - code - graphify/tests/test_chunking.py
- [[test_omitted_documents_are_reconciled_and_warned()]] - code - graphify/tests/test_chunking.py
- [[test_out_of_scope_drop_count_is_zero_when_all_in_scope()]] - code - graphify/tests/test_chunking.py
- [[test_out_of_scope_nodes_are_dropped_from_merged_result()]] - code - graphify/tests/test_chunking.py
- [[test_truncated_chunk_is_cached_partial_and_missed_on_reload()]] - code - graphify/tests/test_chunking.py
- [[tmp_file()]] - code - graphify/tests/test_cache.py
- [[token_budget=None should fall back to legacy fixed-count chunking.]] - rationale - graphify/tests/test_chunking.py
- [[truncated()]] - code - graphify/tests/test_chunking.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_32
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_Community 21]]
- 12 edges to [[_COMMUNITY_Community 78]]
- 10 edges to [[_COMMUNITY_Community 85]]
- 8 edges to [[_COMMUNITY_Community 38]]
- 7 edges to [[_COMMUNITY_Community 17]]
- 7 edges to [[_COMMUNITY_Community 20]]
- 5 edges to [[_COMMUNITY_Community 58]]
- 2 edges to [[_COMMUNITY_Community 19]]
- 2 edges to [[_COMMUNITY_Community 41]]
- 2 edges to [[_COMMUNITY_Community 48]]
- 2 edges to [[_COMMUNITY_Community 314]]
- 2 edges to [[_COMMUNITY_Community 327]]
- 2 edges to [[_COMMUNITY_Community 42]]
- 2 edges to [[_COMMUNITY_Community 338]]
- 2 edges to [[_COMMUNITY_Community 7]]
- 2 edges to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 216]]
- 1 edge to [[_COMMUNITY_Community 26]]
- 1 edge to [[_COMMUNITY_Community 318]]
- 1 edge to [[_COMMUNITY_Community 5]]
- 1 edge to [[_COMMUNITY_Community 89]]
- 1 edge to [[_COMMUNITY_Community 39]]
- 1 edge to [[_COMMUNITY_Community 583]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_chunking.py]] - degree 53, connects to 13 communities
- [[_extraction_system()]] - degree 21, connects to 9 communities
- [[extract_corpus_parallel()]] - degree 44, connects to 8 communities
- [[test_edge_between_kept_nodes_survives_when_source_file_was_not_dispatched()]] - degree 10, connects to 4 communities
- [[_wc()]] - degree 4, connects to 3 communities