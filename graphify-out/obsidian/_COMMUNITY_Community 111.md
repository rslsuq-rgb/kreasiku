---
type: community
cohesion: 0.12
members: 42
---

# Community 111

**Cohesion:** 0.12 - loosely connected
**Members:** 42 nodes

## Members
- [[3302's exact repro both methods survive as distinct nodes.]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[A `_foo``foo` collision inside class A must not touch an unrelated, non-…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[A file with no underscore-only collisions must extract exactly as before -- no…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[Function declared first must not change which declarations survive or what ids…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[Once the class id is salted its methods are minted under the salted id, so the…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[Path_12]] - code
- [[Regression coverage for Python leading-underscore node-id collisions (3302).…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[Same bug, module-scoped (not inside a class).]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[The `_x`  `@property x` idiom a decorated method collides like a bare one.]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[The public member's id must equal what it would be with no private sibling at…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[_labels_to_ids()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[_rationale_free_nodes()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[_write_py()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[`@dataclass class Session` is wrapped in a decorated_definition; the pre-scan…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[`Pair`  `_Pair` same unique-public-member rule as functions -- the public…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[`__x__`, `__x`, and `x` all strip to the same id -- the fully public `x` must…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[`_x``__x` collide with no fully-public name in the group -- both must be…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[`class Sub(Session)` must point at the real (salted) class, not mint a second…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[`get_connection`'s call to `self._get_connection(...)` must bind to the salted…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[`session()`'s `Session()` call must reach the class node, not dangle or bind…]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[requestssessions.py's shape a class and its lowercase factory.]] - rationale - graphify/tests/test_python_underscore_resolution.py
- [[test_call_edge_resolves_to_the_salted_private_method()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_class_and_class_case_collision_both_extracted()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_class_and_function_case_collision_both_extracted()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_class_and_function_case_collision_is_order_independent()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_class_underscore_collision_public_class_keeps_plain_id()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_collision_in_one_class_does_not_salt_unrelated_class()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_constructor_call_binds_to_the_salted_class()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_cross_file_import_resolves_to_the_salted_class()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_decorated_class_and_function_case_collision_both_extracted()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_decorated_method_underscore_collision_both_extracted()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_dunder_and_plain_name_collision_both_extracted()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_leading_underscore_method_collision_both_extracted()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_leading_underscore_method_collision_ids_distinct()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_methods_of_a_salted_class_keep_underscore_protection()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_module_level_function_collision_both_extracted()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_no_collision_ids_unaffected()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_no_unique_public_member_salts_every_member()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_public_method_keeps_plain_id_private_sibling_is_salted()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_python_underscore_resolution.py]] - code - graphify/tests/test_python_underscore_resolution.py
- [[test_same_file_subclass_inherits_from_the_salted_class()]] - code - graphify/tests/test_python_underscore_resolution.py
- [[textwrap]] - concept

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_111
SORT file.name ASC
```

## Connections to other communities
- 21 edges to [[_COMMUNITY_Community 51]]
- 3 edges to [[_COMMUNITY_Community 3]]
- 2 edges to [[_COMMUNITY_Community 48]]
- 2 edges to [[_COMMUNITY_Community 14]]
- 2 edges to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 386]]
- 1 edge to [[_COMMUNITY_Community 361]]
- 1 edge to [[_COMMUNITY_Community 370]]
- 1 edge to [[_COMMUNITY_Community 44]]

## Top bridge nodes
- [[textwrap]] - degree 12, connects to 7 communities
- [[test_python_underscore_resolution.py]] - degree 29, connects to 5 communities
- [[test_cross_file_import_resolves_to_the_salted_class()]] - degree 5, connects to 2 communities
- [[test_same_file_subclass_inherits_from_the_salted_class()]] - degree 7, connects to 1 community
- [[test_call_edge_resolves_to_the_salted_private_method()]] - degree 6, connects to 1 community