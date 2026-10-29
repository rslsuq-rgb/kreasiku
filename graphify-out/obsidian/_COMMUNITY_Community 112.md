---
type: community
cohesion: 0.08
members: 41
---

# Community 112

**Cohesion:** 0.08 - loosely connected
**Members:** 41 nodes

## Members
- [[3508 on some Windowsfilesystem combinations, `os.replace` raises WinError 17…]] - rationale - graphify/tests/test_cache.py
- [[A cache entry whose path exceeds Windows MAX_PATH must still save and load.…]] - rationale - graphify/tests/test_cache_long_paths.py
- [[An AST cache hit must not replay an import resolved to a file that is gone. A…]] - rationale - graphify/tests/test_cache_stale_import_target.py
- [[Cache entries written by an older graphify (with absolute source_file inside)…]] - rationale - graphify/tests/test_cache.py
- [[Derive the on-disk key from a content hash plus optional salt.]] - rationale - graphify/graphify/cache.py
- [[Extractors may stamp a speculative target that does not exist yet; such an…]] - rationale - graphify/tests/test_cache_stale_import_target.py
- [[Path_13]] - code
- [[Prune touches only cachesemantic.json AST entries and atomic-write .tmp…]] - rationale - graphify/tests/test_cache.py
- [[Returns the cache directory for ``kind`` - creates it if needed. kind is ast,…]] - rationale - graphify/graphify/cache.py
- [[Save extraction result for this file. ``salt`` must match what the…]] - rationale - graphify/graphify/cache.py
- [[Short stable fingerprint of the installed tree-sitter grammar set. AST output…]] - rationale - graphify/graphify/cache.py
- [[The on-disk cache JSON contains forward-slash relative source_file entries — no…]] - rationale - graphify/tests/test_cache.py
- [[Upgrading removes AST entries left behind by previous versions so the cache…]] - rationale - graphify/tests/test_cache.py
- [[_grammar_fingerprint()]] - code - graphify/graphify/cache.py
- [[_import_result()]] - code - graphify/tests/test_cache_stale_import_target.py
- [[_salted_key()]] - code - graphify/graphify/cache.py
- [[_write()_2]] - code - graphify/tests/test_cache_stale_import_target.py
- [[``source_file`` for an in-root symlink must be stored under the symlink's own…]] - rationale - graphify/tests/test_cache.py
- [[cache_dir()]] - code - graphify/graphify/cache.py
- [[corpus()_1]] - code - graphify/tests/test_cache_stale_import_target.py
- [[flaky_replace()_1]] - code - graphify/tests/test_cache.py
- [[os_long_path()]] - code - graphify/graphify/paths.py
- [[parametrize_4]] - code
- [[rReturn an OS path string safe for open()stat() on Windows long paths. On…]] - rationale - graphify/graphify/paths.py
- [[remove()]] - code - graphify/tests/test_cache_stale_import_target.py
- [[save_cached()]] - code - graphify/graphify/cache.py
- [[skipif_2]] - code
- [[test_ast_cache_dir_is_grammar_namespaced()]] - code - graphify/tests/test_grammar_cache_key.py
- [[test_ast_cache_version_bump_cleans_stale_entries()]] - code - graphify/tests/test_cache.py
- [[test_cache_entry_round_trips_past_windows_max_path()]] - code - graphify/tests/test_cache_long_paths.py
- [[test_cache_long_paths.py]] - code - graphify/tests/test_cache_long_paths.py
- [[test_cache_stale_import_target.py]] - code - graphify/tests/test_cache_stale_import_target.py
- [[test_hit_is_a_miss_once_a_recorded_import_target_is_gone()]] - code - graphify/tests/test_cache_stale_import_target.py
- [[test_load_cached_passes_through_legacy_absolute_source_file()]] - code - graphify/tests/test_cache.py
- [[test_recorded_targets_are_portable_across_roots()]] - code - graphify/tests/test_cache_stale_import_target.py
- [[test_save_cached_in_root_symlink_keeps_symlink_name()]] - code - graphify/tests/test_cache.py
- [[test_save_cached_relativizes_source_file()]] - code - graphify/tests/test_cache.py
- [[test_save_cached_survives_a_winerror_17_replace()]] - code - graphify/tests/test_cache.py
- [[test_semantic_prune_ignores_ast_and_tmp()]] - code - graphify/tests/test_cache.py
- [[test_target_missing_when_written_does_not_invalidate()]] - code - graphify/tests/test_cache_stale_import_target.py
- [[test_warm_update_after_removing_an_imported_module_matches_a_cold_build()]] - code - graphify/tests/test_cache_stale_import_target.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_112
SORT file.name ASC
```

## Connections to other communities
- 36 edges to [[_COMMUNITY_Community 21]]
- 25 edges to [[_COMMUNITY_Community 26]]
- 4 edges to [[_COMMUNITY_Community 18]]
- 4 edges to [[_COMMUNITY_Community 19]]
- 3 edges to [[_COMMUNITY_Community 105]]
- 3 edges to [[_COMMUNITY_Community 121]]
- 2 edges to [[_COMMUNITY_Community 54]]
- 2 edges to [[_COMMUNITY_Community 2]]
- 2 edges to [[_COMMUNITY_Community 286]]
- 2 edges to [[_COMMUNITY_Community 222]]
- 2 edges to [[_COMMUNITY_Community 382]]
- 2 edges to [[_COMMUNITY_Community 405]]
- 2 edges to [[_COMMUNITY_Community 383]]
- 2 edges to [[_COMMUNITY_Community 113]]
- 2 edges to [[_COMMUNITY_Community 310]]
- 2 edges to [[_COMMUNITY_Community 4]]
- 2 edges to [[_COMMUNITY_Community 34]]
- 2 edges to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 154]]
- 1 edge to [[_COMMUNITY_Community 414]]
- 1 edge to [[_COMMUNITY_Community 320]]
- 1 edge to [[_COMMUNITY_Community 24]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 374]]
- 1 edge to [[_COMMUNITY_Community 5]]
- 1 edge to [[_COMMUNITY_Community 33]]
- 1 edge to [[_COMMUNITY_Community 7]]
- 1 edge to [[_COMMUNITY_Community 474]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[save_cached()]] - degree 68, connects to 21 communities
- [[test_cache_stale_import_target.py]] - degree 15, connects to 7 communities
- [[os_long_path()]] - degree 8, connects to 5 communities
- [[test_cache_long_paths.py]] - degree 9, connects to 4 communities
- [[cache_dir()]] - degree 27, connects to 2 communities