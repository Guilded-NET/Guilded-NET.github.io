---
title: MediaPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents channel permissions related to media in media channels."
---

## MediaPermissions Enum
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions 'Guilded.Base.Permissions')

Represents channel permissions related to media in media channels.

```csharp
public enum MediaPermissions
```
### Fields

<a name='Guilded.Base.Permissions.MediaPermissions.All'></a>

`All` 15

All of the permissions combined.

<a name='Guilded.Base.Permissions.MediaPermissions.Basic'></a>

`Basic` 3

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateMedia](MediaPermissions#Guilded.Base.Permissions.MediaPermissions.CreateMedia 'Guilded.Base.Permissions.MediaPermissions.CreateMedia')  
- [SeeMedia](MediaPermissions#Guilded.Base.Permissions.MediaPermissions.SeeMedia 'Guilded.Base.Permissions.MediaPermissions.SeeMedia')

<a name='Guilded.Base.Permissions.MediaPermissions.CreateMedia'></a>

`CreateMedia` 1

Allows you to create media

<a name='Guilded.Base.Permissions.MediaPermissions.Manage'></a>

`Manage` 12

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageMedia](MediaPermissions#Guilded.Base.Permissions.MediaPermissions.ManageMedia 'Guilded.Base.Permissions.MediaPermissions.ManageMedia')  
- [RemoveMedia](MediaPermissions#Guilded.Base.Permissions.MediaPermissions.RemoveMedia 'Guilded.Base.Permissions.MediaPermissions.RemoveMedia')

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
- [RecruitmentPermissions](RecruitmentPermissions 'Guilded.Base.Permissions.RecruitmentPermissions')
- [SchedulingPermissions](SchedulingPermissions 'Guilded.Base.Permissions.SchedulingPermissions')
- [StreamPermissions](StreamPermissions 'Guilded.Base.Permissions.StreamPermissions')
- [VoicePermissions](VoicePermissions 'Guilded.Base.Permissions.VoicePermissions')
- [XpPermissions](XpPermissions 'Guilded.Base.Permissions.XpPermissions')