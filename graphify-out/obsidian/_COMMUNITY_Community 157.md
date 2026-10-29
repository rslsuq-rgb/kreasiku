---
type: community
cohesion: 0.12
members: 32
---

# Community 157

**Cohesion:** 0.12 - loosely connected
**Members:** 32 nodes

## Members
- [[A shared output dir outside the project (686, 1423) stays purgeable.]] - rationale - graphify/tests/test_uninstall_purge_safety.py
- [[Checked on the pure helper only a regression here must never be able to hand a…]] - rationale - graphify/tests/test_uninstall_purge_safety.py
- [[Run the real purge with GRAPHIFY_OUT resolved exactly as paths.py does at…]] - rationale - graphify/tests/test_uninstall_purge_safety.py
- [[The safety check gates only the purge; plain uninstall is unchanged.]] - rationale - graphify/tests/test_uninstall_purge_safety.py
- [[The safety net must hold on its own, even if a bad value reaches install.]] - rationale - graphify/tests/test_uninstall_purge_safety.py
- [[Why ``rmtree(out)`` must not run for ``--purge``, or None when it is safe. The…]] - rationale - graphify/graphify/install.py
- [[_assert_project_intact()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[_assert_refused()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[_out_from_env()]] - code - graphify/graphify/paths.py
- [[_purge_with_env()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[_unsafe_purge_reason()]] - code - graphify/graphify/install.py
- [[``GRAPHIFY_OUT``, or ``graphify-out`` when it is unset, empty, or names the…]] - rationale - graphify/graphify/paths.py
- [[`graphify uninstall --purge` must only ever delete the output directory.…]] - rationale - graphify/tests/test_uninstall_purge_safety.py
- [[parametrize_13]] - code
- [[test_absolute_graphify_out_is_kept()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_blank_graphify_out_falls_back_to_default()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_graphify_out_is_stripped()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_project_or_parent_graphify_out_falls_back_with_warning()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_purge_custom_absolute_out_outside_project()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_purge_custom_relative_out()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_purge_default_removes_only_graphify_out()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_purge_refuses_absolute_out_equal_to_project()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_purge_refuses_absolute_out_parent_of_project()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_purge_refuses_home()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_purge_refuses_project_when_layer_one_is_bypassed()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_purge_with_bad_graphify_out_only_removes_default_out()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_uninstall_purge_safety.py]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_uninstall_without_purge_ignores_unsafe_out()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_unsafe_purge_reason_allows_out_dirs()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_unsafe_purge_reason_rejects_filesystem_roots()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_unset_graphify_out_is_default()]] - code - graphify/tests/test_uninstall_purge_safety.py
- [[test_valid_relative_graphify_out_is_kept()]] - code - graphify/tests/test_uninstall_purge_safety.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_157
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_Community 4]]
- 4 edges to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 222]]
- 1 edge to [[_COMMUNITY_Community 52]]
- 1 edge to [[_COMMUNITY_Community 130]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_uninstall_purge_safety.py]] - degree 29, connects to 6 communities
- [[_unsafe_purge_reason()]] - degree 7, connects to 2 communities
- [[_purge_with_env()]] - degree 10, connects to 1 community
- [[_out_from_env()]] - degree 9, connects to 1 community
- [[test_purge_refuses_project_when_layer_one_is_bypassed()]] - degree 5, connects to 1 community