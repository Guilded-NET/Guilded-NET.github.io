---
title: AddReactionAsync(Guid, Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds [emote](AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint)#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint).emote 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, Guid, uint).emote') to the [message](AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint)#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint).message 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, Guid, uint).message')."
---

## AbstractGuildedClient.AddReactionAsync(Guid, Guid, uint) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Adds [emote](AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint)#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint).emote 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, Guid, uint).emote') to the [message](AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint)#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint).message 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, Guid, uint).message').

```csharp
public override System.Threading.Tasks.Task AddReactionAsync(Guid channel, Guid message, uint emote);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the [message](Message 'Guilded.Base.Content.Message') to add a [reaction](Reaction 'Guilded.Base.Content.Reaction') to

<a name='Guilded.AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint).emote'></a>

`emote` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to add

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')