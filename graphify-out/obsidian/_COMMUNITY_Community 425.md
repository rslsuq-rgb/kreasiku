---
type: community
cohesion: 0.15
members: 13
---

# Community 425

**Cohesion:** 0.15 - loosely connected
**Members:** 13 nodes

## Members
- [[A Zig error set must become a type node with a `case_of` edge per member.…]] - rationale - graphify/tests/test_languages.py
- [[A bare call (`helper()`) must bind to the free function of that name, never to…]] - rationale - graphify/tests/test_languages.py
- [[A tagged union's variants must become nodes with a `case_of` edge each. The…]] - rationale - graphify/tests/test_languages.py
- [[Each enum member must become a node with a `case_of` edge to its enum. The enum…]] - rationale - graphify/tests/test_languages.py
- [[Methods declared inside a Zig enum or tagged union must be captured. Only…]] - rationale - graphify/tests/test_languages.py
- [[The reverse control a member call (`b.helper()`) must bind to the receiver's…]] - rationale - graphify/tests/test_languages.py
- [[_needs_zig]] - code
- [[test_zig_bare_call_does_not_cross_resolve_to_a_same_named_method()]] - code - graphify/tests/test_languages.py
- [[test_zig_enum_and_union_methods_are_extracted()]] - code - graphify/tests/test_languages.py
- [[test_zig_enum_members_emit_case_of_nodes()]] - code - graphify/tests/test_languages.py
- [[test_zig_error_set_members_emit_case_of_nodes()]] - code - graphify/tests/test_languages.py
- [[test_zig_member_call_does_not_cross_resolve_to_a_same_named_free_function()]] - code - graphify/tests/test_languages.py
- [[test_zig_tagged_union_variants_emit_case_of_nodes()]] - code - graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_425
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 16]]
- 6 edges to [[_COMMUNITY_Community 8]]

## Top bridge nodes
- [[test_zig_bare_call_does_not_cross_resolve_to_a_same_named_method()]] - degree 4, connects to 2 communities
- [[test_zig_enum_and_union_methods_are_extracted()]] - degree 4, connects to 2 communities
- [[test_zig_enum_members_emit_case_of_nodes()]] - degree 4, connects to 2 communities
- [[test_zig_error_set_members_emit_case_of_nodes()]] - degree 4, connects to 2 communities
- [[test_zig_member_call_does_not_cross_resolve_to_a_same_named_free_function()]] - degree 4, connects to 2 communities