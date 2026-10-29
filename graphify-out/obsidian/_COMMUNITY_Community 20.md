---
type: community
cohesion: 0.03
members: 129
---

# Community 20

**Cohesion:** 0.03 - loosely connected
**Members:** 129 nodes

## Members
- [[dot-__init__()_15]] - code - graphify/tests/test_llm_backends.py
- [[Both extraction paths open their source_file rule with the same heading. Only…]] - rationale - graphify/tests/test_llm_backends.py
- [[Both extraction paths share the same hyperedge contract (the '3 or more nodes ……]] - rationale - graphify/tests/test_llm_backends.py
- [[Build a minimal stand-in for an `openai` SDK ChatCompletion response.]] - rationale - graphify/tests/test_llm_backends.py
- [[Call any OpenAI-compatible API (Kimi, OpenAI, etc.) and return parsed JSON.]] - rationale - graphify/graphify/llm.py
- [[Detect a successful HTTP response that yielded no usable extraction. A local…]] - rationale - graphify/graphify/llm.py
- [[Exception]] - code
- [[Extract semantic nodesedges from a list of files using the given backend.…]] - rationale - graphify/graphify/llm.py
- [[Inject a stub `openai` module so `_call_openai_compat` can run without the real…]] - rationale - graphify/tests/test_llm_backends.py
- [[Inject a stub openai module with AzureOpenAI so _call_azure and _azure_client…]] - rationale - graphify/tests/test_llm_backends.py
- [[Keep a developer's ambient seed from changing request-shape tests.]] - rationale - graphify/tests/test_llm_backends.py
- [[Like _install_fake_openai but records kwargs passed to create().]] - rationale - graphify/tests/test_llm_backends.py
- [[Re-shape a fake ChatCompletion as Ollama's apichat reply.]] - rationale - graphify/tests/test_llm_backends.py
- [[Resolve the Ollama base URL. Honors an explicit OLLAMA_BASE_URL first…]] - rationale - graphify/graphify/llm.py
- [[Resolve the temperature to send, honouring GRAPHIFY_LLM_TEMPERATURE. Precedence…]] - rationale - graphify/graphify/llm.py
- [[Return a minimal claude -p --output-format json envelope.]] - rationale - graphify/tests/test_llm_backends.py
- [[Return the first configured API key for backend, or an empty string.]] - rationale - graphify/graphify/llm.py
- [[Return the opt-in seed for built-in Ollama requests, if configured.]] - rationale - graphify/graphify/llm.py
- [[Same 1442 fix for the OpenAI-compatible branch of _call_llm.]] - rationale - graphify/tests/test_llm_backends.py
- [[Tests for direct semantic-extraction backend selection.]] - rationale - graphify/tests/test_llm_backends.py
- [[The OpenAI-compatible client (kimiopenaigeminideepseekollama) is built with…]] - rationale - graphify/tests/test_llm_backends.py
- [[The native-backend prompt must request hyperedges, like the skill's extraction-…]] - rationale - graphify/tests/test_llm_backends.py
- [[The native-backend prompt must say what source_file means. Without it the model…]] - rationale - graphify/tests/test_llm_backends.py
- [[True if `model` is a reasoning model that rejects an explicit temperature.…]] - rationale - graphify/graphify/llm.py
- [[Verify that _EXTRACTION_SYSTEM requests rationale and includes it in the schema.]] - rationale - graphify/tests/test_llm_backends.py
- [[_FakeAPIStatusError]] - code - graphify/tests/test_llm_backends.py
- [[__init__()_6]] - code - graphify/tests/test_llm_backends.py
- [[__init__()_7]] - code - graphify/tests/test_llm_backends.py
- [[__init__()_8]] - code - graphify/tests/test_llm_backends.py
- [[__init__()_9]] - code - graphify/tests/test_llm_backends.py
- [[__init__()_10]] - code - graphify/tests/test_llm_backends.py
- [[__init__()_11]] - code - graphify/tests/test_llm_backends.py
- [[__init__()_12]] - code - graphify/tests/test_llm_backends.py
- [[_backend_base_url()]] - code - graphify/tests/test_llm_backends.py
- [[_call_openai_compat()]] - code - graphify/graphify/llm.py
- [[_clear_backend_env()]] - code - graphify/tests/test_llm_backends.py
- [[_clear_ollama_seed_env()]] - code - graphify/tests/test_llm_backends.py
- [[_fake_openai_response()]] - code - graphify/tests/test_llm_backends.py
- [[_get_backend_api_key()]] - code - graphify/graphify/llm.py
- [[_install_capturing_openai()]] - code - graphify/tests/test_llm_backends.py
- [[_install_fake_azure_openai()]] - code - graphify/tests/test_llm_backends.py
- [[_install_fake_openai()]] - code - graphify/tests/test_llm_backends.py
- [[_make_cli_envelope()]] - code - graphify/tests/test_llm_backends.py
- [[_model_requires_default_temperature()]] - code - graphify/graphify/llm.py
- [[_native_ollama_reply()]] - code - graphify/tests/test_llm_backends.py
- [[_resolve_ollama_base_url()]] - code - graphify/graphify/llm.py
- [[_resolve_ollama_seed()]] - code - graphify/graphify/llm.py
- [[_resolve_temperature()]] - code - graphify/graphify/llm.py
- [[_response_is_hollow()]] - code - graphify/graphify/llm.py
- [[create()]] - code - graphify/tests/test_llm_backends.py
- [[create()_1]] - code - graphify/tests/test_llm_backends.py
- [[create()_2]] - code - graphify/tests/test_llm_backends.py
- [[create()_3]] - code - graphify/tests/test_llm_backends.py
- [[create()_4]] - code - graphify/tests/test_llm_backends.py
- [[extract_files_direct()]] - code - graphify/graphify/llm.py
- [[fixture_4]] - code
- [[parametrize_26]] - code
- [[post()]] - code - graphify/tests/test_llm_backends.py
- [[post()_1]] - code - graphify/tests/test_llm_backends.py
- [[subprocess.run must be called with errors='replace' so non-UTF-8 output bytes…]] - rationale - graphify/tests/test_llm_backends.py
- [[test_base_url_defaults_without_env()]] - code - graphify/tests/test_llm_backends.py
- [[test_base_url_env_overrides()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_azure_uses_correct_client_params_and_max_completion_tokens()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_claude_cli_passes_errors_replace_to_subprocess()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_llm_ollama_forwards_seed()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_llm_openai_compat_client_built_with_timeout_and_retries()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_explicit_extra_body_skips_ollama_auto_derive()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_extra_body_wins_over_moonshot_default()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_keeps_real_truncation_as_length()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_labels_empty_content_hollow()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_labels_none_content_hollow()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_labels_unparseable_json_hollow()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_preserves_real_finish_reason()]] - code - graphify/tests/test_llm_backends.py
- [[test_call_openai_compat_uses_explicit_extra_body()]] - code - graphify/tests/test_llm_backends.py
- [[test_corpus_parallel_oversized_markdown_does_not_crash_on_fileslice()]] - code - graphify/tests/test_llm_backends.py
- [[test_custom_ollama_url_provider_ignores_seed_and_preserves_extra_body()]] - code - graphify/tests/test_llm_backends.py
- [[test_deepseek_labeling_uses_max_tokens_request_field()]] - code - graphify/tests/test_llm_backends.py
- [[test_deepseek_thinking_disabled_via_env()]] - code - graphify/tests/test_llm_backends.py
- [[test_deepseek_thinking_on_by_default()]] - code - graphify/tests/test_llm_backends.py
- [[test_deepseek_uses_max_tokens_request_field()]] - code - graphify/tests/test_llm_backends.py
- [[test_detect_backend_returns_azure_when_both_vars_set()]] - code - graphify/tests/test_llm_backends.py
- [[test_explicit_extra_body_wins_over_thinking_env()]] - code - graphify/tests/test_llm_backends.py
- [[test_extract_corpus_parallel_accepts_str_and_mixed_paths()]] - code - graphify/tests/test_llm_backends.py
- [[test_extract_files_direct_accepts_str_paths()]] - code - graphify/tests/test_llm_backends.py
- [[test_extract_files_direct_routes_gemini_through_openai_compat()]] - code - graphify/tests/test_llm_backends.py
- [[test_gemini_accepts_gemini_api_key()]] - code - graphify/tests/test_llm_backends.py
- [[test_gemini_accepts_google_api_key()]] - code - graphify/tests/test_llm_backends.py
- [[test_gemini_model_can_be_overridden_by_env()]] - code - graphify/tests/test_llm_backends.py
- [[test_invalid_ollama_seed_fails_before_client_construction()]] - code - graphify/tests/test_llm_backends.py
- [[test_llm_backends.py]] - code - graphify/tests/test_llm_backends.py
- [[test_missing_gemini_key_names_both_supported_env_vars()]] - code - graphify/tests/test_llm_backends.py
- [[test_model_requires_default_temperature_false_for_normal_models()]] - code - graphify/tests/test_llm_backends.py
- [[test_model_requires_default_temperature_true_for_reasoning_models()]] - code - graphify/tests/test_llm_backends.py
- [[test_native_extraction_prompt_matches_skill_spec_on_hyperedges()]] - code - graphify/tests/test_llm_backends.py
- [[test_native_extraction_prompt_pins_source_file_to_the_dispatched_file()]] - code - graphify/tests/test_llm_backends.py
- [[test_native_extraction_prompt_requests_hyperedges()]] - code - graphify/tests/test_llm_backends.py
- [[test_native_extraction_prompt_requests_rationale()]] - code - graphify/tests/test_llm_backends.py
- [[test_native_extraction_prompt_shares_skill_spec_source_file_rule_heading()]] - code - graphify/tests/test_llm_backends.py
- [[test_non_ollama_backend_gets_no_num_ctx_extra_body()]] - code - graphify/tests/test_llm_backends.py
- [[test_non_ollama_backend_ignores_invalid_ollama_seed()]] - code - graphify/tests/test_llm_backends.py
- [[test_ollama_extra_body_sets_num_ctx_and_keep_alive()]] - code - graphify/tests/test_llm_backends.py
- [[test_ollama_num_ctx_env_override()]] - code - graphify/tests/test_llm_backends.py
- [[test_ollama_num_ctx_scales_with_small_token_budget()]] - code - graphify/tests/test_llm_backends.py
- [[test_ollama_seed_disabled_omits_request_key()]] - code - graphify/tests/test_llm_backends.py
- [[test_ollama_seed_is_top_level_and_preserves_extra_body()]] - code - graphify/tests/test_llm_backends.py
- [[test_ollama_thinking_disabled_via_env_survives_num_ctx()]] - code - graphify/tests/test_llm_backends.py
- [[test_openai_backend_detected()]] - code - graphify/tests/test_llm_backends.py
- [[test_openai_compat_backends_resolve_full_output_cap()]] - code - graphify/tests/test_llm_backends.py
- [[test_openai_compat_client_built_with_retries()]] - code - graphify/tests/test_llm_backends.py
- [[test_openai_compat_env_var_temperature_applied()]] - code - graphify/tests/test_llm_backends.py
- [[test_openai_compat_forces_non_streaming_response()]] - code - graphify/tests/test_llm_backends.py
- [[test_openai_compat_omits_temperature_for_o3_model()]] - code - graphify/tests/test_llm_backends.py
- [[test_openai_compat_sends_temperature_for_normal_model()]] - code - graphify/tests/test_llm_backends.py
- [[test_resolve_ollama_base_url_normalizes_host_without_scheme()]] - code - graphify/tests/test_llm_backends.py
- [[test_resolve_ollama_base_url_prefers_base_url()]] - code - graphify/tests/test_llm_backends.py
- [[test_resolve_ollama_base_url_preserves_normalized_host()]] - code - graphify/tests/test_llm_backends.py
- [[test_resolve_ollama_base_url_returns_default_without_env()]] - code - graphify/tests/test_llm_backends.py
- [[test_resolve_ollama_seed()]] - code - graphify/tests/test_llm_backends.py
- [[test_resolve_temperature_default_for_normal_model()]] - code - graphify/tests/test_llm_backends.py
- [[test_resolve_temperature_env_var_invalid_falls_back()]] - code - graphify/tests/test_llm_backends.py
- [[test_resolve_temperature_env_var_none_omits()]] - code - graphify/tests/test_llm_backends.py
- [[test_resolve_temperature_env_var_numeric_overrides()]] - code - graphify/tests/test_llm_backends.py
- [[test_resolve_temperature_omitted_for_reasoning_model()]] - code - graphify/tests/test_llm_backends.py
- [[test_response_is_hollow_accepts_real_extraction()]] - code - graphify/tests/test_llm_backends.py
- [[test_response_is_hollow_flags_empty_string()]] - code - graphify/tests/test_llm_backends.py
- [[test_response_is_hollow_flags_none_content()]] - code - graphify/tests/test_llm_backends.py
- [[test_response_is_hollow_flags_parsed_but_no_nodes_or_edges()]] - code - graphify/tests/test_llm_backends.py
- [[test_response_is_hollow_flags_whitespace_only()]] - code - graphify/tests/test_llm_backends.py
- [[test_str_path_entry_points_handle_edge_cases()]] - code - graphify/tests/test_llm_backends.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_20
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_Community 78]]
- 17 edges to [[_COMMUNITY_Community 131]]
- 16 edges to [[_COMMUNITY_Community 39]]
- 15 edges to [[_COMMUNITY_Community 58]]
- 14 edges to [[_COMMUNITY_Community 42]]
- 8 edges to [[_COMMUNITY_Community 17]]
- 7 edges to [[_COMMUNITY_Community 32]]
- 5 edges to [[_COMMUNITY_Community 38]]
- 4 edges to [[_COMMUNITY_Community 158]]
- 4 edges to [[_COMMUNITY_Community 544]]
- 4 edges to [[_COMMUNITY_Community 19]]
- 3 edges to [[_COMMUNITY_Community 318]]
- 2 edges to [[_COMMUNITY_Community 196]]
- 2 edges to [[_COMMUNITY_Community 338]]
- 2 edges to [[_COMMUNITY_Community 234]]
- 2 edges to [[_COMMUNITY_Community 240]]
- 1 edge to [[_COMMUNITY_Community 337]]
- 1 edge to [[_COMMUNITY_Community 72]]
- 1 edge to [[_COMMUNITY_Community 583]]
- 1 edge to [[_COMMUNITY_Community 219]]
- 1 edge to [[_COMMUNITY_Community 537]]
- 1 edge to [[_COMMUNITY_Community 63]]
- 1 edge to [[_COMMUNITY_Community 109]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 4]]
- 1 edge to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 3]]

## Top bridge nodes
- [[test_llm_backends.py]] - degree 122, connects to 13 communities
- [[extract_files_direct()]] - degree 43, connects to 13 communities
- [[_call_openai_compat()]] - degree 49, connects to 11 communities
- [[_get_backend_api_key()]] - degree 17, connects to 6 communities
- [[_resolve_ollama_base_url()]] - degree 9, connects to 3 communities