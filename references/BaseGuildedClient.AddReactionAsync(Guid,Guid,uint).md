---
title: AddReactionAsync(Guid, Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a [emote](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).emote 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint).emote') to a [message](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).message 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint).message') in a [channel](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).channel 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint).channel')."
---

## BaseGuildedClient.AddReactionAsync(Guid, Guid, uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Adds a [emote](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).emote 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint).emote') to a [message](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).message 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint).message') in a [channel](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).md#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).channel 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.Reaction> AddReactionAsync(Guid channel, Guid message, uint emote);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message to add a reaction on

<a name='Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).emote'></a>

`emote` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to add

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Reaction](Reaction.md 'Guilded.Base.Content.Reaction')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Added reaction