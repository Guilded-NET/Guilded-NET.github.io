---
title: DeleteMessageAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the [message](BaseGuildedClient.DeleteMessageAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid,Guid).message 'Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid, Guid).message')."
---

## BaseGuildedClient.DeleteMessageAsync(Guid, Guid) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Deletes the [message](BaseGuildedClient.DeleteMessageAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid,Guid).message 'Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid, Guid).message').

```csharp
public abstract System.Threading.Tasks.Task DeleteMessageAsync(Guid channel, Guid message);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid,Guid).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the message](Message 'Guilded.Base.Content.Message') to delete

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')