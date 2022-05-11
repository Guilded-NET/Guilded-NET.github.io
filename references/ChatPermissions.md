---
title: ChatPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents channel permissions for chat & text related things."
---

## ChatPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions 'Guilded.Base.Permissions')

Represents channel permissions for chat & text related things.

```csharp
public enum ChatPermissions
```
### Fields

<a name='Guilded.Base.Permissions.ChatPermissions.All'></a>

`All` 119

All of the permissions combined.

<a name='Guilded.Base.Permissions.ChatPermissions.Basic'></a>

`Basic` 35

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [SendMessages](ChatPermissions#Guilded.Base.Permissions.ChatPermissions.SendMessages 'Guilded.Base.Permissions.ChatPermissions.SendMessages')  
- [ReadMessages](ChatPermissions#Guilded.Base.Permissions.ChatPermissions.ReadMessages 'Guilded.Base.Permissions.ChatPermissions.ReadMessages')  
- [SendThreadMessages](ChatPermissions#Guilded.Base.Permissions.ChatPermissions.SendThreadMessages 'Guilded.Base.Permissions.ChatPermissions.SendThreadMessages')

<a name='Guilded.Base.Permissions.ChatPermissions.CreateThreads'></a>

`CreateThreads` 16

Allows you to create threads in the channel

<a name='Guilded.Base.Permissions.ChatPermissions.Manage'></a>

`Manage` 84

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageMessages](ChatPermissions#Guilded.Base.Permissions.ChatPermissions.ManageMessages 'Guilded.Base.Permissions.ChatPermissions.ManageMessages')  
- [CreateThreads](ChatPermissions#Guilded.Base.Permissions.ChatPermissions.CreateThreads 'Guilded.Base.Permissions.ChatPermissions.CreateThreads')  
- [ManageThreads](ChatPermissions#Guilded.Base.Permissions.ChatPermissions.ManageThreads 'Guilded.Base.Permissions.ChatPermissions.ManageThreads')

<a name='Guilded.Base.Permissions.ChatPermissions.ManageMessages'></a>

`ManageMessages` 4

Allows you to delete chat messages by other members or pin any message

<a name='Guilded.Base.Permissions.ChatPermissions.ManageThreads'></a>

`ManageThreads` 64

Allows you to archive and restore threads

<a name='Guilded.Base.Permissions.ChatPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.ChatPermissions.ReadMessages'></a>

`ReadMessages` 2

Allows you to read chat messages

<a name='Guilded.Base.Permissions.ChatPermissions.SendMessages'></a>

`SendMessages` 1

Allows you to send chat messages

<a name='Guilded.Base.Permissions.ChatPermissions.SendThreadMessages'></a>

`SendThreadMessages` 32

Allows you to reply to threads in the channel

### See Also
- [AnnouncementPermissions](AnnouncementPermissions 'Guilded.Base.Permissions.AnnouncementPermissions')
- [BotPermissions](BotPermissions 'Guilded.Base.Permissions.BotPermissions')
- [BracketPermissions](BracketPermissions 'Guilded.Base.Permissions.BracketPermissions')
- [CalendarPermissions](CalendarPermissions 'Guilded.Base.Permissions.CalendarPermissions')
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