---
type: community
cohesion: 0.17
members: 12
---

# Community 446

**Cohesion:** 0.17 - loosely connected
**Members:** 12 nodes

## Members
- [[A module-level callable stored on the instance is not a method of any class, so…]] - rationale - graphify/tests/test_extract.py
- [[Extract one Python file and return {(caller_id, callee_id)} for calls edges.]] - rationale - graphify/tests/test_extract.py
- [[Inherited methods resolve up the in-file inherits chain, nearest first;…]] - rationale - graphify/tests/test_extract.py
- [[Server has no ping() anywhere on its chain, so `self.ping()` must not borrow…]] - rationale - graphify/tests/test_extract.py
- [[Two bases on the same level both define m() ordering them needs the MRO, which…]] - rationale - graphify/tests/test_extract.py
- [[_python_call_pairs()]] - code - graphify/tests/test_extract.py
- [[`self.save()` in Server must reach Server.save even when a later class in the…]] - rationale - graphify/tests/test_extract.py
- [[test_python_self_and_super_calls_walk_in_file_bases()]] - code - graphify/tests/test_extract.py
- [[test_python_self_call_binds_to_own_class_not_last_declared()]] - code - graphify/tests/test_extract.py
- [[test_python_self_call_multiple_inheritance_tie_binds_nothing()]] - code - graphify/tests/test_extract.py
- [[test_python_self_call_never_binds_to_an_unrelated_class()]] - code - graphify/tests/test_extract.py
- [[test_python_self_call_to_stored_module_function_still_binds()]] - code - graphify/tests/test_extract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_446
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 2]]
- 1 edge to [[_COMMUNITY_Community 14]]

## Top bridge nodes
- [[_python_call_pairs()]] - degree 8, connects to 2 communities
- [[test_python_self_and_super_calls_walk_in_file_bases()]] - degree 3, connects to 1 community
- [[test_python_self_call_binds_to_own_class_not_last_declared()]] - degree 3, connects to 1 community
- [[test_python_self_call_multiple_inheritance_tie_binds_nothing()]] - degree 3, connects to 1 community
- [[test_python_self_call_never_binds_to_an_unrelated_class()]] - degree 3, connects to 1 community