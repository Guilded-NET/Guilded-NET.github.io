---
title: DeleteMessageAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the message.

```csharp
public abstract System.Threading.Tasks.Task DeleteMessageAsync(System.Guid channelId, System.Guid messageId);
```"
---

## BaseGuildedClient.DeleteMessageAsync(Guid, Guid) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Deletes the message.

```csharp
public abstract System.Threading.Tasks.Task DeleteMessageAsync(System.Guid channelId, System.Guid messageId);
```

### Remarks
  
Removes the specified message, whether it be from the client or another user.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.DeleteMessageAsync(System.Guid,System.Guid).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.Base.BaseGuildedClient.DeleteMessageAsync(System.Guid,System.Guid).messageId'></a>

`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message to delete

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')