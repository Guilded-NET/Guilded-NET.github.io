---
title: CalendarPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to calendar.

```csharp
public enum CalendarPermissions
```"
---

## CalendarPermissions Enum
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Permissions`](Guilded.NET.Base.Permissions 'Guilded.NET.Base.Permissions')

Permissions related to calendar.

```csharp
public enum CalendarPermissions
```

### Remarks
  
Defines channel permissions for calendar and event related things.
### Fields

<a name='Guilded.NET.Base.Permissions.CalendarPermissions.All'></a>

`All` 31

All of the permissions combined.

<a name='Guilded.NET.Base.Permissions.CalendarPermissions.Basic'></a>

`Basic` 3

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateEvents](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.CreateEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.CreateEvents')  
- [ViewEvents](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.ViewEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.ViewEvents')

<a name='Guilded.NET.Base.Permissions.CalendarPermissions.CreateEvents'></a>

`CreateEvents` 1

Allows you to create events

<a name='Guilded.NET.Base.Permissions.CalendarPermissions.EditRSVPs'></a>

`EditRSVPs` 16

Allows you to edit RSVP status for members in an event

<a name='Guilded.NET.Base.Permissions.CalendarPermissions.Manage'></a>

`Manage` 28

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageEvents](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.ManageEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.ManageEvents')  
- [RemoveEvents](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.RemoveEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.RemoveEvents')  
- [EditRSVPs](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.EditRSVPs 'Guilded.NET.Base.Permissions.CalendarPermissions.EditRSVPs')

<a name='Guilded.NET.Base.Permissions.CalendarPermissions.ManageEvents'></a>

`ManageEvents` 4

Allows you to update events created by others and move them to other channel

<a name='Guilded.NET.Base.Permissions.CalendarPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.NET.Base.Permissions.CalendarPermissions.RemoveEvents'></a>

`RemoveEvents` 8

Allows you to remove events created by others

<a name='Guilded.NET.Base.Permissions.CalendarPermissions.ViewEvents'></a>

`ViewEvents` 2

Allows you to view events