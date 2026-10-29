---
source_file: "graphify/graphify/llm.py"
type: "code"
community: "Community 32"
location: "L2728"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_32
---

# extract_corpus_parallel()

## Connections
- [[dot-test_failure_count_in_merged_result()]] - `calls` [EXTRACTED]
- [[dot-test_no_false_alarm_when_all_chunks_succeed()]] - `calls` [EXTRACTED]
- [[dot-test_summary_printed_when_chunks_fail()]] - `calls` [EXTRACTED]
- [[Extract a corpus in chunks, merging results. Chunking strategy - If…]] - `rationale_for` [EXTRACTED]
- [[FileSlice]] - `uses` [INFERRED]
- [[Path_153]] - `references` [EXTRACTED]
- [[_checkpoint_chunk()]] - `contains` [EXTRACTED]
- [[_merge_into()]] - `calls` [EXTRACTED]
- [[_out_of_scope()]] - `contains` [EXTRACTED]
- [[_pack_chunks_by_tokens()]] - `calls` [EXTRACTED]
- [[_resolve_against_root()]] - `contains` [EXTRACTED]
- [[_resolve_max_retry_depth()]] - `calls` [EXTRACTED]
- [[_run_one()]] - `contains` [EXTRACTED]
- [[_stamp_semantic_origin()]] - `calls` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[dispatch_command()]] - `calls` [EXTRACTED]
- [[expand_oversized_files()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[save_semantic_cache()]] - `calls` [EXTRACTED]
- [[test_checkpoint_caches_sliced_document_chunks()]] - `calls` [EXTRACTED]
- [[test_checkpoint_scopes_cache_writes_to_chunk_files()]] - `calls` [EXTRACTED]
- [[test_checkpoint_writes_deep_namespace_in_deep_mode()]] - `calls` [EXTRACTED]
- [[test_chunking.py]] - `imports` [EXTRACTED]
- [[test_corpus_parallel_continues_after_chunk_failure()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_legacy_mode_when_token_budget_is_none()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_merge_order_is_submission_order_not_completion()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_oversized_markdown_does_not_crash_on_fileslice()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_runs_chunks_concurrently()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_sequential_when_max_concurrency_is_one()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_token_budget_default_packs_files()]] - `calls` [EXTRACTED]
- [[test_corpus_parallel_uses_adaptive_retry()]] - `calls` [EXTRACTED]
- [[test_edge_between_kept_nodes_survives_when_source_file_was_not_dispatched()]] - `calls` [EXTRACTED]
- [[test_extract_corpus_parallel_accepts_cache_root_kwarg()]] - `indirect_call` [INFERRED]
- [[test_extract_corpus_parallel_accepts_str_and_mixed_paths()]] - `calls` [EXTRACTED]
- [[test_extract_corpus_parallel_ollama_parallel_env_restores_concurrency()]] - `calls` [EXTRACTED]
- [[test_extract_corpus_parallel_ollama_runs_serially()]] - `calls` [EXTRACTED]
- [[test_files_of_a_failed_chunk_are_not_reported_as_model_omissions()]] - `calls` [EXTRACTED]
- [[test_omitted_documents_are_reconciled_and_warned()]] - `calls` [EXTRACTED]
- [[test_out_of_scope_drop_count_is_zero_when_all_in_scope()]] - `calls` [EXTRACTED]
- [[test_out_of_scope_nodes_are_dropped_from_merged_result()]] - `calls` [EXTRACTED]
- [[test_semantic_cache_out_root.py]] - `imports` [EXTRACTED]
- [[test_str_path_entry_points_handle_edge_cases()]] - `calls` [EXTRACTED]
- [[test_truncated_chunk_is_cached_partial_and_missed_on_reload()]] - `calls` [EXTRACTED]
- [[unit_path()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_32