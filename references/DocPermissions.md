---
title: DocPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents channel permissions related to documents."
---

## DocPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions 'Guilded.Base.Permissions')

Represents channel permissions related to documents.

```csharp
public enum DocPermissions
```
### Fields

<a name='Guilded.Base.Permissions.DocPermissions.All'></a>

`All` 15

All of the permissions combined.

<a name='Guilded.Base.Permissions.DocPermissions.Basic'></a>

`Basic` 3

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateDocs](DocPermissions#Guilded.Base.Permissions.DocPermissions.CreateDocs 'Guilded.Base.Permissions.DocPermissions.CreateDocs')  
- [ViewDocs](DocPermissions#Guilded.Base.Permissions.DocPermissions.ViewDocs 'Guilded.Base.Permissions.DocPermissions.ViewDocs')

<a name='Guilded.Base.Permissions.DocPermissions.CreateDocs'></a>

`CreateDocs` 1

Allows you to create docs

<a name='Guilded.Base.Permissions.DocPermissions.Manage'></a>

`Manage` 12

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageDocs](DocPermissions#Guilded.Base.Permissions.DocPermissions.ManageDocs 'Guilded.Base.Permissions.DocPermissions.ManageDocs')  
- [RemoveDocs](DocPermissions#Guilded.Base.Permissions.DocPermissions.RemoveDocs 'Guilded.Base.Permissions.DocPermissions.RemoveDocs')

<a name='Guilded.Base.Permissions.DocPermissions.ManageDocs'></a>

`ManageDocs` 4

Allows you to update docs created by others and move them to other channels

<a name='Guilded.Base.Permissions.DocPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.DocPermissions.RemoveDocs'></a>

`RemoveDocs` 8

Allows you to remove docs created by others

<a name='Guilded.Base.Permissions.DocPermissions.ViewDocs'></a>

`ViewDocs` 2

Allows you to view docs

### See Also
- [AnnouncementPermissions](AnnouncementPermissions 'Guilded.Base.Permissions.AnnouncementPermissions')
- [BotPermissions](BotPermissions 'Guilded.Base.Permissions.BotPermissions')
- [BracketPermissions](BracketPermissions 'Guilded.Base.Permissions.BracketPermissions')
- [CalendarPermissions](CalendarPermissions 'Guilded.Base.Permissions.CalendarPermissions')
- [ChatPermissions](ChatPermissions 'Guilded.Base.Permissions.ChatPermissions')
- [CustomPermissions](CustomPermissions 'Guilded.Base.Permissions.CustomPermissions')
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