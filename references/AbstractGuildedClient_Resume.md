
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.Resume Property
Event that occurs when client passes last event message identifier.  
```csharp
public System.IObservable<Guilded.NET.Base.Events.ResumeEvent> Resume { get; }
```

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')
### Remarks
[ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent') only occurs if last event message identifier is passed to the WebSocket in `guilded-last-message-id` header. This event is only received after all events are given to the client and normal events are being received again.



In API, this event has no name but has an event opcode of `2`.

#### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')
- [InitWebsocket(string, Uri)](BaseGuildedClient_InitWebsocket(string_Uri) 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(System.String,System.Uri)')
