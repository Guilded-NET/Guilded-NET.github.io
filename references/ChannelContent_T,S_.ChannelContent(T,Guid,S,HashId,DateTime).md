---
title: ChannelContent(T, Guid, S, HashId, DateTime)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [ChannelContent&lt;T,S&gt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>') with provided details.

```csharp
protected ChannelContent(T id, System.Guid channelId, S serverId, Guilded.NET.Base.HashId createdBy, System.DateTime createdAt);
```"
---

## ChannelContent(T, Guid, S, HashId, DateTime) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`ChannelContent<T,S>`](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')

Creates a new instance of [ChannelContent&lt;T,S&gt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>') with provided details.

```csharp
protected ChannelContent(T id, System.Guid channelId, S serverId, Guilded.NET.Base.HashId createdBy, System.DateTime createdAt);
```
#### Parameters

<a name='Guilded.NET.Base.Content.ChannelContent_T,S_.ChannelContent(T,System.Guid,S,Guilded.NET.Base.HashId,System.DateTime).id'></a>

`id` [T](ChannelContent_T,S_#Guilded.NET.Base.Content.ChannelContent_T,S_.T 'Guilded.NET.Base.Content.ChannelContent<T,S>.T')

The identifier of the content

<a name='Guilded.NET.Base.Content.ChannelContent_T,S_.ChannelContent(T,System.Guid,S,Guilded.NET.Base.HashId,System.DateTime).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the content is

<a name='Guilded.NET.Base.Content.ChannelContent_T,S_.ChannelContent(T,System.Guid,S,Guilded.NET.Base.HashId,System.DateTime).serverId'></a>

`serverId` [S](ChannelContent_T,S_#Guilded.NET.Base.Content.ChannelContent_T,S_.S 'Guilded.NET.Base.Content.ChannelContent<T,S>.S')

The identifier of the server where the content is

<a name='Guilded.NET.Base.Content.ChannelContent_T,S_.ChannelContent(T,System.Guid,S,Guilded.NET.Base.HashId,System.DateTime).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the user creator of the content

<a name='Guilded.NET.Base.Content.ChannelContent_T,S_.ChannelContent(T,System.Guid,S,Guilded.NET.Base.HashId,System.DateTime).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the content was created