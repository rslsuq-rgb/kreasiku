---
type: community
cohesion: 0.22
members: 24
---

# Community 227

**Cohesion:** 0.22 - loosely connected
**Members:** 24 nodes

## Members
- [[Parse a package manifest into a canonical package node + ``depends_on`` edges.]] - rationale - graphify/graphify/manifest_ingest.py
- [[Path_71]] - code
- [[Path_72]] - code
- [[True if ``path`` is a recognized package manifest (by filename).]] - rationale - graphify/graphify/manifest_ingest.py
- [[_pkg_nodes()]] - code - graphify/tests/test_manifest_ingest.py
- [[_write()_14]] - code - graphify/tests/test_manifest_ingest.py
- [[extract_package_manifest()]] - code - graphify/graphify/manifest_ingest.py
- [[is_package_manifest_path()]] - code - graphify/graphify/manifest_ingest.py
- [[test_apm_dependency_collapses_to_single_canonical_node()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_apm_parses_name_and_deps()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_cargo_classifies_as_code_manifest()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_cargo_parses_name_version_and_deps()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_cargo_target_conditional_deps_are_collected()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_cargo_virtual_workspace_manifest_emits_no_package()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_cargo_workspace_inherited_version_does_not_crash()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_external_dependency_edge_pruned_not_orphaned()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_gomod_parses_module_and_requires()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_malformed_manifest_does_not_crash()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_manifest_ingest.py]] - code - graphify/tests/test_manifest_ingest.py
- [[test_manifests_classify_as_code_not_document()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_pom_deps_exclude_managed_and_plugin_dependencies()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_pom_inherits_groupid_and_resolves_properties()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_pom_parses_artifact_and_deps()]] - code - graphify/tests/test_manifest_ingest.py
- [[test_pyproject_parses_pep508_deps()]] - code - graphify/tests/test_manifest_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_227
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_Community 35]]
- 7 edges to [[_COMMUNITY_Community 45]]
- 5 edges to [[_COMMUNITY_Community 14]]
- 4 edges to [[_COMMUNITY_Community 9]]
- 3 edges to [[_COMMUNITY_Community 1]]
- 2 edges to [[_COMMUNITY_Community 226]]
- 2 edges to [[_COMMUNITY_Community 21]]
- 2 edges to [[_COMMUNITY_Community 33]]
- 1 edge to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 53]]

## Top bridge nodes
- [[test_manifest_ingest.py]] - degree 29, connects to 9 communities
- [[is_package_manifest_path()]] - degree 10, connects to 5 communities
- [[extract_package_manifest()]] - degree 21, connects to 3 communities
- [[test_cargo_virtual_workspace_manifest_emits_no_package()]] - degree 6, connects to 2 communities
- [[test_pom_inherits_groupid_and_resolves_properties()]] - degree 6, connects to 2 communities