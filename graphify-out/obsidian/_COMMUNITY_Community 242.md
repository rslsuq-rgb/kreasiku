---
type: community
cohesion: 0.12
members: 23
---

# Community 242

**Cohesion:** 0.12 - loosely connected
**Members:** 23 nodes

## Members
- [[A None per_file slot is treated as empty fragment (no crash, no edges).]] - rationale - graphify/tests/test_symbol_resolution.py
- [[A non-dict per_file slot (e.g. a string) must not raise AttributeError.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[Any_9]] - code
- [[Build ``(module_stem, normalized_symbol_name) - node_ids``. This index is…]] - rationale - graphify/graphify/symbol_resolution.py
- [[Deterministic symbol indexing and conservative cross-file resolution helpers.]] - rationale - graphify/graphify/symbol_resolution.py
- [[Documentpaperimageconcept nodes MUST NOT be indexed as call targets, even…]] - rationale - graphify/tests/test_symbol_resolution.py
- [[Python import-guided resolver also tolerates malformed raw_calls.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[Resolve raw Python calls using explicit import evidence. Only ``from module…]] - rationale - graphify/graphify/symbol_resolution.py
- [[Return True when a node is suitable for deterministic symbol lookup. Requires…]] - rationale - graphify/graphify/symbol_resolution.py
- [[Return all existing sourcetargetrelation edge triples. Includes relation so…]] - rationale - graphify/graphify/symbol_resolution.py
- [[Return the stem of a node's source file.]] - rationale - graphify/graphify/symbol_resolution.py
- [[_node_source_stem()]] - code - graphify/graphify/symbol_resolution.py
- [[build_python_symbol_index()]] - code - graphify/graphify/symbol_resolution.py
- [[existing_edge_pairs()]] - code - graphify/graphify/symbol_resolution.py
- [[node_is_resolvable_symbol()]] - code - graphify/graphify/symbol_resolution.py
- [[per_file shorter than paths must not raise IndexError.]] - rationale - graphify/tests/test_symbol_resolution.py
- [[resolve_python_import_guided_calls()]] - code - graphify/graphify/symbol_resolution.py
- [[symbol_resolution.py]] - code - graphify/graphify/symbol_resolution.py
- [[test_node_is_resolvable_symbol_requires_code_file_type()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_python_import_guided_calls_non_dict_per_file_slot()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_python_import_guided_calls_per_file_none_slot()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_python_import_guided_calls_per_file_shorter_than_paths()]] - code - graphify/tests/test_symbol_resolution.py
- [[test_resolve_python_import_guided_calls_survives_malformed_raw_calls()]] - code - graphify/tests/test_symbol_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_242
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_Community 199]]
- 8 edges to [[_COMMUNITY_Community 3]]
- 6 edges to [[_COMMUNITY_Community 389]]
- 4 edges to [[_COMMUNITY_Community 200]]
- 3 edges to [[_COMMUNITY_Community 54]]
- 3 edges to [[_COMMUNITY_Community 552]]
- 2 edges to [[_COMMUNITY_Community 188]]
- 2 edges to [[_COMMUNITY_Community 45]]
- 2 edges to [[_COMMUNITY_Community 533]]
- 2 edges to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 645]]
- 1 edge to [[_COMMUNITY_Community 298]]
- 1 edge to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 250]]
- 1 edge to [[_COMMUNITY_Community 176]]

## Top bridge nodes
- [[symbol_resolution.py]] - degree 37, connects to 14 communities
- [[resolve_python_import_guided_calls()]] - degree 18, connects to 7 communities
- [[Any_9]] - degree 8, connects to 2 communities
- [[existing_edge_pairs()]] - degree 6, connects to 2 communities
- [[build_python_symbol_index()]] - degree 9, connects to 1 community