---
title: GetChannelAsync(Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the [channel](AbstractGuildedClient.GetChannelAsync(Guid)#Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel 'Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel')."
---

## AbstractGuildedClient.GetChannelAsync(Guid) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets the [channel](AbstractGuildedClient.GetChannelAsync(Guid)#Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel 'Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Servers.ServerChannel> GetChannelAsync(Guid channel);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetChannelAsync(Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') to get

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Specified [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')