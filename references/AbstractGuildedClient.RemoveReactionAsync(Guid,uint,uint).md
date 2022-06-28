---
title: RemoveReactionAsync(Guid, uint, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes emote from the content."
---

## AbstractGuildedClient.RemoveReactionAsync(Guid, uint, uint) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Removes emote from the content.

```csharp
public override System.Threading.Tasks.Task RemoveReactionAsync(Guid channelId, uint contentId, uint emoteId);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.RemoveReactionAsync(Guid,uint,uint).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

<a name='Guilded.AbstractGuildedClient.RemoveReactionAsync(Guid,uint,uint).contentId'></a>

`contentId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

<a name='Guilded.AbstractGuildedClient.RemoveReactionAsync(Guid,uint,uint).emoteId'></a>

`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
Added [reaction](Reaction 'Guilded.Base.Content.Reaction')