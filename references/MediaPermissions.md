---
title: MediaPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to media.

```csharp
public enum MediaPermissions
```"
---

## MediaPermissions Enum
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Permissions`](Guilded.NET.Base.Permissions 'Guilded.NET.Base.Permissions')

Permissions related to media.

```csharp
public enum MediaPermissions
```

### Remarks
  
Defines channel permissions related to media in media channels.
### Fields

<a name='Guilded.NET.Base.Permissions.MediaPermissions.All'></a>

`All` 15

All of the permissions combined.

<a name='Guilded.NET.Base.Permissions.MediaPermissions.Basic'></a>

`Basic` 3

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateMedia](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.CreateMedia 'Guilded.NET.Base.Permissions.MediaPermissions.CreateMedia')  
- [SeeMedia](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.SeeMedia 'Guilded.NET.Base.Permissions.MediaPermissions.SeeMedia')

<a name='Guilded.NET.Base.Permissions.MediaPermissions.CreateMedia'></a>

`CreateMedia` 1

Allows you to create media

<a name='Guilded.NET.Base.Permissions.MediaPermissions.Manage'></a>

`Manage` 12

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageMedia](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.ManageMedia 'Guilded.NET.Base.Permissions.MediaPermissions.ManageMedia')  
- [RemoveMedia](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.RemoveMedia 'Guilded.NET.Base.Permissions.MediaPermissions.RemoveMedia')

<a name='Guilded.NET.Base.Permissions.MediaPermissions.ManageMedia'></a>

`ManageMedia` 4

Allows you to edit media created by others and move media items to other channels

<a name='Guilded.NET.Base.Permissions.MediaPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.NET.Base.Permissions.MediaPermissions.RemoveMedia'></a>

`RemoveMedia` 8

Allows you to remove media created by others

<a name='Guilded.NET.Base.Permissions.MediaPermissions.SeeMedia'></a>

`SeeMedia` 2

Allows you to see media