---
title: ChannelContent(TId, Guid, TServer, HashId, DateTime)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') from the specified JSON properties."
---

## ChannelContent(TId, Guid, TServer, HashId, DateTime) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`ChannelContent<TId,TServer>`](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')

Initializes a new instance of [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') from the specified JSON properties.

```csharp
protected ChannelContent(TId id, Guid channelId, TServer serverId, Guilded.Base.HashId createdBy, System.DateTime createdAt);
```
#### Parameters

<a name='Guilded.Base.Content.ChannelContent_TId,TServer_.ChannelContent(TId,Guid,TServer,Guilded.Base.HashId,System.DateTime).id'></a>

`id` [TId](ChannelContent_TId,TServer_#Guilded.Base.Content.ChannelContent_TId,TServer_.TId 'Guilded.Base.Content.ChannelContent<TId,TServer>.TId')

The identifier of [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')

<a name='Guilded.Base.Content.ChannelContent_TId,TServer_.ChannelContent(TId,Guid,TServer,Guilded.Base.HashId,System.DateTime).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') is

<a name='Guilded.Base.Content.ChannelContent_TId,TServer_.ChannelContent(TId,Guid,TServer,Guilded.Base.HashId,System.DateTime).serverId'></a>

`serverId` [TServer](ChannelContent_TId,TServer_#Guilded.Base.Content.ChannelContent_TId,TServer_.TServer 'Guilded.Base.Content.ChannelContent<TId,TServer>.TServer')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') is

<a name='Guilded.Base.Content.ChannelContent_TId,TServer_.ChannelContent(TId,Guid,TServer,Guilded.Base.HashId,System.DateTime).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') creator of [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')

<a name='Guilded.Base.Content.ChannelContent_TId,TServer_.ChannelContent(TId,Guid,TServer,Guilded.Base.HashId,System.DateTime).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') was created

### See Also
- [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')