---
title: Message(Guid, Guid, Nullable<HashId>, string, IList<Guid>, bool, HashId, Nullable<Guid>, DateTime, MessageType)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [Message](Message 'Guilded.NET.Base.Content.Message') with provided details.

```csharp
public Message(System.Guid id, System.Guid channelId, System.Nullable<Guilded.NET.Base.HashId> serverId, string content, System.Collections.Generic.IList<System.Guid>? replyMessageIds, bool isPrivate, Guilded.NET.Base.HashId createdBy, System.Nullable<System.Guid> createdByWebhookId, System.DateTime createdAt, Guilded.NET.Base.Content.MessageType type);
```"
---

## Message(Guid, Guid, Nullable<HashId>, string, IList<Guid>, bool, HashId, Nullable<Guid>, DateTime, MessageType) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Message`](Message 'Guilded.NET.Base.Content.Message')

Creates a new instance of [Message](Message 'Guilded.NET.Base.Content.Message') with provided details.

```csharp
public Message(System.Guid id, System.Guid channelId, System.Nullable<Guilded.NET.Base.HashId> serverId, string content, System.Collections.Generic.IList<System.Guid>? replyMessageIds, bool isPrivate, Guilded.NET.Base.HashId createdBy, System.Nullable<System.Guid> createdByWebhookId, System.DateTime createdAt, Guilded.NET.Base.Content.MessageType type);
```
#### Parameters

<a name='Guilded.NET.Base.Content.Message.Message(System.Guid,System.Guid,System.Nullable_Guilded.NET.Base.HashId_,string,System.Collections.Generic.IList_System.Guid_,bool,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime,Guilded.NET.Base.Content.MessageType).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message

<a name='Guilded.NET.Base.Content.Message.Message(System.Guid,System.Guid,System.Nullable_Guilded.NET.Base.HashId_,string,System.Collections.Generic.IList_System.Guid_,bool,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime,Guilded.NET.Base.Content.MessageType).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the message is

<a name='Guilded.NET.Base.Content.Message.Message(System.Guid,System.Guid,System.Nullable_Guilded.NET.Base.HashId_,string,System.Collections.Generic.IList_System.Guid_,bool,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime,Guilded.NET.Base.Content.MessageType).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.NET.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the server where the message is

<a name='Guilded.NET.Base.Content.Message.Message(System.Guid,System.Guid,System.Nullable_Guilded.NET.Base.HashId_,string,System.Collections.Generic.IList_System.Guid_,bool,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime,Guilded.NET.Base.Content.MessageType).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the message

<a name='Guilded.NET.Base.Content.Message.Message(System.Guid,System.Guid,System.Nullable_Guilded.NET.Base.HashId_,string,System.Collections.Generic.IList_System.Guid_,bool,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime,Guilded.NET.Base.Content.MessageType).replyMessageIds'></a>

`replyMessageIds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of messages being replied to

<a name='Guilded.NET.Base.Content.Message.Message(System.Guid,System.Guid,System.Nullable_Guilded.NET.Base.HashId_,string,System.Collections.Generic.IList_System.Guid_,bool,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime,Guilded.NET.Base.Content.MessageType).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether the reply is private

<a name='Guilded.NET.Base.Content.Message.Message(System.Guid,System.Guid,System.Nullable_Guilded.NET.Base.HashId_,string,System.Collections.Generic.IList_System.Guid_,bool,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime,Guilded.NET.Base.Content.MessageType).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the user creator of the message

<a name='Guilded.NET.Base.Content.Message.Message(System.Guid,System.Guid,System.Nullable_Guilded.NET.Base.HashId_,string,System.Collections.Generic.IList_System.Guid_,bool,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime,Guilded.NET.Base.Content.MessageType).createdByWebhookId'></a>

`createdByWebhookId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the webhook creator of the message

<a name='Guilded.NET.Base.Content.Message.Message(System.Guid,System.Guid,System.Nullable_Guilded.NET.Base.HashId_,string,System.Collections.Generic.IList_System.Guid_,bool,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime,Guilded.NET.Base.Content.MessageType).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the message was created

<a name='Guilded.NET.Base.Content.Message.Message(System.Guid,System.Guid,System.Nullable_Guilded.NET.Base.HashId_,string,System.Collections.Generic.IList_System.Guid_,bool,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime,Guilded.NET.Base.Content.MessageType).type'></a>

`type` [MessageType](MessageType 'Guilded.NET.Base.Content.MessageType')

The type of the message