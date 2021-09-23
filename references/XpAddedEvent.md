
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## XpAddedEvent Class
An event that occurs once XP is given to a set of users.  
```csharp
public class XpAddedEvent : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; XpAddedEvent  
### Remarks
An event that occurs once [Amount](XpAddedEvent_Amount 'Guilded.NET.Base.Events.XpAddedEvent.Amount') XP is given to [Users](XpAddedEvent_Users 'Guilded.NET.Base.Events.XpAddedEvent.Users').



This can be given to a couple users, instead of it being restricted to one user.



[XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent') can only occur in teams, including tournaments.



In API, this event is called `TeamXpAdded`.

| Properties | |
| :--- | :--- |
| [Amount](XpAddedEvent_Amount 'Guilded.NET.Base.Events.XpAddedEvent.Amount') | The amount of XP given to the users.<br/> |
| [FirstUser](XpAddedEvent_FirstUser 'Guilded.NET.Base.Events.XpAddedEvent.FirstUser') | Gets the first XP receiving user.<br/> |
| [LastUser](XpAddedEvent_LastUser 'Guilded.NET.Base.Events.XpAddedEvent.LastUser') | Gets the last XP receiving user.<br/> |
| [Users](XpAddedEvent_Users 'Guilded.NET.Base.Events.XpAddedEvent.Users') | The identifiers of all users that received that amount of XP.<br/> |

#### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
