---
type: community
cohesion: 0.05
members: 74
---

# Community 55

**Cohesion:** 0.05 - loosely connected
**Members:** 74 nodes

## Members
- [[API module - exposes the document pipeline over HTTP. Thin layer over parser,…]] - rationale - graphify/worked/example/raw/api.py
- [[Accept a list of file paths, run the full pipeline on each, and return a…]] - rationale - graphify/worked/example/raw/api.py
- [[Add keyword index and cross-references to a validated document.]] - rationale - graphify/worked/example/raw/processor.py
- [[Clean up text fields using the processor.]] - rationale - graphify/worked/example/raw/validator.py
- [[Delete a document by ID.]] - rationale - graphify/worked/example/raw/api.py
- [[Enrich a validated document and persist it. Returns the record ID.]] - rationale - graphify/worked/example/raw/processor.py
- [[Exception_2]] - code
- [[Extract title, sections, and links from markdown.]] - rationale - graphify/worked/example/raw/parser.py
- [[Fetch a document by ID and return it.]] - rationale - graphify/worked/example/raw/api.py
- [[Fetch a single document by ID.]] - rationale - graphify/worked/example/raw/storage.py
- [[Full pipeline parse, validate, save. Returns the saved record ID.]] - rationale - graphify/worked/example/raw/parser.py
- [[List all document IDs in storage.]] - rationale - graphify/worked/example/raw/api.py
- [[Load the full document index from disk.]] - rationale - graphify/worked/example/raw/storage.py
- [[Look up the index and return IDs of related documents by keyword overlap.]] - rationale - graphify/worked/example/raw/processor.py
- [[Lowercase, strip extra whitespace, remove control characters.]] - rationale - graphify/worked/example/raw/processor.py
- [[Parse a JSON document into a structured dict.]] - rationale - graphify/worked/example/raw/parser.py
- [[Parse a list of files and return their record IDs.]] - rationale - graphify/worked/example/raw/parser.py
- [[Parser module - reads raw input documents and converts them into a structured…]] - rationale - graphify/worked/example/raw/parser.py
- [[Persist the index to disk.]] - rationale - graphify/worked/example/raw/storage.py
- [[Processor module - transforms validated documents into enriched records ready…]] - rationale - graphify/worked/example/raw/processor.py
- [[Pull non-stopword tokens from text, deduplicated.]] - rationale - graphify/worked/example/raw/processor.py
- [[Raise if any required field is missing.]] - rationale - graphify/worked/example/raw/validator.py
- [[Raise if the format is not in the allowed list.]] - rationale - graphify/worked/example/raw/validator.py
- [[Re-enrich a document to pick up new cross-references.]] - rationale - graphify/worked/example/raw/api.py
- [[Re-enrich all records in the index. Returns count of records updated.]] - rationale - graphify/worked/example/raw/processor.py
- [[Read a file from disk and return a structured document.]] - rationale - graphify/worked/example/raw/parser.py
- [[Remove a document and its index entry. Returns True if it existed.]] - rationale - graphify/worked/example/raw/storage.py
- [[Return all record IDs currently in storage.]] - rationale - graphify/worked/example/raw/storage.py
- [[Run all validation checks on a parsed document. Raises ValidationError on…]] - rationale - graphify/worked/example/raw/validator.py
- [[Simple keyword search over the index. Returns documents whose keyword list…]] - rationale - graphify/worked/example/raw/api.py
- [[Split plaintext into paragraphs.]] - rationale - graphify/worked/example/raw/parser.py
- [[Storage module - persists documents to disk and maintains the search index. All…]] - rationale - graphify/worked/example/raw/storage.py
- [[Validate a list of documents. Returns (valid_docs, errors).]] - rationale - graphify/worked/example/raw/validator.py
- [[ValidationError]] - code - graphify/worked/example/raw/validator.py
- [[Validator module - checks that parsed documents meet schema requirements before…]] - rationale - graphify/worked/example/raw/validator.py
- [[Write a parsed document to storage. Returns the assigned record ID.]] - rationale - graphify/worked/example/raw/storage.py
- [[Write an enriched document to storage, updating the index with keywords.]] - rationale - graphify/worked/example/raw/storage.py
- [[_ensure_storage()]] - code - graphify/worked/example/raw/storage.py
- [[api.py]] - code - graphify/worked/example/raw/api.py
- [[batch_parse()]] - code - graphify/worked/example/raw/parser.py
- [[check_format()]] - code - graphify/worked/example/raw/validator.py
- [[check_required_fields()]] - code - graphify/worked/example/raw/validator.py
- [[delete_record()]] - code - graphify/worked/example/raw/storage.py
- [[enrich_document()]] - code - graphify/worked/example/raw/processor.py
- [[extract_keywords()]] - code - graphify/worked/example/raw/processor.py
- [[find_cross_references()]] - code - graphify/worked/example/raw/processor.py
- [[handle_delete()]] - code - graphify/worked/example/raw/api.py
- [[handle_enrich()]] - code - graphify/worked/example/raw/api.py
- [[handle_get()]] - code - graphify/worked/example/raw/api.py
- [[handle_list()]] - code - graphify/worked/example/raw/api.py
- [[handle_search()]] - code - graphify/worked/example/raw/api.py
- [[handle_upload()]] - code - graphify/worked/example/raw/api.py
- [[list_records()]] - code - graphify/worked/example/raw/storage.py
- [[load_index()]] - code - graphify/worked/example/raw/storage.py
- [[load_record()]] - code - graphify/worked/example/raw/storage.py
- [[normalize_fields()]] - code - graphify/worked/example/raw/validator.py
- [[normalize_text()]] - code - graphify/worked/example/raw/processor.py
- [[parse_and_save()]] - code - graphify/worked/example/raw/parser.py
- [[parse_file()]] - code - graphify/worked/example/raw/parser.py
- [[parse_json()]] - code - graphify/worked/example/raw/parser.py
- [[parse_markdown()]] - code - graphify/worked/example/raw/parser.py
- [[parse_plaintext()]] - code - graphify/worked/example/raw/parser.py
- [[parser.py]] - code - graphify/worked/example/raw/parser.py
- [[process_and_save()]] - code - graphify/worked/example/raw/processor.py
- [[processor.py]] - code - graphify/worked/example/raw/processor.py
- [[reprocess_all()]] - code - graphify/worked/example/raw/processor.py
- [[save_index()]] - code - graphify/worked/example/raw/storage.py
- [[save_parsed()]] - code - graphify/worked/example/raw/storage.py
- [[save_processed()]] - code - graphify/worked/example/raw/storage.py
- [[storage.py]] - code - graphify/worked/example/raw/storage.py
- [[uuid]] - concept
- [[validate_batch()]] - code - graphify/worked/example/raw/validator.py
- [[validate_document()]] - code - graphify/worked/example/raw/validator.py
- [[validator.py]] - code - graphify/worked/example/raw/validator.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_55
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_Community 115]]
- 4 edges to [[_COMMUNITY_Community 3]]
- 3 edges to [[_COMMUNITY_Community 37]]
- 1 edge to [[_COMMUNITY_Community 255]]
- 1 edge to [[_COMMUNITY_Community 297]]

## Top bridge nodes
- [[storage.py]] - degree 15, connects to 2 communities
- [[uuid]] - degree 5, connects to 2 communities
- [[processor.py]] - degree 13, connects to 1 community
- [[load_index()]] - degree 13, connects to 1 community
- [[save_parsed()]] - degree 9, connects to 1 community