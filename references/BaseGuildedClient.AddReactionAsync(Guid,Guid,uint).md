---
title: AddReactionAsync(Guid, Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds [emote](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint)#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).emote 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint).emote') to the [message](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint)#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).message 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint).message')."
---

## BaseGuildedClient.AddReactionAsync(Guid, Guid, uint) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Adds [emote](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint)#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).emote 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint).emote') to the [message](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint)#Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).message 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint).message').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.Reaction> AddReactionAsync(Guid channel, Guid message, uint emote);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the message](Message 'Guilded.Base.Content.Message') to add [a reaction](Reaction 'Guilded.Base.Content.Reaction') on

<a name='Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).emote'></a>

`emote` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to add

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Reaction](Reaction 'Guilded.Base.Content.Reaction')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Added [reaction](Reaction 'Guilded.Base.Content.Reaction')