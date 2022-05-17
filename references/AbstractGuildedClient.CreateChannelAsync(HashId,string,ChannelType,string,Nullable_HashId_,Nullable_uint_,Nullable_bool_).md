---
title: CreateChannelAsync(HashId, string, ChannelType, string, Nullable<HashId>, Nullable<uint>, Nullable<bool>)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a new channel in the [server](AbstractGuildedClient.CreateChannelAsync(HashId,string,ChannelType,string,Nullable_HashId_,Nullable_uint_,Nullable_bool_)#Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId,string,Guilded.Base.Servers.ChannelType,string,System.Nullable_Guilded.Base.HashId_,System.Nullable_uint_,System.Nullable_bool_).server 'Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId, string, Guilded.Base.Servers.ChannelType, string, System.Nullable<Guilded.Base.HashId>, System.Nullable<uint>, System.Nullable<bool>).server')."
---

## AbstractGuildedClient.CreateChannelAsync(HashId, string, ChannelType, string, Nullable<HashId>, Nullable<uint>, Nullable<bool>) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Creates a new channel in the [server](AbstractGuildedClient.CreateChannelAsync(HashId,string,ChannelType,string,Nullable_HashId_,Nullable_uint_,Nullable_bool_)#Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId,string,Guilded.Base.Servers.ChannelType,string,System.Nullable_Guilded.Base.HashId_,System.Nullable_uint_,System.Nullable_bool_).server 'Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId, string, Guilded.Base.Servers.ChannelType, string, System.Nullable<Guilded.Base.HashId>, System.Nullable<uint>, System.Nullable<bool>).server').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Servers.ServerChannel> CreateChannelAsync(Guilded.Base.HashId server, string name, Guilded.Base.Servers.ChannelType type=Guilded.Base.Servers.ChannelType.Chat, string? topic=null, System.Nullable<Guilded.Base.HashId> group=null, System.Nullable<uint> category=null, System.Nullable<bool> isPublic=null);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId,string,Guilded.Base.Servers.ChannelType,string,System.Nullable_Guilded.Base.HashId_,System.Nullable_uint_,System.Nullable_bool_).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the server where [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') will be created

<a name='Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId,string,Guilded.Base.Servers.ChannelType,string,System.Nullable_Guilded.Base.HashId_,System.Nullable_uint_,System.Nullable_bool_).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') (max — `100`)

<a name='Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId,string,Guilded.Base.Servers.ChannelType,string,System.Nullable_Guilded.Base.HashId_,System.Nullable_uint_,System.Nullable_bool_).type'></a>

`type` [ChannelType](ChannelType 'Guilded.Base.Servers.ChannelType')

The type of the content that [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') will hold

<a name='Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId,string,Guilded.Base.Servers.ChannelType,string,System.Nullable_Guilded.Base.HashId_,System.Nullable_uint_,System.Nullable_bool_).topic'></a>

`topic` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The topic describing what [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') is about (max — `512`)

<a name='Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId,string,Guilded.Base.Servers.ChannelType,string,System.Nullable_Guilded.Base.HashId_,System.Nullable_uint_,System.Nullable_bool_).group'></a>

`group` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the group where [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') will be created

<a name='Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId,string,Guilded.Base.Servers.ChannelType,string,System.Nullable_Guilded.Base.HashId_,System.Nullable_uint_,System.Nullable_bool_).category'></a>

`category` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the category where [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') will be created

<a name='Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId,string,Guilded.Base.Servers.ChannelType,string,System.Nullable_Guilded.Base.HashId_,System.Nullable_uint_,System.Nullable_bool_).isPublic'></a>

`isPublic` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

Whether the contents of the channel are publicly viewable

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
The specified [name](AbstractGuildedClient.CreateChannelAsync(HashId,string,ChannelType,string,Nullable_HashId_,Nullable_uint_,Nullable_bool_)#Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId,string,Guilded.Base.Servers.ChannelType,string,System.Nullable_Guilded.Base.HashId_,System.Nullable_uint_,System.Nullable_bool_).name 'Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId, string, Guilded.Base.Servers.ChannelType, string, System.Nullable<Guilded.Base.HashId>, System.Nullable<uint>, System.Nullable<bool>).name') is null, empty or whitespace

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')