
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## WelcomeEvent Class

An event that is received once WebSocket is initiated.
```csharp
public class WelcomeEvent : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; WelcomeEvent

### Remarks
  
This event is received once WebSocket (re)connects to Guilded.  
  
[WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent') can be used to ensure that WebSocket has connected to Guilded or that the events from Guilded are being received.  
  
This event has no name in API but has an event opcode of `1`.

### See Also
- [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')

| Properties | |
| :--- | :--- |
| [HeartbeatInterval](WelcomeEvent_HeartbeatInterval 'Guilded.NET.Base.Events.WelcomeEvent.HeartbeatInterval') | The duration between heartbeats. |
| [LastMessageId](WelcomeEvent_LastMessageId 'Guilded.NET.Base.Events.WelcomeEvent.LastMessageId') | The identifier of the last event sent. |
