---
title: Message(Guid, Guid, HashId, DateTime, MessageType, Nullable<HashId>, IList<Guid>, string, IList<Embed>, bool, bool, Mentions, Nullable<Guid>, Nullable<DateTime>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Message](Message 'Guilded.Base.Content.Message') from the specified JSON properties."
---

## Message(Guid, Guid, HashId, DateTime, MessageType, Nullable<HashId>, IList<Guid>, string, IList<Embed>, bool, bool, Mentions, Nullable<Guid>, Nullable<DateTime>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message 'Guilded.Base.Content.Message')

Initializes a new instance of [Message](Message 'Guilded.Base.Content.Message') from the specified JSON properties.

```csharp
public Message(Guid id, Guid channelId, Guilded.Base.HashId createdBy, System.DateTime createdAt, Guilded.Base.Content.MessageType type, System.Nullable<Guilded.Base.HashId> serverId=null, System.Collections.Generic.IList<Guid>? replyMessageIds=null, string? content=null, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>? embeds=null, bool isPrivate=false, bool isSilent=false, Guilded.Base.Content.Mentions? mentions=null, System.Nullable<Guid> createdByWebhookId=null, System.Nullable<System.DateTime> updatedAt=null);
```
#### Parameters

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the message is

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') that created the message

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the message was created

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).type'></a>

`type` [MessageType](MessageType 'Guilded.Base.Content.MessageType')

The type of the message

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the message is

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).replyMessageIds'></a>

`replyMessageIds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

Gets the list of [messages](Message 'Guilded.Base.Content.Message') being replied to

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text contents of the message

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).embeds'></a>

`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed 'Guilded.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

Gets the list of [custom embeds](Embed 'Guilded.Base.Embeds.Embed') that this message contains

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is private

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).isSilent'></a>

`isSilent` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is silent

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).mentions'></a>

`mentions` [Mentions](Mentions 'Guilded.Base.Content.Mentions')

[The mentions](Message.Mentions 'Guilded.Base.Content.Message.Mentions') found in [the content](Message.Content 'Guilded.Base.Content.Message.Content')

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).createdByWebhookId'></a>

`createdByWebhookId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the message

<a name='Guilded.Base.Content.Message.Message(Guid,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.Content.MessageType,System.Nullable_Guilded.Base.HashId_,System.Collections.Generic.IList_Guid_,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_,bool,bool,Guilded.Base.Content.Mentions,System.Nullable_Guid_,System.Nullable_System.DateTime_).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

the date when the message was edited

### See Also
- [Message](Message 'Guilded.Base.Content.Message')