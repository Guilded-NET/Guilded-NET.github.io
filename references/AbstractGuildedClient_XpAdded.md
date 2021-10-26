
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.XpAdded Property

An event that occurs once XP is given to a set of users.
```csharp
public System.IObservable<Guilded.NET.Base.Events.XpAddedEvent> XpAdded { get; }
```


#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[XpAddedEvent](https://guilded-net.github.io/references/XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### Remarks
  
An event of the name `TeamXpAdded` and opcode `0` that occurs once [Amount](https://guilded-net.github.io/references/XpAddedEvent_Amount 'Guilded.NET.Base.Events.XpAddedEvent.Amount') XP is given to [Users](https://guilded-net.github.io/references/XpAddedEvent_Users 'Guilded.NET.Base.Events.XpAddedEvent.Users'). This can be given to a couple users, instead of it being restricted to one user. [XpAddedEvent](https://guilded-net.github.io/references/XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent') can only occur in teams and tournaments.

### See Also
- [WelcomeEvent](https://guilded-net.github.io/references/WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [RolesUpdatedEvent](https://guilded-net.github.io/references/RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
- [Member](https://guilded-net.github.io/references/Member 'Guilded.NET.Base.Teams.Member')