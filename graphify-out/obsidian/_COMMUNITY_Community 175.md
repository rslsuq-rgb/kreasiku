---
type: community
cohesion: 0.12
members: 30
---

# Community 175

**Cohesion:** 0.12 - loosely connected
**Members:** 30 nodes

## Members
- [[A GENERATOR function expression (`function(k){}`) must shadow its param the…]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[A named function expression is the same node type and must behave alike.]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[Adding a type to `function_boundary_types` must not change WHERE calls are…]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[An untracked `function (…) {…}` expression's bindings must shadow indirect_call…]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[Boundary control a MODULE-level `const f = function (…) {}` gets its own node…]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[Control the arrow path was already correct and must stay correct.]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[Locals, not just parameters, are scoped to the expression's body.]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[Not only the inline-argument position a `const` inside a function body binds…]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[The TS config carries its own copy of the set; both were missing the type.]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[The bindings are scoped to the expression a same-named module callable…]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[The reported shape a minified bundle's private `k` must not become a…]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[Two function expressions in one initializer are SEPARATE scopes the first…]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[Widening the shadow set must not blanket-suppress inside the body an…]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[_extract_js_dir()_1]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[_indirect()_1]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[`.tsx` derives its boundary set from the TS config by reference; assert the…]] - rationale - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_arrow_callback_still_shadows()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_call_attribution_inside_the_expression_is_unchanged()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_function_expression_local_shadows()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_generator_function_expression_param_shadows()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_genuine_reference_inside_the_function_expression_still_emits()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_indirect_call_function_expression_shadow.py]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_inline_function_expression_param_emits_no_indirect_call()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_named_function_expression_param_shadows()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_nested_const_function_expression_shadows()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_same_named_reference_after_the_expression_still_resolves()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_sibling_function_expression_param_does_not_leak()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_top_level_const_function_expression_was_already_tracked()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_tsx_function_expression_shadows()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py
- [[test_typescript_function_expression_shadows()]] - code - graphify/tests/test_indirect_call_function_expression_shadow.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_175
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_Community 14]]
- 4 edges to [[_COMMUNITY_Community 19]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_indirect_call_function_expression_shadow.py]] - degree 20, connects to 4 communities
- [[_extract_js_dir()_1]] - degree 14, connects to 2 communities
- [[test_tsx_function_expression_shadows()]] - degree 5, connects to 2 communities
- [[test_typescript_function_expression_shadows()]] - degree 5, connects to 2 communities