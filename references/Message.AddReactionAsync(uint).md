---
title: AddReactionAsync(uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds [emote](Message.AddReactionAsync(uint)#Guilded.Base.Content.Message.AddReactionAsync(uint).emote 'Guilded.Base.Content.Message.AddReactionAsync(uint).emote') to the message."
---

## Message.AddReactionAsync(uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message 'Guilded.Base.Content.Message')

Adds [emote](Message.AddReactionAsync(uint)#Guilded.Base.Content.Message.AddReactionAsync(uint).emote 'Guilded.Base.Content.Message.AddReactionAsync(uint).emote') to the message.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Reaction> AddReactionAsync(uint emote);
```
#### Parameters

<a name='Guilded.Base.Content.Message.AddReactionAsync(uint).emote'></a>

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