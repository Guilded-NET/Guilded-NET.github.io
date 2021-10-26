
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.RolesUpdated Property

An event that occurs once someone receives or loses a role.
```csharp
public System.IObservable<Guilded.NET.Base.Events.RolesUpdatedEvent> RolesUpdated { get; }
```


#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[RolesUpdatedEvent](https://guilded-net.github.io/references/RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### Remarks
  
An event of the name `teamRolesUpdated` and opcode `0` that occurs once role holder either loses a role or receives it. This event does not give a list of lost/received events or give a previous role list, so previous role list must be cached, if necessary.

### See Also
- [MemberUpdatedEvent](https://guilded-net.github.io/references/MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](https://guilded-net.github.io/references/XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](https://guilded-net.github.io/references/WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [Member](https://guilded-net.github.io/references/Member 'Guilded.NET.Base.Teams.Member')