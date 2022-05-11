---
title: DeleteMessageAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes a [message](BaseGuildedClient.DeleteMessageAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid,Guid).message 'Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid, Guid).message') from a [channel](BaseGuildedClient.DeleteMessageAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid,Guid).channel 'Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid, Guid).channel')."
---

## BaseGuildedClient.DeleteMessageAsync(Guid, Guid) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Deletes a [message](BaseGuildedClient.DeleteMessageAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid,Guid).message 'Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid, Guid).message') from a [channel](BaseGuildedClient.DeleteMessageAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid,Guid).channel 'Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid, Guid).channel').

```csharp
public abstract System.Threading.Tasks.Task DeleteMessageAsync(Guid channel, Guid message);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid,Guid).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message to delete

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')