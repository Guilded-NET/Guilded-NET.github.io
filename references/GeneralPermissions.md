---
title: GeneralPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to servers."
---

## GeneralPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions.md 'Guilded.Base.Permissions')

Permissions related to servers.

```csharp
public enum GeneralPermissions
```

### Remarks
  
Defines team and channel permissions related to server management.
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
- [UpdateServer](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.UpdateServer 'Guilded.Base.Permissions.GeneralPermissions.UpdateServer')  
- [KickBanMembers](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.KickBanMembers 'Guilded.Base.Permissions.GeneralPermissions.KickBanMembers')  
- [ManageChannels](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.ManageChannels 'Guilded.Base.Permissions.GeneralPermissions.ManageChannels')  
- [ManageWebhooks](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.ManageWebhooks 'Guilded.Base.Permissions.GeneralPermissions.ManageWebhooks')  
- [ManageGroups](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.ManageGroups 'Guilded.Base.Permissions.GeneralPermissions.ManageGroups')  
- [ManageRoles](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.ManageRoles 'Guilded.Base.Permissions.GeneralPermissions.ManageRoles')

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