---
title: RemoveReactionAsync(Guid, Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes [emote](BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint)#Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint).emote 'Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid, Guid, uint).emote') from the [message](BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint)#Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint).message 'Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid, Guid, uint).message')."
---

## BaseGuildedClient.RemoveReactionAsync(Guid, Guid, uint) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Removes [emote](BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint)#Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint).emote 'Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid, Guid, uint).emote') from the [message](BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint)#Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint).message 'Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid, Guid, uint).message').

```csharp
public abstract System.Threading.Tasks.Task RemoveReactionAsync(Guid channel, Guid message, uint emote);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the message](Message 'Guilded.Base.Content.Message') to remove [a reaction](Reaction 'Guilded.Base.Content.Reaction') from

<a name='Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint).emote'></a>

`emote` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to remove

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')