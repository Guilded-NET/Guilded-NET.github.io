---
title: RemoveReactionAsync(Guid, uint, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes [emote](BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint)#Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint).emote 'Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid, uint, uint).emote') from the [content](BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint)#Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint).content 'Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid, uint, uint).content')."
---

## BaseGuildedClient.RemoveReactionAsync(Guid, uint, uint) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Removes [emote](BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint)#Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint).emote 'Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid, uint, uint).emote') from the [content](BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint)#Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint).content 'Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid, uint, uint).content').

```csharp
public abstract System.Threading.Tasks.Task RemoveReactionAsync(Guid channel, uint content, uint emote);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint).content'></a>

`content` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') to remove [a reaction](Reaction 'Guilded.Base.Content.Reaction') from

<a name='Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint).emote'></a>

`emote` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to remove

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
Added [reaction](Reaction 'Guilded.Base.Content.Reaction')