---
title: GetChannelAsync(Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the [channel](AbstractGuildedClient.GetChannelAsync(Guid).md#Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel 'Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel')."
---

## AbstractGuildedClient.GetChannelAsync(Guid) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets the [channel](AbstractGuildedClient.GetChannelAsync(Guid).md#Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel 'Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Servers.ServerChannel> GetChannelAsync(Guid channel);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel') to get

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.Base.Servers.ServerChannel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[channel](AbstractGuildedClient.GetChannelAsync(Guid).md#Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel 'Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel')