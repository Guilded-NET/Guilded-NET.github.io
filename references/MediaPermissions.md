
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Permissions](Guilded_NET_Base#Guilded_NET_Base_Permissions 'Guilded.NET.Base.Permissions')
## MediaPermissions Enum

Permissions related to media.
```csharp
public enum MediaPermissions
```
### Fields

<a name='Guilded_NET_Base_Permissions_MediaPermissions_All'></a>
`All` 15

All of the permissions combined.

<a name='Guilded_NET_Base_Permissions_MediaPermissions_Basic'></a>
`Basic` 3

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateMedia](MediaPermissions#Guilded_NET_Base_Permissions_MediaPermissions_CreateMedia 'Guilded.NET.Base.Permissions.MediaPermissions.CreateMedia')  
- [SeeMedia](MediaPermissions#Guilded_NET_Base_Permissions_MediaPermissions_SeeMedia 'Guilded.NET.Base.Permissions.MediaPermissions.SeeMedia')

<a name='Guilded_NET_Base_Permissions_MediaPermissions_CreateMedia'></a>
`CreateMedia` 1

Allows you to create media

<a name='Guilded_NET_Base_Permissions_MediaPermissions_Manage'></a>
`Manage` 12

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageMedia](MediaPermissions#Guilded_NET_Base_Permissions_MediaPermissions_ManageMedia 'Guilded.NET.Base.Permissions.MediaPermissions.ManageMedia')  
- [RemoveMedia](MediaPermissions#Guilded_NET_Base_Permissions_MediaPermissions_RemoveMedia 'Guilded.NET.Base.Permissions.MediaPermissions.RemoveMedia')

<a name='Guilded_NET_Base_Permissions_MediaPermissions_ManageMedia'></a>
`ManageMedia` 4

Allows you to edit media created by others and move media items to other channels

<a name='Guilded_NET_Base_Permissions_MediaPermissions_None'></a>
`None` 0

No given permissions.

<a name='Guilded_NET_Base_Permissions_MediaPermissions_RemoveMedia'></a>
`RemoveMedia` 8

Allows you to remove media created by others

<a name='Guilded_NET_Base_Permissions_MediaPermissions_SeeMedia'></a>
`SeeMedia` 2

Allows you to see media

### Remarks
  
Defines channel permissions related to media in media channels.