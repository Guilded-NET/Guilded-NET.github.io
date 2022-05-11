---
title: MessageDeleted(Guid, Guid, DateTime, Nullable<HashId>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

The identifier of the message."
---

## MessageDeleted(Guid, Guid, DateTime, Nullable<HashId>) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageDeleted`](MessageDeletedEvent.MessageDeleted 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')

The identifier of the message.

```csharp
public MessageDeleted(Guid id, Guid channelId, System.DateTime deletedAt, System.Nullable<Guilded.Base.HashId> serverId=null);
```
#### Parameters

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.DateTime,System.Nullable_Guilded.Base.HashId_).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.DateTime,System.Nullable_Guilded.Base.HashId_).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the message was

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.DateTime,System.Nullable_Guilded.Base.HashId_).deletedAt'></a>

`deletedAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the message was deleted

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,System.DateTime,System.Nullable_Guilded.Base.HashId_).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the server where the message was

### See Also
- [MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')