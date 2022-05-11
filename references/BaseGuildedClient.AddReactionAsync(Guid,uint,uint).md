---
title: AddReactionAsync(Guid, uint, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a [emote](BaseGuildedClient.AddReactionAsync(Guid,uint,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,uint,uint).emote 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, uint, uint).emote') to the [content](BaseGuildedClient.AddReactionAsync(Guid,uint,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,uint,uint).content 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, uint, uint).content') in a [channel](BaseGuildedClient.AddReactionAsync(Guid,uint,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,uint,uint).channel 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, uint, uint).channel')."
---

## BaseGuildedClient.AddReactionAsync(Guid, uint, uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Adds a [emote](BaseGuildedClient.AddReactionAsync(Guid,uint,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,uint,uint).emote 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, uint, uint).emote') to the [content](BaseGuildedClient.AddReactionAsync(Guid,uint,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,uint,uint).content 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, uint, uint).content') in a [channel](BaseGuildedClient.AddReactionAsync(Guid,uint,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,uint,uint).channel 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, uint, uint).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.Reaction> AddReactionAsync(Guid channel, uint content, uint emote);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,uint,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,uint,uint).content'></a>

`content` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the content to add a reaction on

<a name='Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,uint,uint).emote'></a>

`emote` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to add

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Reaction](Reaction.md 'Guilded.Base.Content.Reaction')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Reaction added