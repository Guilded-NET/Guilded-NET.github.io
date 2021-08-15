#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base.md#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## GuildedEvent Class
Event that was received from the websocket.  
```csharp
public class GuildedEvent : Guilded.NET.Base.ClientObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.NET.Base.ClientObject') &#129106; GuildedEvent  

| Properties | |
| :--- | :--- |
| [EventName](GuildedEvent_EventName.md 'Guilded.NET.Base.Events.GuildedEvent.EventName') | The name of the event received.<br/> |
| [MessageId](GuildedEvent_MessageId.md 'Guilded.NET.Base.Events.GuildedEvent.MessageId') | An identifier that allows the event to be replayed.<br/> |
| [Opcode](GuildedEvent_Opcode.md 'Guilded.NET.Base.Events.GuildedEvent.Opcode') | An operation code that tells about the event, which was received.<br/> |
| [RawData](GuildedEvent_RawData.md 'Guilded.NET.Base.Events.GuildedEvent.RawData') | Data associated with the event.<br/> |
#### See Also
- [MessageCreatedEvent](MessageCreatedEvent.md 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent.md 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.NET.Base.Events.MessageDeletedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent.md 'Guilded.NET.Base.Events.WelcomeEvent')
