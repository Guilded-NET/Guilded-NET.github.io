---
title: AddReactionAsync(uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a [emote](Message.AddReactionAsync(uint).md#Guilded.Base.Content.Message.AddReactionAsync(uint).emote 'Guilded.Base.Content.Message.AddReactionAsync(uint).emote') to a message in a channel."
---

## Message.AddReactionAsync(uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message.md 'Guilded.Base.Content.Message')

Adds a [emote](Message.AddReactionAsync(uint).md#Guilded.Base.Content.Message.AddReactionAsync(uint).emote 'Guilded.Base.Content.Message.AddReactionAsync(uint).emote') to a message in a channel.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Reaction> AddReactionAsync(uint emote);
```
#### Parameters

<a name='Guilded.Base.Content.Message.AddReactionAsync(uint).emote'></a>

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