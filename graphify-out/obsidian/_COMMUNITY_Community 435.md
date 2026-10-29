---
type: community
cohesion: 0.17
members: 12
---

# Community 435

**Cohesion:** 0.17 - loosely connected
**Members:** 12 nodes

## Members
- [[A REPL  `python -c` __main__ has no __file__ attribute at all.]] - rationale - graphify/tests/test_extract.py
- [[A __main__ with a module spec is re-imported by name, never by path, and a spec…]] - rationale - graphify/tests/test_extract.py
- [[A normal script whose __main__ is a real file CAN be re-imported, so the pool…]] - rationale - graphify/tests/test_extract.py
- [[The fork start method (Linux default) does not re-import __main__, so a stdin…]] - rationale - graphify/tests/test_extract.py
- [[True when a spawn-based process pool cannot bootstrap because the caller's…]] - rationale - graphify/graphify/extract.py
- [[_spawn_cannot_reimport_main()]] - code - graphify/graphify/extract.py
- [[stdin (`…  python -`) leaves __main__.__file__ as a non-file (`stdin`),…]] - rationale - graphify/tests/test_extract.py
- [[test_spawn_cannot_reimport_main_false_for_real_script()]] - code - graphify/tests/test_extract.py
- [[test_spawn_cannot_reimport_main_false_under_fork()]] - code - graphify/tests/test_extract.py
- [[test_spawn_cannot_reimport_main_false_when_main_has_a_spec()]] - code - graphify/tests/test_extract.py
- [[test_spawn_cannot_reimport_main_true_for_repl_without_file()]] - code - graphify/tests/test_extract.py
- [[test_spawn_cannot_reimport_main_true_for_stdin_caller()]] - code - graphify/tests/test_extract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_435
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Community 2]]
- 1 edge to [[_COMMUNITY_Community 14]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 69]]

## Top bridge nodes
- [[_spawn_cannot_reimport_main()]] - degree 8, connects to 2 communities
- [[test_spawn_cannot_reimport_main_false_when_main_has_a_spec()]] - degree 4, connects to 2 communities
- [[test_spawn_cannot_reimport_main_false_for_real_script()]] - degree 3, connects to 1 community
- [[test_spawn_cannot_reimport_main_false_under_fork()]] - degree 3, connects to 1 community
- [[test_spawn_cannot_reimport_main_true_for_repl_without_file()]] - degree 3, connects to 1 community