---
title: TopicSummary(uint, Guid, HashId, string, HashId, DateTime, DateTime, Nullable<Guid>, Nullable<DateTime>, Mentions)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [TopicSummary](TopicSummary 'Guilded.Base.Content.TopicSummary') from the specified JSON properties."
---

## TopicSummary(uint, Guid, HashId, string, HashId, DateTime, DateTime, Nullable<Guid>, Nullable<DateTime>, Mentions) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`TopicSummary`](TopicSummary 'Guilded.Base.Content.TopicSummary')

Initializes a new instance of [TopicSummary](TopicSummary 'Guilded.Base.Content.TopicSummary') from the specified JSON properties.

```csharp
public TopicSummary(uint id, Guid channelId, Guilded.Base.HashId serverId, string title, Guilded.Base.HashId createdBy, System.DateTime createdAt, System.DateTime bumpedAt, System.Nullable<Guid> createdByWebhookId=null, System.Nullable<System.DateTime> updatedAt=null, Guilded.Base.Content.Mentions? mentions=null);
```
#### Parameters

<a name='Guilded.Base.Content.TopicSummary.TopicSummary(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).id'></a>

`id` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the forum thread

<a name='Guilded.Base.Content.TopicSummary.TopicSummary(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the forum thread is

<a name='Guilded.Base.Content.TopicSummary.TopicSummary(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the forum thread is

<a name='Guilded.Base.Content.TopicSummary.TopicSummary(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the forum thread

<a name='Guilded.Base.Content.TopicSummary.TopicSummary(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') that created the forum thread

<a name='Guilded.Base.Content.TopicSummary.TopicSummary(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date when the forum thread was created

<a name='Guilded.Base.Content.TopicSummary.TopicSummary(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).bumpedAt'></a>

`bumpedAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date when the [topic](TopicSummary 'Guilded.Base.Content.TopicSummary') was bumped

<a name='Guilded.Base.Content.TopicSummary.TopicSummary(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).createdByWebhookId'></a>

`createdByWebhookId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the webhook that created the forum thread

<a name='Guilded.Base.Content.TopicSummary.TopicSummary(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The date when the forum thread was edited

<a name='Guilded.Base.Content.TopicSummary.TopicSummary(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).mentions'></a>

`mentions` [Mentions](Mentions 'Guilded.Base.Content.Mentions')

The [mentions](TopicSummary.Mentions 'Guilded.Base.Content.TopicSummary.Mentions') found in [the content](Message.Content 'Guilded.Base.Content.Message.Content')

### See Also
- [TopicSummary](TopicSummary 'Guilded.Base.Content.TopicSummary')