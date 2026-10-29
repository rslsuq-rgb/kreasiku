---
type: community
cohesion: 0.08
members: 53
---

# Community 81

**Cohesion:** 0.08 - loosely connected
**Members:** 53 nodes

## Members
- [[Any_15]] - code
- [[Append a node if not already present. ``kind`` is metadata, not file_type.]] - rationale - graphify/graphify/mcp_ingest.py
- [[Append an edge if (source, target, relation) is not already present.]] - rationale - graphify/graphify/mcp_ingest.py
- [[Drop the ``@version`` suffix from an npm package id, preserving the scope.…]] - rationale - graphify/graphify/mcp_ingest.py
- [[Emit nodesedges for one entry under ``mcpServers``.]] - rationale - graphify/graphify/mcp_ingest.py
- [[Parse an MCP config file into Graphify nodes and edges. Behaviour matches other…]] - rationale - graphify/graphify/mcp_ingest.py
- [[Path_236]] - code
- [[Path_237]] - code
- [[Return True when ``path`` is a recognised MCP config filename.]] - rationale - graphify/graphify/mcp_ingest.py
- [[Return the first arg that looks like an npm or pypi package id, else None.…]] - rationale - graphify/graphify/mcp_ingest.py
- [[Tests for graphify.mcp_ingest — MCP config file extraction.]] - rationale - graphify/tests/test_mcp_ingest.py
- [[_add_edge()_4]] - code - graphify/graphify/mcp_ingest.py
- [[_add_node()_3]] - code - graphify/graphify/mcp_ingest.py
- [[_detect_package_from_args()]] - code - graphify/graphify/mcp_ingest.py
- [[_emit_server()]] - code - graphify/graphify/mcp_ingest.py
- [[_label_by_kind()]] - code - graphify/tests/test_mcp_ingest.py
- [[_labels()_34]] - code - graphify/tests/test_mcp_ingest.py
- [[_node_kinds()]] - code - graphify/tests/test_mcp_ingest.py
- [[_relations()_3]] - code - graphify/tests/test_mcp_ingest.py
- [[_strip_version()]] - code - graphify/graphify/mcp_ingest.py
- [[_write()_46]] - code - graphify/tests/test_mcp_ingest.py
- [[extract_mcp_config()]] - code - graphify/graphify/mcp_ingest.py
- [[is_mcp_config_path()]] - code - graphify/graphify/mcp_ingest.py
- [[test_dispatch_does_not_reroute_generic_json()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_dispatch_routes_mcp_filename_to_mcp_extractor()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_env_var_values_never_appear_anywhere()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_every_edge_has_confidence_score()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_filesystem_path_not_persisted_as_node()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_fixture_emits_commands_as_global_nodes()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_fixture_emits_env_var_names()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_fixture_emits_every_server()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_fixture_emits_npm_packages()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_fixture_emits_python_packages()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_fixture_parses_without_error()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_fixture_relations_include_contains_references_requires_env()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_fixture_strips_version_from_npm_package()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_is_mcp_config_path_recognises_known_filenames()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_is_mcp_config_path_rejects_generic_json()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_malformed_json_returns_error()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_mcp_ingest.py]] - code - graphify/tests/test_mcp_ingest.py
- [[test_missing_mcp_servers_key()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_nested_mcp_servers_shape()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_no_dangling_edges()_1]] - code - graphify/tests/test_mcp_ingest.py
- [[test_no_package_detected_for_unknown_arg_shape()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_non_dict_server_entry_skipped()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_oversize_file_skipped()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_package_detection_skips_flags()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_recognised_filenames_set_is_frozen()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_root_not_an_object()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_same_command_collapses_to_one_node_across_configs()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_same_env_var_collapses_to_one_node_across_configs()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_same_server_name_in_different_dirs_does_not_collide()]] - code - graphify/tests/test_mcp_ingest.py
- [[test_server_without_command_still_emits_server_node()]] - code - graphify/tests/test_mcp_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_81
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_Community 3]]
- 5 edges to [[_COMMUNITY_Community 226]]
- 3 edges to [[_COMMUNITY_Community 115]]
- 2 edges to [[_COMMUNITY_Community 45]]
- 2 edges to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 128]]
- 1 edge to [[_COMMUNITY_Community 59]]

## Top bridge nodes
- [[extract_mcp_config()]] - degree 36, connects to 5 communities
- [[test_mcp_ingest.py]] - degree 42, connects to 4 communities
- [[is_mcp_config_path()]] - degree 8, connects to 3 communities
- [[_emit_server()]] - degree 8, connects to 2 communities
- [[_add_node()_3]] - degree 6, connects to 2 communities