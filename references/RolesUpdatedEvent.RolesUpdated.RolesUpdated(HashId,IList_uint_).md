---
title: RolesUpdated(HashId, IList<uint>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated') from the specified JSON properties."
---

## RolesUpdated(HashId, IList<uint>) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`RolesUpdated`](RolesUpdatedEvent.RolesUpdated 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated')

Initializes a new instance of [RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated') from the specified JSON properties.

```csharp
public RolesUpdated(Guilded.Base.HashId userId, System.Collections.Generic.IList<uint> roleIds);
```
#### Parameters

<a name='Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RolesUpdated(Guilded.Base.HashId,System.Collections.Generic.IList_uint_).userId'></a>

`userId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') who holds the roles

<a name='Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RolesUpdated(Guilded.Base.HashId,System.Collections.Generic.IList_uint_).roleIds'></a>

`roleIds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of role identifiers user holds