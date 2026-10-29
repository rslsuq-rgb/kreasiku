---
type: community
cohesion: 0.08
members: 30
---

# Community 173

**Cohesion:** 0.08 - loosely connected
**Members:** 30 nodes

## Members
- [[A single `protocol` from docsprotocol.md and no protocol.md anywhere this…]] - rationale - graphify/tests/test_dedup.py
- [[Case R. A bare id that another node of its own file `references`, and that is…]] - rationale - graphify/tests/test_dedup.py
- [[Case R_labelswap. Same graph as above with the labels swapped, so the mention…]] - rationale - graphify/tests/test_dedup.py
- [[Case R_noedge. With no `references` edge there is no evidence the bare id is a…]] - rationale - graphify/tests/test_dedup.py
- [[Case R_toplevel, label-swap. The bare `protocol` from docsprotocol.md has the…]] - rationale - graphify/tests/test_dedup.py
- [[Case R_toplevel. protocol.md, docsprotocol.md and docsfirmwareprotocol.md…]] - rationale - graphify/tests/test_dedup.py
- [[KNOWN BOUNDARY, pinned so a change is noticed. docsprotocol.md emits…]] - rationale - graphify/tests/test_dedup.py
- [[Same input with no `references` edge the docs `protocol` still collapses into…]] - rationale - graphify/tests/test_dedup.py
- [[Same label-swap input with no `references` edge, so `_mentions` has no…]] - rationale - graphify/tests/test_dedup.py
- [[The mention evidence is gated to ids that are themselves a path slice.…]] - rationale - graphify/tests/test_dedup.py
- [[Unmarked document records retain the existing shared-entity behavior.]] - rationale - graphify/tests/test_dedup.py
- [[_assert_reference_lands_on_the_other_file()]] - code - graphify/tests/test_dedup.py
- [[_mention_edge()]] - code - graphify/tests/test_dedup.py
- [[_mention_node()]] - code - graphify/tests/test_dedup.py
- [[_protocol_reference_input()]] - code - graphify/tests/test_dedup.py
- [[_reference_to_top_level()]] - code - graphify/tests/test_dedup.py
- [[docsfirmwareprotocol.md mints its own `docs_firmware_protocol` plus a bare…]] - rationale - graphify/tests/test_dedup.py
- [[docsprotocol.md has its own `docs_protocol` page and a `protocol` it…]] - rationale - graphify/tests/test_dedup.py
- [[test_dropped_folder_doc_with_own_stem_entity_falls_back_to_collapse()]] - code - graphify/tests/test_dedup.py
- [[test_entity_described_in_two_documents_collapses_to_one_node()]] - code - graphify/tests/test_dedup.py
- [[test_genuine_reference_to_top_level_file_still_collapses()]] - code - graphify/tests/test_dedup.py
- [[test_lone_bare_id_without_a_top_level_file_is_left_to_build()]] - code - graphify/tests/test_dedup.py
- [[test_mention_without_an_edge_gives_the_same_two_documents()]] - code - graphify/tests/test_dedup.py
- [[test_reference_evidence_does_not_change_survivors_of_other_collisions()]] - code - graphify/tests/test_dedup.py
- [[test_reference_outcome_does_not_depend_on_label_length()]] - code - graphify/tests/test_dedup.py
- [[test_reference_to_another_file_does_not_become_a_second_document()]] - code - graphify/tests/test_dedup.py
- [[test_reference_to_top_level_file_without_an_edge_still_collapses()]] - code - graphify/tests/test_dedup.py
- [[test_top_level_file_keeps_its_own_node_next_to_dropped_folder_docs()]] - code - graphify/tests/test_dedup.py
- [[test_top_level_file_survives_whatever_the_labels_are()]] - code - graphify/tests/test_dedup.py
- [[test_top_level_file_survives_without_a_references_edge()]] - code - graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_173
SORT file.name ASC
```

## Connections to other communities
- 24 edges to [[_COMMUNITY_Community 15]]
- 5 edges to [[_COMMUNITY_Community 48]]

## Top bridge nodes
- [[test_entity_described_in_two_documents_collapses_to_one_node()]] - degree 5, connects to 2 communities
- [[test_reference_outcome_does_not_depend_on_label_length()]] - degree 5, connects to 2 communities
- [[test_reference_to_another_file_does_not_become_a_second_document()]] - degree 5, connects to 2 communities
- [[test_mention_without_an_edge_gives_the_same_two_documents()]] - degree 4, connects to 2 communities
- [[test_top_level_file_keeps_its_own_node_next_to_dropped_folder_docs()]] - degree 4, connects to 2 communities