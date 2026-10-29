---
type: community
cohesion: 0.04
members: 90
---

# Community 42

**Cohesion:** 0.04 - loosely connected
**Members:** 90 nodes

## Members
- [[dot-b64()]] - code - graphify/graphify/llm.py
- [[dot-bedrock_format()]] - code - graphify/graphify/llm.py
- [[A corpus with one raster image, one svg (text), and one markdown doc.]] - rationale - graphify/tests/test_image_vision.py
- [[A single image destined for a vision request. `raw` is None when the image is…]] - rationale - graphify/graphify/llm.py
- [[Build `_ImageRef`s for raster images. `read_bytes=True` (base64 backends) loads…]] - rationale - graphify/graphify/llm.py
- [[Build the Anthropic `messages.content` value (str, or block list with images).]] - rationale - graphify/graphify/llm.py
- [[Build the Bedrock Converse user content list (raw bytes, not base64).]] - rationale - graphify/graphify/llm.py
- [[Build the OpenAI-compatible user `content` value (str, or part list with…]] - rationale - graphify/graphify/llm.py
- [[Call AWS Bedrock via boto3 Converse API using the standard AWS credential chain.]] - rationale - graphify/graphify/llm.py
- [[Call Anthropic Claude directly (not via OpenAI compat layer).]] - rationale - graphify/graphify/llm.py
- [[Default retry count is generous (so 429s are absorbed, 1523); env overrides.]] - rationale - graphify/tests/test_llm_backends.py
- [[End-to-end a reasoning-model response must not look hollow.]] - rationale - graphify/tests/test_image_vision.py
- [[Extended-thinking models must not crash on content0 being ThinkingBlock.]] - rationale - graphify/tests/test_image_vision.py
- [[How many times the provider SDK retries a transient error (notably HTTP 429…]] - rationale - graphify/graphify/llm.py
- [[Label a hollow response so adaptive retry retries it, without bisecting. Hollow…]] - rationale - graphify/graphify/llm.py
- [[Locks the first-wins semantics graphify's claude calls return a single JSON…]] - rationale - graphify/tests/test_image_vision.py
- [[Return refs with pixel data dropped (for non-vision backends).]] - rationale - graphify/graphify/llm.py
- [[Return the first Anthropic content block that carries text. Current Claude…]] - rationale - graphify/graphify/llm.py
- [[Return the first Converse content block that carries text. Converse returns…]] - rationale - graphify/graphify/llm.py
- [[Send an ollama request to apichat. Returns None when the server has no native…]] - rationale - graphify/graphify/llm.py
- [[Tests for image-vision support across the direct extraction backends. Covers…]] - rationale - graphify/tests/test_image_vision.py
- [[Text block listing the images so the model emits one node per image. Always…]] - rationale - graphify/graphify/llm.py
- [[_ImageRef]] - code - graphify/graphify/llm.py
- [[__init__()_17]] - code - graphify/tests/test_image_vision.py
- [[_anthropic_content()]] - code - graphify/graphify/llm.py
- [[_anthropic_response_text()]] - code - graphify/graphify/llm.py
- [[_bedrock_content()]] - code - graphify/graphify/llm.py
- [[_bedrock_resp()]] - code - graphify/tests/test_image_vision.py
- [[_bedrock_response_text()]] - code - graphify/graphify/llm.py
- [[_build_image_refs()]] - code - graphify/graphify/llm.py
- [[_call_bedrock()]] - code - graphify/graphify/llm.py
- [[_call_claude()]] - code - graphify/graphify/llm.py
- [[_call_ollama_native()]] - code - graphify/graphify/llm.py
- [[_fake()]] - code - graphify/tests/test_image_vision.py
- [[_fake_anthropic()]] - code - graphify/tests/test_image_vision.py
- [[_fake_boto3()]] - code - graphify/tests/test_image_vision.py
- [[_fake_openai()]] - code - graphify/tests/test_image_vision.py
- [[_image_notes()]] - code - graphify/graphify/llm.py
- [[_make_client()]] - code - graphify/tests/test_image_vision.py
- [[_make_corpus()_2]] - code - graphify/tests/test_image_vision.py
- [[_mark_hollow()]] - code - graphify/graphify/llm.py
- [[_openai_content()]] - code - graphify/graphify/llm.py
- [[_resolve_max_retries()]] - code - graphify/graphify/llm.py
- [[_strip_pixels()]] - code - graphify/graphify/llm.py
- [[_with_image_notes()]] - code - graphify/graphify/llm.py
- [[converse()_1]] - code - graphify/tests/test_image_vision.py
- [[converse()_2]] - code - graphify/tests/test_image_vision.py
- [[create()_9]] - code - graphify/tests/test_image_vision.py
- [[create()_10]] - code - graphify/tests/test_image_vision.py
- [[create()_11]] - code - graphify/tests/test_image_vision.py
- [[fake_run()_7]] - code - graphify/tests/test_image_vision.py
- [[fake_run()_8]] - code - graphify/tests/test_image_vision.py
- [[parametrize_72]] - code
- [[test_anthropic_content_has_base64_block()]] - code - graphify/tests/test_image_vision.py
- [[test_anthropic_response_text_falls_back_without_text()]] - code - graphify/tests/test_image_vision.py
- [[test_anthropic_response_text_legacy_block_without_type()]] - code - graphify/tests/test_image_vision.py
- [[test_anthropic_response_text_returns_first_text_block_not_concatenation()]] - code - graphify/tests/test_image_vision.py
- [[test_anthropic_response_text_single_text_block_unchanged()]] - code - graphify/tests/test_image_vision.py
- [[test_anthropic_response_text_skips_leading_thinking_block()]] - code - graphify/tests/test_image_vision.py
- [[test_bedrock_content_uses_raw_bytes()]] - code - graphify/tests/test_image_vision.py
- [[test_bedrock_response_text_falls_back_without_text()]] - code - graphify/tests/test_image_vision.py
- [[test_bedrock_response_text_single_text_block_unchanged()]] - code - graphify/tests/test_image_vision.py
- [[test_bedrock_response_text_skips_leading_reasoning_block()]] - code - graphify/tests/test_image_vision.py
- [[test_bedrock_response_text_skips_non_text_leading_blocks()]] - code - graphify/tests/test_image_vision.py
- [[test_bedrock_response_text_tolerates_malformed_blocks()]] - code - graphify/tests/test_image_vision.py
- [[test_build_image_refs_drops_oversized()]] - code - graphify/tests/test_image_vision.py
- [[test_build_image_refs_sets_rel_media_and_bytes()]] - code - graphify/tests/test_image_vision.py
- [[test_build_image_refs_skips_out_of_root_symlink()]] - code - graphify/tests/test_image_vision.py
- [[test_builders_fall_back_to_string_without_pixels()]] - code - graphify/tests/test_image_vision.py
- [[test_call_bedrock_api_timeout_defaults_when_unset()]] - code - graphify/tests/test_image_vision.py
- [[test_call_bedrock_honors_api_timeout()]] - code - graphify/tests/test_image_vision.py
- [[test_call_bedrock_parses_reasoning_model_response()]] - code - graphify/tests/test_image_vision.py
- [[test_call_bedrock_sends_raw_image_bytes()]] - code - graphify/tests/test_image_vision.py
- [[test_call_claude_parses_thinking_model_response()]] - code - graphify/tests/test_image_vision.py
- [[test_call_claude_sends_image_block()]] - code - graphify/tests/test_image_vision.py
- [[test_call_openai_compat_sends_image_url()]] - code - graphify/tests/test_image_vision.py
- [[test_call_openai_compat_text_only_without_images()]] - code - graphify/tests/test_image_vision.py
- [[test_claude_cli_adds_dir_and_read_instruction()]] - code - graphify/tests/test_image_vision.py
- [[test_claude_cli_passes_oversized_image_by_path()]] - code - graphify/tests/test_image_vision.py
- [[test_extract_files_direct_gates_pixels_by_capability()]] - code - graphify/tests/test_image_vision.py
- [[test_image_token_estimate_is_flat()]] - code - graphify/tests/test_image_vision.py
- [[test_image_vision.py]] - code - graphify/tests/test_image_vision.py
- [[test_no_images_is_byte_identical()]] - code - graphify/tests/test_image_vision.py
- [[test_non_pdf_still_read_as_plain_text()]] - code - graphify/tests/test_image_vision.py
- [[test_openai_content_has_data_uri()]] - code - graphify/tests/test_image_vision.py
- [[test_partition_splits_raster_from_text()]] - code - graphify/tests/test_image_vision.py
- [[test_path_backend_skips_byte_read_and_size_cap()]] - code - graphify/tests/test_image_vision.py
- [[test_pdf_routed_through_pypdf_not_readtext()]] - code - graphify/tests/test_image_vision.py
- [[test_read_files_skips_out_of_root_symlink()]] - code - graphify/tests/test_image_vision.py
- [[test_resolve_max_retries_default_and_env()]] - code - graphify/tests/test_llm_backends.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_42
SORT file.name ASC
```

## Connections to other communities
- 19 edges to [[_COMMUNITY_Community 58]]
- 14 edges to [[_COMMUNITY_Community 20]]
- 11 edges to [[_COMMUNITY_Community 39]]
- 7 edges to [[_COMMUNITY_Community 38]]
- 5 edges to [[_COMMUNITY_Community 318]]
- 3 edges to [[_COMMUNITY_Community 19]]
- 2 edges to [[_COMMUNITY_Community 32]]
- 2 edges to [[_COMMUNITY_Community 72]]
- 2 edges to [[_COMMUNITY_Community 85]]
- 1 edge to [[_COMMUNITY_Community 234]]
- 1 edge to [[_COMMUNITY_Community 337]]
- 1 edge to [[_COMMUNITY_Community 36]]
- 1 edge to [[_COMMUNITY_Community 5]]
- 1 edge to [[_COMMUNITY_Community 115]]
- 1 edge to [[_COMMUNITY_Community 59]]

## Top bridge nodes
- [[test_image_vision.py]] - degree 51, connects to 7 communities
- [[_call_claude()]] - degree 15, connects to 7 communities
- [[_call_bedrock()]] - degree 17, connects to 6 communities
- [[_ImageRef]] - degree 17, connects to 4 communities
- [[_mark_hollow()]] - degree 8, connects to 4 communities