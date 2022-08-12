---
title: GetTopicAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the [topic](BaseGuildedClient.GetTopicAsync(Guid,uint)#Guilded.Base.BaseGuildedClient.GetTopicAsync(Guid,uint).topic 'Guilded.Base.BaseGuildedClient.GetTopicAsync(Guid, uint).topic')."
---

## BaseGuildedClient.GetTopicAsync(Guid, uint) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Gets the [topic](BaseGuildedClient.GetTopicAsync(Guid,uint)#Guilded.Base.BaseGuildedClient.GetTopicAsync(Guid,uint).topic 'Guilded.Base.BaseGuildedClient.GetTopicAsync(Guid, uint).topic').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.Topic> GetTopicAsync(Guid channel, uint topic);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetTopicAsync(Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.GetTopicAsync(Guid,uint).topic'></a>

`topic` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the [forum topic](Topic 'Guilded.Base.Content.Topic') to get

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Topic](Topic 'Guilded.Base.Content.Topic')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Specified [topic](Topic 'Guilded.Base.Content.Topic')