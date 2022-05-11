---
title: AddReactionAsync(Guid, uint, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds [emote](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).md#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).emote 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, uint, uint).emote') to the [content](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).md#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).content 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, uint, uint).content')."
---

## AbstractGuildedClient.AddReactionAsync(Guid, uint, uint) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Adds [emote](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).md#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).emote 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, uint, uint).emote') to the [content](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).md#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).content 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, uint, uint).content').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.Reaction> AddReactionAsync(Guid channel, uint content, uint emote);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).content'></a>

`content` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of [the content](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent`2') to add [a reaction](Reaction.md 'Guilded.Base.Content.Reaction') on

<a name='Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).emote'></a>

`emote` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to add

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Reaction](Reaction.md 'Guilded.Base.Content.Reaction')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Added [reaction](Reaction.md 'Guilded.Base.Content.Reaction')