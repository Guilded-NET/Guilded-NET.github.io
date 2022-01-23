---
title: RemoveReactionAsync(uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes a reaction from the content.

```csharp
public System.Threading.Tasks.Task RemoveReactionAsync(uint emoteId);
```"
---

## Doc.RemoveReactionAsync(uint) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Doc`](Doc 'Guilded.NET.Base.Content.Doc')

Removes a reaction from the content.

```csharp
public System.Threading.Tasks.Task RemoveReactionAsync(uint emoteId);
```

### Remarks
  
Removes a specified reaction from the specified content.
#### Parameters

<a name='Guilded.NET.Base.Content.Doc.RemoveReactionAsync(uint).emoteId'></a>

`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote to remove

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')