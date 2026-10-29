---
type: community
cohesion: 0.15
members: 14
---

# Community 389

**Cohesion:** 0.15 - loosely connected
**Members:** 14 nodes

## Members
- [[A Python imported name that can be used as deterministic resolution evidence.]] - rationale - graphify/graphify/symbol_resolution.py
- [[A `from helper import transform` inside a function MUST NOT become file-wide…]] - rationale - graphify/tests/test_symbol_resolution.py
- [[A module-level `from helper import transform` IS file-wide evidence.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[ImportedSymbol]] - code - graphify/graphify/symbol_resolution.py
- [[Parse deterministic Python import aliases from one source file. Supported…]] - rationale - graphify/graphify/symbol_resolution.py
- [[Resolve one imported symbol to exactly one Graphify node id.]] - rationale - graphify/graphify/symbol_resolution.py
- [[Return the final module component used to match Graphify source stems.]] - rationale - graphify/graphify/symbol_resolution.py
- [[_module_stem()]] - code - graphify/graphify/symbol_resolution.py
- [[find_unique_python_symbol()]] - code - graphify/graphify/symbol_resolution.py
- [[parse_python_import_aliases()]] - code - graphify/graphify/symbol_resolution.py
- [[test_find_unique_python_symbol_returns_none_when_ambiguous()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_parse_python_import_aliases_accepts_top_level_import()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_parse_python_import_aliases_skips_function_local_imports()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_parse_python_import_aliases_supports_from_import_alias()]] - code - graphify/tests/test_symbol_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_389
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 242]]
- 6 edges to [[_COMMUNITY_Community 199]]
- 2 edges to [[_COMMUNITY_Community 200]]
- 1 edge to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 250]]
- 1 edge to [[_COMMUNITY_Community 552]]

## Top bridge nodes
- [[parse_python_import_aliases()]] - degree 13, connects to 5 communities
- [[find_unique_python_symbol()]] - degree 6, connects to 2 communities
- [[test_find_unique_python_symbol_returns_none_when_ambiguous()]] - degree 4, connects to 2 communities
- [[test_parse_python_import_aliases_supports_from_import_alias()]] - degree 3, connects to 2 communities
- [[ImportedSymbol]] - degree 4, connects to 1 community