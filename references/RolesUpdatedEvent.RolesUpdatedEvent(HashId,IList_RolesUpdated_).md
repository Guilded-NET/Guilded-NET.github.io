---
title: RolesUpdatedEvent(HashId, IList<RolesUpdated>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent') from the specified JSON properties."
---

## RolesUpdatedEvent(HashId, IList<RolesUpdated>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`RolesUpdatedEvent`](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')

Initializes a new instance of [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent') from the specified JSON properties.

```csharp
public RolesUpdatedEvent(Guilded.Base.HashId serverId, System.Collections.Generic.IList<Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated> memberRoleIds);
```
#### Parameters

<a name='Guilded.Base.Events.RolesUpdatedEvent.RolesUpdatedEvent(Guilded.Base.HashId,System.Collections.Generic.IList_Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated_).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the server where roles were updated

<a name='Guilded.Base.Events.RolesUpdatedEvent.RolesUpdatedEvent(Guilded.Base.HashId,System.Collections.Generic.IList_Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated_).memberRoleIds'></a>

`memberRoleIds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of roles and role holders

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')