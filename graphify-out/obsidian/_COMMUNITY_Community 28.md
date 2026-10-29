---
type: community
cohesion: 0.03
members: 110
---

# Community 28

**Cohesion:** 0.03 - loosely connected
**Members:** 110 nodes

## Members
- [[2180 quoted identifiers must not defeat the ERROR-node name recovery.…]] - rationale - graphify/tests/test_multilang.py
- [[2577 a name bound by WITH ... AS (...) is scoped to its statement, not a…]] - rationale - graphify/tests/test_multilang.py
- [[2812 `class FooApiException extends Exception` names PHP's global built-in.…]] - rationale - graphify/tests/test_multilang.py
- [[2953 DDL wrapped in BEGIN; ... COMMIT; must emit table nodes.]] - rationale - graphify/tests/test_multilang.py
- [[3782 `fn Handle()` beside `struct Handle {}` has the type's exact name, so…]] - rationale - graphify/tests/test_multilang.py
- [[3782 a struct, enum or trait used above its declaration in the same file must…]] - rationale - graphify/tests/test_multilang.py
- [[3782 ids are casefolded, so `fn handle` (also in an `extern` block), `const…]] - rationale - graphify/tests/test_multilang.py
- [[3782 only file-level type declarations (structenumtrait, and since 4285…]] - rationale - graphify/tests/test_multilang.py
- [[3782 the collision rule only withholds a type whose id another item shares. A…]] - rationale - graphify/tests/test_multilang.py
- [[3782 the pre-scan reaches the same items walk() does, so a type declared in…]] - rationale - graphify/tests/test_multilang.py
- [[3782 walk() never enters a const or static initializer, so a struct declared…]] - rationale - graphify/tests/test_multilang.py
- [[3782 when two files declare the same struct, the corpus-level rewire declines…]] - rationale - graphify/tests/test_multilang.py
- [[4283 `_rust_declaration_count` only tells a Rust declaration from a Rust impl…]] - rationale - graphify/tests/test_multilang.py
- [[4283 an `impl Thing` block in another file adds a second `Thing` node, but…]] - rationale - graphify/tests/test_multilang.py
- [[4283 impl blocks are only skipped in favour of a SINGLE declaration. With two…]] - rationale - graphify/tests/test_multilang.py
- [[4283 two inline modules declaring `Thing` in one file fold into a single node…]] - rationale - graphify/tests/test_multilang.py
- [[A cleanly-parsed LANGUAGE sql function in the same file is emitted once.]] - rationale - graphify/tests/test_multilang.py
- [[ALTER TABLE ... FOREIGN KEY ... REFERENCES produces a references edge.]] - rationale - graphify/tests/test_multilang.py
- [[ALTER TABLE with schema-qualified names produces correct edges.]] - rationale - graphify/tests/test_multilang.py
- [[Each enum variant must become a node with a `case_of` edge to its enum. The…]] - rationale - graphify/tests/test_multilang.py
- [[Enum variant payload types must emit `references` edges. Tuple variants…]] - rationale - graphify/tests/test_multilang.py
- [[Extract functions, structs, enums, traits, impl methods, staticsconsts, and…]] - rationale - graphify/graphify/extractors/rust.py
- [[PLpgSQL bodies make tree-sitter-sql emit ERROR nodes; the functions must still…]] - rationale - graphify/tests/test_multilang.py
- [[Path_100]] - code
- [[Schema-qualified table names (Schema.Table) are preserved.]] - rationale - graphify/tests/test_multilang.py
- [[Scoped calls (Typemethod) and blocklisted names must not produce INFERRED…]] - rationale - graphify/tests/test_multilang.py
- [[Tests for multi-language AST extraction JSTS, Go, Rust, SQL.]] - rationale - graphify/tests/test_multilang.py
- [[The 2180 recovery must not add junk, duplicates, or drop the tables.]] - rationale - graphify/tests/test_multilang.py
- [[Tuple struct fields (`struct Wrapper(A, B);`) nest their positional types under…]] - rationale - graphify/tests/test_multilang.py
- [[_call_pairs()]] - code - graphify/tests/test_multilang.py
- [[_confidences()]] - code - graphify/tests/test_multilang.py
- [[_edge_labels()_3]] - code - graphify/tests/test_multilang.py
- [[_edges_with_relation()]] - code - graphify/tests/test_multilang.py
- [[_extract_sql_or_skip()]] - code - graphify/tests/test_multilang.py
- [[_labels()_6]] - code - graphify/tests/test_multilang.py
- [[_normalize_symbol_label()]] - code - graphify/tests/test_multilang.py
- [[_scan_local_types()]] - code - graphify/graphify/extractors/rust.py
- [[_thing_targets_of_make()]] - code - graphify/tests/test_multilang.py
- [[extract_rust()]] - code - graphify/graphify/extractors/rust.py
- [[test_cache_hit_returns_same_result()]] - code - graphify/tests/test_multilang.py
- [[test_cache_miss_after_file_change()]] - code - graphify/tests/test_multilang.py
- [[test_extract_dispatches_all_languages()]] - code - graphify/tests/test_multilang.py
- [[test_go_call_edges_have_call_context()]] - code - graphify/tests/test_multilang.py
- [[test_go_embeds_struct_field()]] - code - graphify/tests/test_multilang.py
- [[test_go_emits_calls()]] - code - graphify/tests/test_multilang.py
- [[test_go_finds_constructor()]] - code - graphify/tests/test_multilang.py
- [[test_go_finds_methods()]] - code - graphify/tests/test_multilang.py
- [[test_go_finds_struct()]] - code - graphify/tests/test_multilang.py
- [[test_go_has_extracted_calls()]] - code - graphify/tests/test_multilang.py
- [[test_go_import_edges_have_import_context()]] - code - graphify/tests/test_multilang.py
- [[test_go_interface_embedding_emits_embeds()]] - code - graphify/tests/test_multilang.py
- [[test_go_method_parameter_return_contexts()]] - code - graphify/tests/test_multilang.py
- [[test_go_no_dangling_edges()]] - code - graphify/tests/test_multilang.py
- [[test_go_struct_named_field_emits_field_context()]] - code - graphify/tests/test_multilang.py
- [[test_multilang.py]] - code - graphify/tests/test_multilang.py
- [[test_php_builtin_base_class_never_inherits_from_cross_language_class()]] - code - graphify/tests/test_multilang.py
- [[test_rust_call_edges_have_call_context()]] - code - graphify/tests/test_multilang.py
- [[test_rust_calls_are_extracted()]] - code - graphify/tests/test_multilang.py
- [[test_rust_cross_file_reference_skips_impl_blocks_in_other_files()]] - code - graphify/tests/test_multilang.py
- [[test_rust_cross_file_reference_to_twice_declared_type_keeps_its_stub()]] - code - graphify/tests/test_multilang.py
- [[test_rust_declaration_tiebreak_keeps_stub_beside_another_language()]] - code - graphify/tests/test_multilang.py
- [[test_rust_declaration_tiebreak_keeps_stub_for_declarations_folded_in_one_node()]] - code - graphify/tests/test_multilang.py
- [[test_rust_emits_calls()]] - code - graphify/tests/test_multilang.py
- [[test_rust_enum_variant_references()]] - code - graphify/tests/test_multilang.py
- [[test_rust_enum_variants_emit_case_of_nodes()]] - code - graphify/tests/test_multilang.py
- [[test_rust_finds_function()]] - code - graphify/tests/test_multilang.py
- [[test_rust_finds_impl_methods()]] - code - graphify/tests/test_multilang.py
- [[test_rust_finds_static_and_const_items()]] - code - graphify/tests/test_multilang.py
- [[test_rust_finds_struct()]] - code - graphify/tests/test_multilang.py
- [[test_rust_forward_reference_keeps_its_stub_when_a_non_type_shares_the_name()]] - code - graphify/tests/test_multilang.py
- [[test_rust_forward_reference_prescan_skips_items_that_are_not_nodes()]] - code - graphify/tests/test_multilang.py
- [[test_rust_forward_reference_resolves_into_an_inline_module()]] - code - graphify/tests/test_multilang.py
- [[test_rust_forward_reference_resolves_when_no_other_item_shares_the_id()]] - code - graphify/tests/test_multilang.py
- [[test_rust_forward_reference_skips_items_in_const_and_static_initializers()]] - code - graphify/tests/test_multilang.py
- [[test_rust_forward_reference_to_a_casefold_colliding_type_resolves_to_it()]] - code - graphify/tests/test_multilang.py
- [[test_rust_forward_reference_to_ambiguous_type_name_stays_local()]] - code - graphify/tests/test_multilang.py
- [[test_rust_forward_type_reference_resolves_to_local_declaration()]] - code - graphify/tests/test_multilang.py
- [[test_rust_import_edges_have_import_context()]] - code - graphify/tests/test_multilang.py
- [[test_rust_method_parameter_return_and_generic_contexts()]] - code - graphify/tests/test_multilang.py
- [[test_rust_no_cross_crate_spurious_edges()]] - code - graphify/tests/test_multilang.py
- [[test_rust_no_dangling_edges()]] - code - graphify/tests/test_multilang.py
- [[test_rust_struct_field_emits_field_context()]] - code - graphify/tests/test_multilang.py
- [[test_rust_supertrait_emits_inherits()]] - code - graphify/tests/test_multilang.py
- [[test_rust_trait_decl_method_is_distinct_from_impl_method()]] - code - graphify/tests/test_multilang.py
- [[test_rust_trait_impl_emits_implements()]] - code - graphify/tests/test_multilang.py
- [[test_rust_trait_method_declarations_are_captured()]] - code - graphify/tests/test_multilang.py
- [[test_rust_tuple_struct_field_references()]] - code - graphify/tests/test_multilang.py
- [[test_sql_alter_table_fk_edge()]] - code - graphify/tests/test_multilang.py
- [[test_sql_create_table_inside_transaction_block()]] - code - graphify/tests/test_multilang.py
- [[test_sql_cte_is_not_read_as_a_table()]] - code - graphify/tests/test_multilang.py
- [[test_sql_emits_foreign_key_edge()]] - code - graphify/tests/test_multilang.py
- [[test_sql_emits_reads_from_edge()]] - code - graphify/tests/test_multilang.py
- [[test_sql_finds_function()]] - code - graphify/tests/test_multilang.py
- [[test_sql_finds_tables()]] - code - graphify/tests/test_multilang.py
- [[test_sql_finds_view()]] - code - graphify/tests/test_multilang.py
- [[test_sql_no_dangling_edges()]] - code - graphify/tests/test_multilang.py
- [[test_sql_plpgsql_clean_function_not_double_emitted()]] - code - graphify/tests/test_multilang.py
- [[test_sql_plpgsql_functions_survive_parse_errors()]] - code - graphify/tests/test_multilang.py
- [[test_sql_quoted_plpgsql_file_stays_clean()]] - code - graphify/tests/test_multilang.py
- [[test_sql_quoted_plpgsql_routines_are_recovered()]] - code - graphify/tests/test_multilang.py
- [[test_sql_schema_qualified_alter_fk()]] - code - graphify/tests/test_multilang.py
- [[test_sql_schema_qualified_names()]] - code - graphify/tests/test_multilang.py
- [[test_ts_call_edges_have_call_context()]] - code - graphify/tests/test_multilang.py
- [[test_ts_calls_are_extracted()]] - code - graphify/tests/test_multilang.py
- [[test_ts_emits_calls()]] - code - graphify/tests/test_multilang.py
- [[test_ts_finds_class()]] - code - graphify/tests/test_multilang.py
- [[test_ts_finds_function()]] - code - graphify/tests/test_multilang.py
- [[test_ts_finds_methods()]] - code - graphify/tests/test_multilang.py
- [[test_ts_import_edges_have_import_context()]] - code - graphify/tests/test_multilang.py
- [[test_ts_no_dangling_edges()]] - code - graphify/tests/test_multilang.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_28
SORT file.name ASC
```

## Connections to other communities
- 26 edges to [[_COMMUNITY_Community 59]]
- 16 edges to [[_COMMUNITY_Community 16]]
- 10 edges to [[_COMMUNITY_Community 14]]
- 9 edges to [[_COMMUNITY_Community 13]]
- 6 edges to [[_COMMUNITY_Community 3]]
- 6 edges to [[_COMMUNITY_Community 416]]
- 5 edges to [[_COMMUNITY_Community 113]]
- 5 edges to [[_COMMUNITY_Community 317]]
- 2 edges to [[_COMMUNITY_Community 121]]
- 2 edges to [[_COMMUNITY_Community 482]]
- 2 edges to [[_COMMUNITY_Community 494]]
- 2 edges to [[_COMMUNITY_Community 457]]
- 2 edges to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 37]]
- 1 edge to [[_COMMUNITY_Community 83]]
- 1 edge to [[_COMMUNITY_Community 45]]
- 1 edge to [[_COMMUNITY_Community 559]]
- 1 edge to [[_COMMUNITY_Community 4]]

## Top bridge nodes
- [[extract_rust()]] - degree 57, connects to 10 communities
- [[test_multilang.py]] - degree 116, connects to 9 communities
- [[_extract_sql_or_skip()]] - degree 18, connects to 2 communities
- [[_thing_targets_of_make()]] - degree 4, connects to 1 community
- [[test_go_call_edges_have_call_context()]] - degree 3, connects to 1 community