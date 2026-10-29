---
type: community
cohesion: 0.04
members: 84
---

# Community 46

**Cohesion:** 0.04 - loosely connected
**Members:** 84 nodes

## Members
- [[1236 follow-up the fix landed in to_obsidian but not to_canvas, so `graphify…]] - rationale - graphify/tests/test_obsidian_dangling_member.py
- [[A community whose members are all dangling should still not crash.]] - rationale - graphify/tests/test_obsidian_dangling_member.py
- [[A second identical export leaves each note's bytes and mtime untouched, yet the…]] - rationale - graphify/tests/test_export_idempotent_writes.py
- [[Atomically write ``text`` only if it differs from what is already on disk;…]] - rationale - graphify/graphify/paths.py
- [[Before the fix every non-Latin label collapsed to '_''__', so all notes shared…]] - rationale - graphify/tests/test_obsidian_unicode_tags.py
- [[Drop characters XML 1.0 cannot represent, leaving tabLFCR intact.…]] - rationale - graphify/graphify/export.py
- [[Escape a string for safe embedding in a Cypher single-quoted literal. Handles…]] - rationale - graphify/graphify/export.py
- [[Escape a value for safe embedding in a YAML double-quoted scalar (F-009). See…]] - rationale - graphify/graphify/export.py
- [[Export graph as an Obsidian vault - one .md file per node with wikilinks,…]] - rationale - graphify/graphify/export.py
- [[Export graph as an SVG file using matplotlib + spring layout. Lightweight and…]] - rationale - graphify/graphify/export.py
- [[Exporters must not rewrite a page whose content did not change (3060). An…]] - rationale - graphify/tests/test_export_idempotent_writes.py
- [[Graph_16]] - code
- [[Map each node_id to a unique note filename, appending a numeric suffix on…]] - rationale - graphify/graphify/export.py
- [[One node per community, so each community label reaches exactly one note.]] - rationale - graphify/tests/test_obsidian_unicode_tags.py
- [[Path_186]] - code
- [[Regression test for issue 1236 to_obsidian must not crash with KeyError when…]] - rationale - graphify/tests/test_obsidian_dangling_member.py
- [[Regression tests for issue 1094 to_obsidian  to_canvas must cap filenames to…]] - rationale - graphify/tests/test_obsidian_filename_cap.py
- [[Regression tests for issue 2862 community tags must survive non-ASCII labels,…]] - rationale - graphify/tests/test_obsidian_unicode_tags.py
- [[Regression to_canvas  Obsidian vault writes must be atomic (3282).]] - rationale - graphify/tests/test_atomic_canvas_export.py
- [[Remove edges whose source or target node is not in the node set. Returns the…]] - rationale - graphify/graphify/export.py
- [[Return the installed graphify version for graph provenance.]] - rationale - graphify/graphify/export.py
- [[Sanitise a value used in identifier position (node label  rel type). Cypher…]] - rationale - graphify/graphify/export.py
- [[Shared constantshelpers for the graphify exporters package. Symbols used by…]] - rationale - graphify/graphify/exporters/base.py
- [[Skipping identical writes must not skip real changes giving Database a new…]] - rationale - graphify/tests/test_export_idempotent_writes.py
- [[The end-of-run orphan sweep still removes a page the run did not produce (a…]] - rationale - graphify/tests/test_export_idempotent_writes.py
- [[Two real nodes plus a community that references a third, non-existent id.]] - rationale - graphify/tests/test_obsidian_dangling_member.py
- [[_community_name()]] - code - graphify/graphify/export.py
- [[_community_reach()]] - code - graphify/graphify/export.py
- [[_cypher_escape()]] - code - graphify/graphify/export.py
- [[_cypher_label()]] - code - graphify/graphify/export.py
- [[_dedup_node_filenames()]] - code - graphify/graphify/export.py
- [[_dominant_confidence()]] - code - graphify/graphify/export.py
- [[_graph()_17]] - code - graphify/tests/test_obsidian_filename_cap.py
- [[_graph()_18]] - code - graphify/tests/test_obsidian_unicode_tags.py
- [[_graph_with_dangling_member()]] - code - graphify/tests/test_obsidian_dangling_member.py
- [[_graphify_version()]] - code - graphify/graphify/export.py
- [[_graphml_safe()]] - code - graphify/graphify/export.py
- [[_max_name_bytes()]] - code - graphify/tests/test_obsidian_filename_cap.py
- [[_mtime()]] - code - graphify/tests/test_export_idempotent_writes.py
- [[_obsidian_tag()]] - code - graphify/graphify/export.py
- [[_owned_write()]] - code - graphify/graphify/export.py
- [[_strip_xml_illegal()]] - code - graphify/graphify/export.py
- [[_tags()]] - code - graphify/tests/test_obsidian_unicode_tags.py
- [[_tiny_graph()]] - code - graphify/tests/test_atomic_canvas_export.py
- [[_two_node_graph()]] - code - graphify/tests/test_export_idempotent_writes.py
- [[_yaml_str()_1]] - code - graphify/graphify/export.py
- [[`.obsidiangraph.json` colour groups were built from the raw label, so on a…]] - rationale - graphify/tests/test_obsidian_unicode_tags.py
- [[boom()_6]] - code - graphify/tests/test_atomic_canvas_export.py
- [[export.py]] - code - graphify/graphify/export.py
- [[exportersbase.py]] - code - graphify/graphify/exporters/base.py
- [[prune_dangling_edges()]] - code - graphify/graphify/export.py
- [[rSanitize a community name for use as an Obsidian tag. Obsidian tags accept…]] - rationale - graphify/graphify/export.py
- [[test_atomic_canvas_export.py]] - code - graphify/tests/test_atomic_canvas_export.py
- [[test_canvas_dangling_community_member_does_not_crash()]] - code - graphify/tests/test_obsidian_dangling_member.py
- [[test_canvas_long_label_file_ref_capped()]] - code - graphify/tests/test_obsidian_filename_cap.py
- [[test_degenerate_labels_stay_valid_tags()]] - code - graphify/tests/test_obsidian_unicode_tags.py
- [[test_distinct_non_latin_communities_get_distinct_tags()]] - code - graphify/tests/test_obsidian_unicode_tags.py
- [[test_export_idempotent_writes.py]] - code - graphify/tests/test_export_idempotent_writes.py
- [[test_graph_view_colour_group_matches_the_note_tag()]] - code - graphify/tests/test_obsidian_unicode_tags.py
- [[test_non_latin_labels_keep_their_letters()]] - code - graphify/tests/test_obsidian_unicode_tags.py
- [[test_obsidian_community_of_only_dangling_members()]] - code - graphify/tests/test_obsidian_dangling_member.py
- [[test_obsidian_dangling_community_member_does_not_crash()]] - code - graphify/tests/test_obsidian_dangling_member.py
- [[test_obsidian_dangling_member.py]] - code - graphify/tests/test_obsidian_dangling_member.py
- [[test_obsidian_distinct_long_labels_sharing_prefix_do_not_collide()]] - code - graphify/tests/test_obsidian_filename_cap.py
- [[test_obsidian_filename_cap.py]] - code - graphify/tests/test_obsidian_filename_cap.py
- [[test_obsidian_long_ascii_label_does_not_crash()]] - code - graphify/tests/test_obsidian_filename_cap.py
- [[test_obsidian_long_cjk_label_byte_cap()]] - code - graphify/tests/test_obsidian_filename_cap.py
- [[test_obsidian_unicode_tags.py]] - code - graphify/tests/test_obsidian_unicode_tags.py
- [[test_obsidian_wikilink_resolves_after_truncation()]] - code - graphify/tests/test_obsidian_filename_cap.py
- [[test_punctuation_is_still_stripped()]] - code - graphify/tests/test_obsidian_unicode_tags.py
- [[test_to_canvas_preserves_existing_when_replace_fails()]] - code - graphify/tests/test_atomic_canvas_export.py
- [[test_to_canvas_uses_atomic_replace()]] - code - graphify/tests/test_atomic_canvas_export.py
- [[test_to_obsidian_owned_writes_are_atomic()]] - code - graphify/tests/test_atomic_canvas_export.py
- [[test_to_obsidian_rerun_does_not_rewrite_unchanged_notes()]] - code - graphify/tests/test_export_idempotent_writes.py
- [[test_to_obsidian_rerun_still_rewrites_changed_notes()]] - code - graphify/tests/test_export_idempotent_writes.py
- [[test_to_wiki_rerun_does_not_rewrite_unchanged_articles()]] - code - graphify/tests/test_export_idempotent_writes.py
- [[test_to_wiki_rerun_sweeps_orphaned_relabelled_article()]] - code - graphify/tests/test_export_idempotent_writes.py
- [[test_write_text_atomic_if_changed_skips_identical()]] - code - graphify/tests/test_export_idempotent_writes.py
- [[to_cypher()]] - code - graphify/graphify/export.py
- [[to_obsidian()]] - code - graphify/graphify/export.py
- [[to_svg()]] - code - graphify/graphify/export.py
- [[tracking_replace()]] - code - graphify/tests/test_atomic_canvas_export.py
- [[tracking_replace()_1]] - code - graphify/tests/test_atomic_canvas_export.py
- [[write_text_atomic_if_changed()]] - code - graphify/graphify/paths.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_46
SORT file.name ASC
```

## Connections to other communities
- 39 edges to [[_COMMUNITY_Community 7]]
- 18 edges to [[_COMMUNITY_Community 23]]
- 11 edges to [[_COMMUNITY_Community 19]]
- 10 edges to [[_COMMUNITY_Community 123]]
- 10 edges to [[_COMMUNITY_Community 17]]
- 8 edges to [[_COMMUNITY_Community 256]]
- 7 edges to [[_COMMUNITY_Community 3]]
- 6 edges to [[_COMMUNITY_Community 101]]
- 6 edges to [[_COMMUNITY_Community 168]]
- 5 edges to [[_COMMUNITY_Community 115]]
- 3 edges to [[_COMMUNITY_Community 148]]
- 3 edges to [[_COMMUNITY_Community 264]]
- 3 edges to [[_COMMUNITY_Community 9]]
- 3 edges to [[_COMMUNITY_Community 47]]
- 2 edges to [[_COMMUNITY_Community 155]]
- 2 edges to [[_COMMUNITY_Community 302]]
- 2 edges to [[_COMMUNITY_Community 53]]
- 1 edge to [[_COMMUNITY_Community 128]]
- 1 edge to [[_COMMUNITY_Community 211]]
- 1 edge to [[_COMMUNITY_Community 215]]
- 1 edge to [[_COMMUNITY_Community 11]]
- 1 edge to [[_COMMUNITY_Community 18]]
- 1 edge to [[_COMMUNITY_Community 250]]
- 1 edge to [[_COMMUNITY_Community 281]]
- 1 edge to [[_COMMUNITY_Community 30]]
- 1 edge to [[_COMMUNITY_Community 340]]
- 1 edge to [[_COMMUNITY_Community 41]]
- 1 edge to [[_COMMUNITY_Community 92]]
- 1 edge to [[_COMMUNITY_Community 4]]
- 1 edge to [[_COMMUNITY_Community 312]]
- 1 edge to [[_COMMUNITY_Community 136]]
- 1 edge to [[_COMMUNITY_Community 103]]
- 1 edge to [[_COMMUNITY_Community 489]]
- 1 edge to [[_COMMUNITY_Community 59]]

## Top bridge nodes
- [[export.py]] - degree 80, connects to 32 communities
- [[to_obsidian()]] - degree 60, connects to 10 communities
- [[test_atomic_canvas_export.py]] - degree 13, connects to 6 communities
- [[to_svg()]] - degree 10, connects to 4 communities
- [[test_export_idempotent_writes.py]] - degree 17, connects to 3 communities