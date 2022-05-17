---
title: CalendarPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents channel permissions for calendar and event related things."
---

## CalendarPermissions Enum
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions 'Guilded.Base.Permissions')

Represents channel permissions for calendar and event related things.

```csharp
public enum CalendarPermissions
```
### Fields

<a name='Guilded.Base.Permissions.CalendarPermissions.All'></a>

`All` 31

All of the permissions combined.

<a name='Guilded.Base.Permissions.CalendarPermissions.Basic'></a>

`Basic` 3

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateEvents](CalendarPermissions#Guilded.Base.Permissions.CalendarPermissions.CreateEvents 'Guilded.Base.Permissions.CalendarPermissions.CreateEvents')  
- [ViewEvents](CalendarPermissions#Guilded.Base.Permissions.CalendarPermissions.ViewEvents 'Guilded.Base.Permissions.CalendarPermissions.ViewEvents')

<a name='Guilded.Base.Permissions.CalendarPermissions.CreateEvents'></a>

`CreateEvents` 1

Allows you to create events

<a name='Guilded.Base.Permissions.CalendarPermissions.EditRSVPs'></a>

`EditRSVPs` 16

Allows you to edit RSVP status for members in an event

<a name='Guilded.Base.Permissions.CalendarPermissions.Manage'></a>

`Manage` 28

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageEvents](CalendarPermissions#Guilded.Base.Permissions.CalendarPermissions.ManageEvents 'Guilded.Base.Permissions.CalendarPermissions.ManageEvents')  
- [RemoveEvents](CalendarPermissions#Guilded.Base.Permissions.CalendarPermissions.RemoveEvents 'Guilded.Base.Permissions.CalendarPermissions.RemoveEvents')  
- [EditRSVPs](CalendarPermissions#Guilded.Base.Permissions.CalendarPermissions.EditRSVPs 'Guilded.Base.Permissions.CalendarPermissions.EditRSVPs')

<a name='Guilded.Base.Permissions.CalendarPermissions.ManageEvents'></a>

`ManageEvents` 4

Allows you to update events created by others and move them to other channel

<a name='Guilded.Base.Permissions.CalendarPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.CalendarPermissions.RemoveEvents'></a>

`RemoveEvents` 8

Allows you to remove events created by others

<a name='Guilded.Base.Permissions.CalendarPermissions.ViewEvents'></a>

`ViewEvents` 2

Allows you to view events

### See Also
- [AnnouncementPermissions](AnnouncementPermissions 'Guilded.Base.Permissions.AnnouncementPermissions')
- [BotPermissions](BotPermissions 'Guilded.Base.Permissions.BotPermissions')
- [BracketPermissions](BracketPermissions 'Guilded.Base.Permissions.BracketPermissions')
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
- [SchedulingPermissions](SchedulingPermissions 'Guilded.Base.Permissions.SchedulingPermissions')
- [StreamPermissions](StreamPermissions 'Guilded.Base.Permissions.StreamPermissions')
- [VoicePermissions](VoicePermissions 'Guilded.Base.Permissions.VoicePermissions')
- [XpPermissions](XpPermissions 'Guilded.Base.Permissions.XpPermissions')