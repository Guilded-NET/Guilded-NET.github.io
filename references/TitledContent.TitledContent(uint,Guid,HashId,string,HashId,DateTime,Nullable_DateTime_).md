---
title: TitledContent(uint, Guid, HashId, string, HashId, DateTime, Nullable<DateTime>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent') from the specified JSON properties."
---

## TitledContent(uint, Guid, HashId, string, HashId, DateTime, Nullable<DateTime>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`TitledContent`](TitledContent 'Guilded.Base.Content.TitledContent')

Initializes a new instance of [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent') from the specified JSON properties.

```csharp
public TitledContent(uint id, Guid channelId, Guilded.Base.HashId serverId, string title, Guilded.Base.HashId createdBy, System.DateTime createdAt, System.Nullable<System.DateTime> updatedAt=null);
```
#### Parameters

<a name='Guilded.Base.Content.TitledContent.TitledContent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_).id'></a>

`id` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent')

<a name='Guilded.Base.Content.TitledContent.TitledContent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the channel content are

<a name='Guilded.Base.Content.TitledContent.TitledContent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the channel content are

<a name='Guilded.Base.Content.TitledContent.TitledContent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent')

<a name='Guilded.Base.Content.TitledContent.TitledContent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')

<a name='Guilded.Base.Content.TitledContent.TitledContent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created

<a name='Guilded.Base.Content.TitledContent.TitledContent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The date when [the titled content](TitledContent 'Guilded.Base.Content.TitledContent') were updated

### See Also
- [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent')