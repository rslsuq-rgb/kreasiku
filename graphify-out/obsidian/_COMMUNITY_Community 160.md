---
type: community
cohesion: 0.10
members: 32
---

# Community 160

**Cohesion:** 0.10 - loosely connected
**Members:** 32 nodes

## Members
- [[1347 no-op incremental no-cluster extract must not overwrite graph.json.]] - rationale - graphify/tests/test_incremental.py
- [[1521 when an import is deleted from a file, `graphify update` must prune the…]] - rationale - graphify/tests/test_incremental.py
- [[2169 an incremental --code-only --no-cluster run over a mixed corpus must…]] - rationale - graphify/tests/test_incremental.py
- [[2169 an incremental --no-cluster extract of ONE changed file must merge into…]] - rationale - graphify/tests/test_incremental.py
- [[2211 a markdown link(docssetup.md) references edge must stamp target_file…]] - rationale - graphify/tests/test_incremental.py
- [[2213 (defect 1, shared root with 2211) a Python relative import's…]] - rationale - graphify/tests/test_incremental.py
- [[3776 negative the resolution-context index widens the target view with…]] - rationale - graphify/tests/test_incremental.py
- [[3776 incremental update must resolve symbols defined in unchanged files.]] - rationale - graphify/tests/test_incremental.py
- [[After a full extract run, manifest.json must exist (or run fails before writing…]] - rationale - graphify/tests/test_incremental.py
- [[CompletedProcess_2]] - code
- [[If manifest.json + graph.json exist, incremental mode message is shown.]] - rationale - graphify/tests/test_incremental.py
- [[Integration tests for incremental graphify extract behavior.]] - rationale - graphify/tests/test_incremental.py
- [[Path_40]] - code
- [[The CLI incremental context carries Rust impl-family identity.]] - rationale - graphify/tests/test_incremental.py
- [[Without manifest.json, full scan message is shown (not incremental).]] - rationale - graphify/tests/test_incremental.py
- [[_edges()_3]] - code - graphify/tests/test_incremental.py
- [[_make_docs_corpus()]] - code - graphify/tests/test_incremental.py
- [[_run()_2]] - code - graphify/tests/test_incremental.py
- [[has_call()]] - code - graphify/tests/test_incremental.py
- [[test_extract_no_cluster_incremental_changed_file_preserves_unchanged_files()]] - code - graphify/tests/test_incremental.py
- [[test_extract_no_cluster_incremental_code_only_preserves_doc_nodes()]] - code - graphify/tests/test_incremental.py
- [[test_extract_no_cluster_incremental_noop_preserves_existing_graph()]] - code - graphify/tests/test_incremental.py
- [[test_incremental.py]] - code - graphify/tests/test_incremental.py
- [[test_incremental_md_reference_target_canonicalizes()]] - code - graphify/tests/test_incremental.py
- [[test_incremental_mode_detected_via_manifest()]] - code - graphify/tests/test_incremental.py
- [[test_incremental_python_relative_import_target_canonicalizes()]] - code - graphify/tests/test_incremental.py
- [[test_manifest_written_after_extract()]] - code - graphify/tests/test_incremental.py
- [[test_no_incremental_without_manifest()]] - code - graphify/tests/test_incremental.py
- [[test_update_does_not_resurrect_a_dropped_cross_file_edge_via_context()]] - code - graphify/tests/test_incremental.py
- [[test_update_preserves_cross_file_imports_and_calls_to_unchanged_file()]] - code - graphify/tests/test_incremental.py
- [[test_update_preserves_generic_rust_self_call_to_unchanged_impl()]] - code - graphify/tests/test_incremental.py
- [[test_update_prunes_a_removed_imports_edge()]] - code - graphify/tests/test_incremental.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_160
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 115]]
- 3 edges to [[_COMMUNITY_Community 14]]
- 2 edges to [[_COMMUNITY_Community 109]]
- 2 edges to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_incremental.py]] - degree 23, connects to 6 communities
- [[_run()_2]] - degree 14, connects to 1 community
- [[_edges()_3]] - degree 6, connects to 1 community
- [[test_incremental_mode_detected_via_manifest()]] - degree 5, connects to 1 community
- [[test_extract_no_cluster_incremental_changed_file_preserves_unchanged_files()]] - degree 4, connects to 1 community