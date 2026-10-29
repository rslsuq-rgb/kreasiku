---
source_file: "graphify/graphify/extractors/sql.py"
type: "code"
community: "Community 83"
location: "L453"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_83
---

# extract_sql()

## Connections
- [[Extract tables, views, functions, and relationships from .sql files via tree-…]] - `rationale_for` [EXTRACTED]
- [[Path_238]] - `references` [EXTRACTED]
- [[_add_edge()_5]] - `contains` [EXTRACTED]
- [[_add_node()_4]] - `contains` [EXTRACTED]
- [[_clean_ident()]] - `calls` [EXTRACTED]
- [[_collect_defined_names()]] - `contains` [EXTRACTED]
- [[_extract_sql_or_skip()]] - `calls` [INFERRED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_go_separators()]] - `calls` [EXTRACTED]
- [[_labels()_19]] - `calls` [INFERRED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[_norm_ident()]] - `calls` [EXTRACTED]
- [[_obj_name()]] - `contains` [EXTRACTED]
- [[_read()_4]] - `contains` [EXTRACTED]
- [[_read_source_bytes()]] - `calls` [EXTRACTED]
- [[_ref_stub()]] - `contains` [EXTRACTED]
- [[_routine_body_refs()]] - `calls` [EXTRACTED]
- [[_scan_sql()]] - `calls` [EXTRACTED]
- [[_walk_from_refs()]] - `contains` [EXTRACTED]
- [[extract.py]] - `indirect_call` [INFERRED]
- [[extractors__init__.py]] - `indirect_call` [INFERRED]
- [[introspect_postgres()]] - `calls` [INFERRED]
- [[re]] - `calls` [EXTRACTED]
- [[sql.py]] - `contains` [EXTRACTED]
- [[test_bracketed_and_plain_names_resolve_to_the_defined_table()]] - `calls` [INFERRED]
- [[test_column_named_go_is_not_a_separator()]] - `calls` [INFERRED]
- [[test_cte_inside_a_procedure_is_not_a_table()]] - `calls` [INFERRED]
- [[test_delete_from_is_a_write_not_a_read()]] - `calls` [INFERRED]
- [[test_escaped_bracket_and_double_quoted_labels()]] - `calls` [INFERRED]
- [[test_extract.py]] - `imports` [EXTRACTED]
- [[test_extract_sql_reports_load_failure_not_missing()]] - `calls` [EXTRACTED]
- [[test_function_and_view_reads_are_unchanged()]] - `calls` [INFERRED]
- [[test_go_separated_procedures_keep_their_own_tables()]] - `calls` [INFERRED]
- [[test_go_separated_view_reads_its_table()]] - `calls` [INFERRED]
- [[test_plain_procedure_reads_its_tables()]] - `calls` [INFERRED]
- [[test_procedure_write_makes_a_non_read_edge()]] - `calls` [INFERRED]
- [[test_second_table_keeps_its_own_line()]] - `calls` [INFERRED]
- [[test_select_into_writes_the_target_and_reads_the_source()]] - `calls` [INFERRED]
- [[test_sql_clean_trigger_links_to_its_on_table()]] - `calls` [INFERRED]
- [[test_sql_column_list_cte_is_not_read_as_a_table()]] - `calls` [INFERRED]
- [[test_sql_comment_openers_inside_string_literals_do_not_hide_ddl()]] - `calls` [INFERRED]
- [[test_sql_commented_ddl_is_not_fabricated_by_error_recovery()]] - `calls` [INFERRED]
- [[test_sql_commented_out_create_table_is_not_recovered()]] - `calls` [INFERRED]
- [[test_sql_create_index_emits_index_node_linked_to_its_table()]] - `calls` [INFERRED]
- [[test_sql_create_inside_a_bare_word_does_not_fabricate()]] - `calls` [INFERRED]
- [[test_sql_create_table_before_do_block_in_transaction()]] - `calls` [INFERRED]
- [[test_sql_cte_shadows_same_named_table_within_its_statement()]] - `calls` [INFERRED]
- [[test_sql_ddl_keywords_inside_delimited_identifiers_do_not_fabricate()]] - `calls` [INFERRED]
- [[test_sql_dynamic_sql_and_unclosed_comment_do_not_fabricate_routines()]] - `calls` [INFERRED]
- [[test_sql_escaped_closing_bracket_in_routine_name_is_consumed()]] - `calls` [INFERRED]
- [[test_sql_escaped_double_quote_in_routine_name_is_consumed()]] - `calls` [INFERRED]
- [[test_sql_mysql_current_timestamp_parens_table_is_recovered()]] - `calls` [INFERRED]
- [[test_sql_procedural_body_trigger_is_recovered()]] - `calls` [INFERRED]
- [[test_sql_recovery_sites_agree_on_the_captured_name()]] - `calls` [INFERRED]
- [[test_sql_subquery_cte_does_not_suppress_outer_real_table()]] - `calls` [INFERRED]
- [[test_sql_trigger_executing_an_undefined_function_fails_closed()]] - `calls` [INFERRED]
- [[test_sql_trigger_links_to_the_function_it_executes()]] - `calls` [INFERRED]
- [[test_sql_tsql_bracketed_procedure_is_recovered()]] - `calls` [INFERRED]
- [[test_sql_tsql_create_or_alter_procedure_is_recovered()]] - `calls` [INFERRED]
- [[test_sql_tsql_proc_shorthand_is_recovered()]] - `calls` [INFERRED]
- [[test_tables_in_comments_and_strings_are_not_read()]] - `calls` [INFERRED]
- [[test_temp_tables_and_table_variables_are_skipped()]] - `calls` [INFERRED]
- [[test_top_level_statements_outside_a_routine_get_no_owner()]] - `calls` [INFERRED]
- [[test_two_procedures_in_one_file_keep_their_own_tables()]] - `calls` [INFERRED]
- [[test_update_through_an_alias_writes_the_aliased_table()]] - `calls` [INFERRED]
- [[walk()_29]] - `contains` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/Community_83