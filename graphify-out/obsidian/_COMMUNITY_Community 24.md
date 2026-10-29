---
type: community
cohesion: 0.02
members: 121
---

# Community 24

**Cohesion:** 0.02 - loosely connected
**Members:** 121 nodes

## Members
- [[1948 a file stamped in an earlier run, then omitted from ``files`` on a later…]] - rationale - graphify/tests/test_detect.py
- [[2221 (portablerelative-key manifest) a manifest whose keys were written in…]] - rationale - graphify/tests/test_detect.py
- [[2221 exact repro legacy manifest saved WITHOUT root (absolute keys), then…]] - rationale - graphify/tests/test_detect.py
- [[2543 AST failure (missing optional extra) must blank both hashes so the next…]] - rationale - graphify/tests/test_detect.py
- [[2838's literal path `graphify update` calls save_manifest with kind='ast'. A…]] - rationale - graphify/tests/test_detect.py
- [[2838 save_manifest assigns a new seen timestamp when file content changes.]] - rationale - graphify/tests/test_detect.py
- [[2838 save_manifest does not rewrite manifest.json when payload is identical.]] - rationale - graphify/tests/test_detect.py
- [[2838 save_manifest preserves existing seen timestamp for unchanged entries.]] - rationale - graphify/tests/test_detect.py
- [[3785 Sequential runs on distinct subfolders against a shared manifest must…]] - rationale - graphify/tests/test_detect.py
- [[3785 detect_incremental() on a subfolder must ignore manifest entries…]] - rationale - graphify/tests/test_detect.py
- [[3847 detect_incremental had no cache_root parameter at all, unlike detect(),…]] - rationale - graphify/tests/test_detect.py
- [[A previously-indexed file that becomes excluded (still on disk) must land in…]] - rationale - graphify/tests/test_detect.py
- [[A row for a file that still exists on disk but left the scan corpus (newly…]] - rationale - graphify/tests/test_detect.py
- [[A schema-drifted manifest whose entry stores mtime as a nested dict (instead of…]] - rationale - graphify/tests/test_detect.py
- [[A subset save must keep two include rows whose file names match the files it…]] - rationale - graphify/tests/test_detect.py
- [[Absolute keys that still name a previous checkout (3581). A key is a candidate…]] - rationale - graphify/graphify/detect.py
- [[After a full-scan save prunes the excluded row, later incremental runs report…]] - rationale - graphify/tests/test_detect.py
- [[An incremental run must not skip a file whose mtime did not move.…]] - rationale - graphify/tests/test_incremental_mtime_collision.py
- [[Any_8]] - code
- [[Back-compat callers that don't pass ``root`` still get the legacy absolute-…]] - rationale - graphify/tests/test_detect.py
- [[Canonicalize each raw key via ``key_fn``, keeping the more recently observed…]] - rationale - graphify/graphify/detect.py
- [[Code files must be stamped in the manifest regardless of semantic cache.]] - rationale - graphify/tests/test_detect.py
- [[Control the ordinary size-change path is untouched.]] - rationale - graphify/tests/test_incremental_mtime_collision.py
- [[Counterpart a manifest row whose file is gone from disk stays in deleted_files.]] - rationale - graphify/tests/test_detect.py
- [[End-to-end a manifest written at one root must be readable from a different…]] - rationale - graphify/tests/test_detect.py
- [[Files in failed chunks have no semantic cache entry; save_manifest must leave…]] - rationale - graphify/tests/test_detect.py
- [[Files outside ``root`` (e.g. symlinked external corpora) are stored absolute so…]] - rationale - graphify/tests/test_detect.py
- [[Genuine deletions keep being pruned when scan_corpus is passed.]] - rationale - graphify/tests/test_detect.py
- [[In-root symlinks must store under the symlink's own name, not the resolved…]] - rationale - graphify/tests/test_detect.py
- [[Legacy float manifests must re-extract when mtime moves BACKWARDS (1859). Pre-…]] - rationale - graphify/tests/test_detect.py
- [[Like detect(), but returns only new or modified files since the last run.…]] - rationale - graphify/graphify/detect.py
- [[Longest directory prefix of ``abs_key`` whose suffix is in ``relative_keys``.…]] - rationale - graphify/graphify/detect.py
- [[NFC-normalize a path string used as a manifest key. On macOS, ``os.walk`` …]] - rationale - graphify/graphify/detect.py
- [[Non-regression for the fix above legacy float branch still skips when the…]] - rationale - graphify/tests/test_detect.py
- [[Normalize text to NFC so ignore matching survives Unicode form drift. macOS…]] - rationale - graphify/graphify/detect.py
- [[One include row stays even when its file name matches a project file.]] - rationale - graphify/tests/test_detect.py
- [[Only the edited file moves; its neighbours keep the fastpath.]] - rationale - graphify/tests/test_incremental_mtime_collision.py
- [[Out-of-root entries (--include sources, symlinked corpora) are never walked by…]] - rationale - graphify/tests/test_detect.py
- [[Return ``key`` as a forward-slash relative path from ``root``. Keys outside…]] - rationale - graphify/graphify/detect.py
- [[Review finding on 1964 Path.is_absolute() only recognizes the CURRENT…]] - rationale - graphify/tests/test_detect.py
- [[Rewrite a saved manifest so every key is in NFD form, simulating a manifest…]] - rationale - graphify/tests/test_detect.py
- [[Rows predating the `seen` field come from an earlier run trusted.]] - rationale - graphify/tests/test_incremental_mtime_collision.py
- [[Save current file mtimes + content hashes for change detection. kind=ast —…]] - rationale - graphify/graphify/detect.py
- [[Split one gitignore-style pattern into its matching flags, cached. Returns…]] - rationale - graphify/graphify/detect.py
- [[String-space equivalent of…]] - rationale - graphify/graphify/detect.py
- [[The bug a rewrite the filesystem cannot distinguish by stat alone. The mtime…]] - rationale - graphify/tests/test_incremental_mtime_collision.py
- [[The byte-equality skip must never turn an unparseable on-disk manifest into a…]] - rationale - graphify/tests/test_detect.py
- [[The fastpath must survive an untouched corpus does zero MD5 work.]] - rationale - graphify/tests/test_incremental_mtime_collision.py
- [[The string-space `_lexical_relative` must return exactly what…]] - rationale - graphify/tests/test_detect.py
- [[True if ``key`` is absolute under ANY platform's path syntax, not just the…]] - rationale - graphify/graphify/detect.py
- [[Two include rows stay when their suffixes are not relative keys this save…]] - rationale - graphify/tests/test_detect.py
- [[Without scan_corpus (changed_paths hooks, skill runbooks, 917) a subset save…]] - rationale - graphify/tests/test_detect.py
- [[_checkout_prefix()]] - code - graphify/graphify/detect.py
- [[_collapse_manifest_duplicates()]] - code - graphify/graphify/detect.py
- [[_eval()]] - code - graphify/graphify/detect.py
- [[_in_ast_empty()]] - code - graphify/graphify/detect.py
- [[_in_clear()]] - code - graphify/graphify/detect.py
- [[_in_clear_ast()]] - code - graphify/graphify/detect.py
- [[_in_root()]] - code - graphify/graphify/detect.py
- [[_in_root()_1]] - code - graphify/graphify/detect.py
- [[_in_scan()]] - code - graphify/graphify/detect.py
- [[_lexical_relative()]] - code - graphify/graphify/detect.py
- [[_looks_absolute()]] - code - graphify/graphify/detect.py
- [[_matches()]] - code - graphify/graphify/detect.py
- [[_nfc()]] - code - graphify/graphify/detect.py
- [[_normalise_entry()]] - code - graphify/graphify/detect.py
- [[_parse_ignore_pattern()]] - code - graphify/graphify/detect.py
- [[_path_index()]] - code - graphify/graphify/detect.py
- [[_previous_checkout_absolute_keys()]] - code - graphify/graphify/detect.py
- [[_queued()]] - code - graphify/tests/test_incremental_mtime_collision.py
- [[_rewrite_manifest_keys_nfd()]] - code - graphify/tests/test_detect.py
- [[_to_relative_for_storage()]] - code - graphify/graphify/detect.py
- [[``save_manifest(root=...)`` writes forward-slash relative keys.]] - rationale - graphify/tests/test_detect.py
- [[corpus()]] - code - graphify/tests/test_incremental_mtime_collision.py
- [[counting()_1]] - code - graphify/tests/test_incremental_mtime_collision.py
- [[detect_incremental must forward follow_symlinks so symlinked sub-trees appear…]] - rationale - graphify/tests/test_detect.py
- [[detect_incremental()]] - code - graphify/graphify/detect.py
- [[fixture_8]] - code
- [[save_manifest()]] - code - graphify/graphify/detect.py
- [[test_a_genuinely_edited_file_is_still_requeued()]] - code - graphify/tests/test_incremental_mtime_collision.py
- [[test_a_legacy_manifest_row_without_seen_still_works()]] - code - graphify/tests/test_incremental_mtime_collision.py
- [[test_a_settled_corpus_costs_no_content_hashes()]] - code - graphify/tests/test_incremental_mtime_collision.py
- [[test_an_untouched_file_is_not_requeued_after_a_neighbour_changes()]] - code - graphify/tests/test_incremental_mtime_collision.py
- [[test_detect_incremental_cross_subfolder_shared_manifest()]] - code - graphify/tests/test_detect.py
- [[test_detect_incremental_exclusion_stable_across_runs()]] - code - graphify/tests/test_detect.py
- [[test_detect_incremental_legacy_float_reextracts_on_backwards_mtime()]] - code - graphify/tests/test_detect.py
- [[test_detect_incremental_legacy_float_skips_when_mtime_matches()]] - code - graphify/tests/test_detect.py
- [[test_detect_incremental_portable_across_paths()]] - code - graphify/tests/test_detect.py
- [[test_detect_incremental_propagates_follow_symlinks()]] - code - graphify/tests/test_detect.py
- [[test_detect_incremental_reports_excluded_not_deleted()]] - code - graphify/tests/test_detect.py
- [[test_detect_incremental_requeues_changed_verilog_header()]] - code - graphify/tests/test_detect.py
- [[test_detect_incremental_respects_cache_root()]] - code - graphify/tests/test_detect.py
- [[test_detect_incremental_still_reports_real_deletions()]] - code - graphify/tests/test_detect.py
- [[test_detect_incremental_subfolder_ignores_out_of_root_manifest_entries()]] - code - graphify/tests/test_detect.py
- [[test_detect_incremental_survives_dict_valued_mtime()]] - code - graphify/tests/test_detect.py
- [[test_incremental_mtime_collision.py]] - code - graphify/tests/test_incremental_mtime_collision.py
- [[test_lexical_relative_matches_pathlib_relative_to()]] - code - graphify/tests/test_detect.py
- [[test_manifest_nfc_keys_legacy_absolute()]] - code - graphify/tests/test_detect.py
- [[test_manifest_nfc_keys_survive_macos_path_forms()]] - code - graphify/tests/test_detect.py
- [[test_same_size_rewrite_in_one_tick_is_requeued()]] - code - graphify/tests/test_incremental_mtime_collision.py
- [[test_save_manifest_ast_kind_noop_then_change()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_changed_file_updates_seen()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_clear_ast_blanks_both_hashes_for_failed_extra()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_clear_semantic_erases_stale_hash_for_omitted_file()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_corrupt_existing_manifest_still_writes()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_full_scan_keeps_out_of_root_rows()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_full_scan_prunes_excluded_but_alive_row()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_full_scan_still_prunes_missing_file()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_in_root_symlink_roundtrips()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_keeps_includes_whose_paths_are_not_this_tree()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_keeps_one_include_that_shares_a_basename()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_noop_skips_disk_write()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_out_of_root_keeps_absolute()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_relativizes_keys_when_root_given()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_skips_semantic_hash_for_files_without_cache()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_subset_save_keeps_includes_that_share_basenames()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_subset_save_preserves_untouched_rows()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_unchanged_file_preserves_seen()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_without_filter_unchanged_for_code()]] - code - graphify/tests/test_detect.py
- [[test_save_manifest_without_root_keeps_absolute_keys()]] - code - graphify/tests/test_detect.py
- [[test_to_absolute_from_storage_recognizes_a_foreign_platform_absolute_key()]] - code - graphify/tests/test_detect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_24
SORT file.name ASC
```

## Connections to other communities
- 57 edges to [[_COMMUNITY_Community 5]]
- 34 edges to [[_COMMUNITY_Community 33]]
- 6 edges to [[_COMMUNITY_Community 17]]
- 4 edges to [[_COMMUNITY_Community 19]]
- 4 edges to [[_COMMUNITY_Community 233]]
- 3 edges to [[_COMMUNITY_Community 18]]
- 3 edges to [[_COMMUNITY_Community 34]]
- 1 edge to [[_COMMUNITY_Community 108]]
- 1 edge to [[_COMMUNITY_Community 112]]
- 1 edge to [[_COMMUNITY_Community 232]]
- 1 edge to [[_COMMUNITY_Community 36]]
- 1 edge to [[_COMMUNITY_Community 96]]
- 1 edge to [[_COMMUNITY_Community 54]]
- 1 edge to [[_COMMUNITY_Community 342]]
- 1 edge to [[_COMMUNITY_Community 578]]
- 1 edge to [[_COMMUNITY_Community 397]]
- 1 edge to [[_COMMUNITY_Community 26]]
- 1 edge to [[_COMMUNITY_Community 7]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[save_manifest()]] - degree 74, connects to 13 communities
- [[test_incremental_mtime_collision.py]] - degree 15, connects to 6 communities
- [[detect_incremental()]] - degree 37, connects to 5 communities
- [[_nfc()]] - degree 23, connects to 3 communities
- [[_lexical_relative()]] - degree 7, connects to 2 communities