
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## GuildedSocketMessage Class

Message that was received from a WebSocket client.
```csharp
public class GuildedSocketMessage : Guilded.NET.Base.ClientObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#x27A1; GuildedSocketMessage

### Remarks
  
Any message that can be received the Guilded WebSocket, including Guilded events.

### See Also
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')

| Properties | |
| :--- | :--- |
| [EventName](GuildedSocketMessage_EventName 'Guilded.NET.Base.Events.GuildedSocketMessage.EventName') | The name of the event received. |
| [MessageId](GuildedSocketMessage_MessageId 'Guilded.NET.Base.Events.GuildedSocketMessage.MessageId') | An identifier that allows the event to be replayed. |
| [Opcode](GuildedSocketMessage_Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode') | An operation code that tells about the message. |
| [RawData](GuildedSocketMessage_RawData 'Guilded.NET.Base.Events.GuildedSocketMessage.RawData') | The data associated with the event. |
