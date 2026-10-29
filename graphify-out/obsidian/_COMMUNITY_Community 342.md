---
type: community
cohesion: 0.18
members: 17
---

# Community 342

**Cohesion:** 0.18 - loosely connected
**Members:** 17 nodes

## Members
- [[2879 a file the extractor declines by design (data JSON, etc.) is stamped yet…]] - rationale - graphify/tests/test_extract_cli.py
- [[A file that keeps failing is retried on every run (exactly 1 file), the runs…]] - rationale - graphify/tests/test_extract_cli.py
- [[A manifest poisoned BEFORE the 2543 fix (live hash stamped, file absent from…]] - rationale - graphify/tests/test_extract_cli.py
- [[Clear every env var that detect_backend() or _get_backend_api_key() reads.]] - rationale - graphify/tests/test_extract_cli.py
- [[Healthy corpus second run re-extracts nothing and hashes stay live.]] - rationale - graphify/tests/test_extract_cli.py
- [[Run 1 fails on schema.sql (missing extra) - no live manifest hash; run 2 with…]] - rationale - graphify/tests/test_extract_cli.py
- [[_clear_backend_keys()]] - code - graphify/tests/test_extract_cli.py
- [[_failing_sql()]] - code - graphify/tests/test_extract_cli.py
- [[_manifest_row()]] - code - graphify/tests/test_extract_cli.py
- [[_ok_sql()]] - code - graphify/tests/test_extract_cli.py
- [[_skipped_sql()]] - code - graphify/tests/test_extract_cli.py
- [[_sql_failure_corpus()]] - code - graphify/tests/test_extract_cli.py
- [[test_declined_by_design_file_is_not_requeued_every_run()]] - code - graphify/tests/test_extract_cli.py
- [[test_failed_extra_is_retried_and_recovers()]] - code - graphify/tests/test_extract_cli.py
- [[test_permanent_failure_does_not_wedge()]] - code - graphify/tests/test_extract_cli.py
- [[test_poisoned_manifest_is_healed()]] - code - graphify/tests/test_extract_cli.py
- [[test_success_and_unchanged_unaffected()]] - code - graphify/tests/test_extract_cli.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_342
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_Community 397]]
- 7 edges to [[_COMMUNITY_Community 443]]
- 5 edges to [[_COMMUNITY_Community 398]]
- 1 edge to [[_COMMUNITY_Community 24]]
- 1 edge to [[_COMMUNITY_Community 343]]
- 1 edge to [[_COMMUNITY_Community 632]]

## Top bridge nodes
- [[_clear_backend_keys()]] - degree 14, connects to 4 communities
- [[test_poisoned_manifest_is_healed()]] - degree 9, connects to 4 communities
- [[test_failed_extra_is_retried_and_recovers()]] - degree 9, connects to 3 communities
- [[test_permanent_failure_does_not_wedge()]] - degree 8, connects to 3 communities
- [[test_success_and_unchanged_unaffected()]] - degree 6, connects to 3 communities