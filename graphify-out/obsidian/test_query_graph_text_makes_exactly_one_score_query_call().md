---
source_file: "graphify/tests/test_serve.py"
type: "code"
community: "Community 237"
location: "L1458"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_237
---

# test_query_graph_text_makes_exactly_one_score_query_call()

## Connections
- [[_make_random_scoring_graph()]] - `calls` [EXTRACTED]
- [[_query_graph_text()]] - `calls` [EXTRACTED]
- [[_score_nodes()]] - `indirect_call` [INFERRED]
- [[_score_query()]] - `indirect_call` [INFERRED]
- [[`_query_graph_text` must invoke `_score_query` exactly once per query,…]] - `rationale_for` [EXTRACTED]
- [[counting_sn()]] - `indirect_call` [INFERRED]
- [[counting_sq()]] - `indirect_call` [INFERRED]
- [[test_serve.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_237