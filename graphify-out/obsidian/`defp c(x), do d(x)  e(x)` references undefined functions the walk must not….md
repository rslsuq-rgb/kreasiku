---
source_file: "graphify/tests/test_elixir_keyword_def_calls.py"
type: "rationale"
community: "Community 442"
location: "L61"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_442
---

# `defp c(x), do: d(x) |> e(x)` references undefined functions: the walk must not…

## Connections
- [[test_keyword_def_without_local_targets_emits_no_dangling_edges()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/Community_442