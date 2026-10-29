---
type: community
cohesion: 0.13
members: 33
---

# Community 147

**Cohesion:** 0.13 - loosely connected
**Members:** 33 nodes

## Members
- [[3678 a Tauri-style layout keeps Cargo.toml in src-tauri, not at the scan…]] - rationale - graphify/tests/test_cargo_introspect.py
- [[A Cargo.toml sitting inside node_modules (a vendored or example crate pulled…]] - rationale - graphify/tests/test_cargo_introspect.py
- [[A discovered workspace manifest's own members are still resolved relative to…]] - rationale - graphify/tests/test_cargo_introspect.py
- [[A manifest nested deeper than the discovery cap is left unfound rather than…]] - rationale - graphify/tests/test_cargo_introspect.py
- [[A rename pointing at an external (non-workspace) crate stays a no-op. Guards…]] - rationale - graphify/tests/test_cargo_introspect.py
- [[Degenerate but parseable manifests should not invent graph data or crash.]] - rationale - graphify/tests/test_cargo_introspect.py
- [[Large deterministic workspace proves chain extraction scales by shape, not…]] - rationale - graphify/tests/test_cargo_introspect.py
- [[Legacy manifests still resolve path deps and ignore bare-string externals.]] - rationale - graphify/tests/test_cargo_introspect.py
- [[Malformed manifests surface the TOML parser failure, not an arbitrary crash.]] - rationale - graphify/tests/test_cargo_introspect.py
- [[Modern workspace forms cover virtual roots, workspace deps, and root packages.]] - rationale - graphify/tests/test_cargo_introspect.py
- [[Real workspace pin raw graph fields while excluding registry-only deps.]] - rationale - graphify/tests/test_cargo_introspect.py
- [[Renamed workspace-internal deps still produce a `crate_depends_on` edge…]] - rationale - graphify/tests/test_cargo_introspect.py
- [[Return crate nodes and internal dependency edges from Cargo manifests.]] - rationale - graphify/graphify/cargo_introspect.py
- [[_write_manifest()]] - code - graphify/tests/test_cargo_introspect.py
- [[introspect_cargo()]] - code - graphify/graphify/cargo_introspect.py
- [[parametrize_12]] - code
- [[test_cargo_inherited_dependency_can_target_root_package()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_inherited_dependency_requires_matching_local_path()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_inherited_rename_uses_workspace_dependency_identity()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect.py]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_degenerate_manifests_return_empty_or_skip_bad_deps()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_discovers_a_manifest_in_a_subdirectory()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_discovery_does_not_search_past_the_depth_cap()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_discovery_resolves_workspace_members_from_the_manifest()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_discovery_skips_noise_directories()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_honors_package_rename_on_internal_dep()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_large_workspace_dependency_chain()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_malformed_toml_reports_parser_error()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_modern_virtual_and_root_package_workspaces()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_old_manifest_keeps_internal_path_dep_and_skips_external()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_package_rename_falls_through_when_unresolved()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_introspect_workspace_internal_dependency_only()]] - code - graphify/tests/test_cargo_introspect.py
- [[test_cargo_missing_or_malformed_workspace_dependencies_are_ignored()]] - code - graphify/tests/test_cargo_introspect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_147
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_Community 484]]
- 3 edges to [[_COMMUNITY_Community 59]]
- 2 edges to [[_COMMUNITY_Community 17]]

## Top bridge nodes
- [[introspect_cargo()]] - degree 26, connects to 2 communities
- [[test_cargo_introspect.py]] - degree 20, connects to 2 communities
- [[test_cargo_introspect_discovery_does_not_search_past_the_depth_cap()]] - degree 5, connects to 1 community
- [[test_cargo_introspect_malformed_toml_reports_parser_error()]] - degree 5, connects to 1 community