---
type: community
cohesion: 0.17
members: 12
---

# Community 445

**Cohesion:** 0.17 - loosely connected
**Members:** 12 nodes

## Members
- [[(source, target) pairs of every INFERRED cross-file `uses` edge.]] - rationale - graphify/tests/test_extract.py
- [[A cross-file INFERRED `uses` edge binds to the symbol that actually references…]] - rationale - graphify/tests/test_extract.py
- [[A reference at true module top level has no enclosing symbol to anchor on, so…]] - rationale - graphify/tests/test_extract.py
- [[Each symbol that references the import gets its own edge, and only those…]] - rationale - graphify/tests/test_extract.py
- [[Positive control a class that genuinely uses the imported symbol still gets…]] - rationale - graphify/tests/test_extract.py
- [[_inferred_uses()]] - code - graphify/tests/test_extract.py
- [[`from helpers import Helper as H` attributes via the local alias `H`, so a body…]] - rationale - graphify/tests/test_extract.py
- [[test_inferred_uses_edge_attributes_to_the_referencing_symbol()]] - code - graphify/tests/test_extract.py
- [[test_inferred_uses_edge_dropped_for_module_top_level_reference()]] - code - graphify/tests/test_extract.py
- [[test_inferred_uses_edge_emitted_once_per_referencing_symbol()]] - code - graphify/tests/test_extract.py
- [[test_inferred_uses_edge_follows_an_import_alias()]] - code - graphify/tests/test_extract.py
- [[test_inferred_uses_edge_kept_when_the_class_body_references_the_import()]] - code - graphify/tests/test_extract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_445
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 2]]
- 5 edges to [[_COMMUNITY_Community 14]]

## Top bridge nodes
- [[test_inferred_uses_edge_attributes_to_the_referencing_symbol()]] - degree 4, connects to 2 communities
- [[test_inferred_uses_edge_dropped_for_module_top_level_reference()]] - degree 4, connects to 2 communities
- [[test_inferred_uses_edge_emitted_once_per_referencing_symbol()]] - degree 4, connects to 2 communities
- [[test_inferred_uses_edge_follows_an_import_alias()]] - degree 4, connects to 2 communities
- [[test_inferred_uses_edge_kept_when_the_class_body_references_the_import()]] - degree 4, connects to 2 communities