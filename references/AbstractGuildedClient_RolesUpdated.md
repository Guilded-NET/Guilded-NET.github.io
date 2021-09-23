
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.RolesUpdated Property
An event that occurs once someone receives or loses a role.  
```csharp
public System.IObservable<Guilded.NET.Base.Events.RolesUpdatedEvent> RolesUpdated { get; }
```

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')
### Remarks
An event that occurs once role holder either loses a role or receives it. This event does not give a list of lost/received events or give a previous role list, so previous role list must be cached, if necessary.



In API, this event is called `teamRolesUpdated`.

#### See Also
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
