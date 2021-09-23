
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.XpAdded Property
An event that occurs once XP is given to a set of users.  
```csharp
public System.IObservable<Guilded.NET.Base.Events.XpAddedEvent> XpAdded { get; }
```

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')
### Remarks
An event that occurs once [Amount](XpAddedEvent_Amount 'Guilded.NET.Base.Events.XpAddedEvent.Amount') XP is given to [Users](XpAddedEvent_Users 'Guilded.NET.Base.Events.XpAddedEvent.Users'). This can be given to a couple users, instead of it being restricted to one user. [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent') can only occur in teams and tournaments.



In API, this event is called `TeamXpAdded`.

#### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
