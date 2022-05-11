---
title: Message(Guid, Guid, Nullable<HashId>, string, IList<Guid>, IList<Embed>, bool, HashId, Nullable<Guid>, DateTime, Nullable<DateTime>, MessageType)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Message](Message.md 'Guilded.Base.Content.Message') from the specified JSON properties."
---

## Message(Guid, Guid, Nullable<HashId>, string, IList<Guid>, IList<Embed>, bool, HashId, Nullable<Guid>, DateTime, Nullable<DateTime>, MessageType) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message.md 'Guilded.Base.Content.Message')

Initializes a new instance of [Message](Message.md 'Guilded.Base.Content.Message') from the specified JSON properties.

```csharp
public Message(Guid id, Guid channelId, System.Nullable<Guilded.Base.HashId> serverId, string content, System.Collections.Generic.IList<Guid>? replyMessageIds, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>? embeds, bool isPrivate, Guilded.Base.HashId createdBy, System.Nullable<Guid> createdByWebhookId, System.DateTime createdAt, System.Nullable<System.DateTime> updatedAt, Guilded.Base.Content.MessageType type);
```
#### Parameters

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the message is

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the server where the message is

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text contents of the message

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).replyMessageIds'></a>

`replyMessageIds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

Gets the list of [messages](Message.md 'Guilded.Base.Content.Message') being replied to

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).embeds'></a>

`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed.md 'Guilded.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

Gets the list of [custom embeds](Embed.md 'Guilded.Base.Embeds.Embed') that this message contains

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether the reply is private

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).createdBy'></a>

`createdBy` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of [user](User.md 'Guilded.Base.Users.User') that created the message

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).createdByWebhookId'></a>

`createdByWebhookId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the webhook that created the message

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the message was created

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The date of when the message was edited

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,System.Nullable_Guilded.Base.HashId_,string,System.Collections.Generic.IList_Guid_,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,Guilded.Base.Content.MessageType).type'></a>

`type` [MessageType](MessageType.md 'Guilded.Base.Content.MessageType')

The type of the message