---
source_file: "graphify/tests/test_atomic_writes.py"
type: "code"
community: "Community 19"
location: "L230"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_19
---

# test_os_replace_with_fallback_restores_destination_on_final_rename_failure()

## Connections
- [[The fallback removes the existing destination before renaming the new content…]] - `rationale_for` [EXTRACTED]
- [[flaky_rename()]] - `indirect_call` [INFERRED]
- [[flaky_replace()_4]] - `contains` [EXTRACTED]
- [[flaky_replace()_5]] - `indirect_call` [INFERRED]
- [[os_replace_with_fallback()]] - `calls` [EXTRACTED]
- [[test_atomic_writes.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_19