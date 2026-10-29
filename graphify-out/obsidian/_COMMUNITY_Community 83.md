---
type: community
cohesion: 0.09
members: 52
---

# Community 83

**Cohesion:** 0.09 - loosely connected
**Members:** 52 nodes

## Members
- [[4635 T-SQL bracket names, stored-procedure reads, and writes.]] - rationale - graphify/tests/test_sql_tsql_procedures.py
- [[(relation, table name as written, offset) for each table a masked routine body…]] - rationale - graphify/graphify/extractors/sql.py
- [[Compare names without delimiters, call parens or case.]] - rationale - graphify/tests/test_sql_tsql_procedures.py
- [[Display form of an object name T-SQL brackets removed, schema kept.…]] - rationale - graphify/graphify/extractors/sql.py
- [[Extract tables, views, functions, and relationships from .sql files via tree-…]] - rationale - graphify/graphify/extractors/sql.py
- [[Normalize a SQL identifier for name-based reference resolution. Splits on `.`,…]] - rationale - graphify/graphify/extractors/sql.py
- [[One name part without T-SQL brackets. The parser hands over `dbo.Orders` for…]] - rationale - graphify/graphify/extractors/sql.py
- [[Path_238]] - code
- [[Path_239]] - code
- [[_add_edge()_5]] - code - graphify/graphify/extractors/sql.py
- [[_add_node()_4]] - code - graphify/graphify/extractors/sql.py
- [[_clean_ident()]] - code - graphify/graphify/extractors/sql.py
- [[_clean_part()]] - code - graphify/graphify/extractors/sql.py
- [[_collect_defined_names()]] - code - graphify/graphify/extractors/sql.py
- [[_extract_project()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[_name()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[_norm_ident()]] - code - graphify/graphify/extractors/sql.py
- [[_obj_name()]] - code - graphify/graphify/extractors/sql.py
- [[_raw_labels()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[_read()_4]] - code - graphify/graphify/extractors/sql.py
- [[_ref_stub()]] - code - graphify/graphify/extractors/sql.py
- [[_routine_body_refs()]] - code - graphify/graphify/extractors/sql.py
- [[_triples()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[_usable()]] - code - graphify/graphify/extractors/sql.py
- [[_walk_from_refs()]] - code - graphify/graphify/extractors/sql.py
- [[_write()_63]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[extract_sql()]] - code - graphify/graphify/extractors/sql.py
- [[parametrize_111]] - code
- [[test_bracketed_and_plain_names_resolve_to_the_defined_table()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_cte_inside_a_procedure_is_not_a_table()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_delete_from_is_a_write_not_a_read()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_escaped_bracket_and_double_quoted_labels()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_function_and_view_reads_are_unchanged()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_go_separated_procedures_keep_their_own_tables()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_issue_repro_addpayment_write_relation()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_issue_repro_addpayment_writes_payments_and_orders()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_issue_repro_labels_are_bracket_free()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_issue_repro_labels_have_no_half_stripped_brackets()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_issue_repro_procedure_reads_its_tables()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_issue_repro_variables_aliases_and_columns_are_not_tables()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_issue_repro_view_still_reads_its_table()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_one_edge_per_routine_relation_and_table()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_plain_procedure_reads_its_tables()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_procedure_write_makes_a_non_read_edge()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_select_into_writes_the_target_and_reads_the_source()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_sql_tsql_procedures.py]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_tables_in_comments_and_strings_are_not_read()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_temp_tables_and_table_variables_are_skipped()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_top_level_statements_outside_a_routine_get_no_owner()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_two_procedures_in_one_file_keep_their_own_tables()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[test_update_through_an_alias_writes_the_aliased_table()]] - code - graphify/tests/test_sql_tsql_procedures.py
- [[walk()_29]] - code - graphify/graphify/extractors/sql.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_83
SORT file.name ASC
```

## Connections to other communities
- 23 edges to [[_COMMUNITY_Community 59]]
- 14 edges to [[_COMMUNITY_Community 3]]
- 4 edges to [[_COMMUNITY_Community 429]]
- 3 edges to [[_COMMUNITY_Community 1]]
- 2 edges to [[_COMMUNITY_Community 14]]
- 2 edges to [[_COMMUNITY_Community 317]]
- 1 edge to [[_COMMUNITY_Community 28]]
- 1 edge to [[_COMMUNITY_Community 619]]
- 1 edge to [[_COMMUNITY_Community 66]]
- 1 edge to [[_COMMUNITY_Community 73]]
- 1 edge to [[_COMMUNITY_Community 2]]

## Top bridge nodes
- [[extract_sql()]] - degree 66, connects to 9 communities
- [[test_sql_tsql_procedures.py]] - degree 32, connects to 4 communities
- [[_norm_ident()]] - degree 11, connects to 3 communities
- [[_extract_project()]] - degree 12, connects to 1 community
- [[walk()_29]] - degree 10, connects to 1 community