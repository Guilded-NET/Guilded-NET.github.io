
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## GuildedEvent Class
Event that was received from the websocket.  
```csharp
public class GuildedEvent : Guilded.NET.Base.ClientObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#x27A1; GuildedEvent  

| Properties | |
| :--- | :--- |
| [EventName](GuildedEvent_EventName 'Guilded.NET.Base.Events.GuildedEvent.EventName') | The name of the event received.<br/> |
| [MessageId](GuildedEvent_MessageId 'Guilded.NET.Base.Events.GuildedEvent.MessageId') | An identifier that allows the event to be replayed.<br/> |
| [Opcode](GuildedEvent_Opcode 'Guilded.NET.Base.Events.GuildedEvent.Opcode') | An operation code that tells about the event, which was received.<br/> |
| [RawData](GuildedEvent_RawData 'Guilded.NET.Base.Events.GuildedEvent.RawData') | The data associated with the event.<br/> |

#### See Also
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
