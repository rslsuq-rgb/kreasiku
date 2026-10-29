---
type: community
cohesion: 0.04
members: 60
---

# Community 69

**Cohesion:** 0.04 - loosely connected
**Members:** 60 nodes

## Members
- [[3802 a script run through pythonpython3node is a real dependency the…]] - rationale - graphify/tests/test_extract.py
- [[4081 sourcing a shell file is an import, not script execution.]] - rationale - graphify/tests/test_extract.py
- [[A base declared further down is read as the class of that name. Here two…]] - rationale - graphify/tests/test_extract.py
- [[A source that is mid-edit can make A extend B and B extend A (or a class extend…]] - rationale - graphify/tests/test_extract.py
- [[A top-level `def` and a mixed-in module method are not methods of an unrelated…]] - rationale - graphify/tests/test_extract.py
- [[C looks a simple name up in the class and its base classes, not in the…]] - rationale - graphify/tests/test_extract.py
- [[Every order of the four top-level classes gives the same calls.]] - rationale - graphify/tests/test_extract.py
- [[Extract one source file and return {(caller_id, callee_id)} for calls edges.]] - rationale - graphify/tests/test_extract.py
- [[Implicit self only claims methods of the caller's own chain a free function, a…]] - rationale - graphify/tests/test_extract.py
- [[Inner inherits b() from Base, which is nearer than the b() of the Outer around…]] - rationale - graphify/tests/test_extract.py
- [[Inner.b is declared after Outer.b, so the file-wide name map handed the b() in…]] - rationale - graphify/tests/test_extract.py
- [[Kotlin falls back to a top-level function when a member's parameters do not fit…]] - rationale - graphify/tests/test_extract.py
- [[Only an unqualified call means my class `o.b()` must not become Outer.b just…]] - rationale - graphify/tests/test_extract.py
- [[The anonymous class has no b(), so the lookup goes outward through the method…]] - rationale - graphify/tests/test_extract.py
- [[Two bases on one level both declare m() ordering them is beyond this pass, so…]] - rationale - graphify/tests/test_extract.py
- [[Two nested classes with one simple name are one node, so which class lies…]] - rationale - graphify/tests/test_extract.py
- [[_dep_entry()]] - code - graphify/tests/test_extract.py
- [[_single_file_call_pairs()]] - code - graphify/tests/test_extract.py
- [[`IOBase` looks like an interface by its name, but the file declares it a class…]] - rationale - graphify/tests/test_extract.py
- [[`b()` in Outer reaches Outer.b and `ping()` the Base it extends, `s()` in the…]] - rationale - graphify/tests/test_extract.py
- [[`extends` is only known after the symbol pass, so a method the class does not…]] - rationale - graphify/tests/test_extract.py
- [[`new Base() { ... }` inherits ping() from Base, which is nearer than the ping()…]] - rationale - graphify/tests/test_extract.py
- [[`self.save()`, a bare `save()` (implicit self) and `super.ping()` must stay on…]] - rationale - graphify/tests/test_extract.py
- [[`self.save`, a paren-less `save` and an inherited `self.ping` must stay on…]] - rationale - graphify/tests/test_extract.py
- [[`super.greet()` can never mean the caller's own method. The `extends` chain is…]] - rationale - graphify/tests/test_extract.py
- [[`this.save()` in Server must reach Server.save, not the save() of a class…]] - rationale - graphify/tests/test_extract.py
- [[parametrize_103]] - code
- [[test_an_empty_or_blank_version_keeps_the_bare_name_and_makes_no_ref_or_link()]] - code - graphify/tests/test_extract.py
- [[test_call_on_another_receiver_is_not_claimed_by_the_callers_class()]] - code - graphify/tests/test_extract.py
- [[test_cpp_two_bases_declaring_the_name_bind_nothing()]] - code - graphify/tests/test_extract.py
- [[test_csharp_base_class_named_like_an_interface_is_a_base()]] - code - graphify/tests/test_extract.py
- [[test_csharp_class_does_not_inherit_the_members_of_an_interface()]] - code - graphify/tests/test_extract.py
- [[test_csharp_two_classes_of_one_name_leave_a_base_unresolved()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_emits_invokes_for_a_non_shell_interpreter()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_emits_script_invocation_calls()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_script_invocation_via_variable_built_path()]] - code - graphify/tests/test_extract.py
- [[test_extract_bash_source_forms_are_imports_not_invokes()]] - code - graphify/tests/test_extract.py
- [[test_java_anonymous_class_call_reaches_the_method_around_it()]] - code - graphify/tests/test_extract.py
- [[test_java_anonymous_class_reads_the_in_file_type_it_extends()]] - code - graphify/tests/test_extract.py
- [[test_java_cyclic_extends_ends_the_lookup()]] - code - graphify/tests/test_extract.py
- [[test_java_same_named_nested_classes_end_the_walk()]] - code - graphify/tests/test_extract.py
- [[test_js_super_call_does_not_self_loop_onto_the_overriding_method()]] - code - graphify/tests/test_extract.py
- [[test_js_this_call_binds_to_own_class_not_last_declared()]] - code - graphify/tests/test_extract.py
- [[test_js_this_call_to_inherited_method_keeps_its_edge()]] - code - graphify/tests/test_extract.py
- [[test_kotlin_unqualified_call_keeps_the_file_wide_lookup()]] - code - graphify/tests/test_extract.py
- [[test_nested_class_declared_after_the_method_does_not_capture_the_call()]] - code - graphify/tests/test_extract.py
- [[test_ruby_implicit_self_keeps_top_level_and_mixin_edges()]] - code - graphify/tests/test_extract.py
- [[test_ruby_self_sends_bind_within_own_class_chain()]] - code - graphify/tests/test_extract.py
- [[test_swift_bare_call_to_free_function_and_extension_keep_their_edges()]] - code - graphify/tests/test_extract.py
- [[test_swift_self_calls_bind_within_own_class_chain()]] - code - graphify/tests/test_extract.py
- [[test_the_manifest_entry_label_carries_a_one_line_capped_version()]] - code - graphify/tests/test_extract.py
- [[test_the_ref_node_keeps_the_bare_name_whatever_the_range()]] - code - graphify/tests/test_extract.py
- [[test_unqualified_call_binds_to_the_nearest_class_that_declares_it()]] - code - graphify/tests/test_extract.py
- [[test_unqualified_call_prefers_the_callers_base_to_the_enclosing_class()]] - code - graphify/tests/test_extract.py
- [[test_unqualified_call_reaches_a_base_declared_after_the_class()]] - code - graphify/tests/test_extract.py
- [[test_unqualified_call_reaches_a_base_of_the_enclosing_class()]] - code - graphify/tests/test_extract.py
- [[test_unqualified_call_reaches_an_interface_default_method_or_a_mixed_in_trait()]] - code - graphify/tests/test_extract.py
- [[test_unqualified_call_reaches_the_base_of_a_base()]] - code - graphify/tests/test_extract.py
- [[test_unqualified_call_targets_do_not_depend_on_declaration_order()]] - code - graphify/tests/test_extract.py
- [[test_unqualified_call_walks_out_through_every_enclosing_class()]] - code - graphify/tests/test_extract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_69
SORT file.name ASC
```

## Connections to other communities
- 35 edges to [[_COMMUNITY_Community 2]]
- 4 edges to [[_COMMUNITY_Community 36]]
- 3 edges to [[_COMMUNITY_Community 415]]
- 1 edge to [[_COMMUNITY_Community 14]]
- 1 edge to [[_COMMUNITY_Community 305]]
- 1 edge to [[_COMMUNITY_Community 435]]
- 1 edge to [[_COMMUNITY_Community 77]]

## Top bridge nodes
- [[parametrize_103]] - degree 24, connects to 3 communities
- [[_single_file_call_pairs()]] - degree 29, connects to 2 communities
- [[_dep_entry()]] - degree 5, connects to 2 communities
- [[test_extract_bash_emits_invokes_for_a_non_shell_interpreter()]] - degree 4, connects to 2 communities
- [[test_extract_bash_source_forms_are_imports_not_invokes()]] - degree 4, connects to 2 communities