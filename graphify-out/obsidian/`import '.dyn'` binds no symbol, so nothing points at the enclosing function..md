---
source_file: "graphify/tests/test_js_dynamic_import_affected.py"
type: "rationale"
community: "Community 245"
location: "L93"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_245
---

# `import './dyn'` binds no symbol, so nothing points at the enclosing function.

## Connections
- [[test_affected_reaches_through_a_side_effect_importer()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/Community_245