---
type: community
cohesion: 0.25
members: 8
---

# Community 539

**Cohesion:** 0.25 - loosely connected
**Members:** 8 nodes

## Members
- [[Call `IStore.Save()` from another file; return (calls, caller, IStore.Save,…]] - rationale - graphify/tests/test_csharp_member_calls.py
- [[_store_call()]] - code - graphify/tests/test_csharp_member_calls.py
- [[`((IStore)_obj).Save()` the cast names the receiver type (3797).]] - rationale - graphify/tests/test_csharp_member_calls.py
- [[`(_obj as IStore).Save()` types the receiver the same way (3797).]] - rationale - graphify/tests/test_csharp_member_calls.py
- [[`IStore Store = ...; Store.Save()` inside Editor `Store` is the property, so…]] - rationale - graphify/tests/test_csharp_member_calls.py
- [[test_as_cast_receiver_resolves_to_cast_type()]] - code - graphify/tests/test_csharp_member_calls.py
- [[test_cast_receiver_resolves_to_cast_type()]] - code - graphify/tests/test_csharp_member_calls.py
- [[test_property_receiver_shadows_same_named_type()]] - code - graphify/tests/test_csharp_member_calls.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_539
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Community 221]]
- 1 edge to [[_COMMUNITY_Community 393]]

## Top bridge nodes
- [[_store_call()]] - degree 7, connects to 2 communities
- [[test_as_cast_receiver_resolves_to_cast_type()]] - degree 3, connects to 1 community
- [[test_cast_receiver_resolves_to_cast_type()]] - degree 3, connects to 1 community
- [[test_property_receiver_shadows_same_named_type()]] - degree 3, connects to 1 community