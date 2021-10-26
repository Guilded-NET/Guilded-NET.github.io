
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Permissions](Guilded_NET_Base#Guilded_NET_Base_Permissions 'Guilded.NET.Base.Permissions')
## SchedulingPermissions Enum

Permissions related to scheduling.
```csharp
public enum SchedulingPermissions
```
### Fields

<a name='Guilded_NET_Base_Permissions_SchedulingPermissions_All'></a>
`All` 11

All of the permissions combined.

<a name='Guilded_NET_Base_Permissions_SchedulingPermissions_Basic'></a>
`Basic` 3

A simple permission combination allowing writing permissions and reading permissions/

### Remarks
  
Sets these permissions:  
- [CreateSchedule](SchedulingPermissions#Guilded_NET_Base_Permissions_SchedulingPermissions_CreateSchedule 'Guilded.NET.Base.Permissions.SchedulingPermissions.CreateSchedule')  
- [ViewSchedules](SchedulingPermissions#Guilded_NET_Base_Permissions_SchedulingPermissions_ViewSchedules 'Guilded.NET.Base.Permissions.SchedulingPermissions.ViewSchedules')

<a name='Guilded_NET_Base_Permissions_SchedulingPermissions_CreateSchedule'></a>
`CreateSchedule` 1

Allows you to let server know your available schedule

<a name='Guilded_NET_Base_Permissions_SchedulingPermissions_DeleteSchedule'></a>
`DeleteSchedule` 8

Allows you to remove availabilities created by others

<a name='Guilded_NET_Base_Permissions_SchedulingPermissions_Manage'></a>
`Manage` 8

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [DeleteSchedule](SchedulingPermissions#Guilded_NET_Base_Permissions_SchedulingPermissions_DeleteSchedule 'Guilded.NET.Base.Permissions.SchedulingPermissions.DeleteSchedule')

<a name='Guilded_NET_Base_Permissions_SchedulingPermissions_None'></a>
`None` 0

No given permissions.

<a name='Guilded_NET_Base_Permissions_SchedulingPermissions_ViewSchedules'></a>
`ViewSchedules` 2

Allows you to view server member's schedule

### Remarks
  
Defines channel permissions related to availability in scheduling channels.