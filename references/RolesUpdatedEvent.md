
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## RolesUpdatedEvent Class

An event that occurs once someone receives or loses a role.
```csharp
public class RolesUpdatedEvent : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; RolesUpdatedEvent

### Remarks
  
An event of the name `teamRolesUpdated` and opcode `0` that occurs once role holder either loses a role or receives it. This event does not give a list of lost/received events or give a previous role list, so previous role list must be cached, if necessary.

### See Also
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [Member](Member 'Guilded.NET.Base.Teams.Member')

| Properties | |
| :--- | :--- |
| [MemberRoleIds](RolesUpdatedEvent_MemberRoleIds 'Guilded.NET.Base.Events.RolesUpdatedEvent.MemberRoleIds') | The list of receiving/losing member and current roles. |
| [UpdatedUsers](RolesUpdatedEvent_UpdatedUsers 'Guilded.NET.Base.Events.RolesUpdatedEvent.UpdatedUsers') | The array of updated users. |
