---
source_file: "graphify/tests/test_opencode_plugin_refresh.py"
type: "code"
community: "Community 52"
location: "L345"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_52
---

# test_a_directory_another_process_is_refreshing_is_skipped()

## Connections
- [[Same rule as the skill refresh without the lock (another graphify process has…]] - `rationale_for` [EXTRACTED]
- [[_old_install()]] - `calls` [EXTRACTED]
- [[_refresh_v1_opencode_plugins()]] - `calls` [EXTRACTED]
- [[lock()]] - `indirect_call` [INFERRED]
- [[parametrize_91]] - `references` [EXTRACTED]
- [[test_opencode_plugin_refresh.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_52