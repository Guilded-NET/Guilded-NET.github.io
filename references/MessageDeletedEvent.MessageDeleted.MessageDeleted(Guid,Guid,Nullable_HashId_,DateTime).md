---
title: MessageDeleted(Guid, Guid, Nullable<HashId>, DateTime)
layout: references
section: references
tags:
  - references
  - constructor
description: "

The identifier of the message."
---

## MessageDeleted(Guid, Guid, Nullable<HashId>, DateTime) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageDeleted`](MessageDeletedEvent.MessageDeleted.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')

The identifier of the message.

```csharp
public MessageDeleted(Guid id, Guid channelId, System.Nullable<Guilded.Base.HashId> serverId, System.DateTime deletedAt);
```
#### Parameters

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.Nullable_Guilded.Base.HashId_,System.DateTime).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.Nullable_Guilded.Base.HashId_,System.DateTime).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the message was

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.Nullable_Guilded.Base.HashId_,System.DateTime).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the server where the message was

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.Nullable_Guilded.Base.HashId_,System.DateTime).deletedAt'></a>

`deletedAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the message was deleted