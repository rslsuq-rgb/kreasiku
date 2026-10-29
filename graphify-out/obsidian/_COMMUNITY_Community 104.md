---
type: community
cohesion: 0.05
members: 43
---

# Community 104

**Cohesion:** 0.05 - loosely connected
**Members:** 43 nodes

## Members
- [[2444 a BrokenProcessPool raised from future.result() (pool died while results…]] - rationale - graphify/tests/test_extract.py
- [[2444 when the pool breaks mid-run, the sequential fallback must re-extract…]] - rationale - graphify/tests/test_extract.py
- [[2445 a file that fails in the pool AND on the sequential retry must end up…]] - rationale - graphify/tests/test_extract.py
- [[2445 a non-BPP per-future failure must be surfaced and retried in-process,…]] - rationale - graphify/tests/test_extract.py
- [[Guard for the 2445 error-marked None-fill a file whose extractor genuinely…]] - rationale - graphify/tests/test_extract.py
- [[With = _PARALLEL_THRESHOLD uncached files but an unusable __main__, the pool…]] - rationale - graphify/tests/test_extract.py
- [[__enter__()]] - code - graphify/tests/test_extract.py
- [[__enter__()_1]] - code - graphify/tests/test_extract.py
- [[__enter__()_2]] - code - graphify/tests/test_extract.py
- [[__enter__()_3]] - code - graphify/tests/test_extract.py
- [[__exit__()]] - code - graphify/tests/test_extract.py
- [[__exit__()_1]] - code - graphify/tests/test_extract.py
- [[__exit__()_2]] - code - graphify/tests/test_extract.py
- [[__exit__()_3]] - code - graphify/tests/test_extract.py
- [[__init__()]] - code - graphify/tests/test_extract.py
- [[__init__()_1]] - code - graphify/tests/test_extract.py
- [[__init__()_2]] - code - graphify/tests/test_extract.py
- [[__init__()_3]] - code - graphify/tests/test_extract.py
- [[_boom_extractor()]] - code - graphify/tests/test_extract.py
- [[extract() must run sequential when _extract_parallel signals failure (returns…]] - rationale - graphify/tests/test_extract.py
- [[fake_parallel()]] - code - graphify/tests/test_extract.py
- [[fake_parallel()_1]] - code - graphify/tests/test_extract.py
- [[result()]] - code - graphify/tests/test_extract.py
- [[result()_1]] - code - graphify/tests/test_extract.py
- [[result()_2]] - code - graphify/tests/test_extract.py
- [[result()_3]] - code - graphify/tests/test_extract.py
- [[submit()]] - code - graphify/tests/test_extract.py
- [[submit()_1]] - code - graphify/tests/test_extract.py
- [[submit()_2]] - code - graphify/tests/test_extract.py
- [[submit()_3]] - code - graphify/tests/test_extract.py
- [[test_extract_bpp_fallback_skips_already_completed_files()]] - code - graphify/tests/test_extract.py
- [[test_extract_falls_back_to_sequential_when_parallel_returns_false()]] - code - graphify/tests/test_extract.py
- [[test_extract_falls_back_when_worker_future_breaks_pool()]] - code - graphify/tests/test_extract.py
- [[test_extract_legitimately_empty_result_keeps_no_error_marker()]] - code - graphify/tests/test_extract.py
- [[test_extract_parallel_retries_failed_future_sequentially()]] - code - graphify/tests/test_extract.py
- [[test_extract_skips_pool_up_front_on_unusable_main()]] - code - graphify/tests/test_extract.py
- [[test_extract_twice_failing_file_carries_error_marker()]] - code - graphify/tests/test_extract.py
- [[wrapped_sequential()]] - code - graphify/tests/test_extract.py
- [[wrapped_sequential()_1]] - code - graphify/tests/test_extract.py
- [[wrapped_sequential()_2]] - code - graphify/tests/test_extract.py
- [[wrapped_sequential()_3]] - code - graphify/tests/test_extract.py
- [[wrapped_sequential()_4]] - code - graphify/tests/test_extract.py
- [[wrapped_sequential()_5]] - code - graphify/tests/test_extract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_104
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_Community 14]]
- 7 edges to [[_COMMUNITY_Community 2]]

## Top bridge nodes
- [[test_extract_twice_failing_file_carries_error_marker()]] - degree 11, connects to 2 communities
- [[test_extract_bpp_fallback_skips_already_completed_files()]] - degree 10, connects to 2 communities
- [[test_extract_falls_back_when_worker_future_breaks_pool()]] - degree 10, connects to 2 communities
- [[test_extract_parallel_retries_failed_future_sequentially()]] - degree 10, connects to 2 communities
- [[test_extract_falls_back_to_sequential_when_parallel_returns_false()]] - degree 5, connects to 2 communities