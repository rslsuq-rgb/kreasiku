---
source_file: "graphify/tests/test_skillgen_input_path_injection.py"
type: "rationale"
community: "Community 205"
location: "L167"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_205
---

# A malicious path containing $(...) must never run as shell code.

## Connections
- [[test_step1_does_not_execute_a_command_substitution_in_input_path()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/Community_205