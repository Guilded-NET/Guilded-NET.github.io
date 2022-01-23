---
title: ListPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to lists.

```csharp
public enum ListPermissions
```"
---

## ListPermissions Enum
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Permissions`](Guilded.NET.Base.Permissions 'Guilded.NET.Base.Permissions')

Permissions related to lists.

```csharp
public enum ListPermissions
```

### Remarks
  
Defines channel permissions related to lists/tasks in list channels.
### Fields

<a name='Guilded.NET.Base.Permissions.ListPermissions.All'></a>

`All` 63

All of the permissions combined.

<a name='Guilded.NET.Base.Permissions.ListPermissions.Basic'></a>

`Basic` 19

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateListItem](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.CreateListItem 'Guilded.NET.Base.Permissions.ListPermissions.CreateListItem')  
- [ViewListItems](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.ViewListItems 'Guilded.NET.Base.Permissions.ListPermissions.ViewListItems')  
- [CompleteListItems](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.CompleteListItems 'Guilded.NET.Base.Permissions.ListPermissions.CompleteListItems')

<a name='Guilded.NET.Base.Permissions.ListPermissions.CompleteListItems'></a>

`CompleteListItems` 16

Allows you to complete list items created by others

<a name='Guilded.NET.Base.Permissions.ListPermissions.CreateListItem'></a>

`CreateListItem` 1

Allows you to create list items

<a name='Guilded.NET.Base.Permissions.ListPermissions.Manage'></a>

`Manage` 44

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageListItems](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.ManageListItems 'Guilded.NET.Base.Permissions.ListPermissions.ManageListItems')  
- [RemoveListItems](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.RemoveListItems 'Guilded.NET.Base.Permissions.ListPermissions.RemoveListItems')  
- [ReorderListItems](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.ReorderListItems 'Guilded.NET.Base.Permissions.ListPermissions.ReorderListItems')

<a name='Guilded.NET.Base.Permissions.ListPermissions.ManageListItems'></a>

`ManageListItems` 4

Allows you to edit list item messages by others and move list items to other channels

<a name='Guilded.NET.Base.Permissions.ListPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.NET.Base.Permissions.ListPermissions.RemoveListItems'></a>

`RemoveListItems` 8

Allows you to remove list items created by others

<a name='Guilded.NET.Base.Permissions.ListPermissions.ReorderListItems'></a>

`ReorderListItems` 32

Allows you to reorder list items

<a name='Guilded.NET.Base.Permissions.ListPermissions.ViewListItems'></a>

`ViewListItems` 2

Allows you to view list items