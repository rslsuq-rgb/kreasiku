---
type: community
cohesion: 0.08
members: 24
---

# Community 226

**Cohesion:** 0.08 - loosely connected
**Members:** 24 nodes

## Members
- [[A C-API header wrapped in `ifdef __cplusplus extern C {` must route to…]] - rationale - graphify/tests/test_languages.py
- [[A `.h` with a C++ class must route to extract_cpp, not extract_c (which has no…]] - rationale - graphify/tests/test_languages.py
- [[A bridging header that is only `import X.h` (no @interface) must route to…]] - rationale - graphify/tests/test_languages.py
- [[A plain C header (no C++ signal) must keep its extract_c routing.]] - rationale - graphify/tests/test_languages.py
- [[An ObjC `.h` (has @interface) routes to extract_objc; a plain C `.h` stays on…]] - rationale - graphify/tests/test_languages.py
- [[Extensionless CLIs resolve their extractor from the shebang, mirroring…]] - rationale - graphify/tests/test_extract.py
- [[Return the correct extractor function for a file, or None if unsupported.]] - rationale - graphify/graphify/extract.py
- [[_get_extractor should route .psd1 to extract_powershell_manifest.]] - rationale - graphify/tests/test_languages.py
- [[_get_extractor()]] - code - graphify/graphify/extract.py
- [[`.h` is normally sniffed for C++ObjC; a declaration makes it definite.]] - rationale - graphify/tests/test_language_overrides.py
- [[test_a_remapped_header_skips_the_content_sniff()]] - code - graphify/tests/test_language_overrides.py
- [[test_cpp_header_routes_to_cpp_extractor()]] - code - graphify/tests/test_languages.py
- [[test_dispatch_table()]] - code - graphify/tests/test_dotnet.py
- [[test_extensionless_shebang_via_dispatch()]] - code - graphify/tests/test_extract.py
- [[test_extensionless_without_usable_shebang_stays_unsupported()]] - code - graphify/tests/test_extract.py
- [[test_extern_c_header_routes_to_cpp_extractor()]] - code - graphify/tests/test_languages.py
- [[test_extract_bash_via_dispatch()]] - code - graphify/tests/test_extract.py
- [[test_extract_json_via_dispatch()]] - code - graphify/tests/test_extract.py
- [[test_get_extractor_routes_matlab_m_away_from_objc()]] - code - graphify/tests/test_extract.py
- [[test_objc_header_dispatch_routes_objc_not_c()]] - code - graphify/tests/test_languages.py
- [[test_objc_header_with_import_routes_to_objc()]] - code - graphify/tests/test_languages.py
- [[test_plain_c_header_stays_on_c_extractor()]] - code - graphify/tests/test_languages.py
- [[test_powershell_psd1_dispatched()]] - code - graphify/tests/test_languages.py
- [[test_powershell_psm1_dispatched_and_extracted()]] - code - graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_226
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_Community 54]]
- 8 edges to [[_COMMUNITY_Community 8]]
- 6 edges to [[_COMMUNITY_Community 2]]
- 5 edges to [[_COMMUNITY_Community 81]]
- 3 edges to [[_COMMUNITY_Community 96]]
- 3 edges to [[_COMMUNITY_Community 88]]
- 2 edges to [[_COMMUNITY_Community 17]]
- 2 edges to [[_COMMUNITY_Community 227]]
- 2 edges to [[_COMMUNITY_Community 18]]
- 2 edges to [[_COMMUNITY_Community 74]]
- 2 edges to [[_COMMUNITY_Community 31]]
- 1 edge to [[_COMMUNITY_Community 14]]
- 1 edge to [[_COMMUNITY_Community 35]]
- 1 edge to [[_COMMUNITY_Community 34]]
- 1 edge to [[_COMMUNITY_Community 56]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 68]]
- 1 edge to [[_COMMUNITY_Community 60]]

## Top bridge nodes
- [[_get_extractor()]] - degree 49, connects to 19 communities
- [[test_a_remapped_header_skips_the_content_sniff()]] - degree 4, connects to 2 communities
- [[test_cpp_header_routes_to_cpp_extractor()]] - degree 4, connects to 2 communities
- [[test_extern_c_header_routes_to_cpp_extractor()]] - degree 4, connects to 2 communities
- [[test_objc_header_with_import_routes_to_objc()]] - degree 4, connects to 2 communities