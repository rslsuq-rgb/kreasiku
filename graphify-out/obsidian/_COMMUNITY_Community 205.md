---
type: community
cohesion: 0.14
members: 27
---

# Community 205

**Cohesion:** 0.14 - loosely connected
**Members:** 27 nodes

## Members
- [[3642, 3742, 3844 INPUT_PATH substitution into bash commands is a command…]] - rationale - graphify/tests/test_skillgen_input_path_injection.py
- [[A hostile INPUT_PATH containing shell metacharacters must never execute.]] - rationale - graphify/tests/test_skillgen_input_path_injection.py
- [[A malicious path containing $(...) must never run as shell code.]] - rationale - graphify/tests/test_skillgen_input_path_injection.py
- [[A malicious path using `;` to chain a second command must never run.]] - rationale - graphify/tests/test_skillgen_input_path_injection.py
- [[A path that does not exist must still fail, matching the original `cd…]] - rationale - graphify/tests/test_skillgen_input_path_injection.py
- [[CompletedProcess_4]] - code
- [[On Windows, Step 1 only works when `bash` has a POSIX `python3` that can import…]] - rationale - graphify/tests/test_skillgen_input_path_injection.py
- [[Path_65]] - code
- [[The fix must not break ordinary paths, including paths with spaces.]] - rationale - graphify/tests/test_skillgen_input_path_injection.py
- [[The monolith --watch block must not interpolate raw INPUT_PATH into shell code.]] - rationale - graphify/tests/test_skillgen_input_path_injection.py
- [[The monolith --watch block must read from trusted .graphify_root and…]] - rationale - graphify/tests/test_skillgen_input_path_injection.py
- [[_conv()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[_extract_step1_bash_block()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[_extract_watch_bash_block()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[_run_step1()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[_skip_unless_bash_python_has_graphify()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[fixture_5]] - code
- [[parametrize_28]] - code
- [[step1_script()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[test_monolith_watch_does_not_contain_raw_input_path_placeholder()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[test_monolith_watch_uses_trusted_graphify_root()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[test_skillgen_input_path_injection.py]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[test_step1_does_not_execute_a_command_substitution_in_input_path()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[test_step1_does_not_execute_a_semicolon_separated_command_in_input_path()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[test_step1_does_not_execute_hostile_input_path()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[test_step1_still_fails_loudly_on_a_nonexistent_path()]] - code - graphify/tests/test_skillgen_input_path_injection.py
- [[test_step1_still_resolves_a_legitimate_path()]] - code - graphify/tests/test_skillgen_input_path_injection.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_205
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Community 3]]
- 3 edges to [[_COMMUNITY_Community 109]]
- 2 edges to [[_COMMUNITY_Community 59]]
- 2 edges to [[_COMMUNITY_Community 19]]

## Top bridge nodes
- [[test_skillgen_input_path_injection.py]] - degree 19, connects to 4 communities
- [[_run_step1()]] - degree 11, connects to 2 communities
- [[_skip_unless_bash_python_has_graphify()]] - degree 5, connects to 2 communities
- [[_extract_step1_bash_block()]] - degree 8, connects to 1 community
- [[_extract_watch_bash_block()]] - degree 4, connects to 1 community