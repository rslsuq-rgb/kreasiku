---
type: community
cohesion: 0.25
members: 9
---

# Community 511

**Cohesion:** 0.25 - loosely connected
**Members:** 9 nodes

## Members
- [[Integration test for push_to_falkordb against a real FalkorDB instance. Runs…]] - rationale - graphify/tests/test_falkordb_integration.py
- [[MERGE-based push is safe to re-run - counts must not grow.]] - rationale - graphify/tests/test_falkordb_integration.py
- [[Return a connected FalkorDB client, or skip if none is reachable. ``ping()``…]] - rationale - graphify/tests/test_falkordb_integration.py
- [[_connect()]] - code - graphify/tests/test_falkordb_integration.py
- [[db()]] - code - graphify/tests/test_falkordb_integration.py
- [[fixture_29]] - code
- [[test_falkordb_integration.py]] - code - graphify/tests/test_falkordb_integration.py
- [[test_push_to_falkordb_creates_expected_graph()]] - code - graphify/tests/test_falkordb_integration.py
- [[test_push_to_falkordb_is_idempotent()]] - code - graphify/tests/test_falkordb_integration.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_511
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_Community 9]]
- 3 edges to [[_COMMUNITY_Community 115]]
- 2 edges to [[_COMMUNITY_Community 101]]
- 2 edges to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_falkordb_integration.py]] - degree 10, connects to 5 communities
- [[test_push_to_falkordb_is_idempotent()]] - degree 5, connects to 3 communities
- [[test_push_to_falkordb_creates_expected_graph()]] - degree 4, connects to 3 communities
- [[_connect()]] - degree 4, connects to 1 community