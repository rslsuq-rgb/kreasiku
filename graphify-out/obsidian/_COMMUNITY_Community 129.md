---
type: community
cohesion: 0.09
members: 36
---

# Community 129

**Cohesion:** 0.09 - loosely connected
**Members:** 36 nodes

## Members
- [[1669 — affected Class must reach callers that bind to the class's method…]] - rationale - graphify/tests/test_affected_member_seed.py
- [[4288 — affected Symbol must reach callers through its defining file.…]] - rationale - graphify/tests/test_affected_defines.py
- [[A symbol with ONLY ``defines`` incoming (the Dart case) still works.]] - rationale - graphify/tests/test_affected_defines.py
- [[Adding ``defines`` must not break existing relation-based traversal.]] - rationale - graphify/tests/test_affected_defines.py
- [[Emitting the edge is only half the fix while `dynamic_import` was absent from…]] - rationale - graphify/tests/test_js_dynamic_imports.py
- [[Graph matching Dart extractor output. ``database_wrapper.dart`` declares…]] - rationale - graphify/tests/test_affected_defines.py
- [[Graph matching Python module output. ``module.py`` defines ``MyClass``, and…]] - rationale - graphify/tests/test_affected_defines.py
- [[Same pattern applies to Python module defines class, consumer imports.]] - rationale - graphify/tests/test_affected_defines.py
- [[Sanity check ``defines`` is actually in the default tuple.]] - rationale - graphify/tests/test_affected_defines.py
- [[The ``AffectedHit.relation`` field must carry ``defines``.]] - rationale - graphify/tests/test_affected_defines.py
- [[The full chain symbol → defines → file → imports → consumer.]] - rationale - graphify/tests/test_affected_defines.py
- [[With ``depth=1``, only the defining file (not importers) is returned.]] - rationale - graphify/tests/test_affected_defines.py
- [[_dart_style_graph()]] - code - graphify/tests/test_affected_defines.py
- [[_g()]] - code - graphify/tests/test_affected_member_seed.py
- [[_python_style_graph()]] - code - graphify/tests/test_affected_defines.py
- [[``--relation calls`` must NOT traverse ``defines``.]] - rationale - graphify/tests/test_affected_defines.py
- [[``affected Symbol`` must walk ``defines`` to the defining file. Before fix…]] - rationale - graphify/tests/test_affected_defines.py
- [[``affected file`` must behave identically — ``defines`` is irrelevant.]] - rationale - graphify/tests/test_affected_defines.py
- [[affected_nodes()]] - code - graphify/graphify/affected.py
- [[test_affected_defines.py]] - code - graphify/tests/test_affected_defines.py
- [[test_affected_member_seed.py]] - code - graphify/tests/test_affected_member_seed.py
- [[test_affected_reaches_defining_file_via_defines()]] - code - graphify/tests/test_affected_defines.py
- [[test_affected_reaches_importers_through_defines()]] - code - graphify/tests/test_affected_defines.py
- [[test_class_affected_reaches_method_bound_caller()]] - code - graphify/tests/test_affected_member_seed.py
- [[test_class_level_caller_still_works()]] - code - graphify/tests/test_affected_member_seed.py
- [[test_defines_excluded_by_relation_filter()]] - code - graphify/tests/test_affected_defines.py
- [[test_defines_is_in_DEFAULT_AFFECTED_RELATIONS()]] - code - graphify/tests/test_affected_defines.py
- [[test_defines_only_one_hop()]] - code - graphify/tests/test_affected_defines.py
- [[test_defines_relation_reported_in_hit()]] - code - graphify/tests/test_affected_defines.py
- [[test_defines_respects_depth_limit()]] - code - graphify/tests/test_affected_defines.py
- [[test_dynamic_import_is_traversed_by_affected()]] - code - graphify/tests/test_js_dynamic_imports.py
- [[test_file_seed_unaffected_by_defines_change()]] - code - graphify/tests/test_affected_defines.py
- [[test_member_method_node_not_reported_as_hit()]] - code - graphify/tests/test_affected_member_seed.py
- [[test_method_contains_still_excluded_from_general_walk()]] - code - graphify/tests/test_affected_member_seed.py
- [[test_non_defines_relations_still_work()]] - code - graphify/tests/test_affected_defines.py
- [[test_python_module_works_too()]] - code - graphify/tests/test_affected_defines.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_129
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_Community 23]]
- 7 edges to [[_COMMUNITY_Community 176]]
- 3 edges to [[_COMMUNITY_Community 98]]
- 2 edges to [[_COMMUNITY_Community 301]]
- 2 edges to [[_COMMUNITY_Community 357]]
- 2 edges to [[_COMMUNITY_Community 476]]
- 2 edges to [[_COMMUNITY_Community 447]]
- 2 edges to [[_COMMUNITY_Community 245]]
- 2 edges to [[_COMMUNITY_Community 458]]
- 2 edges to [[_COMMUNITY_Community 140]]
- 1 edge to [[_COMMUNITY_Community 145]]

## Top bridge nodes
- [[affected_nodes()]] - degree 37, connects to 9 communities
- [[test_affected_defines.py]] - degree 17, connects to 3 communities
- [[test_affected_member_seed.py]] - degree 9, connects to 2 communities
- [[test_dynamic_import_is_traversed_by_affected()]] - degree 4, connects to 2 communities
- [[_dart_style_graph()]] - degree 10, connects to 1 community