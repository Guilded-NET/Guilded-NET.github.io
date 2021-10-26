
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Permissions](Guilded_NET_Base#Guilded_NET_Base_Permissions 'Guilded.NET.Base.Permissions')
## CalendarPermissions Enum

Permissions related to calendar.
```csharp
public enum CalendarPermissions
```
### Fields

<a name='Guilded_NET_Base_Permissions_CalendarPermissions_All'></a>
`All` 31

All of the permissions combined.

<a name='Guilded_NET_Base_Permissions_CalendarPermissions_Basic'></a>
`Basic` 3

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateEvents](CalendarPermissions#Guilded_NET_Base_Permissions_CalendarPermissions_CreateEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.CreateEvents')  
- [ViewEvents](CalendarPermissions#Guilded_NET_Base_Permissions_CalendarPermissions_ViewEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.ViewEvents')

<a name='Guilded_NET_Base_Permissions_CalendarPermissions_CreateEvents'></a>
`CreateEvents` 1

Allows you to create events

<a name='Guilded_NET_Base_Permissions_CalendarPermissions_EditRSVPs'></a>
`EditRSVPs` 16

Allows you to edit RSVP status for members in an event

<a name='Guilded_NET_Base_Permissions_CalendarPermissions_Manage'></a>
`Manage` 28

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageEvents](CalendarPermissions#Guilded_NET_Base_Permissions_CalendarPermissions_ManageEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.ManageEvents')  
- [RemoveEvents](CalendarPermissions#Guilded_NET_Base_Permissions_CalendarPermissions_RemoveEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.RemoveEvents')  
- [EditRSVPs](CalendarPermissions#Guilded_NET_Base_Permissions_CalendarPermissions_EditRSVPs 'Guilded.NET.Base.Permissions.CalendarPermissions.EditRSVPs')

<a name='Guilded_NET_Base_Permissions_CalendarPermissions_ManageEvents'></a>
`ManageEvents` 4

Allows you to update events created by others and move them to other channel

<a name='Guilded_NET_Base_Permissions_CalendarPermissions_None'></a>
`None` 0

No given permissions.

<a name='Guilded_NET_Base_Permissions_CalendarPermissions_RemoveEvents'></a>
`RemoveEvents` 8

Allows you to remove events created by others

<a name='Guilded_NET_Base_Permissions_CalendarPermissions_ViewEvents'></a>
`ViewEvents` 2

Allows you to view events

### Remarks
  
Defines channel permissions for calendar and event related things.