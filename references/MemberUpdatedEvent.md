
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## MemberUpdatedEvent Class
An event that occurs once a member gets updated.  
```csharp
public class MemberUpdatedEvent : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; MemberUpdatedEvent  
### Remarks
An event that occurs once member receives any update, apart from role update(see [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')).



API calls this event `TeamMemberUpdated`.

| Properties | |
| :--- | :--- |
| [MemberId](MemberUpdatedEvent_MemberId 'Guilded.NET.Base.Events.MemberUpdatedEvent.MemberId') | The identifier of the member.<br/> |
| [UserInfo](MemberUpdatedEvent_UserInfo 'Guilded.NET.Base.Events.MemberUpdatedEvent.UserInfo') | The info about updated member.<br/> |

#### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
