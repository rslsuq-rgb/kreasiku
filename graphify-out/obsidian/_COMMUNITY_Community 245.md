---
type: community
cohesion: 0.19
members: 23
---

# Community 245

**Cohesion:** 0.19 - loosely connected
**Members:** 23 nodes

## Members
- [[At module level `caller_nid` IS the file node — emitting again would double-…]] - rationale - graphify/tests/test_js_dynamic_import_affected.py
- [[DiGraph_5]] - code
- [[Path_77]] - code
- [[The file owning the `import()` depends on the target, whoever wrote the call.]] - rationale - graphify/tests/test_js_dynamic_import_affected.py
- [[The symbol-level edge must survive `explain` still has to name the deferring…]] - rationale - graphify/tests/test_js_dynamic_import_affected.py
- [[Two functions, one dependency. The file-level edge dedupes on its own key.]] - rationale - graphify/tests/test_js_dynamic_import_affected.py
- [[_build()_5]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[_fid()]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[_file_edges()]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[_reaches()]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[_write()_16]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[`affected` must traverse a dynamic `import('…')` written inside a function —…]] - rationale - graphify/tests/test_js_dynamic_import_affected.py
- [[`import '.dyn'` binds no symbol, so nothing points at the enclosing function.]] - rationale - graphify/tests/test_js_dynamic_import_affected.py
- [[`import  as ns` binds the module, not the function that defers the load.]] - rationale - graphify/tests/test_js_dynamic_import_affected.py
- [[`other` is a sibling export; the edge into `load()` that used to rescue this is…]] - rationale - graphify/tests/test_js_dynamic_import_affected.py
- [[test_affected_reaches_through_a_namespace_importer()]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[test_affected_reaches_through_a_side_effect_importer()]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[test_affected_reaches_when_importer_names_a_different_symbol()]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[test_call_site_precision_is_preserved()]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[test_dynamic_import_in_function_emits_a_file_level_edge()]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[test_js_dynamic_import_affected.py]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[test_module_level_dynamic_import_emits_no_duplicate()]] - code - graphify/tests/test_js_dynamic_import_affected.py
- [[test_one_file_deferring_the_same_module_twice_emits_one_file_edge()]] - code - graphify/tests/test_js_dynamic_import_affected.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_245
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_Community 102]]
- 2 edges to [[_COMMUNITY_Community 129]]
- 2 edges to [[_COMMUNITY_Community 14]]
- 2 edges to [[_COMMUNITY_Community 23]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 176]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_js_dynamic_import_affected.py]] - degree 20, connects to 7 communities
- [[_build()_5]] - degree 12, connects to 2 communities
- [[_reaches()]] - degree 7, connects to 1 community
- [[_fid()]] - degree 5, connects to 1 community