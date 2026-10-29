---
type: community
cohesion: 0.02
members: 148
---

# Community 13

**Cohesion:** 0.02 - loosely connected
**Members:** 148 nodes

## Members
- [[2653  1077 extracting nested named functions must preserve local variable…]] - rationale - graphify/tests/test_extract.py
- [[3035  1077 Arbitrary `obj.x = wrap(...)` must NOT produce a node.]] - rationale - graphify/tests/test_extract.py
- [[3035 Calls inside HOF-wrapped export callbacks (with options) are attributed…]] - rationale - graphify/tests/test_extract.py
- [[3035 `exports.X = wrap(...)` and `module.exports.X = wrap(...)` must produce…]] - rationale - graphify/tests/test_extract.py
- [[A NodeNext-style .js import must retain its edge to a .tsx source.]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[A class field initialised with an arrow function (`x = () = {}`) must be…]] - rationale - graphify/tests/test_extract.py
- [[A directory with no index file should fall through to the return as-is…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Alias → bare path → .svelte.ts. Two layers of resolution must compose…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[All re_exports edges should have confidence=EXTRACTED.]] - rationale - graphify/tests/test_extract.py
- [[Ambient TS declaration files (foo.d.ts) — bare import `.foo.d` should resolve…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[An `obj.x = fn` where `obj` is NOT a local object-literal binding must be…]] - rationale - graphify/tests/test_extract.py
- [[Arrow functions assigned to a factory object are captured just like function…]] - rationale - graphify/tests/test_extract.py
- [[Bare module specifiers (no leading dot, no alias match) must still fall through…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Barrel file must emit file-level imports_from edges to source modules.]] - rationale - graphify/tests/test_extract.py
- [[Calls inside JSX expressions like `{fmtDate(now)}` must yield call edges.…]] - rationale - graphify/tests/test_extract.py
- [[Common patterns foo.shared.ts, foo.config.ts, foo.compile.ts,…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Dynamic import edge source should be the enclosing function, not the file.]] - rationale - graphify/tests/test_languages.py
- [[Dynamic import() calls inside functions should produce imports_from edges.]] - rationale - graphify/tests/test_languages.py
- [[Dynamic imports should have EXTRACTED confidence (they are deterministic string…]] - rationale - graphify/tests/test_languages.py
- [[Dynamic template literals (with ${}) must not produce an imports_from edge.]] - rationale - graphify/tests/test_languages.py
- [[Edge case `.eslintrc` and similar dotfiles. Path('.eslintrc').suffix returns…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[End-to-end sanity for the multi-dot pattern via the import handler.]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[External  truly missing paths fall back to the input — preserves pre-716…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Extract classes, functions, arrow functions, and imports from a…]] - rationale - graphify/graphify/extract.py
- [[Functions defined alongside a JSX-returning component must be captured.]] - rationale - graphify/tests/test_extract.py
- [[Functions without dynamic imports should not get spurious imports_from edges.]] - rationale - graphify/tests/test_languages.py
- [[Guard against the phantom-god-node class (1077) an arbitrary `obj.x = fn`…]] - rationale - graphify/tests/test_extract.py
- [[If `.js` exists and `.ts` does not, keep the `.js` rewrite from triggering —…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[If `foo.svelte` IS a real markup file, importing `.foo.svelte` must resolve to…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[JS variant of the rune file pattern a `.svelte.js` file (used in JavaScript-…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Methods assigned to a local object-literal factory API remain visible.]] - rationale - graphify/tests/test_extract.py
- [[NodeNext .js specifiers may name a JSX-bearing TypeScript source.]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Path_24]] - code
- [[Real .svelte file imports must still resolve when the .svelte file exists (i.e.…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Real-world repro a TS file uses `await import('.foo')` (no extension) to…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Real-world repro a project has both `auth.ts` (file) and `auth` (directory of…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Regression guard `from '.foo'` where '.foo' doesn't exist but '.foo-…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Regression arrow functions in lexical_declaration must still produce nodes.]] - rationale - graphify/tests/test_extract.py
- [[Resolve a JSTS module path or specifier to a local source file. With a Path…]] - rationale - graphify/graphify/extractors/resolution.py
- [[Sanity `from '.foo.shared.ts'` (explicit) still wins over implicit.]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Static template literals (no ${}) should resolve the same as a plain string.]] - rationale - graphify/tests/test_languages.py
- [[Svelte 5 rune file import written as .svelte, real file is .svelte.ts.]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Svelte 5 `from '.foo.svelte'` may actually point at `foo.svelte.ts` (a rune-…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[TS ESM convention imports written as .js but the actual file is .ts.]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Tests for 716 — TypeScript bare-path imports, Svelte 5 rune file imports…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[The 716 reproducer TS file imports a sibling without an extension.]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[The factory-to-object `contains` edge is emitted once regardless of how many…]] - rationale - graphify/tests/test_extract.py
- [[The most common case — import with explicit .ts extension — must continue to…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[The other branch of the dynamic-import handler — alias resolution — also needs…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[The regex pass for `import('...')` in .svelte files must also use the new…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[Vite resolver order .ts wins over .svelte for ambiguous bare paths.]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[When both `.svelte.ts` and `.svelte.js` exist (hybrid project mid- migration,…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[_import_targets()]] - code - graphify/tests/test_import_extension_resolution.py
- [[_resolve_js_module_path()]] - code - graphify/graphify/extractors/resolution.py
- [[_write()_4]] - code - graphify/tests/test_import_extension_resolution.py
- [[`$libfoo` (alias + bare path) — both layers must work together.]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[`.foosub` where .foosubindex.ts exists — nested subpath. Common pattern…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[`Foo.prototype.bar = fn` must be captured as a method owned by Foo.]] - rationale - graphify/tests/test_extract.py
- [[`const f = function(){}` (function expression, not arrow) must be captured.]] - rationale - graphify/tests/test_extract.py
- [[`const { foo } = require('.mod')` must emit imports_from to the resolved…]] - rationale - graphify/tests/test_extract.py
- [[`exports.X = fn` and `module.exports.X = fn` must produce function nodes.]] - rationale - graphify/tests/test_extract.py
- [[`from '$libqueue'` where queue is a directory under srclib.]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[`from '.queue'` must resolve to `.queueindex.ts`.]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[`import type { X } from '.foo'` — type-only imports must go through the same…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[`import { foo, bar } from '.module'` should emit per-symbol `imports` edges to…]] - rationale - graphify/tests/test_import_extension_resolution.py
- [[export functionconst in a barrel file must still create nodes.]] - rationale - graphify/tests/test_extract.py
- [[export { X } from '.mod' must emit re_exports edges for each named specifier.]] - rationale - graphify/tests/test_extract.py
- [[export { localVar } without 'from' should NOT create re_exports edges.]] - rationale - graphify/tests/test_extract.py
- [[extract_js()]] - code - graphify/graphify/extract.py
- [[parametrize_9]] - code
- [[re_exports edges should have context='re-export'.]] - rationale - graphify/tests/test_extract.py
- [[test_alias_directory_import_resolves_to_index_ts()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_alias_import_with_bare_path_resolves()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_bare_path_import_resolves_in_ts_file()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_barrel_local_exports_still_extracted()]] - code - graphify/tests/test_extract.py
- [[test_barrel_reexport_confidence_extracted()]] - code - graphify/tests/test_extract.py
- [[test_barrel_reexport_context_tagged()]] - code - graphify/tests/test_extract.py
- [[test_barrel_reexport_emits_imports_from()]] - code - graphify/tests/test_extract.py
- [[test_barrel_reexport_emits_re_exports_edges()]] - code - graphify/tests/test_extract.py
- [[test_directory_import_resolves_to_index_ts()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_dot_svelte_import_resolves_to_dot_svelte_ts()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_dynamic_import_bare_path_resolves()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_end_to_end_multi_dot_import_resolves()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_explicit_svelte_import_still_works()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_explicit_ts_import_still_works()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_exported_scalar_binding_satisfies_named_import_target()]] - code - graphify/tests/test_js_exported_scalar_bindings.py
- [[test_exported_scalar_bindings_emit_nodes()]] - code - graphify/tests/test_js_exported_scalar_bindings.py
- [[test_exported_scalar_fix_skips_unsupported_binding_patterns()]] - code - graphify/tests/test_js_exported_scalar_bindings.py
- [[test_external_module_unchanged()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_extract_js_arbitrary_member_assignment_not_captured()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_arbitrary_member_hof_assignment_not_captured()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_arrow_function_still_extracted()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_bare_object_member_assignment_not_captured()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_commonjs_exports_assignment()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_commonjs_exports_hof_assignment()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_commonjs_exports_hof_options_and_calls()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_const_function_expression()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_destructured_require_imports_from()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_factory_object_arrow_assigned_methods()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_factory_object_assigned_methods()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_factory_object_contains_edge_not_duplicated()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_nested_function_local_variable_preservation()]] - code - graphify/tests/test_extract.py
- [[test_extract_js_prototype_method_assignment()]] - code - graphify/tests/test_extract.py
- [[test_extract_ts_class_arrow_field()]] - code - graphify/tests/test_extract.py
- [[test_extract_tsx_finds_helpers_and_component()]] - code - graphify/tests/test_extract.py
- [[test_extract_tsx_jsx_expression_calls_resolve()]] - code - graphify/tests/test_extract.py
- [[test_import_extension_resolution.py]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_js_exported_scalar_bindings.py]] - code - graphify/tests/test_js_exported_scalar_bindings.py
- [[test_js_specifier_import_resolves_to_tsx_file()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_named_imports_emit_symbol_edges_after_resolution()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_pure_export_no_from_not_treated_as_reexport()]] - code - graphify/tests/test_extract.py
- [[test_resolve_ambient_d_ts_via_bare_path()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_bare_path_to_svelte()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_bare_path_to_ts()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_bare_path_to_tsx()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_chain_alias_and_extension_compose()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_directory_prefers_index_ts_over_index_js()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_directory_to_index_ts()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_directory_without_index_returns_unchanged()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_does_not_match_partial_directory_name()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_does_not_treat_dotfile_as_extension()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_file_wins_over_sibling_directory()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_handles_subpath_into_directory_with_index()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_js_to_ts_when_real_file_is_ts()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_js_to_tsx_when_real_file_is_tsx()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_jsx_to_tsx_when_real_file_is_tsx()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_multi_dot_helper_file()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_multi_dot_with_explicit_extension_still_works()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_prefers_ts_over_svelte_when_both_exist()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_real_js_stays_js_when_ts_does_not_exist()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_real_svelte_file_wins_over_svelte_ts_sibling()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_returns_existing_path_unchanged()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_returns_unchanged_when_nothing_matches()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_svelte_prefers_svelte_ts_over_svelte_js()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_svelte_to_svelte_js_for_javascript_rune_files()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_resolve_svelte_to_svelte_ts_for_rune_files()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_ts_dynamic_import_alias_with_bare_path_resolves()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_ts_dynamic_import_bare_path_resolves()]] - code - graphify/tests/test_import_extension_resolution.py
- [[test_ts_dynamic_import_confidence()]] - code - graphify/tests/test_languages.py
- [[test_ts_dynamic_import_extracts_edges()]] - code - graphify/tests/test_languages.py
- [[test_ts_dynamic_import_no_error()]] - code - graphify/tests/test_languages.py
- [[test_ts_dynamic_import_source_is_function()]] - code - graphify/tests/test_languages.py
- [[test_ts_dynamic_template_literal_skipped()]] - code - graphify/tests/test_languages.py
- [[test_ts_no_dynamic_import_in_sync_fn()]] - code - graphify/tests/test_languages.py
- [[test_ts_static_template_literal_resolved()]] - code - graphify/tests/test_languages.py
- [[test_ts_this_field_receiver_not_same_file_collision()]] - code - graphify/tests/test_languages.py
- [[test_type_only_import_with_bare_path_resolves()]] - code - graphify/tests/test_import_extension_resolution.py
- [[this.db.query() should NOT match an unrelated query() in the same file (1316).]] - rationale - graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_13
SORT file.name ASC
```

## Connections to other communities
- 28 edges to [[_COMMUNITY_Community 2]]
- 17 edges to [[_COMMUNITY_Community 1]]
- 9 edges to [[_COMMUNITY_Community 28]]
- 9 edges to [[_COMMUNITY_Community 386]]
- 9 edges to [[_COMMUNITY_Community 8]]
- 7 edges to [[_COMMUNITY_Community 96]]
- 6 edges to [[_COMMUNITY_Community 348]]
- 3 edges to [[_COMMUNITY_Community 3]]
- 3 edges to [[_COMMUNITY_Community 156]]
- 2 edges to [[_COMMUNITY_Community 0]]
- 2 edges to [[_COMMUNITY_Community 54]]
- 2 edges to [[_COMMUNITY_Community 48]]
- 2 edges to [[_COMMUNITY_Community 469]]
- 2 edges to [[_COMMUNITY_Community 174]]
- 2 edges to [[_COMMUNITY_Community 577]]
- 2 edges to [[_COMMUNITY_Community 286]]
- 2 edges to [[_COMMUNITY_Community 29]]
- 2 edges to [[_COMMUNITY_Community 522]]
- 2 edges to [[_COMMUNITY_Community 461]]
- 2 edges to [[_COMMUNITY_Community 163]]
- 2 edges to [[_COMMUNITY_Community 14]]
- 1 edge to [[_COMMUNITY_Community 259]]
- 1 edge to [[_COMMUNITY_Community 56]]
- 1 edge to [[_COMMUNITY_Community 76]]
- 1 edge to [[_COMMUNITY_Community 9]]
- 1 edge to [[_COMMUNITY_Community 51]]
- 1 edge to [[_COMMUNITY_Community 59]]

## Top bridge nodes
- [[extract_js()]] - degree 105, connects to 21 communities
- [[_resolve_js_module_path()]] - degree 53, connects to 5 communities
- [[test_import_extension_resolution.py]] - degree 47, connects to 3 communities
- [[test_js_exported_scalar_bindings.py]] - degree 7, connects to 3 communities
- [[test_dynamic_import_bare_path_resolves()]] - degree 4, connects to 1 community