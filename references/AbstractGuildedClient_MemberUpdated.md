
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.MemberUpdated Property
An event that occurs once a member gets updated.  
```csharp
public System.IObservable<Guilded.NET.Base.Events.MemberUpdatedEvent> MemberUpdated { get; }
```

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')
### Remarks
An event that occurs once member receives any update, apart from role update(see [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')).



API calls this event `TeamMemberUpdated`.

#### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
