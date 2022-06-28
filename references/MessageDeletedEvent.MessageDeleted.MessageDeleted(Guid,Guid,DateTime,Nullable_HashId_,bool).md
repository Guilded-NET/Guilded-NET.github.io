---
title: MessageDeleted(Guid, Guid, DateTime, Nullable<HashId>, bool)
layout: references
section: references
tags:
  - references
  - constructor
description: "

The identifier of the message."
---

## MessageDeleted(Guid, Guid, DateTime, Nullable<HashId>, bool) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageDeleted`](MessageDeletedEvent.MessageDeleted 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')

The identifier of the message.

```csharp
public MessageDeleted(Guid id, Guid channelId, System.DateTime deletedAt, System.Nullable<Guilded.Base.HashId> serverId=null, bool isPrivate=false);
```
#### Parameters

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.DateTime,System.Nullable_Guilded.Base.HashId_,bool).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.DateTime,System.Nullable_Guilded.Base.HashId_,bool).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the message was

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.DateTime,System.Nullable_Guilded.Base.HashId_,bool).deletedAt'></a>

`deletedAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the message was deleted

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.DateTime,System.Nullable_Guilded.Base.HashId_,bool).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the message was

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.DateTime,System.Nullable_Guilded.Base.HashId_,bool).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether the deleted message was [private mention](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate') or a [private reply](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate')

### See Also
- [MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')