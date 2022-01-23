---
title: AddReactionAsync(Guid, uint, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a reaction to the content.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Reaction> AddReactionAsync(System.Guid channelId, uint contentId, uint emoteId);
```"
---

## AbstractGuildedClient.AddReactionAsync(Guid, uint, uint) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Adds a reaction to the content.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Reaction> AddReactionAsync(System.Guid channelId, uint contentId, uint emoteId);
```

### Remarks
  
Adds a specified emote as a reaction to the specified content.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid,uint,uint).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid,uint,uint).contentId'></a>

`contentId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the content to add a reaction on

<a name='Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid,uint,uint).emoteId'></a>

`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to add

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Reaction](Reaction 'Guilded.NET.Base.Content.Reaction')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Reaction added