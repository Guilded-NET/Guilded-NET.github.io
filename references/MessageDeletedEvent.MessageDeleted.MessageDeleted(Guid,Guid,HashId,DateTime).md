---
title: MessageDeleted(Guid, Guid, HashId, DateTime)
layout: references
section: references
tags:
  - references
  - constructor
description: "

The identifier of the message.

```csharp
public MessageDeleted(System.Guid id, System.Guid channelId, Guilded.NET.Base.HashId serverId, System.DateTime deletedAt);
```"
---

## MessageDeleted(Guid, Guid, HashId, DateTime) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`MessageDeleted`](MessageDeletedEvent.MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')

The identifier of the message.

```csharp
public MessageDeleted(System.Guid id, System.Guid channelId, Guilded.NET.Base.HashId serverId, System.DateTime deletedAt);
```
#### Parameters

<a name='Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(System.Guid,System.Guid,Guilded.NET.Base.HashId,System.DateTime).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message

<a name='Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(System.Guid,System.Guid,Guilded.NET.Base.HashId,System.DateTime).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the message was

<a name='Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(System.Guid,System.Guid,Guilded.NET.Base.HashId,System.DateTime).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the server where the message was

<a name='Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(System.Guid,System.Guid,Guilded.NET.Base.HashId,System.DateTime).deletedAt'></a>

`deletedAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the message was deleted