---
type: community
cohesion: 0.06
members: 36
---

# Community 131

**Cohesion:** 0.06 - loosely connected
**Members:** 36 nodes

## Members
- [[A hostname that RESOLVES to a link-local IP is blocked, not just literals (F3).]] - rationale - graphify/tests/test_ollama.py
- [[An incidental CLI on PATH must not outrank a key the user configured.]] - rationale - graphify/tests/test_llm_backends.py
- [[Custom providers appear after all built-ins in detect_backend() priority.]] - rationale - graphify/tests/test_provider_registry.py
- [[Empty the environment of every signal detect_backend() looks at.]] - rationale - graphify/tests/test_llm_backends.py
- [[Extraction's contract must be untouched no key still means no backend.…]] - rationale - graphify/tests/test_llm_backends.py
- [[Link-local  cloud-metadata Ollama targets fail closed (F3).]] - rationale - graphify/tests/test_ollama.py
- [[Loopback is silent; a general LAN host warns but is allowed (F3).]] - rationale - graphify/tests/test_ollama.py
- [[Return the name of whichever backend to use, or None. Thin wrapper over…]] - rationale - graphify/graphify/llm.py
- [[Tests for the Ollama backend additions in graphifyllm.py.]] - rationale - graphify/tests/test_ollama.py
- [[The one backend with no API key must not cost you your community names.…]] - rationale - graphify/tests/test_llm_backends.py
- [[Without a key AND without the CLI there is genuinely nothing to call.]] - rationale - graphify/tests/test_llm_backends.py
- [[_clear_every_backend_signal()]] - code - graphify/tests/test_llm_backends.py
- [[_fake_label()]] - code - graphify/tests/test_llm_backends.py
- [[detect_backend()]] - code - graphify/graphify/llm.py
- [[extract_files_direct with backend=ollama and no OLLAMA_API_KEY should use…]] - rationale - graphify/tests/test_ollama.py
- [[fake_getaddrinfo()]] - code - graphify/tests/test_ollama.py
- [[parametrize_10]] - code
- [[test_backend_detection_prefers_gemini()]] - code - graphify/tests/test_llm_backends.py
- [[test_claude_cli_never_shadows_a_configured_api_key()]] - code - graphify/tests/test_llm_backends.py
- [[test_detect_backend_azure_requires_endpoint_not_just_key()]] - code - graphify/tests/test_llm_backends.py
- [[test_detect_backend_claude_beats_ollama()]] - code - graphify/tests/test_ollama.py
- [[test_detect_backend_custom_provider_after_builtins()]] - code - graphify/tests/test_provider_registry.py
- [[test_detect_backend_kimi_beats_ollama()]] - code - graphify/tests/test_ollama.py
- [[test_detect_backend_none_without_envvars()]] - code - graphify/tests/test_ollama.py
- [[test_detect_backend_ollama()]] - code - graphify/tests/test_ollama.py
- [[test_detection_is_not_widened_by_the_labelling_fallback()]] - code - graphify/tests/test_llm_backends.py
- [[test_labelling_falls_back_to_the_claude_cli_instead_of_placeholders()]] - code - graphify/tests/test_llm_backends.py
- [[test_labelling_still_placeholders_when_no_cli_and_no_key()]] - code - graphify/tests/test_llm_backends.py
- [[test_ollama.py]] - code - graphify/tests/test_ollama.py
- [[test_ollama_alias_resolving_to_link_local_blocked()]] - code - graphify/tests/test_ollama.py
- [[test_ollama_api_key_sentinel()]] - code - graphify/tests/test_ollama.py
- [[test_ollama_blocks_link_local_and_metadata()]] - code - graphify/tests/test_ollama.py
- [[test_ollama_in_backends()]] - code - graphify/tests/test_ollama.py
- [[test_ollama_loopback_and_lan_do_not_raise()]] - code - graphify/tests/test_ollama.py
- [[test_ollama_warn_false_still_hard_blocks_but_stays_quiet()]] - code - graphify/tests/test_ollama.py
- [[warn=False suppresses the LAN warning but never the metadata hard-block (F3).]] - rationale - graphify/tests/test_ollama.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_131
SORT file.name ASC
```

## Connections to other communities
- 17 edges to [[_COMMUNITY_Community 20]]
- 8 edges to [[_COMMUNITY_Community 17]]
- 4 edges to [[_COMMUNITY_Community 58]]
- 3 edges to [[_COMMUNITY_Community 80]]
- 1 edge to [[_COMMUNITY_Community 59]]

## Top bridge nodes
- [[detect_backend()]] - degree 22, connects to 4 communities
- [[test_ollama.py]] - degree 16, connects to 4 communities
- [[test_labelling_falls_back_to_the_claude_cli_instead_of_placeholders()]] - degree 5, connects to 2 communities
- [[test_labelling_still_placeholders_when_no_cli_and_no_key()]] - degree 4, connects to 2 communities
- [[_clear_every_backend_signal()]] - degree 7, connects to 1 community