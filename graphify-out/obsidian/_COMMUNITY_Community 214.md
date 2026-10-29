---
type: community
cohesion: 0.10
members: 26
---

# Community 214

**Cohesion:** 0.10 - loosely connected
**Members:** 26 nodes

## Members
- [[A bridging header of only `import Widget.h` must produce an imports edge to…]] - rationale - graphify/tests/test_languages.py
- [[A symbol that was never merged must not grow the new attributes — they mark a…]] - rationale - graphify/tests/test_languages.py
- [[Foo.cpp and Main.cpp `include Foo.h` must resolve to the real Foo.h file…]] - rationale - graphify/tests/test_languages.py
- [[Foo.h (class) + Foo.cpp (Foobar def) + Main.cpp must yield exactly ONE Foo…]] - rationale - graphify/tests/test_languages.py
- [[Run the full extract() pipeline on fixture files (absolute, resolved paths so…]] - rationale - graphify/tests/test_languages.py
- [[The decldef merge keeps the header node, so `source_file` names the…]] - rationale - graphify/tests/test_languages.py
- [[Two same-named `class Dup` in the SAME dir but different base stems (Alpha.h,…]] - rationale - graphify/tests/test_languages.py
- [[Two unrelated `class Logger` in DIFFERENT directories (each its own .h.cpp)…]] - rationale - graphify/tests/test_languages.py
- [[Widget.h (@interface) + Widget.m (@implementation) - ONE Widget class node…]] - rationale - graphify/tests/test_languages.py
- [[_assert_no_dangling()]] - code - graphify/tests/test_languages.py
- [[_corpus()_7]] - code - graphify/tests/test_languages.py
- [[_nodes_with_label()]] - code - graphify/tests/test_languages.py
- [[`extension Widget` in Swift over an ObjC `Widget` must fold onto the single…]] - rationale - graphify/tests/test_languages.py
- [[`void bar();` in Foo.h and `void Foobar() {}` in Foo.cpp must collapse to ONE…]] - rationale - graphify/tests/test_languages.py
- [[test_cpp_paired_includes_resolve_to_real_header()]] - code - graphify/tests/test_languages.py
- [[test_cpp_paired_merged_node_records_definition_site()]] - code - graphify/tests/test_languages.py
- [[test_cpp_paired_method_decl_and_def_are_one_node()]] - code - graphify/tests/test_languages.py
- [[test_cpp_paired_no_dangling_edges()]] - code - graphify/tests/test_languages.py
- [[test_cpp_paired_single_class_node()]] - code - graphify/tests/test_languages.py
- [[test_cpp_unpaired_symbol_has_no_definition_site()]] - code - graphify/tests/test_languages.py
- [[test_decldef_merge_does_not_merge_across_directories()]] - code - graphify/tests/test_languages.py
- [[test_decldef_merge_does_not_merge_same_name_same_dir_distinct_files()]] - code - graphify/tests/test_languages.py
- [[test_objc_bridging_header_not_isolated()]] - code - graphify/tests/test_languages.py
- [[test_objc_paired_no_dangling_edges()]] - code - graphify/tests/test_languages.py
- [[test_objc_paired_single_class_methods_not_duplicated()]] - code - graphify/tests/test_languages.py
- [[test_swift_extension_folds_onto_objc_class()]] - code - graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_214
SORT file.name ASC
```

## Connections to other communities
- 15 edges to [[_COMMUNITY_Community 8]]
- 1 edge to [[_COMMUNITY_Community 14]]

## Top bridge nodes
- [[_corpus()_7]] - degree 15, connects to 2 communities
- [[_nodes_with_label()]] - degree 9, connects to 1 community
- [[test_swift_extension_folds_onto_objc_class()]] - degree 5, connects to 1 community
- [[_assert_no_dangling()]] - degree 4, connects to 1 community
- [[test_cpp_paired_includes_resolve_to_real_header()]] - degree 4, connects to 1 community