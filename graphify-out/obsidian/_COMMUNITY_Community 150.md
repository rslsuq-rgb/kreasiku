---
type: community
cohesion: 0.09
members: 33
---

# Community 150

**Cohesion:** 0.09 - loosely connected
**Members:** 33 nodes

## Members
- [[A function whose only clause has a `when` guard must still get a node. tree-…]] - rationale - graphify/tests/test_languages.py
- [[An implementation of a protocol defined in ANOTHER file must not leave a…]] - rationale - graphify/tests/test_languages.py
- [[Extract modules, functions, imports, and calls from a .ex.exs file.]] - rationale - graphify/graphify/extractors/elixir.py
- [[Path_33]] - code
- [[_call_scope_for()]] - code - graphify/graphify/extractors/elixir.py
- [[_expand_module()]] - code - graphify/graphify/extractors/elixir.py
- [[_get_alias_modules()]] - code - graphify/graphify/extractors/elixir.py
- [[_get_alias_text()]] - code - graphify/graphify/extractors/elixir.py
- [[_get_do_keyword_body()]] - code - graphify/graphify/extractors/elixir.py
- [[_get_keyword_alias()]] - code - graphify/graphify/extractors/elixir.py
- [[_record_aliases()]] - code - graphify/graphify/extractors/elixir.py
- [[_register_module()]] - code - graphify/graphify/extractors/elixir.py
- [[_text()]] - code - graphify/graphify/extractors/elixir.py
- [[`alias Foo.{Bar, Baz}` must emit one imports edge per expanded module. The…]] - rationale - graphify/tests/test_languages.py
- [[`defmacro``defmacrop``defguard``defguardp` must become member nodes. They…]] - rationale - graphify/tests/test_languages.py
- [[`defprotocol``defimpl` are module-like containers. Before they were handled,…]] - rationale - graphify/tests/test_languages.py
- [[add_edge()_5]] - code - graphify/graphify/extractors/elixir.py
- [[add_node()_4]] - code - graphify/graphify/extractors/elixir.py
- [[extract_elixir()]] - code - graphify/graphify/extractors/elixir.py
- [[test_elixir_call_edges_have_call_context()]] - code - graphify/tests/test_languages.py
- [[test_elixir_defmacro_and_defguard_are_extracted()]] - code - graphify/tests/test_languages.py
- [[test_elixir_finds_calls()]] - code - graphify/tests/test_languages.py
- [[test_elixir_finds_functions()]] - code - graphify/tests/test_languages.py
- [[test_elixir_finds_imports()]] - code - graphify/tests/test_languages.py
- [[test_elixir_finds_module()]] - code - graphify/tests/test_languages.py
- [[test_elixir_guarded_single_clause_is_extracted()]] - code - graphify/tests/test_languages.py
- [[test_elixir_import_edges_have_import_context()]] - code - graphify/tests/test_languages.py
- [[test_elixir_method_edges()]] - code - graphify/tests/test_languages.py
- [[test_elixir_multi_alias_expands()]] - code - graphify/tests/test_languages.py
- [[test_elixir_protocol_and_impl_are_extracted()]] - code - graphify/tests/test_languages.py
- [[test_elixir_protocol_impl_produce_no_dangling_edges()]] - code - graphify/tests/test_languages.py
- [[walk()_10]] - code - graphify/graphify/extractors/elixir.py
- [[walk_calls()_1]] - code - graphify/graphify/extractors/elixir.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_150
SORT file.name ASC
```

## Connections to other communities
- 14 edges to [[_COMMUNITY_Community 8]]
- 7 edges to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 198]]

## Top bridge nodes
- [[extract_elixir()]] - degree 33, connects to 2 communities
- [[test_elixir_defmacro_and_defguard_are_extracted()]] - degree 4, connects to 2 communities
- [[walk()_10]] - degree 10, connects to 1 community
- [[test_elixir_call_edges_have_call_context()]] - degree 3, connects to 1 community
- [[test_elixir_guarded_single_clause_is_extracted()]] - degree 3, connects to 1 community