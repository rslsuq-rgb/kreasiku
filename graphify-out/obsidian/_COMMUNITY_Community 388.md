---
type: community
cohesion: 0.14
members: 14
---

# Community 388

**Cohesion:** 0.14 - loosely connected
**Members:** 14 nodes

## Members
- [[Return True if this directory name looks like a venv, cache, or dep dir.]] - rationale - graphify/graphify/detect.py
- [[The gate itself name alone is not enough, and an unverifiable call (no parent)…]] - rationale - graphify/tests/test_detect.py
- [[True only when d has actual virtualenvconda structure on disk.…]] - rationale - graphify/graphify/detect.py
- [[True only when d holds evidence a build tool generated it. ``out`` is a…]] - rationale - graphify/graphify/detect.py
- [[True only when d holds files a coverage tool actually generated. ``coverage``…]] - rationale - graphify/graphify/detect.py
- [[True when a file ending in one of markers sits within max_depth directory…]] - rationale - graphify/graphify/detect.py
- [[Without a parent the path shape cannot be verified, so keep the dir.]] - rationale - graphify/tests/test_detect.py
- [[_has_build_output_markers()]] - code - graphify/graphify/detect.py
- [[_has_coverage_artifacts()]] - code - graphify/graphify/detect.py
- [[_has_msbuild_markers()]] - code - graphify/graphify/detect.py
- [[_has_venv_markers()]] - code - graphify/graphify/detect.py
- [[_is_noise_dir()]] - code - graphify/graphify/detect.py
- [[test_is_noise_dir_coverage_is_evidence_gated()]] - code - graphify/tests/test_detect.py
- [[test_is_noise_dir_graphify_skill_needs_parent()]] - code - graphify/tests/test_detect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_388
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Community 33]]
- 3 edges to [[_COMMUNITY_Community 2]]
- 3 edges to [[_COMMUNITY_Community 5]]
- 2 edges to [[_COMMUNITY_Community 484]]
- 1 edge to [[_COMMUNITY_Community 54]]
- 1 edge to [[_COMMUNITY_Community 1]]

## Top bridge nodes
- [[_is_noise_dir()]] - degree 17, connects to 6 communities
- [[_has_build_output_markers()]] - degree 3, connects to 1 community
- [[_has_coverage_artifacts()]] - degree 3, connects to 1 community
- [[_has_msbuild_markers()]] - degree 3, connects to 1 community
- [[_has_venv_markers()]] - degree 3, connects to 1 community