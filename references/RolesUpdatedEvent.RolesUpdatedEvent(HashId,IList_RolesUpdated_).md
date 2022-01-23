---
title: RolesUpdatedEvent(HashId, IList<RolesUpdated>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent'). This is currently only used in deserialization.

```csharp
public RolesUpdatedEvent(Guilded.NET.Base.HashId serverId, System.Collections.Generic.IList<Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated> memberRoleIds);
```"
---

## RolesUpdatedEvent(HashId, IList<RolesUpdated>) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`RolesUpdatedEvent`](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')

Creates a new instance of [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent'). This is currently only used in deserialization.

```csharp
public RolesUpdatedEvent(Guilded.NET.Base.HashId serverId, System.Collections.Generic.IList<Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated> memberRoleIds);
```
#### Parameters

<a name='Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdatedEvent(Guilded.NET.Base.HashId,System.Collections.Generic.IList_Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated_).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the server where roles were updated

<a name='Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdatedEvent(Guilded.NET.Base.HashId,System.Collections.Generic.IList_Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated_).memberRoleIds'></a>

`memberRoleIds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of roles and role holders