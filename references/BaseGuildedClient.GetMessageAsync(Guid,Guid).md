---
title: GetMessageAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a [message](BaseGuildedClient.GetMessageAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid,Guid).message 'Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid, Guid).message') from a [channel](BaseGuildedClient.GetMessageAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid,Guid).channel 'Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid, Guid).channel')."
---

## BaseGuildedClient.GetMessageAsync(Guid, Guid) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Gets a [message](BaseGuildedClient.GetMessageAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid,Guid).message 'Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid, Guid).message') from a [channel](BaseGuildedClient.GetMessageAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid,Guid).channel 'Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid, Guid).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.Message> GetMessageAsync(Guid channel, Guid message);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid,Guid).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message it should get

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Specified message