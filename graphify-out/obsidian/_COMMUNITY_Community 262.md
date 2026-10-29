---
type: community
cohesion: 0.14
members: 21
---

# Community 262

**Cohesion:** 0.14 - loosely connected
**Members:** 21 nodes

## Members
- [[1649 — a modified .docx.xlsx must re-enter --update. detect_incremental…]] - rationale - graphify/tests/test_office_incremental.py
- [[2059 the sidecar name must depend on the scan-root-RELATIVE path, not the…]] - rationale - graphify/tests/test_detect.py
- [[A second conversion of an unchanged source must not rewrite the sidecar, so its…]] - rationale - graphify/tests/test_detect.py
- [[A source outside the scan root (--include, custom layouts) falls back to the…]] - rationale - graphify/tests/test_detect.py
- [[Convert a .docx or .xlsx to a markdown sidecar in out_dir. Returns the path of…]] - rationale - graphify/graphify/detect.py
- [[Path_92]] - code
- [[Set path's mtime relative to now so ordering is deterministic.]] - rationale - graphify/tests/test_office_incremental.py
- [[The sidecar name must be identical whether the source path arrives in NFC or…]] - rationale - graphify/tests/test_detect.py
- [[Two same-stem Office files in different subdirs must still get distinct sidecar…]] - rationale - graphify/tests/test_detect.py
- [[_bump_mtime()]] - code - graphify/tests/test_office_incremental.py
- [[_make_docx()]] - code - graphify/tests/test_office_incremental.py
- [[_sidecar()]] - code - graphify/tests/test_detect.py
- [[convert_office_file()]] - code - graphify/graphify/detect.py
- [[test_convert_office_file_does_not_rewrite_existing_sidecar()]] - code - graphify/tests/test_detect.py
- [[test_convert_office_file_hash_disambiguates_same_stem()]] - code - graphify/tests/test_detect.py
- [[test_convert_office_file_hash_stable_across_nfc_nfd()]] - code - graphify/tests/test_detect.py
- [[test_convert_office_file_outside_root_falls_back()]] - code - graphify/tests/test_detect.py
- [[test_convert_office_file_sidecar_name_stable_across_checkouts()]] - code - graphify/tests/test_detect.py
- [[test_modified_docx_reconverts_sidecar()]] - code - graphify/tests/test_office_incremental.py
- [[test_office_incremental.py]] - code - graphify/tests/test_office_incremental.py
- [[test_unchanged_docx_sidecar_not_rewritten()]] - code - graphify/tests/test_office_incremental.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_262
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 5]]
- 3 edges to [[_COMMUNITY_Community 33]]
- 3 edges to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 251]]
- 1 edge to [[_COMMUNITY_Community 89]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[convert_office_file()]] - degree 14, connects to 4 communities
- [[test_office_incremental.py]] - degree 10, connects to 4 communities
- [[_bump_mtime()]] - degree 6, connects to 1 community
- [[test_convert_office_file_sidecar_name_stable_across_checkouts()]] - degree 4, connects to 1 community
- [[test_convert_office_file_does_not_rewrite_existing_sidecar()]] - degree 3, connects to 1 community