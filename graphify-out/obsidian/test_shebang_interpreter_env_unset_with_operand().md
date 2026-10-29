---
source_file: "graphify/tests/test_detect.py"
type: "code"
community: "Community 35"
location: "L2698"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_35
---

# test_shebang_interpreter_env_unset_with_operand()

## Connections
- [[FileType]] - `uses` [INFERRED]
- [[_shebang_interpreter()]] - `calls` [EXTRACTED]
- [[`env -u VAR python3` skips both -u and its required operand.]] - `rationale_for` [EXTRACTED]
- [[classify_file()]] - `calls` [EXTRACTED]
- [[test_detect.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_35