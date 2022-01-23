---
title: RemoveReactionAsync(Guid, Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes a reaction from the message.

```csharp
public abstract System.Threading.Tasks.Task RemoveReactionAsync(System.Guid channelId, System.Guid messageId, uint emoteId);
```"
---

## BaseGuildedClient.RemoveReactionAsync(Guid, Guid, uint) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Removes a reaction from the message.

```csharp
public abstract System.Threading.Tasks.Task RemoveReactionAsync(System.Guid channelId, System.Guid messageId, uint emoteId);
```

### Remarks
  
Removes a specified reaction from the specified message.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid,System.Guid,uint).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid,System.Guid,uint).messageId'></a>

`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message to remove a reaction from

<a name='Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid,System.Guid,uint).emoteId'></a>

`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to remove

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')