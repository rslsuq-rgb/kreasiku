---
source_file: "graphify/tests/test_elixir_keyword_def_calls.py"
type: "rationale"
community: "Community 442"
location: "L49"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_442
---

# `def a(x), do: b(x)` must emit a calls edge a() -> b().

## Connections
- [[test_keyword_def_body_calls_are_extracted()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/Community_442