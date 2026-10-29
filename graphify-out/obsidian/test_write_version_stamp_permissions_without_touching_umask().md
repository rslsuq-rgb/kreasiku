---
source_file: "graphify/tests/test_atomic_version_stamp.py"
type: "code"
community: "Community 19"
location: "L92"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_19
---

# test_write_version_stamp_permissions_without_touching_umask()

## Connections
- [[New stamps keep mkstemp 0600 permissions; existing regular stamps preserve mode…]] - `rationale_for` [EXTRACTED]
- [[_write_version_stamp()]] - `calls` [EXTRACTED]
- [[forbid_umask()]] - `indirect_call` [INFERRED]
- [[skipif_6]] - `references` [EXTRACTED]
- [[test_atomic_version_stamp.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_19