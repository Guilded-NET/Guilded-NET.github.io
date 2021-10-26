
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.Resume Property

Event that occurs when client passes last event message identifier.
```csharp
public System.IObservable<Guilded.NET.Base.Events.ResumeEvent> Resume { get; }
```


#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[ResumeEvent](https://guilded-net.github.io/references/ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### Remarks
  
[ResumeEvent](https://guilded-net.github.io/references/ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent') only occurs if last event message identifier is passed to the WebSocket in `guilded-last-message-id` header. This event is only received after all events are given to the client and normal events are being received again.  
  
In API, this event has no name but has an event opcode of `2`.

### See Also
- [WelcomeEvent](https://guilded-net.github.io/references/WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [GuildedWebsocketException](https://guilded-net.github.io/references/GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')
- [InitWebsocket(string, Uri)](https://guilded-net.github.io/references/BaseGuildedClient_InitWebsocket(string_Uri) 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(System.String,System.Uri)')