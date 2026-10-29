---
source_file: "graphify/tests/test_skillgen_input_path_injection.py"
type: "code"
community: "Community 205"
location: "L166"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_205
---

# test_step1_does_not_execute_a_command_substitution_in_input_path()

## Connections
- [[A malicious path containing $(...) must never run as shell code.]] - `rationale_for` [EXTRACTED]
- [[Path_65]] - `references` [EXTRACTED]
- [[_extract_step1_bash_block()]] - `calls` [EXTRACTED]
- [[_run_step1()]] - `calls` [EXTRACTED]
- [[test_skillgen_input_path_injection.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_205