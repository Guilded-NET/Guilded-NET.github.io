---
title: SchedulingPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to scheduling."
---

## SchedulingPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions.md 'Guilded.Base.Permissions')

Permissions related to scheduling.

```csharp
public enum SchedulingPermissions
```

### Remarks
  
Defines channel permissions related to availability in scheduling channels.
### Fields

<a name='Guilded.Base.Permissions.SchedulingPermissions.All'></a>

`All` 11

All of the permissions combined.

<a name='Guilded.Base.Permissions.SchedulingPermissions.Basic'></a>

`Basic` 3

A simple permission combination allowing writing permissions and reading permissions/

### Remarks
  
Sets these permissions:  
- [CreateSchedule](SchedulingPermissions.md#Guilded.Base.Permissions.SchedulingPermissions.CreateSchedule 'Guilded.Base.Permissions.SchedulingPermissions.CreateSchedule')  
- [ViewSchedules](SchedulingPermissions.md#Guilded.Base.Permissions.SchedulingPermissions.ViewSchedules 'Guilded.Base.Permissions.SchedulingPermissions.ViewSchedules')

<a name='Guilded.Base.Permissions.SchedulingPermissions.CreateSchedule'></a>

`CreateSchedule` 1

Allows you to let server know your available schedule

<a name='Guilded.Base.Permissions.SchedulingPermissions.DeleteSchedule'></a>

`DeleteSchedule` 8

Allows you to remove availabilities created by others

<a name='Guilded.Base.Permissions.SchedulingPermissions.Manage'></a>

`Manage` 8

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [DeleteSchedule](SchedulingPermissions.md#Guilded.Base.Permissions.SchedulingPermissions.DeleteSchedule 'Guilded.Base.Permissions.SchedulingPermissions.DeleteSchedule')

<a name='Guilded.Base.Permissions.SchedulingPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.SchedulingPermissions.ViewSchedules'></a>

`ViewSchedules` 2

Allows you to view server member's schedule