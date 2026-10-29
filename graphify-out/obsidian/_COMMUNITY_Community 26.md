---
type: community
cohesion: 0.03
members: 110
---

# Community 26

**Cohesion:** 0.03 - loosely connected
**Members:** 110 nodes

## Members
- [[1656 — word counts are cached against each file's stat signature so detect()…]] - rationale - graphify/tests/test_word_count_cache.py
- [[1894 follow-up to 1527 prune must sweep cachesemantic AND cachesemantic-…]] - rationale - graphify/tests/test_cache.py
- [[1989 the stat-index memo must be keyed by the salt (path relative to root)…]] - rationale - graphify/tests/test_word_count_cache.py
- [[3989 — a process that touches more than one cache root must not have the first…]] - rationale - graphify/tests/test_stat_index_multi_root.py
- [[A .md file with no frontmatter is hashed by its full content.]] - rationale - graphify/tests/test_cache.py
- [[A first run writes the index before graphify-out exists at all; that stays as…]] - rationale - graphify/tests/test_stat_index_husk.py
- [[A glob that stopped at the top level would leave every fingerprinted entry…]] - rationale - graphify/tests/test_cache.py
- [[A pre-1989 entry carrying a bare hash (no salt) is never trusted.]] - rationale - graphify/tests/test_word_count_cache.py
- [[After switching away and back, the first root's file must still carry its own…]] - rationale - graphify/tests/test_stat_index_multi_root.py
- [[An entry for a file that no longer exists (dropped from the live set) is pruned.]] - rationale - graphify/tests/test_cache.py
- [[Backdate mtime past the racily-clean window so the stat fastpath is allowed to…_1]] - rationale - graphify/tests/test_word_count_cache.py
- [[Changing a file's content leaves the old content-hash entry orphaned; pruning…]] - rationale - graphify/tests/test_cache.py
- [[Changing only frontmatter fields in a .md file does not change the hash.]] - rationale - graphify/tests/test_cache.py
- [[Changing the body of a .md file produces a different hash.]] - rationale - graphify/tests/test_cache.py
- [[Crossing from one bound root to another in the same process must be visible,…]] - rationale - graphify/tests/test_stat_index_multi_root.py
- [[Different file contents give different hashes.]] - rationale - graphify/tests/test_cache.py
- [[Editing content above a mid-document ``----`` break must change the hash --…]] - rationale - graphify/tests/test_cache.py
- [[Get-or-reset the index entry for ``abs_key`` and stamp when it was read. Reuses…]] - rationale - graphify/graphify/cache.py
- [[Inverse of func`_relativize_source_files_in`. Re-anchor relative…]] - rationale - graphify/graphify/cache.py
- [[Inverse of func`_stat_key_to_relative`. Re-anchor a stored relative key…]] - rationale - graphify/graphify/cache.py
- [[Mutate ``payload`` to rewrite absolute ``source_file`` fields as forward-slash…]] - rationale - graphify/graphify/cache.py
- [[Non-.md files are still hashed by their full content.]] - rationale - graphify/tests/test_cache.py
- [[Normalize path for consistent cache keys across Windows path spellings.]] - rationale - graphify/graphify/cache.py
- [[Path_88]] - code
- [[Path_89]] - code
- [[Path_90]] - code
- [[Path_91]] - code
- [[Pruning against the FULL live set must keep every live entry — guards the trap…]] - rationale - graphify/tests/test_cache.py
- [[Remove AST cache entries left behind by other graphify versions or grammar…]] - rationale - graphify/graphify/cache.py
- [[Remove orphaned semantic cache entries, returning the count pruned. The…]] - rationale - graphify/graphify/cache.py
- [[Return (source root, absolute cache dir) for a fake project ``name`` — the…]] - rationale - graphify/tests/test_stat_index_multi_root.py
- [[Return ``key`` as a forward-slash relative path from ``anchor``. Local…]] - rationale - graphify/graphify/cache.py
- [[Return ``src`` in portable form backslashes flipped to forward slashes, then…]] - rationale - graphify/graphify/cache.py
- [[Return set of file hashes that have a valid cache entry (any kind).]] - rationale - graphify/graphify/cache.py
- [[Return the assumed filesystem mtime granularity in nanoseconds. Read fresh on…]] - rationale - graphify/graphify/cache.py
- [[SHA256 of file contents + path relative to root. Uses a stat-based fastpath…]] - rationale - graphify/graphify/cache.py
- [[Same file gives same hash on repeated calls.]] - rationale - graphify/tests/test_cache.py
- [[The ``target_file`` stamps in ``result`` that name an existing file.]] - rationale - graphify/graphify/cache.py
- [[The atexit stat-index flush must not resurrect a deleted directory (2974). A…]] - rationale - graphify/tests/test_stat_index_husk.py
- [[True if ``entry`` provably describes the file's CURRENT content. Beyond…]] - rationale - graphify/graphify/cache.py
- [[Two different projects, each with their own absolute cache dir, must each end…]] - rationale - graphify/tests/test_stat_index_multi_root.py
- [[Whether cached semantic groups belong to the requested walked path. Before…]] - rationale - graphify/graphify/cache.py
- [[Word count with the same (size, mtime_ns) stat-fastpath cache as…]] - rationale - graphify/graphify/cache.py
- [[_absolutize_source_files_in()]] - code - graphify/graphify/cache.py
- [[_cleanup_stale_ast_entries()]] - code - graphify/graphify/cache.py
- [[_decl_def_graph()]] - code - graphify/tests/test_definition_file_portability.py
- [[_dirty()]] - code - graphify/tests/test_stat_index_husk.py
- [[_ensure_stat_index()]] - code - graphify/graphify/cache.py
- [[_flush_stat_index()]] - code - graphify/graphify/cache.py
- [[_fresh_index()]] - code - graphify/tests/test_stat_index_husk.py
- [[_fresh_index()_1]] - code - graphify/tests/test_stat_index_multi_root.py
- [[_make_project()]] - code - graphify/tests/test_stat_index_multi_root.py
- [[_mtime_granularity_ns()]] - code - graphify/graphify/cache.py
- [[_normalize_path()]] - code - graphify/graphify/cache.py
- [[_normalize_source_file_value()]] - code - graphify/graphify/cache.py
- [[_present_target_files()]] - code - graphify/graphify/cache.py
- [[_relativize_source_files_in()]] - code - graphify/graphify/cache.py
- [[_semantic_entry_matches_path()]] - code - graphify/graphify/cache.py
- [[_settle()_2]] - code - graphify/tests/test_word_count_cache.py
- [[_stat_entry_for()]] - code - graphify/graphify/cache.py
- [[_stat_index_file()]] - code - graphify/graphify/cache.py
- [[_stat_index_file()_1]] - code - graphify/tests/test_stat_index_multi_root.py
- [[_stat_key_to_absolute()]] - code - graphify/graphify/cache.py
- [[_stat_key_to_relative()]] - code - graphify/graphify/cache.py
- [[_stat_sig_fresh()]] - code - graphify/graphify/cache.py
- [[_target_file_present()]] - code - graphify/graphify/cache.py
- [[`definition_file` is portable, like its sibling `source_file` (3223). The…]] - rationale - graphify/tests/test_definition_file_portability.py
- [[atexit]] - concept
- [[cache.py]] - code - graphify/graphify/cache.py
- [[cached_files reports deep-namespace entries too.]] - rationale - graphify/tests/test_cache.py
- [[cached_files returns the set of cached hashes.]] - rationale - graphify/tests/test_cache.py
- [[cached_files()]] - code - graphify/graphify/cache.py
- [[cached_word_count()]] - code - graphify/graphify/cache.py
- [[compute()]] - code - graphify/tests/test_word_count_cache.py
- [[file_hash()]] - code - graphify/graphify/cache.py
- [[fixture_11]] - code
- [[fixture_12]] - code
- [[prune_semantic_cache()]] - code - graphify/graphify/cache.py
- [[reset()]] - code - graphify/tests/test_stat_index_husk.py
- [[reset()_1]] - code - graphify/tests/test_stat_index_multi_root.py
- [[test_a_corpus_deleted_mid_run_stays_deleted()]] - code - graphify/tests/test_stat_index_husk.py
- [[test_a_redirected_cache_root_that_vanished_is_not_recreated()]] - code - graphify/tests/test_stat_index_husk.py
- [[test_cache_round_trip_keeps_definition_file_portable()]] - code - graphify/tests/test_definition_file_portability.py
- [[test_cached_files()]] - code - graphify/tests/test_cache.py
- [[test_cached_files_includes_deep_namespace()]] - code - graphify/tests/test_cache.py
- [[test_definition_file_portability.py]] - code - graphify/tests/test_definition_file_portability.py
- [[test_each_root_gets_its_own_stat_index_file_not_the_first_roots()]] - code - graphify/tests/test_stat_index_multi_root.py
- [[test_file_hash_changes()]] - code - graphify/tests/test_cache.py
- [[test_file_hash_consistent()]] - code - graphify/tests/test_cache.py
- [[test_file_hash_ignores_legacy_unsalted_entry()]] - code - graphify/tests/test_word_count_cache.py
- [[test_file_hash_is_order_independent_across_roots()]] - code - graphify/tests/test_word_count_cache.py
- [[test_md_body_change_different_hash()]] - code - graphify/tests/test_cache.py
- [[test_md_edit_above_hr_changes_hash()]] - code - graphify/tests/test_cache.py
- [[test_md_frontmatter_only_change_same_hash()]] - code - graphify/tests/test_cache.py
- [[test_md_no_frontmatter_hashed_normally()]] - code - graphify/tests/test_cache.py
- [[test_non_md_file_hashed_fully()]] - code - graphify/tests/test_cache.py
- [[test_revisiting_the_first_root_reloads_its_own_entries()]] - code - graphify/tests/test_stat_index_multi_root.py
- [[test_semantic_prune_and_clear_reach_fingerprint_subdirs()]] - code - graphify/tests/test_cache.py
- [[test_semantic_prune_handles_deleted_file()]] - code - graphify/tests/test_cache.py
- [[test_semantic_prune_keeps_live_unchanged_entries()]] - code - graphify/tests/test_cache.py
- [[test_semantic_prune_removes_orphan_entries()]] - code - graphify/tests/test_cache.py
- [[test_semantic_prune_sweeps_both_namespaces_against_same_live_set()]] - code - graphify/tests/test_cache.py
- [[test_stat_index_husk.py]] - code - graphify/tests/test_stat_index_husk.py
- [[test_stat_index_multi_root.py]] - code - graphify/tests/test_stat_index_multi_root.py
- [[test_switching_cache_root_mid_process_warns()]] - code - graphify/tests/test_stat_index_multi_root.py
- [[test_the_index_is_still_written_for_a_live_run()]] - code - graphify/tests/test_stat_index_husk.py
- [[test_the_issues_repro_yields_a_relative_definition_file()]] - code - graphify/tests/test_definition_file_portability.py
- [[test_word_count_augments_existing_hash_entry()]] - code - graphify/tests/test_word_count_cache.py
- [[test_word_count_cache.py]] - code - graphify/tests/test_word_count_cache.py
- [[test_word_count_cached_until_file_changes()]] - code - graphify/tests/test_word_count_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_26
SORT file.name ASC
```

## Connections to other communities
- 48 edges to [[_COMMUNITY_Community 21]]
- 25 edges to [[_COMMUNITY_Community 112]]
- 11 edges to [[_COMMUNITY_Community 224]]
- 8 edges to [[_COMMUNITY_Community 154]]
- 8 edges to [[_COMMUNITY_Community 19]]
- 8 edges to [[_COMMUNITY_Community 3]]
- 7 edges to [[_COMMUNITY_Community 314]]
- 5 edges to [[_COMMUNITY_Community 17]]
- 5 edges to [[_COMMUNITY_Community 4]]
- 4 edges to [[_COMMUNITY_Community 9]]
- 4 edges to [[_COMMUNITY_Community 376]]
- 4 edges to [[_COMMUNITY_Community 414]]
- 3 edges to [[_COMMUNITY_Community 7]]
- 2 edges to [[_COMMUNITY_Community 14]]
- 2 edges to [[_COMMUNITY_Community 216]]
- 2 edges to [[_COMMUNITY_Community 89]]
- 2 edges to [[_COMMUNITY_Community 353]]
- 2 edges to [[_COMMUNITY_Community 327]]
- 2 edges to [[_COMMUNITY_Community 62]]
- 2 edges to [[_COMMUNITY_Community 1]]
- 2 edges to [[_COMMUNITY_Community 246]]
- 2 edges to [[_COMMUNITY_Community 115]]
- 2 edges to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 24]]
- 1 edge to [[_COMMUNITY_Community 32]]
- 1 edge to [[_COMMUNITY_Community 578]]
- 1 edge to [[_COMMUNITY_Community 397]]
- 1 edge to [[_COMMUNITY_Community 468]]
- 1 edge to [[_COMMUNITY_Community 45]]
- 1 edge to [[_COMMUNITY_Community 474]]
- 1 edge to [[_COMMUNITY_Community 362]]
- 1 edge to [[_COMMUNITY_Community 33]]
- 1 edge to [[_COMMUNITY_Community 5]]
- 1 edge to [[_COMMUNITY_Community 53]]

## Top bridge nodes
- [[cache.py]] - degree 74, connects to 24 communities
- [[file_hash()]] - degree 62, connects to 9 communities
- [[test_definition_file_portability.py]] - degree 17, connects to 8 communities
- [[Path_88]] - degree 26, connects to 5 communities
- [[_flush_stat_index()]] - degree 17, connects to 5 communities