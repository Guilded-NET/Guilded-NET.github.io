---
title: GetChannelAsync(Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the [channel](BaseGuildedClient.GetChannelAsync(Guid)#Guilded.Base.BaseGuildedClient.GetChannelAsync(Guid).channel 'Guilded.Base.BaseGuildedClient.GetChannelAsync(Guid).channel')."
---

## BaseGuildedClient.GetChannelAsync(Guid) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Gets the [channel](BaseGuildedClient.GetChannelAsync(Guid)#Guilded.Base.BaseGuildedClient.GetChannelAsync(Guid).channel 'Guilded.Base.BaseGuildedClient.GetChannelAsync(Guid).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.ServerChannel> GetChannelAsync(Guid channel);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetChannelAsync(Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') to get

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[channel](BaseGuildedClient.GetChannelAsync(Guid)#Guilded.Base.BaseGuildedClient.GetChannelAsync(Guid).channel 'Guilded.Base.BaseGuildedClient.GetChannelAsync(Guid).channel')