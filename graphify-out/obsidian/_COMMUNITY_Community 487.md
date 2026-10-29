---
type: community
cohesion: 0.20
members: 10
---

# Community 487

**Cohesion:** 0.20 - loosely connected
**Members:** 10 nodes

## Members
- [[(target label, target file name, confidence) for each `calls` edge out of the…]] - rationale - graphify/tests/test_extract.py
- [[A field bound to two classes, or to an untypable value as well as a class,…]] - rationale - graphify/tests/test_extract.py
- [[The 2860 repro split over two files the class comes from an import.]] - rationale - graphify/tests/test_extract.py
- [[_self_attr_call_targets()]] - code - graphify/tests/test_extract.py
- [[`self.agents = AgentRunner()` in __init__ types `self.agents.m()` in another…]] - rationale - graphify/tests/test_extract.py
- [[`self.repo Repo = make_repo()` types the field from its annotation.]] - rationale - graphify/tests/test_extract.py
- [[test_python_self_attr_call_ambiguous_or_missing_method_adds_no_edge()]] - code - graphify/tests/test_extract.py
- [[test_python_self_attr_call_resolves_across_an_import()]] - code - graphify/tests/test_extract.py
- [[test_python_self_attr_call_resolves_to_constructor_class_same_file()]] - code - graphify/tests/test_extract.py
- [[test_python_self_attr_call_uses_the_annotation()]] - code - graphify/tests/test_extract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_487
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Community 2]]
- 4 edges to [[_COMMUNITY_Community 14]]

## Top bridge nodes
- [[test_python_self_attr_call_ambiguous_or_missing_method_adds_no_edge()]] - degree 4, connects to 2 communities
- [[test_python_self_attr_call_resolves_across_an_import()]] - degree 4, connects to 2 communities
- [[test_python_self_attr_call_resolves_to_constructor_class_same_file()]] - degree 4, connects to 2 communities
- [[test_python_self_attr_call_uses_the_annotation()]] - degree 4, connects to 2 communities
- [[_self_attr_call_targets()]] - degree 6, connects to 1 community