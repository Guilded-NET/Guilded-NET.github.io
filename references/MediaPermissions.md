---
title: MediaPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to media."
---

## MediaPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions.md 'Guilded.Base.Permissions')

Permissions related to media.

```csharp
public enum MediaPermissions
```

### Remarks
  
Defines channel permissions related to media in media channels.
### Fields

<a name='Guilded.Base.Permissions.MediaPermissions.All'></a>

`All` 15

All of the permissions combined.

<a name='Guilded.Base.Permissions.MediaPermissions.Basic'></a>

`Basic` 3

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateMedia](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.CreateMedia 'Guilded.Base.Permissions.MediaPermissions.CreateMedia')  
- [SeeMedia](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.SeeMedia 'Guilded.Base.Permissions.MediaPermissions.SeeMedia')

<a name='Guilded.Base.Permissions.MediaPermissions.CreateMedia'></a>

`CreateMedia` 1

Allows you to create media

<a name='Guilded.Base.Permissions.MediaPermissions.Manage'></a>

`Manage` 12

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageMedia](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.ManageMedia 'Guilded.Base.Permissions.MediaPermissions.ManageMedia')  
- [RemoveMedia](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.RemoveMedia 'Guilded.Base.Permissions.MediaPermissions.RemoveMedia')

<a name='Guilded.Base.Permissions.MediaPermissions.ManageMedia'></a>

`ManageMedia` 4

Allows you to edit media created by others and move media items to other channels

<a name='Guilded.Base.Permissions.MediaPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.MediaPermissions.RemoveMedia'></a>

`RemoveMedia` 8

Allows you to remove media created by others

<a name='Guilded.Base.Permissions.MediaPermissions.SeeMedia'></a>

`SeeMedia` 2

Allows you to see media