---
title: ListPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to lists."
---

## ListPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions.md 'Guilded.Base.Permissions')

Permissions related to lists.

```csharp
public enum ListPermissions
```

### Remarks
  
Defines channel permissions related to lists/tasks in list channels.
### Fields

<a name='Guilded.Base.Permissions.ListPermissions.All'></a>

`All` 63

All of the permissions combined.

<a name='Guilded.Base.Permissions.ListPermissions.Basic'></a>

`Basic` 19

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateListItem](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.CreateListItem 'Guilded.Base.Permissions.ListPermissions.CreateListItem')  
- [ViewListItems](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.ViewListItems 'Guilded.Base.Permissions.ListPermissions.ViewListItems')  
- [CompleteListItems](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.CompleteListItems 'Guilded.Base.Permissions.ListPermissions.CompleteListItems')

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
- [ManageListItems](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.ManageListItems 'Guilded.Base.Permissions.ListPermissions.ManageListItems')  
- [RemoveListItems](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.RemoveListItems 'Guilded.Base.Permissions.ListPermissions.RemoveListItems')  
- [ReorderListItems](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.ReorderListItems 'Guilded.Base.Permissions.ListPermissions.ReorderListItems')

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