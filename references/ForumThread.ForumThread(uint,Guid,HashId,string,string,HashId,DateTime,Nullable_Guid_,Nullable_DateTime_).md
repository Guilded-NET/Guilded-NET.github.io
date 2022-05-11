---
title: ForumThread(uint, Guid, HashId, string, string, HashId, DateTime, Nullable<Guid>, Nullable<DateTime>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread') from the specified JSON properties."
---

## ForumThread(uint, Guid, HashId, string, string, HashId, DateTime, Nullable<Guid>, Nullable<DateTime>) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ForumThread`](ForumThread 'Guilded.Base.Content.ForumThread')

Initializes a new instance of [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread') from the specified JSON properties.

```csharp
public ForumThread(uint id, Guid channelId, Guilded.Base.HashId serverId, string title, string content, Guilded.Base.HashId createdBy, System.DateTime createdAt, System.Nullable<Guid> createdByWebhookId=null, System.Nullable<System.DateTime> updatedAt=null);
```
#### Parameters

<a name='Guilded.Base.Content.ForumThread.ForumThread(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_).id'></a>

`id` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the forum thread

<a name='Guilded.Base.Content.ForumThread.ForumThread(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the forum thread is

<a name='Guilded.Base.Content.ForumThread.ForumThread(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the server where the forum thread is

<a name='Guilded.Base.Content.ForumThread.ForumThread(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the forum thread

<a name='Guilded.Base.Content.ForumThread.ForumThread(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text contents of the forum thread

<a name='Guilded.Base.Content.ForumThread.ForumThread(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') that created the forum thread

<a name='Guilded.Base.Content.ForumThread.ForumThread(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the forum thread was created

<a name='Guilded.Base.Content.ForumThread.ForumThread(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_).createdByWebhookId'></a>

`createdByWebhookId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the webhook that created the forum thread

<a name='Guilded.Base.Content.ForumThread.ForumThread(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,System.Nullable_System.DateTime_).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

the date when the forum thread was edited

### See Also
- [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread')