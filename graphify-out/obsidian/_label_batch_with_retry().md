---
source_file: "graphify/graphify/llm.py"
type: "code"
community: "Community 219"
location: "L3626"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_219
---

# _label_batch_with_retry()

## Connections
- [[Label a batch of communities, splitting in half and retrying on parse failure.…]] - `rationale_for` [EXTRACTED]
- [[_call_llm()]] - `calls` [EXTRACTED]
- [[_parse_label_response()]] - `calls` [EXTRACTED]
- [[_resolve_max_tokens()]] - `calls` [EXTRACTED]
- [[_run_batch()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_a_batch_that_never_parses_still_raises()]] - `calls` [EXTRACTED]
- [[test_a_half_that_never_parses_does_not_discard_the_other_half()]] - `calls` [EXTRACTED]
- [[test_a_missing_id_that_never_parses_keeps_the_labels_already_had()]] - `calls` [EXTRACTED]
- [[test_label_batch_recovers_via_split_on_invalid_json()]] - `calls` [EXTRACTED]
- [[test_label_batch_recovers_when_json_is_valid_but_incomplete()]] - `calls` [EXTRACTED]
- [[test_label_batch_uses_claude_cli_model_env()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_219