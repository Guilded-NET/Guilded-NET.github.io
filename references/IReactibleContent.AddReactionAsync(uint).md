---
title: AddReactionAsync(uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a emote to the content in a channel."
---

## IReactibleContent.AddReactionAsync(uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`IReactibleContent`](IReactibleContent.md 'Guilded.Base.Content.IReactibleContent')

Adds a emote to the content in a channel.

```csharp
System.Threading.Tasks.Task<Guilded.Base.Content.Reaction> AddReactionAsync(uint emoteId);
```
#### Parameters

<a name='Guilded.Base.Content.IReactibleContent.AddReactionAsync(uint).emoteId'></a>

`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Reaction](Reaction.md 'Guilded.Base.Content.Reaction')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Reaction added