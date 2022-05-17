---
title: ListPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents channel permissions related to lists/tasks in list channels."
---

## ListPermissions Enum
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions 'Guilded.Base.Permissions')

Represents channel permissions related to lists/tasks in list channels.

```csharp
public enum ListPermissions
```
### Fields

<a name='Guilded.Base.Permissions.ListPermissions.All'></a>

`All` 63

All of the permissions combined.

<a name='Guilded.Base.Permissions.ListPermissions.Basic'></a>

`Basic` 19

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateListItem](ListPermissions#Guilded.Base.Permissions.ListPermissions.CreateListItem 'Guilded.Base.Permissions.ListPermissions.CreateListItem')  
- [ViewListItems](ListPermissions#Guilded.Base.Permissions.ListPermissions.ViewListItems 'Guilded.Base.Permissions.ListPermissions.ViewListItems')  
- [CompleteListItems](ListPermissions#Guilded.Base.Permissions.ListPermissions.CompleteListItems 'Guilded.Base.Permissions.ListPermissions.CompleteListItems')

<a name='Guilded.Base.Permissions.ListPermissions.CompleteListItems'></a>

`CompleteListItems` 16

Allows you to complete list items created by others

<a name='Guilded.Base.Permissions.ListPermissions.CreateListItem'></a>

`CreateListItem` 1

Allows you to create list items

<a name='Guilded.Base.Permissions.ListPermissions.Manage'></a>

`Manage` 44

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageListItems](ListPermissions#Guilded.Base.Permissions.ListPermissions.ManageListItems 'Guilded.Base.Permissions.ListPermissions.ManageListItems')  
- [RemoveListItems](ListPermissions#Guilded.Base.Permissions.ListPermissions.RemoveListItems 'Guilded.Base.Permissions.ListPermissions.RemoveListItems')  
- [ReorderListItems](ListPermissions#Guilded.Base.Permissions.ListPermissions.ReorderListItems 'Guilded.Base.Permissions.ListPermissions.ReorderListItems')

<a name='Guilded.Base.Permissions.ListPermissions.ManageListItems'></a>

`ManageListItems` 4

Allows you to edit list item messages by others and move list items to other channels

<a name='Guilded.Base.Permissions.ListPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.ListPermissions.RemoveListItems'></a>

`RemoveListItems` 8

Allows you to remove list items created by others

<a name='Guilded.Base.Permissions.ListPermissions.ReorderListItems'></a>

`ReorderListItems` 32

Allows you to reorder list items

<a name='Guilded.Base.Permissions.ListPermissions.ViewListItems'></a>

`ViewListItems` 2

Allows you to view list items

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
- [MatchmakingPermissions](MatchmakingPermissions 'Guilded.Base.Permissions.MatchmakingPermissions')
- [MediaPermissions](MediaPermissions 'Guilded.Base.Permissions.MediaPermissions')
- [RecruitmentPermissions](RecruitmentPermissions 'Guilded.Base.Permissions.RecruitmentPermissions')
- [SchedulingPermissions](SchedulingPermissions 'Guilded.Base.Permissions.SchedulingPermissions')
- [StreamPermissions](StreamPermissions 'Guilded.Base.Permissions.StreamPermissions')
- [VoicePermissions](VoicePermissions 'Guilded.Base.Permissions.VoicePermissions')
- [XpPermissions](XpPermissions 'Guilded.Base.Permissions.XpPermissions')