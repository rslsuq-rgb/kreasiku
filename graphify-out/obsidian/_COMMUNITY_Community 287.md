---
type: community
cohesion: 0.17
members: 20
---

# Community 287

**Cohesion:** 0.17 - loosely connected
**Members:** 20 nodes

## Members
- [[A bare `require(mod)` statement (no assignment) is the common Neovim-config…]] - rationale - graphify/tests/test_lua_import.py
- [[A plain (non-`require`) Lua call must still be walked into a `local function`…]] - rationale - graphify/tests/test_lua_import.py
- [[Path_106]] - code
- [[Positive control `local x = require(mod)` must keep working exactly as it…]] - rationale - graphify/tests/test_lua_import.py
- [[The realistic Neovim `init.lua` shape several bare requires, one per line,…]] - rationale - graphify/tests/test_lua_import.py
- [[The standard `luaconfiglazy.lua` layout, not just the flattened filename from…]] - rationale - graphify/tests/test_lua_import.py
- [[_import_edges()]] - code - graphify/tests/test_lua_import.py
- [[_write()_22]] - code - graphify/tests/test_lua_import.py
- [[`foo.require(mod)`  `barrequire(mod)` call something named `require` on a…]] - rationale - graphify/tests/test_lua_import.py
- [[`require mod` (no parens, double quotes) is valid Lua and must be treated the…]] - rationale - graphify/tests/test_lua_import.py
- [[`require 'mod'` (no parens) is valid Lua and must be treated the same as the…]] - rationale - graphify/tests/test_lua_import.py
- [[test_lua_assigned_require_still_emits_import_edge()]] - code - graphify/tests/test_lua_import.py
- [[test_lua_bare_require_emits_import_edge()]] - code - graphify/tests/test_lua_import.py
- [[test_lua_bare_require_resolves_lua_directory_layout()]] - code - graphify/tests/test_lua_import.py
- [[test_lua_bare_require_without_parens_double_quotes()]] - code - graphify/tests/test_lua_import.py
- [[test_lua_bare_require_without_parens_single_quotes()]] - code - graphify/tests/test_lua_import.py
- [[test_lua_import.py]] - code - graphify/tests/test_lua_import.py
- [[test_lua_method_style_require_is_not_an_import()]] - code - graphify/tests/test_lua_import.py
- [[test_lua_multiple_bare_requires_each_emit_an_import_edge()]] - code - graphify/tests/test_lua_import.py
- [[test_lua_non_require_call_still_recurses_into_its_callback()]] - code - graphify/tests/test_lua_import.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_287
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_Community 14]]
- 2 edges to [[_COMMUNITY_Community 9]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 3]]
- 1 edge to [[_COMMUNITY_Community 53]]

## Top bridge nodes
- [[test_lua_import.py]] - degree 15, connects to 5 communities
- [[test_lua_bare_require_resolves_lua_directory_layout()]] - degree 5, connects to 2 communities
- [[test_lua_assigned_require_still_emits_import_edge()]] - degree 5, connects to 1 community
- [[test_lua_bare_require_emits_import_edge()]] - degree 5, connects to 1 community
- [[test_lua_bare_require_without_parens_double_quotes()]] - degree 5, connects to 1 community