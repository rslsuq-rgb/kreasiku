---
source_file: "graphify/graphify/llm.py"
type: "code"
community: "Community 20"
location: "L1547"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_20
---

# _call_openai_compat()

## Connections
- [[Call any OpenAI-compatible API (Kimi, OpenAI, etc.) and return parsed JSON.]] - `rationale_for` [EXTRACTED]
- [[_ImageRef]] - `references` [EXTRACTED]
- [[_backend_pkg_hint()]] - `calls` [EXTRACTED]
- [[_call()]] - `calls` [EXTRACTED]
- [[_call_ollama_native()]] - `calls` [EXTRACTED]
- [[_extraction_system()]] - `calls` [EXTRACTED]
- [[_mark_hollow()]] - `calls` [EXTRACTED]
- [[_ollama_request_extras()]] - `calls` [EXTRACTED]
- [[_openai_content()]] - `calls` [EXTRACTED]
- [[_openai_max_tokens_kwarg()]] - `calls` [EXTRACTED]
- [[_parse_llm_json()]] - `calls` [EXTRACTED]
- [[_resolve_api_timeout()]] - `calls` [EXTRACTED]
- [[_resolve_max_retries()]] - `calls` [EXTRACTED]
- [[_resolve_ollama_seed()]] - `calls` [EXTRACTED]
- [[_thinking_disabled_via_env()]] - `calls` [EXTRACTED]
- [[extract_files_direct()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_api_timeout_is_passed_to_client()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_explicit_extra_body_skips_ollama_auto_derive()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_extra_body_wins_over_moonshot_default()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_keeps_real_truncation_as_length()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_labels_empty_content_hollow()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_labels_none_content_hollow()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_labels_unparseable_json_hollow()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_preserves_real_finish_reason()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_sends_image_url()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_text_only_without_images()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_uses_explicit_extra_body()]] - `calls` [EXTRACTED]
- [[test_cloud_backend_keeps_default_retries()]] - `calls` [EXTRACTED]
- [[test_deepseek_thinking_disabled_via_env()]] - `calls` [EXTRACTED]
- [[test_deepseek_thinking_on_by_default()]] - `calls` [EXTRACTED]
- [[test_explicit_extra_body_wins_over_thinking_env()]] - `calls` [EXTRACTED]
- [[test_extraction_call_sizes_for_its_system_prompt()]] - `calls` [EXTRACTED]
- [[test_invalid_ollama_seed_fails_before_client_construction()]] - `calls` [EXTRACTED]
- [[test_non_ollama_backend_gets_no_num_ctx_extra_body()]] - `calls` [EXTRACTED]
- [[test_non_ollama_backend_ignores_invalid_ollama_seed()]] - `calls` [EXTRACTED]
- [[test_ollama_defaults_to_zero_sdk_retries()]] - `calls` [EXTRACTED]
- [[test_ollama_extra_body_sets_num_ctx_and_keep_alive()]] - `calls` [EXTRACTED]
- [[test_ollama_honors_explicit_max_retries()]] - `calls` [EXTRACTED]
- [[test_ollama_num_ctx_env_override()]] - `calls` [EXTRACTED]
- [[test_ollama_num_ctx_scales_with_small_token_budget()]] - `calls` [EXTRACTED]
- [[test_ollama_seed_disabled_omits_request_key()]] - `calls` [EXTRACTED]
- [[test_ollama_seed_is_top_level_and_preserves_extra_body()]] - `calls` [EXTRACTED]
- [[test_ollama_thinking_disabled_via_env_survives_num_ctx()]] - `calls` [EXTRACTED]
- [[test_openai_compat_client_built_with_retries()]] - `calls` [EXTRACTED]
- [[test_openai_compat_forces_non_streaming_response()]] - `calls` [EXTRACTED]
- [[test_openai_compat_null_token_counts_coerced_to_zero()]] - `calls` [EXTRACTED]
- [[test_other_backends_never_use_native_chat()]] - `calls` [EXTRACTED]
- [[test_whole_prompt_reaches_the_model()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Community_20