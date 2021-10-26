
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.Welcome Property

An event that is received once WebSocket is initiated.
```csharp
public System.IObservable<Guilded.NET.Base.Events.WelcomeEvent> Welcome { get; }
```


#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[WelcomeEvent](https://guilded-net.github.io/references/WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### Remarks
  
This event is received once WebSocket (re)connects to Guilded.  
  
[WelcomeEvent](https://guilded-net.github.io/references/WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent') can be used to ensure that WebSocket has connected to Guilded or that the events from Guilded are being received.  
  
This event has no name in API but has an event opcode of `1`.

### See Also
- [ResumeEvent](https://guilded-net.github.io/references/ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')
- [GuildedWebsocketException](https://guilded-net.github.io/references/GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')