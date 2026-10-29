---
type: community
cohesion: 0.16
members: 18
---

# Community 315

**Cohesion:** 0.16 - loosely connected
**Members:** 18 nodes

## Members
- [[A. Primary regression reposcriptsgreeter.py + reposcriptsmain.py with…]] - rationale - graphify/tests/test_loose_sibling_import_resolution.py
- [[B. Scan-root parity Extract the same two files with scripts as the root and…]] - rationale - graphify/tests/test_loose_sibling_import_resolution.py
- [[C. Same-name modules in separate loose directories scriptshelper.py +…]] - rationale - graphify/tests/test_loose_sibling_import_resolution.py
- [[F. Aliased import scriptsgreeter.py + scriptsmain.py with import greeter as…]] - rationale - graphify/tests/test_loose_sibling_import_resolution.py
- [[G. Stdlib shadow (4261) A loose directory with a sibling named like a stdlib…]] - rationale - graphify/tests/test_loose_sibling_import_resolution.py
- [[H. Positive control for 4261 The stdlib guard must not over-reach. A sibling…]] - rationale - graphify/tests/test_loose_sibling_import_resolution.py
- [[Regression tests for Graphify issue 3430 Loosenamespace-style sibling module…]] - rationale - graphify/tests/test_loose_sibling_import_resolution.py
- [[Repoint Python sibling-import edges to the real file node in directories…]] - rationale - graphify/graphify/extract.py
- [[Return set of (relation, source, target) from G.]] - rationale - graphify/tests/test_loose_sibling_import_resolution.py
- [[_edge_set()]] - code - graphify/tests/test_loose_sibling_import_resolution.py
- [[_repoint_python_sibling_imports()]] - code - graphify/graphify/extract.py
- [[test_aliased_import_resolves_member_call()]] - code - graphify/tests/test_loose_sibling_import_resolution.py
- [[test_bare_stdlib_import_does_not_bind_to_same_stem_sibling()]] - code - graphify/tests/test_loose_sibling_import_resolution.py
- [[test_loose_sibling_import_resolution.py]] - code - graphify/tests/test_loose_sibling_import_resolution.py
- [[test_non_stdlib_sibling_still_repoints_control()]] - code - graphify/tests/test_loose_sibling_import_resolution.py
- [[test_primary_regression_loose_sibling_import_and_call()]] - code - graphify/tests/test_loose_sibling_import_resolution.py
- [[test_same_name_modules_in_separate_loose_directories()]] - code - graphify/tests/test_loose_sibling_import_resolution.py
- [[test_scan_root_parity()]] - code - graphify/tests/test_loose_sibling_import_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_315
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_Community 14]]
- 7 edges to [[_COMMUNITY_Community 9]]
- 3 edges to [[_COMMUNITY_Community 1]]
- 2 edges to [[_COMMUNITY_Community 102]]
- 2 edges to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 54]]
- 1 edge to [[_COMMUNITY_Community 53]]

## Top bridge nodes
- [[test_loose_sibling_import_resolution.py]] - degree 17, connects to 6 communities
- [[_repoint_python_sibling_imports()]] - degree 9, connects to 5 communities
- [[test_aliased_import_resolves_member_call()]] - degree 6, connects to 2 communities
- [[test_bare_stdlib_import_does_not_bind_to_same_stem_sibling()]] - degree 5, connects to 2 communities
- [[test_non_stdlib_sibling_still_repoints_control()]] - degree 5, connects to 2 communities