---
type: community
cohesion: 0.26
members: 39
---

# Community 117

**Cohesion:** 0.26 - loosely connected
**Members:** 39 nodes

## Members
- [[Build a merged-graph shape one caller plus (declaration, member) pairs.]] - rationale - graphify/tests/test_cross_repo_member_calls.py
- [[Emit `calls` edges for parked member calls another repo answers. Returns the…]] - rationale - graphify/graphify/cross_repo_calls.py
- [[Recompute-from-scratch is what keeps a stale answer from surviving.]] - rationale - graphify/tests/test_cross_repo_member_calls.py
- [[_added_calls()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[_caller()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[_declaration()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[_graph()_2]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[_method()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[`merge-graphs` finishes a member call whose receiver type is in another repo…]] - rationale - graphify/tests/test_cross_repo_member_calls.py
- [[link_cross_repo_member_calls()]] - code - graphify/graphify/cross_repo_calls.py
- [[test_a_cpp_call_does_not_bind_to_a_csharp_declaration()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_cpp_header_declaration_answers_through_defines()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_declaration_in_another_language_binds_nothing()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_declaration_in_the_callers_own_repo_binds_nothing()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_declaration_without_that_method_binds_nothing()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_defines_member_does_not_answer_a_java_call()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_go_call_does_not_bind_to_a_differently_cased_method()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_go_call_does_not_bind_to_a_java_declaration()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_parked_call_binds_to_the_one_declaration_in_another_repo()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_php_call_binds_to_a_php_declaration_in_another_repo()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_php_call_does_not_bind_to_a_java_declaration()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_pre_3152_parked_entry_without_file_falls_back_to_the_caller_file()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_repo_that_stops_declaring_the_type_loses_the_edge()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_sourceless_stub_does_not_answer_a_parked_call()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_type_declaring_both_objc_sigils_binds_nothing()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_typescript_call_binds_across_the_whole_js_family()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_a_typescript_call_does_not_bind_to_a_python_declaration()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_an_objc_call_does_not_bind_to_a_cpp_member_of_a_shared_header()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_an_objc_callee_that_already_carries_a_sigil_still_binds()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_an_objc_class_split_decl_impl_across_repos_binds_to_the_definition()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_an_objc_protocol_does_not_answer_a_parked_call()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_an_objc_selector_answers_through_either_sigil()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_an_unknown_language_binds_nothing()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_cross_repo_member_calls.py]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_edge_source_file_is_the_parked_call_site_not_the_caller_node_file()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_running_twice_does_not_duplicate_the_edge()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_the_definition_answers_before_a_same_named_declaration()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_two_objc_definitions_of_the_same_class_still_bind_nothing()]] - code - graphify/tests/test_cross_repo_member_calls.py
- [[test_two_repos_declaring_the_same_name_bind_nothing()]] - code - graphify/tests/test_cross_repo_member_calls.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_117
SORT file.name ASC
```

## Connections to other communities
- 14 edges to [[_COMMUNITY_Community 208]]
- 9 edges to [[_COMMUNITY_Community 371]]
- 4 edges to [[_COMMUNITY_Community 17]]
- 2 edges to [[_COMMUNITY_Community 23]]
- 2 edges to [[_COMMUNITY_Community 220]]
- 1 edge to [[_COMMUNITY_Community 92]]
- 1 edge to [[_COMMUNITY_Community 14]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 109]]
- 1 edge to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_cross_repo_member_calls.py]] - degree 53, connects to 10 communities
- [[link_cross_repo_member_calls()]] - degree 48, connects to 3 communities
- [[_graph()_2]] - degree 32, connects to 1 community
- [[test_a_typescript_call_binds_across_the_whole_js_family()]] - degree 8, connects to 1 community