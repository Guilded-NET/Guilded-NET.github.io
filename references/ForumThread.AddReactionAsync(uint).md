---
title: AddReactionAsync(uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a reaction to the content.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Reaction> AddReactionAsync(uint emoteId);
```"
---

## ForumThread.AddReactionAsync(uint) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`ForumThread`](ForumThread 'Guilded.NET.Base.Content.ForumThread')

Adds a reaction to the content.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Reaction> AddReactionAsync(uint emoteId);
```

### Remarks
  
Adds a specified emote as a reaction to the specified content.
#### Parameters

<a name='Guilded.NET.Base.Content.ForumThread.AddReactionAsync(uint).emoteId'></a>

`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to add

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Reaction](Reaction 'Guilded.NET.Base.Content.Reaction')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Reaction added