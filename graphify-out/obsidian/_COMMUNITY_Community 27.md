---
type: community
cohesion: 0.05
members: 110
---

# Community 27

**Cohesion:** 0.05 - loosely connected
**Members:** 110 nodes

## Members
- [[1634 + 1640 `TaxCalculator.rate_for` resolves across files to a…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[1634 `Model.where` (no `where` def, e.g. ActiveRecord) still links to the…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[1634 `Processor.call` (def self.call) resolves to the singleton method.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[1640 shape 1, nested — the inner module is labelled fully qualified (2302),…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[1640 shape 1 `module Foo` must get a node and own its methods.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[1640 shape 2 `Foo = Struct.new(...) do ... end`.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[1640 shape 3 `Foo = Class.new(Super)` — node + inherits edge.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[1784 `.rake` files are plain Ruby and must route to the Ruby extractor and…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[2302 over-suppression guard a qualified reference whose full path IS defined…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[2302 regression guard qualifying labels must not break bare constant…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[2302 `extend ActiveSupportConcern` must NOT resolve to an unrelated local…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[2302 `module BillingTotalsConcern` (compact) and a top-level module both…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[3077 Calls to p.save and p.save! must resolve to different target nodes.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[3077 ID of foo! must remain stable when foo is added later.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[3077 Singleton methods (def self.foo!) must use the same sanitizer.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[3077 Top-level functions (def parse!) must use the same sanitizer.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[3077 def foo, def foo!, def foo, and def foo=(val) in the same class must…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[A member call on a receiver with no known type must NOT be resolved.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[Extract classes, methods, singleton methods, and calls from a .rb file.]] - rationale - graphify/graphify/extract.py
- [[Path_96]] - code
- [[Return the `calls` edge whose sourcetarget labels contain the given…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[TDD specs for type-aware Ruby call-graph resolution. These drive the improved…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[The BaseToolGetSchema shape reported in 3567 becomes structural.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[The differentiator adding an unrelated Workerrun must NOT break the edge.…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[The namespace check must not cost a genuine `BillingProcessor.run` edge.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[Two classes named `Processor` = ambiguous receiver = bail (no wrong edge).]] - rationale - graphify/tests/test_ruby_resolution.py
- [[_call_edges_matching()]] - code - graphify/tests/test_ruby_resolution.py
- [[_find_raw_call()]] - code - graphify/tests/test_ruby_resolution.py
- [[_has_call_edge()]] - code - graphify/tests/test_ruby_resolution.py
- [[_labels()_5]] - code - graphify/tests/test_ruby_resolution.py
- [[_method_edges()]] - code - graphify/tests/test_ruby_resolution.py
- [[_mixes_in()]] - code - graphify/tests/test_ruby_resolution.py
- [[_node_labels()]] - code - graphify/tests/test_ruby_resolution.py
- [[_only_call()]] - code - graphify/tests/test_ruby_resolution.py
- [[_owned_method_nid()]] - code - graphify/tests/test_ruby_resolution.py
- [[_raw_calls()]] - code - graphify/tests/test_ruby_resolution.py
- [[_typed_member_inheritance_edges()]] - code - graphify/tests/test_ruby_resolution.py
- [[_write()_19]] - code - graphify/tests/test_ruby_resolution.py
- [[`Solo.go` pins the constant to top level and must keep resolving. Worth its…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[`ActiveRecordBase.transaction` must not bind to an unrelated local `Base`.…]] - rationale - graphify/tests/test_ruby_resolution.py
- [[`p = Processor.new` should link the caller to the Processor class.]] - rationale - graphify/tests/test_ruby_resolution.py
- [[extract_ruby()]] - code - graphify/graphify/extract.py
- [[test_absolute_class_declaration_inside_namespace_stays_inferred()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_ambiguous_binding_yields_no_type()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_ambiguous_constant_receiver_emits_no_edge()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_class_new_constant_creates_class_and_inherits()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_class_new_creates_instantiation_edge()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_compact_and_nested_module_includes_resolve()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_compact_class_does_not_invent_lexical_superclass()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_constant_receiver_module_function_call_resolves()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_constant_receiver_singleton_call_resolves()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_constant_receiver_unknown_class_method_falls_back_to_class()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_data_define_constant_creates_class()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_deep_qualified_superclass_stops_at_first_lexical_segment()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_destructured_constant_alias_owner_stays_inferred()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_extend_and_prepend_emit_mixes_in()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_extend_self_and_nonconstant_args_emit_no_mixin()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_external_owner_mutator_inside_external_eigenclass_stays_inferred()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_external_owner_mutator_inside_singleton_class_stays_inferred()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_external_owner_mutator_through_constant_alias_stays_inferred()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_framework_qualified_receiver_does_not_bind_same_named_local_class()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_in_corpus_qualified_mixin_resolves()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_include_emits_mixes_in_edge()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_include_of_undefined_or_ambiguous_module_emits_no_edge()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_call_does_not_cross_method_kind()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_call_stays_inferred_across_lookup_barrier()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_call_stays_inferred_for_compact_reopening()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_call_stays_inferred_for_dynamic_superclass_constant_write()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_call_stays_inferred_for_external_owner_eval()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_call_stays_inferred_for_external_owner_mutator()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_call_stays_inferred_for_multiple_constant_write()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_call_stays_inferred_for_reopened_class()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_call_stays_inferred_for_superclass_constant_alias()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_call_stays_inferred_under_enclosing_refinement()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_call_stops_at_ambiguous_nearer_method()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_constant_lookup_does_not_fall_back_past_lexical_owner()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_instance_call_walks_unique_ancestry()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_singleton_call_stays_inferred_for_eigenclass_barrier()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_singleton_call_stays_inferred_for_external_owner()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_inherited_singleton_implicit_self_call_is_promoted()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_local_binding_gives_receiver_a_type()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_member_call_captures_receiver()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_mixin_is_not_emitted_as_calls_edge()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_nested_declared_class_still_resolves_as_receiver()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_nested_modules_each_get_a_node()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_no_false_positive_when_type_unknown()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_plain_module_gets_a_node_with_methods()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_qualified_external_mixin_does_not_bind_to_local()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_qualified_external_owner_through_namespace_alias_stays_inferred()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_qualified_receiver_still_resolves_inside_its_own_namespace()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_qualified_superclass_stops_at_nearer_lexical_prefix()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_qualified_superclass_under_rebound_namespace_stays_inferred()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_rake_files_extract_and_resolve_like_rb()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_resolution_is_type_based_not_name_luck()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_resolves_member_call_by_type()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_ruby_no_error()]] - code - graphify/tests/test_languages.py
- [[test_ruby_resolution.py]] - code - graphify/tests/test_ruby_resolution.py
- [[test_ruby_suffixed_methods_call_resolution()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_ruby_suffixed_methods_extraction_and_labels()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_ruby_suffixed_methods_id_stability()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_ruby_suffixed_singleton_methods_extraction()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_ruby_suffixed_toplevel_functions_extraction()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_struct_new_constant_creates_class_with_methods()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_top_level_pinned_constant_receiver_still_resolves()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_typed_member_call_prefers_direct_override()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_typed_member_call_resolves_to_inherited_instance_method()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_typed_member_call_stays_unresolved_when_any_ruby_file_is_unsafe()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_typed_member_call_stays_unresolved_with_external_owner_alias()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_typed_member_inheritance_recognizes_disambiguated_unsafe_file()]] - code - graphify/tests/test_ruby_resolution.py
- [[test_typed_member_inheritance_requires_complete_ruby_schema()]] - code - graphify/tests/test_ruby_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_27
SORT file.name ASC
```

## Connections to other communities
- 53 edges to [[_COMMUNITY_Community 14]]
- 5 edges to [[_COMMUNITY_Community 277]]
- 3 edges to [[_COMMUNITY_Community 29]]
- 3 edges to [[_COMMUNITY_Community 8]]
- 2 edges to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 0]]
- 1 edge to [[_COMMUNITY_Community 639]]
- 1 edge to [[_COMMUNITY_Community 54]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[extract_ruby()]] - degree 24, connects to 6 communities
- [[test_ruby_resolution.py]] - degree 87, connects to 4 communities
- [[test_inherited_singleton_implicit_self_call_is_promoted()]] - degree 7, connects to 1 community
- [[test_resolution_is_type_based_not_name_luck()]] - degree 7, connects to 1 community
- [[test_ambiguous_constant_receiver_emits_no_edge()]] - degree 6, connects to 1 community