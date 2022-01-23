---
title: SchedulingPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to scheduling.

```csharp
public enum SchedulingPermissions
```"
---

## SchedulingPermissions Enum
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Permissions`](Guilded.NET.Base.Permissions 'Guilded.NET.Base.Permissions')

Permissions related to scheduling.

```csharp
public enum SchedulingPermissions
```

### Remarks
  
Defines channel permissions related to availability in scheduling channels.
### Fields

<a name='Guilded.NET.Base.Permissions.SchedulingPermissions.All'></a>

`All` 11

All of the permissions combined.

<a name='Guilded.NET.Base.Permissions.SchedulingPermissions.Basic'></a>

`Basic` 3

A simple permission combination allowing writing permissions and reading permissions/

### Remarks
  
Sets these permissions:  
- [CreateSchedule](SchedulingPermissions#Guilded.NET.Base.Permissions.SchedulingPermissions.CreateSchedule 'Guilded.NET.Base.Permissions.SchedulingPermissions.CreateSchedule')  
- [ViewSchedules](SchedulingPermissions#Guilded.NET.Base.Permissions.SchedulingPermissions.ViewSchedules 'Guilded.NET.Base.Permissions.SchedulingPermissions.ViewSchedules')

<a name='Guilded.NET.Base.Permissions.SchedulingPermissions.CreateSchedule'></a>

`CreateSchedule` 1

Allows you to let server know your available schedule

<a name='Guilded.NET.Base.Permissions.SchedulingPermissions.DeleteSchedule'></a>

`DeleteSchedule` 8

Allows you to remove availabilities created by others

<a name='Guilded.NET.Base.Permissions.SchedulingPermissions.Manage'></a>

`Manage` 8

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [DeleteSchedule](SchedulingPermissions#Guilded.NET.Base.Permissions.SchedulingPermissions.DeleteSchedule 'Guilded.NET.Base.Permissions.SchedulingPermissions.DeleteSchedule')

<a name='Guilded.NET.Base.Permissions.SchedulingPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.NET.Base.Permissions.SchedulingPermissions.ViewSchedules'></a>

`ViewSchedules` 2

Allows you to view server member's schedule