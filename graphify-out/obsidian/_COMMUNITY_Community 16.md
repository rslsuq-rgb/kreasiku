---
type: community
cohesion: 0.02
members: 145
---

# Community 16

**Cohesion:** 0.02 - loosely connected
**Members:** 145 nodes

## Members
- [[Add TSJS receiver bindings to ``table`` (name - TypeName), for member-call…]] - rationale - graphify/graphify/extractors/engine.py
- [[Collect ``name - TypeName`` for every Go receiver whose type is written down.…]] - rationale - graphify/graphify/extractors/go.py
- [[Collect ``var - ClassName`` from ObjC local declarations (``Foo f = ...;``)…]] - rationale - graphify/graphify/extractors/objc.py
- [[Collect ``var - ClassName`` from local variable declarations in a C++ function…]] - rationale - graphify/graphify/extractors/engine.py
- [[Collect every name bound as a local variable or parameter in one Ruby method…]] - rationale - graphify/graphify/extractors/engine.py
- [[Conservative lexical guard for a plain external module receiver. A module-root…]] - rationale - graphify/graphify/extractors/engine.py
- [[Disambiguate PHP inheritsimplementsmixes_inimportsreferences targets using…]] - rationale - graphify/graphify/extractors/resolution.py
- [[Drop a generic instantiation's type arguments from a receiver type's text. ``(b…]] - rationale - graphify/graphify/extractors/go.py
- [[Each binding of a `use` tree, as the argument of a plain `use` that binds the…]] - rationale - graphify/graphify/extractors/rust.py
- [[Emit module-level ``imports`` edges and report the imported modules. A Swift…]] - rationale - graphify/graphify/extract.py
- [[Extract functions, methods, type declarations, and imports from a .go file.]] - rationale - graphify/graphify/extractors/go.py
- [[Extract functions, structs, enums, unions, and imports from a .zig file.]] - rationale - graphify/graphify/extractors/zig.py
- [[First `simple_identifier` under node in pre-order, or None. tree-sitter-verilog…]] - rationale - graphify/graphify/extractors/verilog.py
- [[Go extractor. Moved verbatim from graphifyextract.py.]] - rationale - graphify/graphify/extractors/go.py
- [[Map ``local_var - ClassName`` for ``var = ClassName.new`` within one Ruby…]] - rationale - graphify/graphify/extractors/engine.py
- [[Map ``name - ClassName`` for the parameters and locals of one Python function.…]] - rationale - graphify/graphify/extractors/engine.py
- [[Names an `import` binds to a module OUTSIDE the corpus. An imported name is a…]] - rationale - graphify/graphify/extractors/engine.py
- [[Names bound by a declaration's generic type parameters. Covers a…]] - rationale - graphify/graphify/extractors/go.py
- [[Path_38]] - code
- [[Path_39]] - code
- [[Plain parameter identifiers declared on a Python `parameters` node. Covers…]] - rationale - graphify/graphify/extractors/engine.py
- [[Re-point dangling Java ``implements````inherits`` edges to the real…]] - rationale - graphify/graphify/extractors/resolution.py
- [[Recursively unwrap declarator to find the innermost identifier (C).]] - rationale - graphify/graphify/extract.py
- [[Resolve a raw (possibly qualified) PHP class reference to an FQN. PHP name-…]] - rationale - graphify/graphify/extractors/resolution.py
- [[Return ``ClassName`` if ``node`` is a ``ClassName.new(...)`` call, else None.…]] - rationale - graphify/graphify/extractors/engine.py
- [[Return a stable ownerarity key for a deliberately narrow impl shape.]] - rationale - graphify/graphify/extractors/rust.py
- [[Return the bare variable name from a C++ declaration declarator, unwrapping…]] - rationale - graphify/graphify/extractors/engine.py
- [[The name a typedef declarator introduces `Handle`, `HandlePtr`, `(Fn)(int)`,…]] - rationale - graphify/graphify/extractors/engine.py
- [[The one declared type a Go type expression names, or None. Only `Greeter` and…]] - rationale - graphify/graphify/extractors/go.py
- [[The single class a Python annotation or constructor callee names, else None.…]] - rationale - graphify/graphify/extractors/engine.py
- [[The type a `Typef()` call is qualified by, or None for a module path. `Foo`,…]] - rationale - graphify/graphify/extractors/rust.py
- [[The type names a namespace- or file-scope `using X = ...;` or `typedef`…]] - rationale - graphify/graphify/extractors/engine.py
- [[True for a tagged union (`union(enum)`  `union(SomeTag)`), whose members are…]] - rationale - graphify/graphify/extractors/zig.py
- [[Two-pass Java import resolution. Pass 1 build a global index {ClassName…]] - rationale - graphify/graphify/extractors/resolution.py
- [[Walk a Go type expression; append (name, role) tuples. Names in ``skip`` (the…]] - rationale - graphify/graphify/extractors/go.py
- [[Whether `type A = pkg.A` (or `pkg.A...`) re-exports another package's type…]] - rationale - graphify/graphify/extractors/go.py
- [[Whether a lexical body can alter Ruby method lookup dynamically.]] - rationale - graphify/graphify/extractors/engine.py
- [[Whether any lexical scope in a file activates or defines a refinement.…]] - rationale - graphify/graphify/extractors/engine.py
- [[_add_params()]] - code - graphify/graphify/extractors/engine.py
- [[_add_targets()]] - code - graphify/graphify/extractors/engine.py
- [[_bare_type_ident()]] - code - graphify/graphify/extractors/engine.py
- [[_class_name()]] - code - graphify/graphify/extractors/engine.py
- [[_clause_names()]] - code - graphify/graphify/extractors/engine.py
- [[_cpp_alias_names()]] - code - graphify/graphify/extractors/engine.py
- [[_cpp_declarator_name()]] - code - graphify/graphify/extractors/engine.py
- [[_cpp_declarator_type_name()]] - code - graphify/graphify/extractors/engine.py
- [[_cpp_local_var_types()]] - code - graphify/graphify/extractors/engine.py
- [[_cpp_type_last_name()]] - code - graphify/graphify/extractors/engine.py
- [[_def_name()]] - code - graphify/graphify/extractors/julia.py
- [[_emit_import()]] - code - graphify/graphify/extractors/julia.py
- [[_external_stub()]] - code - graphify/graphify/extractors/resolution.py
- [[_external_stub()_1]] - code - graphify/graphify/extractors/resolution.py
- [[_extract_import()]] - code - graphify/graphify/extractors/zig.py
- [[_first_identifier()]] - code - graphify/graphify/extractors/engine.py
- [[_func_name_from_signature()]] - code - graphify/graphify/extractors/julia.py
- [[_functor_type_name()]] - code - graphify/graphify/extractors/julia.py
- [[_get_c_func_name()]] - code - graphify/graphify/extract.py
- [[_go_alias_re_exports()]] - code - graphify/graphify/extractors/go.py
- [[_go_collect_type_refs()]] - code - graphify/graphify/extractors/go.py
- [[_go_receiver_type_table()]] - code - graphify/graphify/extractors/go.py
- [[_go_single_type_name()]] - code - graphify/graphify/extractors/go.py
- [[_go_strip_generic_args()]] - code - graphify/graphify/extractors/go.py
- [[_go_type_param_names()]] - code - graphify/graphify/extractors/go.py
- [[_import_java()]] - code - graphify/graphify/extract.py
- [[_import_php()]] - code - graphify/graphify/extract.py
- [[_import_scala()]] - code - graphify/graphify/extract.py
- [[_import_swift()]] - code - graphify/graphify/extract.py
- [[_is_tagged_union()]] - code - graphify/graphify/extractors/zig.py
- [[_js_external_import_names()]] - code - graphify/graphify/extractors/engine.py
- [[_julia_mod_name()]] - code - graphify/graphify/extractors/julia.py
- [[_member_ident()]] - code - graphify/graphify/extractors/julia.py
- [[_new_type()]] - code - graphify/graphify/extractors/engine.py
- [[_objc_local_var_types()]] - code - graphify/graphify/extractors/objc.py
- [[_optional_type_ident()]] - code - graphify/graphify/extractors/engine.py
- [[_php_fqn_from_raw()]] - code - graphify/graphify/extractors/resolution.py
- [[_pkg_matches()]] - code - graphify/graphify/extractors/resolution.py
- [[_plain_symbol_nid()]] - code - graphify/graphify/extractors/go.py
- [[_python_class_ref()]] - code - graphify/graphify/extractors/engine.py
- [[_python_local_class_bindings()]] - code - graphify/graphify/extractors/engine.py
- [[_python_param_names()]] - code - graphify/graphify/extractors/engine.py
- [[_python_receiver_shadow_checker()]] - code - graphify/graphify/extractors/engine.py
- [[_read_text()]] - code - graphify/graphify/extractors/base.py
- [[_receiver_type_of()]] - code - graphify/graphify/extractors/go.py
- [[_record_raw()]] - code - graphify/graphify/extractors/resolution.py
- [[_record_use_clause()]] - code - graphify/graphify/extractors/resolution.py
- [[_resolve_cross_file_java_imports()]] - code - graphify/graphify/extractors/resolution.py
- [[_resolve_java_type_references()]] - code - graphify/graphify/extractors/resolution.py
- [[_resolve_php_type_references()]] - code - graphify/graphify/extractors/resolution.py
- [[_ruby_body_has_lookup_barrier()]] - code - graphify/graphify/extractors/engine.py
- [[_ruby_file_has_refinement_barrier()]] - code - graphify/graphify/extractors/engine.py
- [[_ruby_local_class_bindings()]] - code - graphify/graphify/extractors/engine.py
- [[_ruby_local_names()]] - code - graphify/graphify/extractors/engine.py
- [[_ruby_new_class_name()]] - code - graphify/graphify/extractors/engine.py
- [[_rust_qualifier_type()]] - code - graphify/graphify/extractors/rust.py
- [[_rust_simple_generic_impl_key()]] - code - graphify/graphify/extractors/rust.py
- [[_rust_type_last_segment()]] - code - graphify/graphify/extractors/rust.py
- [[_rust_use_bindings()]] - code - graphify/graphify/extractors/rust.py
- [[_scan_declarations()]] - code - graphify/graphify/extractors/go.py
- [[_scan_type_items()]] - code - graphify/graphify/extractors/rust.py
- [[_scan_type_names()]] - code - graphify/graphify/extractors/go.py
- [[_sv_first_identifier()]] - code - graphify/graphify/extractors/verilog.py
- [[_ts_receiver_type_table()]] - code - graphify/graphify/extractors/engine.py
- [[_type_head_params()]] - code - graphify/graphify/extractors/julia.py
- [[_unwrap_call_expression()]] - code - graphify/graphify/extractors/julia.py
- [[_walk_scoped()]] - code - graphify/graphify/extract.py
- [[`Bar` for `nsBar` or `nsBarT` the name a qualified type ends in.]] - rationale - graphify/graphify/extractors/engine.py
- [[`crateaFooT` - `Foo` the last path segment, generic arguments dropped.…]] - rationale - graphify/graphify/extractors/rust.py
- [[add_edge()_7]] - code - graphify/graphify/extractors/go.py
- [[add_edge()_8]] - code - graphify/graphify/extractors/julia.py
- [[add_edge()_9]] - code - graphify/graphify/extractors/zig.py
- [[add_node()_6]] - code - graphify/graphify/extractors/go.py
- [[add_node()_7]] - code - graphify/graphify/extractors/julia.py
- [[add_node()_8]] - code - graphify/graphify/extractors/zig.py
- [[bind()_2]] - code - graphify/graphify/extractors/engine.py
- [[emit_go_method_refs()]] - code - graphify/graphify/extractors/go.py
- [[ensure_named_node()_1]] - code - graphify/graphify/extractors/go.py
- [[ensure_named_node()_2]] - code - graphify/graphify/extractors/julia.py
- [[extract_go()]] - code - graphify/graphify/extractors/go.py
- [[extract_zig()]] - code - graphify/graphify/extractors/zig.py
- [[facts()]] - code - graphify/graphify/extractors/engine.py
- [[go.py]] - code - graphify/graphify/extractors/go.py
- [[import_names()]] - code - graphify/graphify/extractors/engine.py
- [[is_shadowed()]] - code - graphify/graphify/extractors/engine.py
- [[poison()]] - code - graphify/graphify/extractors/engine.py
- [[poison_identifiers()]] - code - graphify/graphify/extractors/engine.py
- [[symbol_nid()]] - code - graphify/graphify/extractors/go.py
- [[target_names()]] - code - graphify/graphify/extractors/engine.py
- [[type_symbol_nid()]] - code - graphify/graphify/extractors/go.py
- [[visit()_1]] - code - graphify/graphify/extractors/engine.py
- [[visit()_2]] - code - graphify/graphify/extractors/engine.py
- [[visit()_3]] - code - graphify/graphify/extractors/engine.py
- [[visit()_4]] - code - graphify/graphify/extractors/engine.py
- [[visit()_5]] - code - graphify/graphify/extractors/engine.py
- [[walk()_12]] - code - graphify/graphify/extractors/engine.py
- [[walk()_13]] - code - graphify/graphify/extractors/engine.py
- [[walk()_14]] - code - graphify/graphify/extractors/go.py
- [[walk()_15]] - code - graphify/graphify/extractors/julia.py
- [[walk()_16]] - code - graphify/graphify/extractors/resolution.py
- [[walk()_17]] - code - graphify/graphify/extractors/resolution.py
- [[walk()_18]] - code - graphify/graphify/extractors/resolution.py
- [[walk()_19]] - code - graphify/graphify/extractors/zig.py
- [[walk_calls()_2]] - code - graphify/graphify/extractors/go.py
- [[walk_calls()_3]] - code - graphify/graphify/extractors/julia.py
- [[walk_calls()_4]] - code - graphify/graphify/extractors/rust.py
- [[walk_calls()_5]] - code - graphify/graphify/extractors/zig.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_16
SORT file.name ASC
```

## Connections to other communities
- 135 edges to [[_COMMUNITY_Community 0]]
- 75 edges to [[_COMMUNITY_Community 3]]
- 50 edges to [[_COMMUNITY_Community 1]]
- 18 edges to [[_COMMUNITY_Community 8]]
- 16 edges to [[_COMMUNITY_Community 28]]
- 7 edges to [[_COMMUNITY_Community 335]]
- 6 edges to [[_COMMUNITY_Community 416]]
- 6 edges to [[_COMMUNITY_Community 425]]
- 5 edges to [[_COMMUNITY_Community 114]]
- 5 edges to [[_COMMUNITY_Community 151]]
- 5 edges to [[_COMMUNITY_Community 198]]
- 4 edges to [[_COMMUNITY_Community 77]]
- 4 edges to [[_COMMUNITY_Community 74]]
- 4 edges to [[_COMMUNITY_Community 218]]
- 3 edges to [[_COMMUNITY_Community 14]]
- 3 edges to [[_COMMUNITY_Community 68]]
- 2 edges to [[_COMMUNITY_Community 188]]
- 2 edges to [[_COMMUNITY_Community 36]]
- 2 edges to [[_COMMUNITY_Community 322]]
- 1 edge to [[_COMMUNITY_Community 37]]
- 1 edge to [[_COMMUNITY_Community 559]]

## Top bridge nodes
- [[_read_text()]] - degree 270, connects to 15 communities
- [[extract_go()]] - degree 43, connects to 7 communities
- [[_cpp_declarator_name()]] - degree 9, connects to 4 communities
- [[extract_zig()]] - degree 20, connects to 3 communities
- [[walk()_15]] - degree 15, connects to 3 communities