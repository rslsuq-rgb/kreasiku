---
type: community
cohesion: 0.14
members: 29
---

# Community 179

**Cohesion:** 0.14 - loosely connected
**Members:** 29 nodes

## Members
- [[3775 source_filesource_location are in _RICHNESS_IGNORED_KEYS, so a stub…]] - rationale - graphify/tests/test_dedup_survivor_richness.py
- [[A chunk-suffixed id never beats a clean one, however rich.]] - rationale - graphify/tests/test_dedup_survivor_richness.py
- [[Dedup survivor selection prefers content over ID shape (3372). `_pick_winner`…]] - rationale - graphify/tests/test_dedup_survivor_richness.py
- [[Even the right winner must not lose what only a loser carried.]] - rationale - graphify/tests/test_dedup_survivor_richness.py
- [[How much actual content a node carries, for survivor selection (3372). Counts…]] - rationale - graphify/graphify/dedup.py
- [[Old deterministic ordering survives for content-equal candidates.]] - rationale - graphify/tests/test_dedup_survivor_richness.py
- [[Pick the canonical survivor no chunk suffix, then real provenance, then richer…]] - rationale - graphify/graphify/dedup.py
- [[Review finding on 3775 source_location is richness-ignored too, so two…]] - rationale - graphify/tests/test_dedup_survivor_richness.py
- [[Review finding on PR 3786 a source_location with no source_file (a location…]] - rationale - graphify/tests/test_dedup_survivor_richness.py
- [[The issue's exact shape dedicated nested page vs shallow mention.]] - rationale - graphify/tests/test_dedup_survivor_richness.py
- [[The provenance tiebreak must only activate when the two sides disagree on…]] - rationale - graphify/tests/test_dedup_survivor_richness.py
- [[The source_location tiebreak must only activate when the two sides disagree on…]] - rationale - graphify/tests/test_dedup_survivor_richness.py
- [[_content_richness()]] - code - graphify/graphify/dedup.py
- [[_pick_winner()]] - code - graphify/graphify/dedup.py
- [[_rich()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[_score()]] - code - graphify/graphify/dedup.py
- [[_shallow()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_a_stray_source_location_without_a_source_file_grants_no_edge()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_chunk_suffix_still_dominates_richness()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_dedup_survivor_richness.py]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_edges_rewire_to_the_rich_survivor()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_equally_bare_nodes_keep_the_shorter_id_tiebreak()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_located_record_beats_a_richer_source_file_only_stub()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_loser_only_fields_are_folded_into_the_survivor()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_provenance_beats_a_richer_sourceless_stub()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_richer_node_survives_despite_longer_id()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_richness_counts_content_not_placement()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_richness_still_decides_when_both_sides_have_a_location()]] - code - graphify/tests/test_dedup_survivor_richness.py
- [[test_richness_still_decides_when_both_sides_have_provenance()]] - code - graphify/tests/test_dedup_survivor_richness.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_179
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Community 15]]
- 3 edges to [[_COMMUNITY_Community 63]]
- 1 edge to [[_COMMUNITY_Community 196]]

## Top bridge nodes
- [[_pick_winner()]] - degree 13, connects to 3 communities
- [[test_dedup_survivor_richness.py]] - degree 18, connects to 2 communities
- [[_content_richness()]] - degree 8, connects to 1 community
- [[test_loser_only_fields_are_folded_into_the_survivor()]] - degree 5, connects to 1 community
- [[test_richer_node_survives_despite_longer_id()]] - degree 5, connects to 1 community