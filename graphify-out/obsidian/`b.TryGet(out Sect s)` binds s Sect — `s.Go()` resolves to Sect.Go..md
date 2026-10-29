---
source_file: "graphify/tests/test_csharp_member_calls.py"
type: "rationale"
community: "Community 825"
location: "L592"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_825
---

# `b.TryGet(out Sect s)` binds s: Sect — `s.Go()` resolves to Sect.Go.

## Connections
- [[test_out_declared_receiver_resolves()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/Community_825