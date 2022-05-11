---
title: GeneralPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents team and channel permissions related to server management."
---

## GeneralPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions 'Guilded.Base.Permissions')

Represents team and channel permissions related to server management.

```csharp
public enum GeneralPermissions
```
### Fields

<a name='Guilded.Base.Permissions.GeneralPermissions.All'></a>

`All` 31780

All of the permissions combined.

<a name='Guilded.Base.Permissions.GeneralPermissions.InviteMembers'></a>

`InviteMembers` 16

Allows you to directly invite members to the server

<a name='Guilded.Base.Permissions.GeneralPermissions.KickBanMembers'></a>

`KickBanMembers` 32

Allows you to kick or ban members from the server

<a name='Guilded.Base.Permissions.GeneralPermissions.Manage'></a>

`Manage` 23588

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [UpdateServer](GeneralPermissions#Guilded.Base.Permissions.GeneralPermissions.UpdateServer 'Guilded.Base.Permissions.GeneralPermissions.UpdateServer')  
- [KickBanMembers](GeneralPermissions#Guilded.Base.Permissions.GeneralPermissions.KickBanMembers 'Guilded.Base.Permissions.GeneralPermissions.KickBanMembers')  
- [ManageChannels](GeneralPermissions#Guilded.Base.Permissions.GeneralPermissions.ManageChannels 'Guilded.Base.Permissions.GeneralPermissions.ManageChannels')  
- [ManageWebhooks](GeneralPermissions#Guilded.Base.Permissions.GeneralPermissions.ManageWebhooks 'Guilded.Base.Permissions.GeneralPermissions.ManageWebhooks')  
- [ManageGroups](GeneralPermissions#Guilded.Base.Permissions.GeneralPermissions.ManageGroups 'Guilded.Base.Permissions.GeneralPermissions.ManageGroups')  
- [ManageRoles](GeneralPermissions#Guilded.Base.Permissions.GeneralPermissions.ManageRoles 'Guilded.Base.Permissions.GeneralPermissions.ManageRoles')

<a name='Guilded.Base.Permissions.GeneralPermissions.ManageChannels'></a>

`ManageChannels` 1024

Allows you to create new channels and edit or delete existing ones

<a name='Guilded.Base.Permissions.GeneralPermissions.ManageGroups'></a>

`ManageGroups` 4096

Allows you to create new groups and edit or delete existing ones

<a name='Guilded.Base.Permissions.GeneralPermissions.ManageRoles'></a>

`ManageRoles` 16384

Allows you to update the server's roles

<a name='Guilded.Base.Permissions.GeneralPermissions.ManageWebhooks'></a>

`ManageWebhooks` 2048

Allows you to create new webhooks and edit or delete existing ones

<a name='Guilded.Base.Permissions.GeneralPermissions.MentionEveryoneHere'></a>

`MentionEveryoneHere` 8192

Allows you to use @everyone and @here mentions

<a name='Guilded.Base.Permissions.GeneralPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.GeneralPermissions.UpdateServer'></a>

`UpdateServer` 4

Allows you to update server's settings

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
- [ListPermissions](ListPermissions 'Guilded.Base.Permissions.ListPermissions')
- [MatchmakingPermissions](MatchmakingPermissions 'Guilded.Base.Permissions.MatchmakingPermissions')
- [MediaPermissions](MediaPermissions 'Guilded.Base.Permissions.MediaPermissions')
- [RecruitmentPermissions](RecruitmentPermissions 'Guilded.Base.Permissions.RecruitmentPermissions')
- [SchedulingPermissions](SchedulingPermissions 'Guilded.Base.Permissions.SchedulingPermissions')
- [StreamPermissions](StreamPermissions 'Guilded.Base.Permissions.StreamPermissions')
- [VoicePermissions](VoicePermissions 'Guilded.Base.Permissions.VoicePermissions')
- [XpPermissions](XpPermissions 'Guilded.Base.Permissions.XpPermissions')