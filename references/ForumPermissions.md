---
title: ForumPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents channel permissions related to forums."
---

## ForumPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions 'Guilded.Base.Permissions')

Represents channel permissions related to forums.

```csharp
public enum ForumPermissions
```
### Fields

<a name='Guilded.Base.Permissions.ForumPermissions.All'></a>

`All` 123

All of the permissions combined.

<a name='Guilded.Base.Permissions.ForumPermissions.Basic'></a>

`Basic` 67

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateTopics](ForumPermissions#Guilded.Base.Permissions.ForumPermissions.CreateTopics 'Guilded.Base.Permissions.ForumPermissions.CreateTopics')  
- [ReadForums](ForumPermissions#Guilded.Base.Permissions.ForumPermissions.ReadForums 'Guilded.Base.Permissions.ForumPermissions.ReadForums')  
- [CreateTopicReplies](ForumPermissions#Guilded.Base.Permissions.ForumPermissions.CreateTopicReplies 'Guilded.Base.Permissions.ForumPermissions.CreateTopicReplies')

<a name='Guilded.Base.Permissions.ForumPermissions.CreateTopicReplies'></a>

`CreateTopicReplies` 64

Allows you to create forum topic replies

<a name='Guilded.Base.Permissions.ForumPermissions.CreateTopics'></a>

`CreateTopics` 1

Allows you to create forum topics

<a name='Guilded.Base.Permissions.ForumPermissions.LockTopics'></a>

`LockTopics` 32

Allows you to lock a topic

<a name='Guilded.Base.Permissions.ForumPermissions.Manage'></a>

`Manage` 56

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageTopics](ForumPermissions#Guilded.Base.Permissions.ForumPermissions.ManageTopics 'Guilded.Base.Permissions.ForumPermissions.ManageTopics')  
- [StickyTopics](ForumPermissions#Guilded.Base.Permissions.ForumPermissions.StickyTopics 'Guilded.Base.Permissions.ForumPermissions.StickyTopics')  
- [LockTopics](ForumPermissions#Guilded.Base.Permissions.ForumPermissions.LockTopics 'Guilded.Base.Permissions.ForumPermissions.LockTopics')

<a name='Guilded.Base.Permissions.ForumPermissions.ManageTopics'></a>

`ManageTopics` 8

Allows you to remove topics and replies by others, or move them to other channels

<a name='Guilded.Base.Permissions.ForumPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.ForumPermissions.ReadForums'></a>

`ReadForums` 2

Allows you to read forums

<a name='Guilded.Base.Permissions.ForumPermissions.StickyTopics'></a>

`StickyTopics` 16

Allows you to sticky a topic

### See Also
- [AnnouncementPermissions](AnnouncementPermissions 'Guilded.Base.Permissions.AnnouncementPermissions')
- [BotPermissions](BotPermissions 'Guilded.Base.Permissions.BotPermissions')
- [BracketPermissions](BracketPermissions 'Guilded.Base.Permissions.BracketPermissions')
- [CalendarPermissions](CalendarPermissions 'Guilded.Base.Permissions.CalendarPermissions')
- [ChatPermissions](ChatPermissions 'Guilded.Base.Permissions.ChatPermissions')
- [CustomPermissions](CustomPermissions 'Guilded.Base.Permissions.CustomPermissions')
- [DocPermissions](DocPermissions 'Guilded.Base.Permissions.DocPermissions')
- [FormPermissions](FormPermissions 'Guilded.Base.Permissions.FormPermissions')
- [GeneralPermissions](GeneralPermissions 'Guilded.Base.Permissions.GeneralPermissions')
- [ListPermissions](ListPermissions 'Guilded.Base.Permissions.ListPermissions')
- [MatchmakingPermissions](MatchmakingPermissions 'Guilded.Base.Permissions.MatchmakingPermissions')
- [MediaPermissions](MediaPermissions 'Guilded.Base.Permissions.MediaPermissions')
- [RecruitmentPermissions](RecruitmentPermissions 'Guilded.Base.Permissions.RecruitmentPermissions')
- [SchedulingPermissions](SchedulingPermissions 'Guilded.Base.Permissions.SchedulingPermissions')
- [StreamPermissions](StreamPermissions 'Guilded.Base.Permissions.StreamPermissions')
- [VoicePermissions](VoicePermissions 'Guilded.Base.Permissions.VoicePermissions')
- [XpPermissions](XpPermissions 'Guilded.Base.Permissions.XpPermissions')