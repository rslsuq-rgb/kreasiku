---
type: community
cohesion: 0.21
members: 20
---

# Community 291

**Cohesion:** 0.21 - loosely connected
**Members:** 20 nodes

## Members
- [[A reference above ``struct Ignore`` in a file that also has ``fn ignore``…]] - rationale - graphify/tests/test_rust_case_collisions.py
- [[In-file calls bind by the name as written, so they reach the salted ids.]] - rationale - graphify/tests/test_rust_case_collisions.py
- [[Path_109]] - code
- [[Rust file-level items whose names fold to one node id (3302's rule, Rust…]] - rationale - graphify/tests/test_rust_case_collisions.py
- [[The call inside ``ignore()`` is credited to ``ignore()``, not to the struct.]] - rationale - graphify/tests/test_rust_case_collisions.py
- [[The declared type keeps the plain id, so it and its methods do not move.]] - rationale - graphify/tests/test_rust_case_collisions.py
- [[With no declared type in the group, neither member keeps the plain id.]] - rationale - graphify/tests/test_rust_case_collisions.py
- [[_edges()_7]] - code - graphify/tests/test_rust_case_collisions.py
- [[_extract()_17]] - code - graphify/tests/test_rust_case_collisions.py
- [[_sourced()]] - code - graphify/tests/test_rust_case_collisions.py
- [[``cfg`` variants of one function are one symbol and keep the plain id.]] - rationale - graphify/tests/test_rust_case_collisions.py
- [[test_calls_to_salted_functions_keep_their_in_file_edges()]] - code - graphify/tests/test_rust_case_collisions.py
- [[test_case_only_functions_are_both_salted()]] - code - graphify/tests/test_rust_case_collisions.py
- [[test_cfg_twins_still_share_one_node()]] - code - graphify/tests/test_rust_case_collisions.py
- [[test_forward_reference_to_the_retained_type_lands_on_it()]] - code - graphify/tests/test_rust_case_collisions.py
- [[test_function_and_struct_differing_by_case_are_both_extracted()]] - code - graphify/tests/test_rust_case_collisions.py
- [[test_rust_case_collisions.py]] - code - graphify/tests/test_rust_case_collisions.py
- [[test_salted_function_owns_its_own_body()]] - code - graphify/tests/test_rust_case_collisions.py
- [[test_struct_keeps_its_id_and_methods_when_a_function_shares_it()]] - code - graphify/tests/test_rust_case_collisions.py
- [[test_type_keeps_the_plain_id_whatever_the_declaration_order()]] - code - graphify/tests/test_rust_case_collisions.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_291
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_Community 14]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_rust_case_collisions.py]] - degree 15, connects to 3 communities
- [[_extract()_17]] - degree 10, connects to 1 community
- [[test_forward_reference_to_the_retained_type_lands_on_it()]] - degree 4, connects to 1 community