---
title: UpdateChannelAsync(Guid, string, string, Nullable<bool>)
layout: references
section: references
tags:
  - references
  - method
description: "

Updates the [channel](BaseGuildedClient.UpdateChannelAsync(Guid,string,string,Nullable_bool_)#Guilded.Base.BaseGuildedClient.UpdateChannelAsync(Guid,string,string,System.Nullable_bool_).channel 'Guilded.Base.BaseGuildedClient.UpdateChannelAsync(Guid, string, string, System.Nullable<bool>).channel')."
---

## BaseGuildedClient.UpdateChannelAsync(Guid, string, string, Nullable<bool>) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Updates the [channel](BaseGuildedClient.UpdateChannelAsync(Guid,string,string,Nullable_bool_)#Guilded.Base.BaseGuildedClient.UpdateChannelAsync(Guid,string,string,System.Nullable_bool_).channel 'Guilded.Base.BaseGuildedClient.UpdateChannelAsync(Guid, string, string, System.Nullable<bool>).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.ServerChannel> UpdateChannelAsync(Guid channel, string? name=null, string? topic=null, System.Nullable<bool> isPublic=null);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UpdateChannelAsync(Guid,string,string,System.Nullable_bool_).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') to update

<a name='Guilded.Base.BaseGuildedClient.UpdateChannelAsync(Guid,string,string,System.Nullable_bool_).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

A new name of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') (max — `100`)

<a name='Guilded.Base.BaseGuildedClient.UpdateChannelAsync(Guid,string,string,System.Nullable_bool_).topic'></a>

`topic` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

A new topic describing what [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') is about (max — `512`)

<a name='Guilded.Base.BaseGuildedClient.UpdateChannelAsync(Guid,string,string,System.Nullable_bool_).isPublic'></a>

`isPublic` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

Whether the contents of the channel are publicly viewable

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [channel](BaseGuildedClient.UpdateChannelAsync(Guid,string,string,Nullable_bool_)#Guilded.Base.BaseGuildedClient.UpdateChannelAsync(Guid,string,string,System.Nullable_bool_).channel 'Guilded.Base.BaseGuildedClient.UpdateChannelAsync(Guid, string, string, System.Nullable<bool>).channel')