---
title: MemberUpdatedEvent(HashId, Member)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent'). This is currently only used in deserialization.

```csharp
public MemberUpdatedEvent(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.Servers.Member userInfo);
```"
---

## MemberUpdatedEvent(HashId, Member) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`MemberUpdatedEvent`](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')

Creates a new instance of [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent'). This is currently only used in deserialization.

```csharp
public MemberUpdatedEvent(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.Servers.Member userInfo);
```
#### Parameters

<a name='Guilded.NET.Base.Events.MemberUpdatedEvent.MemberUpdatedEvent(Guilded.NET.Base.HashId,Guilded.NET.Base.Servers.Member).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the server where the member was updated

<a name='Guilded.NET.Base.Events.MemberUpdatedEvent.MemberUpdatedEvent(Guilded.NET.Base.HashId,Guilded.NET.Base.Servers.Member).userInfo'></a>

`userInfo` [Member](Member 'Guilded.NET.Base.Servers.Member')

The info about updated member