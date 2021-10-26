
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.Pong Property

Event that occurs when pong is received.
```csharp
public System.IObservable<Guilded.NET.Base.Events.GuildedSocketMessage> Pong { get; }
```


#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[GuildedSocketMessage](https://guilded-net.github.io/references/GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### Remarks
  
An event of opcode `10` that is received as a response once client sends a ping.  
  
This does not have any associated data with it.