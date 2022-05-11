---
title: GetMessageAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the [message](BaseGuildedClient.GetMessageAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid,Guid).message 'Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid, Guid).message')."
---

## BaseGuildedClient.GetMessageAsync(Guid, Guid) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Gets the [message](BaseGuildedClient.GetMessageAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid,Guid).message 'Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid, Guid).message').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.Message> GetMessageAsync(Guid channel, Guid message);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid,Guid).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message it should get

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[message](BaseGuildedClient.GetMessageAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid,Guid).message 'Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid, Guid).message')