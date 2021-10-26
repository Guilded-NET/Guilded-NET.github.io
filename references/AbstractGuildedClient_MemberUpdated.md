
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.MemberUpdated Property

An event that occurs once a member gets updated.
```csharp
public System.IObservable<Guilded.NET.Base.Events.MemberUpdatedEvent> MemberUpdated { get; }
```


#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[MemberUpdatedEvent](https://guilded-net.github.io/references/MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### Remarks
  
An event of the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from role update(see [RolesUpdatedEvent](https://guilded-net.github.io/references/RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')).

### See Also
- [RolesUpdatedEvent](https://guilded-net.github.io/references/RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](https://guilded-net.github.io/references/XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](https://guilded-net.github.io/references/WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [Member](https://guilded-net.github.io/references/Member 'Guilded.NET.Base.Teams.Member')