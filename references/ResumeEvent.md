
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## ResumeEvent Class
Event that occurs when client passes last event message identifier.  
```csharp
public class ResumeEvent : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; ResumeEvent  
### Remarks
[ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent') only occurs if last event message identifier is passed to the WebSocket in `guilded-last-message-id` header. This event is only received after all events are given to the client and normal events are being received again.



In API, this event has no name but has an event opcode of `2`.

| Properties | |
| :--- | :--- |
| [MessageId](ResumeEvent_MessageId 'Guilded.NET.Base.Events.ResumeEvent.MessageId') | The identifier of the last received event.<br/> |

#### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')
- [InitWebsocket(string, Uri)](BaseGuildedClient_InitWebsocket(string_Uri) 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(string, System.Uri)')
