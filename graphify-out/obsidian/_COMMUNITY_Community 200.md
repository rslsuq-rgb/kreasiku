---
type: community
cohesion: 0.09
members: 27
---

# Community 200

**Cohesion:** 0.09 - loosely connected
**Members:** 27 nodes

## Members
- [[A None entry in per_file (e.g. failed extraction) must be silently skipped.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[A `bash_sources` entry missing `target_path` must not raise KeyError.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[A bash raw_call with `callee list` (unhashable for dict membership) must not…]] - rationale - graphify/tests/test_symbol_resolution.py
- [[A node tagged as bash_function but missing `id` must not raise KeyError.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[A raw_call entry missing `caller_nid` must not raise KeyError.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[Edge metadata produced by the import-guided resolver must pass through…]] - rationale - graphify/tests/test_symbol_resolution.py
- [[Non-bash raw_calls inside sourced-file per_file entries are ignored.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[Non-dict entries in bash_sourcesraw_callsnodes must be silently skipped.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[Path_61]] - code
- [[Resolve Bash sourceimport edges and source-backed function calls. Defensive…]] - rationale - graphify/graphify/symbol_resolution.py
- [[When a callee function is defined in multiple sourced files, skip it.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[`source .helper.sh` from amain.sh should resolve to ahelper.sh, not to…]] - rationale - graphify/tests/test_symbol_resolution.py
- [[resolve_bash_source_edges()]] - code - graphify/graphify/symbol_resolution.py
- [[test_bash_call_resolver_emits_call_edges_from_sourced_files()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_bash_call_resolver_emits_source_edges()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_bash_call_resolver_skips_ambiguous_multiple_candidates()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_bash_call_resolver_skips_existing_pair()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_bash_call_resolver_skips_non_bash_raw_calls()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_accepts_none_per_file_entries()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_relative_path_resolves_against_source_dir()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_skips_bash_function_node_missing_id()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_skips_malformed_source()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_skips_non_dict_lists()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_skips_raw_call_missing_caller_nid()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_skips_unhashable_callee()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_python_import_guided_calls_emits_extracted_edge()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_python_import_guided_calls_metadata_is_sanitized()]] - code - graphify/tests/test_symbol_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_200
SORT file.name ASC
```

## Connections to other communities
- 15 edges to [[_COMMUNITY_Community 199]]
- 4 edges to [[_COMMUNITY_Community 242]]
- 2 edges to [[_COMMUNITY_Community 552]]
- 2 edges to [[_COMMUNITY_Community 389]]
- 1 edge to [[_COMMUNITY_Community 14]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 645]]

## Top bridge nodes
- [[resolve_bash_source_edges()]] - degree 20, connects to 5 communities
- [[Path_61]] - degree 10, connects to 2 communities
- [[test_resolve_python_import_guided_calls_metadata_is_sanitized()]] - degree 4, connects to 2 communities
- [[test_resolve_python_import_guided_calls_emits_extracted_edge()]] - degree 3, connects to 2 communities
- [[test_bash_call_resolver_skips_ambiguous_multiple_candidates()]] - degree 4, connects to 1 community