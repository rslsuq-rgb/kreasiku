---
type: community
cohesion: 0.11
members: 25
---

# Community 219

**Cohesion:** 0.11 - loosely connected
**Members:** 25 nodes

## Members
- [[A truncated object can salvage valid pairs without covering the batch.]] - rationale - graphify/tests/test_label_retry.py
- [[A truncated reply labels part of the batch; retrying a missing id that still…]] - rationale - graphify/tests/test_label_retry.py
- [[After a split, one half failing at the base case must not take the other half's…]] - rationale - graphify/tests/test_label_retry.py
- [[Demonstrates the bug fix. The full batch of 4 communities triggers malformed…]] - rationale - graphify/tests/test_label_retry.py
- [[Honour GRAPHIFY_MAX_OUTPUT_TOKENS env var override, else use backend default.]] - rationale - graphify/graphify/llm.py
- [[Label a batch of communities, splitting in half and retrying on parse failure.…]] - rationale - graphify/graphify/llm.py
- [[Label every community in ``prompt``; garbage if any id is unparseable.]] - rationale - graphify/tests/test_label_retry.py
- [[Tests for graphify.llm._label_batch_with_retry — adaptive split-and-retry on…]] - rationale - graphify/tests/test_label_retry.py
- [[The label call chain forwards env-only model selection and still parses labels.]] - rationale - graphify/tests/test_claude_cli_backend.py
- [[With nothing labeled anywhere, the parse error still reaches the caller, which…]] - rationale - graphify/tests/test_label_retry.py
- [[_label_batch_with_retry()]] - code - graphify/graphify/llm.py
- [[_labels_for()]] - code - graphify/tests/test_label_retry.py
- [[_resolve_max_tokens()]] - code - graphify/graphify/llm.py
- [[_run_batch()]] - code - graphify/graphify/llm.py
- [[fake_call_llm()]] - code - graphify/tests/test_label_retry.py
- [[fake_call_llm()_1]] - code - graphify/tests/test_label_retry.py
- [[fake_call_llm()_2]] - code - graphify/tests/test_label_retry.py
- [[fake_call_llm()_3]] - code - graphify/tests/test_label_retry.py
- [[test_a_batch_that_never_parses_still_raises()]] - code - graphify/tests/test_label_retry.py
- [[test_a_half_that_never_parses_does_not_discard_the_other_half()]] - code - graphify/tests/test_label_retry.py
- [[test_a_missing_id_that_never_parses_keeps_the_labels_already_had()]] - code - graphify/tests/test_label_retry.py
- [[test_label_batch_recovers_via_split_on_invalid_json()]] - code - graphify/tests/test_label_retry.py
- [[test_label_batch_recovers_when_json_is_valid_but_incomplete()]] - code - graphify/tests/test_label_retry.py
- [[test_label_batch_uses_claude_cli_model_env()]] - code - graphify/tests/test_claude_cli_backend.py
- [[test_label_retry.py]] - code - graphify/tests/test_label_retry.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_219
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_Community 58]]
- 2 edges to [[_COMMUNITY_Community 39]]
- 1 edge to [[_COMMUNITY_Community 20]]
- 1 edge to [[_COMMUNITY_Community 528]]
- 1 edge to [[_COMMUNITY_Community 80]]
- 1 edge to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 59]]

## Top bridge nodes
- [[test_label_retry.py]] - degree 12, connects to 5 communities
- [[_label_batch_with_retry()]] - degree 12, connects to 3 communities
- [[_resolve_max_tokens()]] - degree 4, connects to 2 communities
- [[test_label_batch_uses_claude_cli_model_env()]] - degree 3, connects to 1 community
- [[_run_batch()]] - degree 2, connects to 1 community