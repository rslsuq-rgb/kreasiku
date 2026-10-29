---
type: community
cohesion: 0.07
members: 43
---

# Community 101

**Cohesion:** 0.07 - loosely connected
**Members:** 43 nodes

## Members
- [[3804 graph DB pushes must index (label, id) before the MERGE upsert loop.…]] - rationale - graphify/tests/test_graphdb_push_indexes.py
- [[dot-__enter__()]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[dot-__exit__()]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[dot-__init__()]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[dot-__init__()_1]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[dot-query()]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[dot-run()]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[Distinct Cypher labels the node-upsert loop will write, sorted. The label is…]] - rationale - graphify/graphify/exporters/graphdb.py
- [[Every MERGE label is indexed first, and before the first MERGE runs.]] - rationale - graphify/tests/test_graphdb_push_indexes.py
- [[FalkorDB has no IF NOT EXISTS, so a re-push must not abort on the error.]] - rationale - graphify/tests/test_graphdb_push_indexes.py
- [[Graph_1]] - code
- [[Install a fake `falkordb` module and return its recording graph handle.]] - rationale - graphify/tests/test_graphdb_push_indexes.py
- [[Install a fake `neo4j` module and return its recording graph handle.]] - rationale - graphify/tests/test_graphdb_push_indexes.py
- [[Invert communities dict node_id - community_id.]] - rationale - graphify/graphify/analyze.py
- [[Ordering, stated as the property it protects no MERGE precedes its index.]] - rationale - graphify/tests/test_graphdb_push_indexes.py
- [[Push graph directly to a running FalkorDB instance via the Python SDK.…]] - rationale - graphify/graphify/exporters/graphdb.py
- [[Push graph directly to a running Neo4j instance via the Python driver.…]] - rationale - graphify/graphify/exporters/graphdb.py
- [[Stand-in for the FalkorDB graph handle; records Cypher in call order.]] - rationale - graphify/tests/test_graphdb_push_indexes.py
- [[The Neo4j path had the same gap; it uses IF NOT EXISTS to stay idempotent.]] - rationale - graphify/tests/test_graphdb_push_indexes.py
- [[The index set must not contain a label the MERGE loop would never write.]] - rationale - graphify/tests/test_graphdb_push_indexes.py
- [[Two labels, so the per-label index creation is observable.]] - rationale - graphify/tests/test_graphdb_push_indexes.py
- [[_RecordingGraph]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[_RecordingSession]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[_distinct_node_labels()]] - code - graphify/graphify/exporters/graphdb.py
- [[_graph()_1]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[_node_community_map()]] - code - graphify/graphify/analyze.py
- [[_safe_label()]] - code - graphify/graphify/exporters/graphdb.py
- [[_safe_label()_1]] - code - graphify/graphify/exporters/graphdb.py
- [[_safe_rel()]] - code - graphify/graphify/exporters/graphdb.py
- [[_safe_rel()_1]] - code - graphify/graphify/exporters/graphdb.py
- [[fake_falkordb()]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[fake_neo4j()]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[fixture]] - code
- [[graphdb — moved verbatim from graphifyexport.py.]] - rationale - graphify/graphify/exporters/graphdb.py
- [[graphdb.py]] - code - graphify/graphify/exporters/graphdb.py
- [[push_to_falkordb()]] - code - graphify/graphify/exporters/graphdb.py
- [[push_to_neo4j()]] - code - graphify/graphify/exporters/graphdb.py
- [[test_distinct_node_labels_sanitizes_like_the_push_loop()]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[test_falkordb_push_indexes_before_the_upsert_loop_runs()]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[test_falkordb_push_indexes_each_label_before_upserting()]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[test_falkordb_push_survives_an_existing_index()]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[test_graphdb_push_indexes.py]] - code - graphify/tests/test_graphdb_push_indexes.py
- [[test_neo4j_push_indexes_each_label_before_upserting()]] - code - graphify/tests/test_graphdb_push_indexes.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_101
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 46]]
- 5 edges to [[_COMMUNITY_Community 11]]
- 4 edges to [[_COMMUNITY_Community 318]]
- 4 edges to [[_COMMUNITY_Community 23]]
- 4 edges to [[_COMMUNITY_Community 7]]
- 2 edges to [[_COMMUNITY_Community 3]]
- 2 edges to [[_COMMUNITY_Community 511]]
- 1 edge to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 59]]

## Top bridge nodes
- [[test_graphdb_push_indexes.py]] - degree 18, connects to 4 communities
- [[graphdb.py]] - degree 9, connects to 4 communities
- [[_node_community_map()]] - degree 15, connects to 3 communities
- [[push_to_falkordb()]] - degree 14, connects to 2 communities
- [[push_to_neo4j()]] - degree 10, connects to 1 community