---
source_file: "graphify/tests/test_js_dynamic_import_affected.py"
type: "rationale"
community: "Community 245"
location: "L101"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_245
---

# `import * as ns` binds the module, not the function that defers the load.

## Connections
- [[test_affected_reaches_through_a_namespace_importer()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/Community_245