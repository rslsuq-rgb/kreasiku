---
source_file: "graphify/tests/test_non_regular_files.py"
type: "code"
community: "Community 263"
location: "L81"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_263
---

# test_symlink_pointing_at_a_fifo_is_rejected()

## Connections
- [[A link to a FIFO blocks exactly like the FIFO, so stat must follow it.]] - `rationale_for` [EXTRACTED]
- [[_is_regular_file()]] - `calls` [EXTRACTED]
- [[_symlink()]] - `calls` [EXTRACTED]
- [[needs_fifo]] - `references` [EXTRACTED]
- [[os]] - `calls` [EXTRACTED]
- [[test_non_regular_files.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_263