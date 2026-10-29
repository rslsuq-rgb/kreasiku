---
type: community
cohesion: 0.11
members: 18
---

# Community 316

**Cohesion:** 0.11 - loosely connected
**Members:** 18 nodes

## Members
- [[All imports_from edge sources must exist in the node set.]] - rationale - graphify/tests/test_languages.py
- [[Extract module dependency edges from a PowerShell .psd1 manifest file. .psd1…]] - rationale - graphify/graphify/extractors/powershell.py
- [[ModuleVersion values ('5.0', '1.0.0') must NOT appear as import targets.]] - rationale - graphify/tests/test_languages.py
- [[NestedModules = @('Helpers.psm1', 'Logger.psm1') produces edges for both.]] - rationale - graphify/tests/test_languages.py
- [[Path_125]] - code
- [[RequiredModules hashtable form @{{ ModuleName='Pester' }} produces an…]] - rationale - graphify/tests/test_languages.py
- [[RequiredModules string form 'PSReadLine' produces an imports_from edge.]] - rationale - graphify/tests/test_languages.py
- [[RootModule = 'MyModule.psm1' produces an imports_from edge to 'mymodule'.]] - rationale - graphify/tests/test_languages.py
- [[add_node()_20]] - code - graphify/graphify/extractors/powershell.py
- [[extract_powershell_manifest()]] - code - graphify/graphify/extractors/powershell.py
- [[test_powershell_psd1_has_file_node()]] - code - graphify/tests/test_languages.py
- [[test_powershell_psd1_nested_modules()]] - code - graphify/tests/test_languages.py
- [[test_powershell_psd1_no_dangling_edges()]] - code - graphify/tests/test_languages.py
- [[test_powershell_psd1_no_error()]] - code - graphify/tests/test_languages.py
- [[test_powershell_psd1_no_moduleversion_as_edge()]] - code - graphify/tests/test_languages.py
- [[test_powershell_psd1_required_modules_hashtable()]] - code - graphify/tests/test_languages.py
- [[test_powershell_psd1_required_modules_string()]] - code - graphify/tests/test_languages.py
- [[test_powershell_psd1_root_module()]] - code - graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_316
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_Community 8]]
- 5 edges to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 566]]
- 1 edge to [[_COMMUNITY_Community 37]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 74]]

## Top bridge nodes
- [[extract_powershell_manifest()]] - degree 19, connects to 4 communities
- [[test_powershell_psd1_nested_modules()]] - degree 3, connects to 1 community
- [[test_powershell_psd1_no_dangling_edges()]] - degree 3, connects to 1 community
- [[test_powershell_psd1_no_moduleversion_as_edge()]] - degree 3, connects to 1 community
- [[test_powershell_psd1_required_modules_hashtable()]] - degree 3, connects to 1 community