---
source_file: "graphify/graphify/detect.py"
type: "code"
community: "Community 33"
location: "L2633"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_33
---

# load_manifest()

## Connections
- [[Load the manifest from a previous run. Returns {} on any error. When ``root``…]] - `rationale_for` [EXTRACTED]
- [[Path_131]] - `references` [EXTRACTED]
- [[_collapse_manifest_duplicates()]] - `calls` [EXTRACTED]
- [[_inputs_unchanged()]] - `calls` [EXTRACTED]
- [[_manifest_storage_anchor()]] - `calls` [EXTRACTED]
- [[_nfc()]] - `indirect_call` [INFERRED]
- [[_to_absolute_from_storage()]] - `calls` [EXTRACTED]
- [[_zero_node_stamped_code_sources()]] - `calls` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[detect_incremental()]] - `calls` [EXTRACTED]
- [[manifest.py]] - `imports` [EXTRACTED]
- [[save_manifest()]] - `calls` [EXTRACTED]
- [[test_detect.py]] - `imports` [EXTRACTED]
- [[test_inputs_unchanged_treats_a_scanned_file_with_no_manifest_row_as_changed()]] - `calls` [EXTRACTED]
- [[test_load_manifest_absolutizes_relative_keys()]] - `calls` [EXTRACTED]
- [[test_load_manifest_collapses_a_relative_key_with_a_dot_dot_segment()]] - `calls` [EXTRACTED]
- [[test_load_manifest_passes_through_legacy_absolute_keys()]] - `calls` [EXTRACTED]
- [[test_load_manifest_prefers_the_more_recently_seen_duplicate()]] - `calls` [EXTRACTED]
- [[test_save_manifest_in_root_symlink_roundtrips()]] - `calls` [EXTRACTED]
- [[test_save_manifest_relativizes_keys_when_root_given()]] - `calls` [EXTRACTED]
- [[test_update_no_change_gate.py]] - `imports` [EXTRACTED]
- [[watch.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_33