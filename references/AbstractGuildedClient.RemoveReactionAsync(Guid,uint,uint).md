---
title: RemoveReactionAsync(Guid, uint, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes a reaction from the content.

```csharp
public override System.Threading.Tasks.Task RemoveReactionAsync(System.Guid channelId, uint contentId, uint emoteId);
```"
---

## AbstractGuildedClient.RemoveReactionAsync(Guid, uint, uint) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Removes a reaction from the content.

```csharp
public override System.Threading.Tasks.Task RemoveReactionAsync(System.Guid channelId, uint contentId, uint emoteId);
```

### Remarks
  
Removes a specified reaction from the specified content.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid,uint,uint).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid,uint,uint).contentId'></a>

`contentId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the content to remove a reaction from

<a name='Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid,uint,uint).emoteId'></a>

`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to remove

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')