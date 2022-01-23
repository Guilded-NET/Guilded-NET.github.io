---
title: RolesUpdated(HashId, IList<uint>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated'). This is currently only used in deserialization.

```csharp
public RolesUpdated(Guilded.NET.Base.HashId userId, System.Collections.Generic.IList<uint> roleIds);
```"
---

## RolesUpdated(HashId, IList<uint>) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`RolesUpdated`](RolesUpdatedEvent.RolesUpdated 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated')

Creates a new instance of [RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated'). This is currently only used in deserialization.

```csharp
public RolesUpdated(Guilded.NET.Base.HashId userId, System.Collections.Generic.IList<uint> roleIds);
```
#### Parameters

<a name='Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.RolesUpdated(Guilded.NET.Base.HashId,System.Collections.Generic.IList_uint_).userId'></a>

`userId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the user who holds the roles

<a name='Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.RolesUpdated(Guilded.NET.Base.HashId,System.Collections.Generic.IList_uint_).roleIds'></a>

`roleIds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of role identifiers user holds