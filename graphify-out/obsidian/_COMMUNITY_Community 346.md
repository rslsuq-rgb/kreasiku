---
type: community
cohesion: 0.12
members: 17
---

# Community 346

**Cohesion:** 0.12 - loosely connected
**Members:** 17 nodes

## Members
- [[Path_138]] - code
- [[Test 1 — Nested node + contains def outer() def inner() pass]] - rationale - graphify/tests/test_issue_3405_python_resolution.py
- [[Test 2 — Outer calls nested function def outer() def inner() pass inner()]] - rationale - graphify/tests/test_issue_3405_python_resolution.py
- [[Test 3 — Nested function shadows module function def walk() pass def trace()…]] - rationale - graphify/tests/test_issue_3405_python_resolution.py
- [[Test 4 — Nested sibling call def outer() def helper() pass def worker()…]] - rationale - graphify/tests/test_issue_3405_python_resolution.py
- [[Test 5 — Nested recursion def outer() def walk(n) if n walk(n - 1) walk(10)]] - rationale - graphify/tests/test_issue_3405_python_resolution.py
- [[Test 6 — Async nested function async def outer() async def fetch() pass await…]] - rationale - graphify/tests/test_issue_3405_python_resolution.py
- [[Test 7 — Deep nesting def outer() def middle() def inner() pass inner()…]] - rationale - graphify/tests/test_issue_3405_python_resolution.py
- [[Test 8 — Local non-callable binding does not become cross-file raw_call def…]] - rationale - graphify/tests/test_issue_3405_python_resolution.py
- [[test_python_async_nested_function()]] - code - graphify/tests/test_issue_3405_python_resolution.py
- [[test_python_deep_nesting()]] - code - graphify/tests/test_issue_3405_python_resolution.py
- [[test_python_local_non_callable_suppression()]] - code - graphify/tests/test_issue_3405_python_resolution.py
- [[test_python_nested_function_node_and_contains()]] - code - graphify/tests/test_issue_3405_python_resolution.py
- [[test_python_nested_function_shadows_module_function()]] - code - graphify/tests/test_issue_3405_python_resolution.py
- [[test_python_nested_recursion()]] - code - graphify/tests/test_issue_3405_python_resolution.py
- [[test_python_nested_sibling_call()]] - code - graphify/tests/test_issue_3405_python_resolution.py
- [[test_python_outer_calls_nested_function()]] - code - graphify/tests/test_issue_3405_python_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_346
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_Community 14]]
- 8 edges to [[_COMMUNITY_Community 1]]

## Top bridge nodes
- [[test_python_async_nested_function()]] - degree 4, connects to 2 communities
- [[test_python_deep_nesting()]] - degree 4, connects to 2 communities
- [[test_python_local_non_callable_suppression()]] - degree 4, connects to 2 communities
- [[test_python_nested_function_node_and_contains()]] - degree 4, connects to 2 communities
- [[test_python_nested_function_shadows_module_function()]] - degree 4, connects to 2 communities