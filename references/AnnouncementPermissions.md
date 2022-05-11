---
title: AnnouncementPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to announcements."
---

## AnnouncementPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions.md 'Guilded.Base.Permissions')

Permissions related to announcements.

```csharp
public enum AnnouncementPermissions
```

### Remarks
  
Defines channel permissions for announcement related things.
### Fields

<a name='Guilded.Base.Permissions.AnnouncementPermissions.All'></a>

`All` 7

All of the permissions combined.

<a name='Guilded.Base.Permissions.AnnouncementPermissions.Basic'></a>

`Basic` 1

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateAnnouncements](AnnouncementPermissions.md#Guilded.Base.Permissions.AnnouncementPermissions.CreateAnnouncements 'Guilded.Base.Permissions.AnnouncementPermissions.CreateAnnouncements')

<a name='Guilded.Base.Permissions.AnnouncementPermissions.CreateAnnouncements'></a>

`CreateAnnouncements` 1

Allows you to create and remove announcements

<a name='Guilded.Base.Permissions.AnnouncementPermissions.Manage'></a>

`Manage` 4

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageAnnouncements](AnnouncementPermissions.md#Guilded.Base.Permissions.AnnouncementPermissions.ManageAnnouncements 'Guilded.Base.Permissions.AnnouncementPermissions.ManageAnnouncements')

<a name='Guilded.Base.Permissions.AnnouncementPermissions.ManageAnnouncements'></a>

`ManageAnnouncements` 4

Allows you to delete announcements by other members or pin any announcement

<a name='Guilded.Base.Permissions.AnnouncementPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.AnnouncementPermissions.ViewAnnouncements'></a>

`ViewAnnouncements` 2

Allows you to view announcements