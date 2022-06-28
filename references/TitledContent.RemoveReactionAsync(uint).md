---
title: RemoveReactionAsync(uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes emote from the content."
---

## TitledContent.RemoveReactionAsync(uint) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`TitledContent`](TitledContent 'Guilded.Base.Content.TitledContent')

Removes emote from the content.

```csharp
public System.Threading.Tasks.Task RemoveReactionAsync(uint emoteId);
```
#### Parameters

<a name='Guilded.Base.Content.TitledContent.RemoveReactionAsync(uint).emoteId'></a>

`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
Added [reaction](Reaction 'Guilded.Base.Content.Reaction')