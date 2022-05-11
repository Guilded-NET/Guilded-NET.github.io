---
title: DeleteMessageAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the [message](AbstractGuildedClient.DeleteMessageAsync(Guid,Guid).md#Guilded.AbstractGuildedClient.DeleteMessageAsync(Guid,Guid).message 'Guilded.AbstractGuildedClient.DeleteMessageAsync(Guid, Guid).message')."
---

## AbstractGuildedClient.DeleteMessageAsync(Guid, Guid) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Deletes the [message](AbstractGuildedClient.DeleteMessageAsync(Guid,Guid).md#Guilded.AbstractGuildedClient.DeleteMessageAsync(Guid,Guid).message 'Guilded.AbstractGuildedClient.DeleteMessageAsync(Guid, Guid).message').

```csharp
public override System.Threading.Tasks.Task DeleteMessageAsync(Guid channel, Guid message);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.DeleteMessageAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.DeleteMessageAsync(Guid,Guid).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the message](Message.md 'Guilded.Base.Content.Message') to delete

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')