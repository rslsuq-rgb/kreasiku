---
type: community
cohesion: 0.04
members: 68
---

# Community 58

**Cohesion:** 0.04 - loosely connected
**Members:** 68 nodes

## Members
- [[2880 max_retry_depth was a Python-API kwarg only, so a `graphify extract`…]] - rationale - graphify/tests/test_llm_backends.py
- [[A project-local ..graphifyproviders.json is NOT loaded by default (F1). It…]] - rationale - graphify/tests/test_provider_registry.py
- [[A provider whose base_url uses a non-http(s) scheme is skipped on load (F1).]] - rationale - graphify/tests/test_provider_registry.py
- [[Append a chunk result into the running merged accumulator.]] - rationale - graphify/graphify/llm.py
- [[Build Bedrock inferenceConfig, honouring GRAPHIFY_LLM_TEMPERATURE. Bedrock's…]] - rationale - graphify/graphify/llm.py
- [[Built-in provider names are protected from being overridden.]] - rationale - graphify/tests/test_provider_registry.py
- [[Defang known chat-template  jailbreak control tokens in untrusted text.…]] - rationale - graphify/graphify/llm.py
- [[Every chat-template control token is defanged, not an enumerated few (3183).…]] - rationale - graphify/tests/test_injection_sentinel_coverage.py
- [[Every environment variable ``detect_backend()`` consults, in probe order.…]] - rationale - graphify/graphify/llm.py
- [[First non-empty variable in keys, for naming what selected a backend.]] - rationale - graphify/graphify/llm.py
- [[Full round-trip add → list → show → remove via providers.json.]] - rationale - graphify/tests/test_provider_registry.py
- [[How deep adaptive retry may bisect a truncated chunk. A chunk of N files can…]] - rationale - graphify/graphify/llm.py
- [[Indices of ``{`` that plausibly start an extraction fragment. Braces followed…]] - rationale - graphify/graphify/llm.py
- [[Map the output cap to the OpenAI-compatible field accepted by the backend.]] - rationale - graphify/graphify/llm.py
- [[Missing pricing field defaults to zero so estimate_cost doesn't blow up.]] - rationale - graphify/tests/test_provider_registry.py
- [[Opt-in (GRAPHIFY_DISABLE_THINKING) to send ``{thinking {type…]] - rationale - graphify/graphify/llm.py
- [[Recover the envelope when `claude -p` prefixes it with a diagnostic line. The…]] - rationale - graphify/graphify/llm.py
- [[Return accepted API-key environment variables for a backend.]] - rationale - graphify/graphify/llm.py
- [[Return the balanced ``{...}`` substring starting at ``start``, else None.]] - rationale - graphify/graphify/llm.py
- [[Structural safety check for a custom-provider base_url. A custom provider…]] - rationale - graphify/graphify/llm.py
- [[The report's repro run the detection tests with ambient keys set.]] - rationale - graphify/tests/test_backend_env_isolation.py
- [[True if host is, or resolves to, a link-local  cloud-metadata address.…]] - rationale - graphify/graphify/llm.py
- [[Whether `backend`'s configured model can see images. Ollama is special-cased…]] - rationale - graphify/graphify/llm.py
- [[With explicit opt-in the project-local file is honoured (F1).]] - rationale - graphify/tests/test_provider_registry.py
- [[Wrap one file's content in a labelled, hash-stamped untrusted-data block. The…]] - rationale - graphify/graphify/llm.py
- [[Yield candidate JSON texts from a model reply, most-likely first. Two sources,…]] - rationale - graphify/graphify/llm.py
- [[_backend_env_keys()]] - code - graphify/graphify/llm.py
- [[_backend_supports_vision()]] - code - graphify/graphify/llm.py
- [[_balanced_object()]] - code - graphify/graphify/llm.py
- [[_bedrock_inference_config()]] - code - graphify/graphify/llm.py
- [[_custom_providers_path()]] - code - graphify/graphify/llm.py
- [[_envelope_after_preamble()]] - code - graphify/graphify/llm.py
- [[_first_set_env()]] - code - graphify/graphify/llm.py
- [[_json_fragment_candidates()]] - code - graphify/graphify/llm.py
- [[_json_object_candidates()]] - code - graphify/graphify/llm.py
- [[_load_custom_providers()]] - code - graphify/graphify/llm.py
- [[_merge_into()]] - code - graphify/graphify/llm.py
- [[_neutralise_injection_sentinels()]] - code - graphify/graphify/llm.py
- [[_ollama_host_is_link_local_or_metadata()]] - code - graphify/graphify/llm.py
- [[_openai_max_tokens_kwarg()]] - code - graphify/graphify/llm.py
- [[_resolve_max_retry_depth()]] - code - graphify/graphify/llm.py
- [[_thinking_disabled_via_env()]] - code - graphify/graphify/llm.py
- [[_wrap_untrusted()]] - code - graphify/graphify/llm.py
- [[backend_detection_env_vars()]] - code - graphify/graphify/llm.py
- [[base64]] - concept
- [[llm.py]] - code - graphify/graphify/llm.py
- [[parametrize_97]] - code
- [[provider_base_url_ok rejects bad schemes and warns on plaintext-http egress…]] - rationale - graphify/tests/test_provider_registry.py
- [[provider_base_url_ok()]] - code - graphify/graphify/llm.py
- [[test_a_llama3_turn_forgery_cannot_reach_the_model_intact()]] - code - graphify/tests/test_injection_sentinel_coverage.py
- [[test_autouse_fixture_clears_the_backend_environment()]] - code - graphify/tests/test_backend_env_isolation.py
- [[test_capability_flags()]] - code - graphify/tests/test_image_vision.py
- [[test_case_variants_are_covered()]] - code - graphify/tests/test_injection_sentinel_coverage.py
- [[test_control_tokens_never_survive_intact()]] - code - graphify/tests/test_injection_sentinel_coverage.py
- [[test_custom_provider_add_list_show_remove()]] - code - graphify/tests/test_provider_registry.py
- [[test_custom_provider_cannot_shadow_builtin()]] - code - graphify/tests/test_provider_registry.py
- [[test_custom_provider_pricing_defaults_to_zero()]] - code - graphify/tests/test_provider_registry.py
- [[test_defanged_text_stays_human_readable()]] - code - graphify/tests/test_injection_sentinel_coverage.py
- [[test_detection_tests_pass_with_every_backend_variable_exported()]] - code - graphify/tests/test_backend_env_isolation.py
- [[test_env_list_covers_every_variable_detect_backend_reads()]] - code - graphify/tests/test_backend_env_isolation.py
- [[test_injection_sentinel_coverage.py]] - code - graphify/tests/test_injection_sentinel_coverage.py
- [[test_max_retry_depth_reads_the_env_var()]] - code - graphify/tests/test_llm_backends.py
- [[test_non_http_provider_base_url_rejected()]] - code - graphify/tests/test_provider_registry.py
- [[test_ordinary_code_and_prose_are_untouched()]] - code - graphify/tests/test_injection_sentinel_coverage.py
- [[test_project_local_providers_ignored_without_optin()]] - code - graphify/tests/test_provider_registry.py
- [[test_project_local_providers_loaded_with_optin()]] - code - graphify/tests/test_provider_registry.py
- [[test_provider_base_url_ok_scheme_and_warnings()]] - code - graphify/tests/test_provider_registry.py
- [[test_provider_registry.py]] - code - graphify/tests/test_provider_registry.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_58
SORT file.name ASC
```

## Connections to other communities
- 19 edges to [[_COMMUNITY_Community 42]]
- 17 edges to [[_COMMUNITY_Community 38]]
- 16 edges to [[_COMMUNITY_Community 17]]
- 15 edges to [[_COMMUNITY_Community 20]]
- 12 edges to [[_COMMUNITY_Community 39]]
- 8 edges to [[_COMMUNITY_Community 3]]
- 7 edges to [[_COMMUNITY_Community 72]]
- 7 edges to [[_COMMUNITY_Community 19]]
- 6 edges to [[_COMMUNITY_Community 78]]
- 5 edges to [[_COMMUNITY_Community 32]]
- 5 edges to [[_COMMUNITY_Community 80]]
- 5 edges to [[_COMMUNITY_Community 85]]
- 4 edges to [[_COMMUNITY_Community 131]]
- 3 edges to [[_COMMUNITY_Community 219]]
- 3 edges to [[_COMMUNITY_Community 240]]
- 3 edges to [[_COMMUNITY_Community 318]]
- 3 edges to [[_COMMUNITY_Community 338]]
- 3 edges to [[_COMMUNITY_Community 220]]
- 2 edges to [[_COMMUNITY_Community 438]]
- 2 edges to [[_COMMUNITY_Community 196]]
- 2 edges to [[_COMMUNITY_Community 216]]
- 2 edges to [[_COMMUNITY_Community 337]]
- 2 edges to [[_COMMUNITY_Community 528]]
- 2 edges to [[_COMMUNITY_Community 109]]
- 2 edges to [[_COMMUNITY_Community 115]]
- 2 edges to [[_COMMUNITY_Community 59]]
- 1 edge to [[_COMMUNITY_Community 52]]
- 1 edge to [[_COMMUNITY_Community 158]]
- 1 edge to [[_COMMUNITY_Community 21]]
- 1 edge to [[_COMMUNITY_Community 53]]
- 1 edge to [[_COMMUNITY_Community 606]]
- 1 edge to [[_COMMUNITY_Community 89]]
- 1 edge to [[_COMMUNITY_Community 107]]
- 1 edge to [[_COMMUNITY_Community 135]]
- 1 edge to [[_COMMUNITY_Community 234]]
- 1 edge to [[_COMMUNITY_Community 512]]
- 1 edge to [[_COMMUNITY_Community 514]]
- 1 edge to [[_COMMUNITY_Community 544]]
- 1 edge to [[_COMMUNITY_Community 88]]
- 1 edge to [[_COMMUNITY_Community 1]]
- 1 edge to [[_COMMUNITY_Community 583]]

## Top bridge nodes
- [[llm.py]] - degree 152, connects to 38 communities
- [[test_provider_registry.py]] - degree 12, connects to 4 communities
- [[_backend_env_keys()]] - degree 7, connects to 3 communities
- [[_custom_providers_path()]] - degree 6, connects to 3 communities
- [[_bedrock_inference_config()]] - degree 5, connects to 3 communities