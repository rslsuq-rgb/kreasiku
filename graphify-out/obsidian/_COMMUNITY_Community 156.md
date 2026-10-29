---
type: community
cohesion: 0.10
members: 32
---

# Community 156

**Cohesion:** 0.10 - loosely connected
**Members:** 32 nodes

## Members
- [[3942 TypeScript 5.0's `export type  from ...` has no equivalent in tree-…]] - rationale - graphify/tests/test_ts_export_type_star.py
- [[A C-style `for (let i = ...)` binding shadows a reference inside the loop,…]] - rationale - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[A block-scoped `let``const` binding must not shadow indirect_call references…]] - rationale - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[Case 1 from the issue a `const` declared inside an `if` block must not…]] - rationale - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[Case 2 from the issue referenced after the loop ends, not inside it.]] - rationale - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[Case 3 from the issue a closure returned after the loop still refers to the…]] - rationale - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[Control from the issue (2606 must not regress) a reference INSIDE the loop…]] - rationale - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[Control the already-working named type re-export must not be touched by a…]] - rationale - graphify/tests/test_ts_export_type_star.py
- [[Path_36]] - code
- [[Rewrite ``export type  from ...`` to a plain ``export  from ...``. TS…]] - rationale - graphify/graphify/extract.py
- [[Same as above for a var-form for-of loop binding hoisted, so it must still…]] - rationale - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[Widening the shadow scope must not blanket-suppress a same-named callable…]] - rationale - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[_extract()_3]] - code - graphify/tests/test_ts_export_type_star.py
- [[_extract_js_dir()]] - code - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[_indirect()]] - code - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[_normalize_ts_export_type_star()]] - code - graphify/graphify/extract.py
- [[test_block_scoped_const_does_not_shadow_a_reference_outside_the_block()]] - code - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[test_c_style_for_let_still_shadows_a_reference_inside_its_own_loop()]] - code - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[test_export_type_named_form_is_unaffected()]] - code - graphify/tests/test_ts_export_type_star.py
- [[test_export_type_star_no_longer_a_syntax_error()]] - code - graphify/tests/test_ts_export_type_star.py
- [[test_export_type_star_still_produces_the_re_export_edge()]] - code - graphify/tests/test_ts_export_type_star.py
- [[test_for_of_binding_does_not_shadow_a_closure_that_outlives_the_loop()]] - code - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[test_for_of_binding_does_not_shadow_a_reference_after_the_loop()]] - code - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[test_for_of_binding_still_shadows_a_reference_inside_its_own_loop()]] - code - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[test_genuine_reference_elsewhere_still_emits()]] - code - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[test_indirect_call_block_scoped_shadow.py]] - code - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[test_normalize_function_only_blanks_the_type_keyword()]] - code - graphify/tests/test_ts_export_type_star.py
- [[test_normalize_function_returns_none_when_no_match()]] - code - graphify/tests/test_ts_export_type_star.py
- [[test_ts_export_type_star.py]] - code - graphify/tests/test_ts_export_type_star.py
- [[test_var_for_of_binding_still_shadows_a_reference_after_the_loop()]] - code - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[test_var_inside_a_block_still_shadows_a_reference_outside_the_block()]] - code - graphify/tests/test_indirect_call_block_scoped_shadow.py
- [[var is genuinely function-scoped (hoisted) unlike the letconst case above, a…]] - rationale - graphify/tests/test_indirect_call_block_scoped_shadow.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_156
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_Community 14]]
- 4 edges to [[_COMMUNITY_Community 19]]
- 3 edges to [[_COMMUNITY_Community 13]]
- 3 edges to [[_COMMUNITY_Community 1]]
- 2 edges to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_indirect_call_block_scoped_shadow.py]] - degree 16, connects to 5 communities
- [[test_ts_export_type_star.py]] - degree 12, connects to 4 communities
- [[_extract_js_dir()]] - degree 10, connects to 2 communities
- [[_extract()_3]] - degree 7, connects to 2 communities
- [[_normalize_ts_export_type_star()]] - degree 6, connects to 2 communities