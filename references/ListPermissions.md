
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Permissions](Guilded_NET_Base#Guilded_NET_Base_Permissions 'Guilded.NET.Base.Permissions')
## ListPermissions Enum

Permissions related to lists.
```csharp
public enum ListPermissions
```
### Fields

<a name='Guilded_NET_Base_Permissions_ListPermissions_All'></a>
`All` 63

All of the permissions combined.

<a name='Guilded_NET_Base_Permissions_ListPermissions_Basic'></a>
`Basic` 19

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateListItem](ListPermissions#Guilded_NET_Base_Permissions_ListPermissions_CreateListItem 'Guilded.NET.Base.Permissions.ListPermissions.CreateListItem')  
- [ViewListItems](ListPermissions#Guilded_NET_Base_Permissions_ListPermissions_ViewListItems 'Guilded.NET.Base.Permissions.ListPermissions.ViewListItems')  
- [CompleteListItems](ListPermissions#Guilded_NET_Base_Permissions_ListPermissions_CompleteListItems 'Guilded.NET.Base.Permissions.ListPermissions.CompleteListItems')

<a name='Guilded_NET_Base_Permissions_ListPermissions_CompleteListItems'></a>
`CompleteListItems` 16

Allows you to complete list items created by others

<a name='Guilded_NET_Base_Permissions_ListPermissions_CreateListItem'></a>
`CreateListItem` 1

Allows you to create list items

<a name='Guilded_NET_Base_Permissions_ListPermissions_Manage'></a>
`Manage` 44

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageListItems](ListPermissions#Guilded_NET_Base_Permissions_ListPermissions_ManageListItems 'Guilded.NET.Base.Permissions.ListPermissions.ManageListItems')  
- [RemoveListItems](ListPermissions#Guilded_NET_Base_Permissions_ListPermissions_RemoveListItems 'Guilded.NET.Base.Permissions.ListPermissions.RemoveListItems')  
- [ReorderListItems](ListPermissions#Guilded_NET_Base_Permissions_ListPermissions_ReorderListItems 'Guilded.NET.Base.Permissions.ListPermissions.ReorderListItems')

<a name='Guilded_NET_Base_Permissions_ListPermissions_ManageListItems'></a>
`ManageListItems` 4

Allows you to edit list item messages by others and move list items to other channels

<a name='Guilded_NET_Base_Permissions_ListPermissions_None'></a>
`None` 0

No given permissions.

<a name='Guilded_NET_Base_Permissions_ListPermissions_RemoveListItems'></a>
`RemoveListItems` 8

Allows you to remove list items created by others

<a name='Guilded_NET_Base_Permissions_ListPermissions_ReorderListItems'></a>
`ReorderListItems` 32

Allows you to reorder list items

<a name='Guilded_NET_Base_Permissions_ListPermissions_ViewListItems'></a>
`ViewListItems` 2

Allows you to view list items

### Remarks
  
Defines channel permissions related to lists/tasks in list channels.