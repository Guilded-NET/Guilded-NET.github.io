---
title: AddReactionAsync(Guid, uint, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds [emote](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint)#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).emote 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, uint, uint).emote') to the [content](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint)#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).content 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, uint, uint).content')."
---

## AbstractGuildedClient.AddReactionAsync(Guid, uint, uint) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Adds [emote](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint)#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).emote 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, uint, uint).emote') to the [content](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint)#Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).content 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, uint, uint).content').

```csharp
public override System.Threading.Tasks.Task AddReactionAsync(Guid channel, uint content, uint emote);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).content'></a>

`content` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent`2') to add [a reaction](Reaction 'Guilded.Base.Content.Reaction') to

<a name='Guilded.AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).emote'></a>

`emote` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to add

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
Added [reaction](Reaction 'Guilded.Base.Content.Reaction')