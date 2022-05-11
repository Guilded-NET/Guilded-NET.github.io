---
title: SchedulingPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents channel permissions related to availability in scheduling channels."
---

## SchedulingPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions 'Guilded.Base.Permissions')

Represents channel permissions related to availability in scheduling channels.

```csharp
public enum SchedulingPermissions
```
### Fields

<a name='Guilded.Base.Permissions.SchedulingPermissions.All'></a>

`All` 11

All of the permissions combined.

<a name='Guilded.Base.Permissions.SchedulingPermissions.Basic'></a>

`Basic` 3

A simple permission combination allowing writing permissions and reading permissions/

### Remarks
  
Sets these permissions:  
- [CreateSchedule](SchedulingPermissions#Guilded.Base.Permissions.SchedulingPermissions.CreateSchedule 'Guilded.Base.Permissions.SchedulingPermissions.CreateSchedule')  
- [ViewSchedules](SchedulingPermissions#Guilded.Base.Permissions.SchedulingPermissions.ViewSchedules 'Guilded.Base.Permissions.SchedulingPermissions.ViewSchedules')

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
- [DeleteSchedule](SchedulingPermissions#Guilded.Base.Permissions.SchedulingPermissions.DeleteSchedule 'Guilded.Base.Permissions.SchedulingPermissions.DeleteSchedule')

<a name='Guilded.Base.Permissions.SchedulingPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.SchedulingPermissions.ViewSchedules'></a>

`ViewSchedules` 2

Allows you to view server member's schedule

### See Also
- [AnnouncementPermissions](AnnouncementPermissions 'Guilded.Base.Permissions.AnnouncementPermissions')
- [BotPermissions](BotPermissions 'Guilded.Base.Permissions.BotPermissions')
- [BracketPermissions](BracketPermissions 'Guilded.Base.Permissions.BracketPermissions')
- [CalendarPermissions](CalendarPermissions 'Guilded.Base.Permissions.CalendarPermissions')
- [ChatPermissions](ChatPermissions 'Guilded.Base.Permissions.ChatPermissions')
- [CustomPermissions](CustomPermissions 'Guilded.Base.Permissions.CustomPermissions')
- [DocPermissions](DocPermissions 'Guilded.Base.Permissions.DocPermissions')
- [FormPermissions](FormPermissions 'Guilded.Base.Permissions.FormPermissions')
- [ForumPermissions](ForumPermissions 'Guilded.Base.Permissions.ForumPermissions')
- [GeneralPermissions](GeneralPermissions 'Guilded.Base.Permissions.GeneralPermissions')
- [ListPermissions](ListPermissions 'Guilded.Base.Permissions.ListPermissions')
- [MatchmakingPermissions](MatchmakingPermissions 'Guilded.Base.Permissions.MatchmakingPermissions')
- [MediaPermissions](MediaPermissions 'Guilded.Base.Permissions.MediaPermissions')
- [RecruitmentPermissions](RecruitmentPermissions 'Guilded.Base.Permissions.RecruitmentPermissions')
- [StreamPermissions](StreamPermissions 'Guilded.Base.Permissions.StreamPermissions')
- [VoicePermissions](VoicePermissions 'Guilded.Base.Permissions.VoicePermissions')
- [XpPermissions](XpPermissions 'Guilded.Base.Permissions.XpPermissions')