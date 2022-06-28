---
title: MemberRemovedEvent(HashId, HashId, bool, bool)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [MemberRemovedEvent](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent') from the specified JSON properties."
---

## MemberRemovedEvent(HashId, HashId, bool, bool) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MemberRemovedEvent`](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent')

Initializes a new instance of [MemberRemovedEvent](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent') from the specified JSON properties.

```csharp
public MemberRemovedEvent(Guilded.Base.HashId serverId, Guilded.Base.HashId userId, bool isKick=false, bool isBan=false);
```
#### Parameters

<a name='Guilded.Base.Events.MemberRemovedEvent.MemberRemovedEvent(Guilded.Base.HashId,Guilded.Base.HashId,bool,bool).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the member got kicked or left

<a name='Guilded.Base.Events.MemberRemovedEvent.MemberRemovedEvent(Guilded.Base.HashId,Guilded.Base.HashId,bool,bool).userId'></a>

`userId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the member who got kicked or left

<a name='Guilded.Base.Events.MemberRemovedEvent.MemberRemovedEvent(Guilded.Base.HashId,Guilded.Base.HashId,bool,bool).isKick'></a>

`isKick` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether [the user](User 'Guilded.Base.Users.User') has been kicked

<a name='Guilded.Base.Events.MemberRemovedEvent.MemberRemovedEvent(Guilded.Base.HashId,Guilded.Base.HashId,bool,bool).isBan'></a>

`isBan` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether [the user](User 'Guilded.Base.Users.User') has been banned

### See Also
- [MemberRemovedEvent](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent')