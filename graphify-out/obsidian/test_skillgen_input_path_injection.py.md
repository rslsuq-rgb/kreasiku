---
source_file: "graphify/tests/test_skillgen_input_path_injection.py"
type: "code"
community: "Community 205"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_205
---

# test_skillgen_input_path_injection.py

## Connections
- [[3642, 3742, 3844 INPUT_PATH substitution into bash commands is a command…]] - `rationale_for` [EXTRACTED]
- [[_extract_step1_bash_block()]] - `contains` [EXTRACTED]
- [[_extract_watch_bash_block()]] - `contains` [EXTRACTED]
- [[_run_step1()]] - `contains` [EXTRACTED]
- [[_skip_unless_bash_python_has_graphify()]] - `contains` [EXTRACTED]
- [[os]] - `imports` [EXTRACTED]
- [[pathlib]] - `imports_from` [EXTRACTED]
- [[pytest]] - `imports` [EXTRACTED]
- [[re]] - `imports` [EXTRACTED]
- [[step1_script()]] - `contains` [EXTRACTED]
- [[subprocess]] - `imports` [EXTRACTED]
- [[sys]] - `imports` [EXTRACTED]
- [[test_monolith_watch_does_not_contain_raw_input_path_placeholder()]] - `contains` [EXTRACTED]
- [[test_monolith_watch_uses_trusted_graphify_root()]] - `contains` [EXTRACTED]
- [[test_step1_does_not_execute_a_command_substitution_in_input_path()]] - `contains` [EXTRACTED]
- [[test_step1_does_not_execute_a_semicolon_separated_command_in_input_path()]] - `contains` [EXTRACTED]
- [[test_step1_does_not_execute_hostile_input_path()]] - `contains` [EXTRACTED]
- [[test_step1_still_fails_loudly_on_a_nonexistent_path()]] - `contains` [EXTRACTED]
- [[test_step1_still_resolves_a_legitimate_path()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_205