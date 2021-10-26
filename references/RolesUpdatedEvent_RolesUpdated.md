
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
## RolesUpdatedEvent.RolesUpdated Class

Defines a role list holder and their role list.
```csharp
public class RolesUpdatedEvent.RolesUpdated
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; RolesUpdated

### Remarks
  
Defines a receiving a role holder [UserId](RolesUpdatedEvent_RolesUpdated_UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') and their current role list [RoleIds](RolesUpdatedEvent_RolesUpdated_RoleIds 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds'). Roles that were added or removed, or previous role list are not provided. If necessary, previous role list should be cached before-hand.

### See Also
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')
- [Member](Member 'Guilded.NET.Base.Teams.Member')

| Properties | |
| :--- | :--- |
| [RoleIds](RolesUpdatedEvent_RolesUpdated_RoleIds 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds') | The list of roles [UserId](RolesUpdatedEvent_RolesUpdated_UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') holds. |
| [UserId](RolesUpdatedEvent_RolesUpdated_UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') | The identifier of the role holder. |
