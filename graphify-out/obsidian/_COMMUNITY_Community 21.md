---
type: community
cohesion: 0.03
members: 127
---

# Community 21

**Cohesion:** 0.03 - loosely connected
**Members:** 127 nodes

## Members
- [[1715 merge_existing=True unions with the prior entry so a file split across…]] - rationale - graphify/tests/test_cache.py
- [[1757 an undispatched file must keep its complete cache entry when a semantic…]] - rationale - graphify/tests/test_cache.py
- [[1757 the per-chunk incremental checkpoint must not let a chunk's mis-…]] - rationale - graphify/tests/test_chunking.py
- [[1916 (ghost variant) a node group whose source_file does not exist is…]] - rationale - graphify/tests/test_cache.py
- [[1916 + 1715 with merge_existing=True (the llm.py checkpoint path), only the…]] - rationale - graphify/tests/test_cache.py
- [[1916 guard-rail unscoped callers (allowed_source_files=None) must stay byte-…]] - rationale - graphify/tests/test_cache.py
- [[1916 a hyperedge whose member list intersects the skipped ids is dropped…]] - rationale - graphify/tests/test_cache.py
- [[1916 an edge in an ALLOWED file's group referencing a node grouped under an…]] - rationale - graphify/tests/test_cache.py
- [[1920  2927 an existing on-disk cache entry with hyperedges but no nodes…]] - rationale - graphify/tests/test_cache.py
- [[1920 hyperedge-only documents are valid semantic output and must be cached.]] - rationale - graphify/tests/test_cache.py
- [[2832 a warm cache must not move target nodes onto its symlink.]] - rationale - graphify/tests/test_cache.py
- [[2927 healing a legacy on-disk cache entry containing edges but no nodes or…]] - rationale - graphify/tests/test_cache.py
- [[2927 an edge-only semantic result (0 nodes, 0 hyperedges) represents an…]] - rationale - graphify/tests/test_cache.py
- [[2973 — save_semantic_cache must recover a group whose reported source_file…]] - rationale - graphify/tests/test_semantic_cache_basename_recovery.py
- [[A CRLF checkout of the same spec must not look like a prompt change — otherwise…]] - rationale - graphify/tests/test_cache.py
- [[A checkpoint saved with cache_root can be retrieved by check_semantic_cache…]] - rationale - graphify/tests/test_semantic_cache_out_root.py
- [[A corrupt (invalid-JSON) cache entry must not be silently swallowed (2405).…]] - rationale - graphify/tests/test_cache.py
- [[A key-schema change must not replay a poisoned same-version AST entry.]] - rationale - graphify/tests/test_cache.py
- [[A poisoned legacy entry misses once, then walked groups round-trip.]] - rationale - graphify/tests/test_cache.py
- [[A relative ``root`` (what save_semantic_cache forwards) must not be used as an…]] - rationale - graphify/tests/test_cache.py
- [[A same-length edit must change the digest even when the filesystem reports an…]] - rationale - graphify/tests/test_cache.py
- [[A skill snippet substitutes SPEC_PATH by hand. If it lands on a path that isn't…]] - rationale - graphify/tests/test_cache.py
- [[After file content changes, load_cached returns None.]] - rationale - graphify/tests/test_cache.py
- [[Alias authorization and partial state must not leak to its target.]] - rationale - graphify/tests/test_cache.py
- [[Aliases of one target need separate portable extraction-cache keys.]] - rationale - graphify/tests/test_cache.py
- [[An AST entry written by version X must not be served after upgrading to version…]] - rationale - graphify/tests/test_cache.py
- [[An allowed absolute source outside a symlinked root stays external.]] - rationale - graphify/tests/test_cache.py
- [[An out-of-root target retains the existing resolved-path identity.]] - rationale - graphify/tests/test_cache.py
- [[Check semantic extraction cache for a list of absolute file paths. Returns…]] - rationale - graphify/graphify/cache.py
- [[Deep entries must not satisfy mode=None reads (and plain entries must not…]] - rationale - graphify/tests/test_cache.py
- [[Default save_semantic_cache replaces a file's cached entry (the final,…]] - rationale - graphify/tests/test_cache.py
- [[End-to-end portability a cache entry written at one root can be consumed at a…]] - rationale - graphify/tests/test_cache.py
- [[Entries written before fingerprinting have unknowable vintage. They are still…]] - rationale - graphify/tests/test_cache.py
- [[Entries written by pre-versioning graphify (flat cache or unversioned…]] - rationale - graphify/tests/test_cache.py
- [[Fingerprint the caller's extraction prompt, or None when it supplied none.…]] - rationale - graphify/graphify/cache.py
- [[Fingerprinted entries live under cachesemanticp{fp}, never flat.]] - rationale - graphify/tests/test_cache.py
- [[Normal extractions (nodes-only and nodes+edges) continue to cache normally.]] - rationale - graphify/tests/test_cache.py
- [[Omitting mode writes exactly the historical cachesemantic layout — forward-…]] - rationale - graphify/tests/test_cache.py
- [[Once a file is re-extracted under the current prompt, its fingerprinted entry…]] - rationale - graphify/tests/test_cache.py
- [[Resolved root spellings apply only to the matching walked identity.]] - rationale - graphify/tests/test_cache.py
- [[Return a short stable fingerprint of an extraction prompt. ``prompt`` is either…]] - rationale - graphify/graphify/cache.py
- [[Return cached extraction for this file if hash matches, else None. Cache key…]] - rationale - graphify/graphify/cache.py
- [[Save semantic extraction results to cache, keyed by source_file. Groups nodes…]] - rationale - graphify/graphify/cache.py
- [[Save then load returns the same result dict.]] - rationale - graphify/tests/test_cache.py
- [[Schema-4 raw calls lack the lexical fact required by external resolution.]] - rationale - graphify/tests/test_cache.py
- [[Tests for graphifycache.py.]] - rationale - graphify/tests/test_cache.py
- [[The fingerprint is stable for identical prompts and differs when the prompt…]] - rationale - graphify/tests/test_cache.py
- [[The guard must not disable the cache once a file's mtime tick has closed, the…]] - rationale - graphify/tests/test_cache.py
- [[The prompt fingerprint nests inside the deep namespace (1894), so the two…]] - rationale - graphify/tests/test_cache.py
- [[The prompt-file fingerprint is memoized per (path, size, mtime); an edited spec…]] - rationale - graphify/tests/test_cache.py
- [[The reported bug (1939) after the extraction prompt changes, an unchanged…]] - rationale - graphify/tests/test_cache.py
- [[The semantic cache is deliberately not versioned entries are produced by the…]] - rationale - graphify/tests/test_cache.py
- [[The stat-index locationanchor are chosen once per process via module globals…]] - rationale - graphify/tests/test_cache.py
- [[The stored placeholder form must restore to the exact absolute-derived id the…]] - rationale - graphify/tests/test_cache.py
- [[_normalized()]] - code - graphify/graphify/cache.py
- [[_recover_group_path()]] - code - graphify/graphify/cache.py
- [[_reset_stat_index()]] - code - graphify/tests/test_cache.py
- [[_resolve_prompt_fp()]] - code - graphify/graphify/cache.py
- [[``load_cached`` returns the same absolute-path shape that a fresh extraction…]] - rationale - graphify/tests/test_cache.py
- [[check_semantic_cache()]] - code - graphify/graphify/cache.py
- [[clear_cache sweeps cachesemantic-deep alongside semantic and ast.]] - rationale - graphify/tests/test_cache.py
- [[counting_extract()]] - code - graphify/tests/test_cache.py
- [[edge_dangles()]] - code - graphify/graphify/cache.py
- [[group_skipped()]] - code - graphify/graphify/cache.py
- [[hyperedge_dangles()]] - code - graphify/graphify/cache.py
- [[load_cached()]] - code - graphify/graphify/cache.py
- [[merge_existing must not union a pre-fingerprint entry into a write it is about…]] - rationale - graphify/tests/test_cache.py
- [[mode='deep' saves under cachesemantic-deep and reads back from it.]] - rationale - graphify/tests/test_cache.py
- [[prompt_fingerprint()]] - code - graphify/graphify/cache.py
- [[resolved_source_path()]] - code - graphify/graphify/cache.py
- [[save_semantic_cache()]] - code - graphify/graphify/cache.py
- [[test_ambiguous_basename_stays_skipped()]] - code - graphify/tests/test_semantic_cache_basename_recovery.py
- [[test_ast_cache_invalidated_on_version_bump()]] - code - graphify/tests/test_cache.py
- [[test_ast_cache_schema_rejects_same_version_legacy_collision()]] - code - graphify/tests/test_cache.py
- [[test_cache.py]] - code - graphify/tests/test_cache.py
- [[test_cache_miss_on_change()]] - code - graphify/tests/test_cache.py
- [[test_cache_portable_across_roots()]] - code - graphify/tests/test_cache.py
- [[test_cache_roundtrip()]] - code - graphify/tests/test_cache.py
- [[test_cached_ids_round_trip_under_the_same_root()]] - code - graphify/tests/test_cache.py
- [[test_checkpoint_scopes_cache_writes_to_chunk_files()]] - code - graphify/tests/test_chunking.py
- [[test_checkpoint_with_cache_root_is_found_by_check_semantic_cache()]] - code - graphify/tests/test_semantic_cache_out_root.py
- [[test_clear_cache_removes_deep_namespace()]] - code - graphify/tests/test_cache.py
- [[test_corrupt_semantic_entry_warns_and_is_a_miss()]] - code - graphify/tests/test_cache.py
- [[test_edge_only_semantic_result_not_cached()]] - code - graphify/tests/test_cache.py
- [[test_existing_hyperedge_only_cache_entry_remains_hit()]] - code - graphify/tests/test_cache.py
- [[test_file_hash_detects_same_size_rewrite_within_one_mtime_tick()]] - code - graphify/tests/test_cache.py
- [[test_file_hash_distinguishes_walked_symlink_paths_portably()]] - code - graphify/tests/test_cache.py
- [[test_file_hash_fastpath_still_serves_a_settled_file()]] - code - graphify/tests/test_cache.py
- [[test_file_hash_keeps_resolved_fallback_for_external_symlink()]] - code - graphify/tests/test_cache.py
- [[test_hyperedge_only_semantic_result_cached()]] - code - graphify/tests/test_cache.py
- [[test_legacy_unversioned_ast_entries_not_served()]] - code - graphify/tests/test_cache.py
- [[test_load_cached_absolutizes_source_file()]] - code - graphify/tests/test_cache.py
- [[test_malformed_but_basename_unique_path_recovers()]] - code - graphify/tests/test_semantic_cache_basename_recovery.py
- [[test_node_only_and_node_edge_semantic_results_cached()]] - code - graphify/tests/test_cache.py
- [[test_poisoned_edge_only_cache_entry_treated_as_miss()]] - code - graphify/tests/test_cache.py
- [[test_prompt_file_reflects_edited_spec()]] - code - graphify/tests/test_cache.py
- [[test_prompt_fingerprint_ignores_line_endings()]] - code - graphify/tests/test_cache.py
- [[test_prompt_fingerprint_stable_and_prompt_sensitive()]] - code - graphify/tests/test_cache.py
- [[test_python_receiver_shadow_schema_retires_same_version_raw_calls()]] - code - graphify/tests/test_cache.py
- [[test_recovered_group_edges_are_not_pruned_as_dangling()]] - code - graphify/tests/test_semantic_cache_basename_recovery.py
- [[test_relative_root_does_not_reanchor_an_already_canonical_id()]] - code - graphify/tests/test_cache.py
- [[test_save_semantic_cache_drops_edges_to_ghost_file_nodes()]] - code - graphify/tests/test_cache.py
- [[test_save_semantic_cache_drops_edges_to_out_of_scope_nodes()]] - code - graphify/tests/test_cache.py
- [[test_save_semantic_cache_drops_hyperedges_touching_skipped_nodes()]] - code - graphify/tests/test_cache.py
- [[test_save_semantic_cache_merge_existing_prunes_only_incoming()]] - code - graphify/tests/test_cache.py
- [[test_save_semantic_cache_merge_existing_unions()]] - code - graphify/tests/test_cache.py
- [[test_save_semantic_cache_overwrites_by_default()]] - code - graphify/tests/test_cache.py
- [[test_save_semantic_cache_rejects_out_of_scope_source_file()]] - code - graphify/tests/test_cache.py
- [[test_save_semantic_cache_unscoped_preserves_dangling_refs_verbatim()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_basename_recovery.py]] - code - graphify/tests/test_semantic_cache_basename_recovery.py
- [[test_semantic_cache_deep_invisible_to_plain_reads_and_vice_versa()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_deep_mode_roundtrip_under_deep_namespace()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_fingerprinted_entry_beats_legacy()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_legacy_entries_served_with_warning()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_merge_existing_never_fuses_legacy_vintage()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_mode_none_layout_unchanged()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_prompt_and_mode_compose()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_prompt_change_invalidates()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_prompt_namespaced_layout()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_self_heals_legacy_symlink_collision()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_survives_version_bump()]] - code - graphify/tests/test_cache.py
- [[test_semantic_cache_unreadable_prompt_file_warns_and_falls_back()]] - code - graphify/tests/test_cache.py
- [[test_semantic_symlink_policy_uses_walked_identity()]] - code - graphify/tests/test_cache.py
- [[test_semantic_symlink_root_accepts_resolved_policy_paths_without_alias_leak()]] - code - graphify/tests/test_cache.py
- [[test_semantic_symlink_root_keeps_external_policy_path_absolute()]] - code - graphify/tests/test_cache.py
- [[test_unscoped_call_with_no_allowlist_is_unaffected()]] - code - graphify/tests/test_semantic_cache_basename_recovery.py
- [[test_warm_cache_keeps_target_and_symlink_sources_distinct()]] - code - graphify/tests/test_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_21
SORT file.name ASC
```

## Connections to other communities
- 48 edges to [[_COMMUNITY_Community 26]]
- 36 edges to [[_COMMUNITY_Community 112]]
- 17 edges to [[_COMMUNITY_Community 216]]
- 12 edges to [[_COMMUNITY_Community 32]]
- 9 edges to [[_COMMUNITY_Community 327]]
- 8 edges to [[_COMMUNITY_Community 353]]
- 6 edges to [[_COMMUNITY_Community 468]]
- 6 edges to [[_COMMUNITY_Community 314]]
- 4 edges to [[_COMMUNITY_Community 17]]
- 3 edges to [[_COMMUNITY_Community 14]]
- 3 edges to [[_COMMUNITY_Community 224]]
- 3 edges to [[_COMMUNITY_Community 414]]
- 3 edges to [[_COMMUNITY_Community 59]]
- 2 edges to [[_COMMUNITY_Community 43]]
- 2 edges to [[_COMMUNITY_Community 397]]
- 2 edges to [[_COMMUNITY_Community 376]]
- 2 edges to [[_COMMUNITY_Community 227]]
- 2 edges to [[_COMMUNITY_Community 588]]
- 2 edges to [[_COMMUNITY_Community 398]]
- 2 edges to [[_COMMUNITY_Community 362]]
- 1 edge to [[_COMMUNITY_Community 154]]
- 1 edge to [[_COMMUNITY_Community 54]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 58]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[save_semantic_cache()]] - degree 78, connects to 12 communities
- [[load_cached()]] - degree 74, connects to 12 communities
- [[test_cache.py]] - degree 104, connects to 10 communities
- [[check_semantic_cache()]] - degree 29, connects to 6 communities
- [[test_semantic_cache_basename_recovery.py]] - degree 9, connects to 2 communities