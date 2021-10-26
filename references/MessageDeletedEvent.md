
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## MessageDeletedEvent Class

An event that occurs once someone deletes a message.
```csharp
public class MessageDeletedEvent : Guilded.NET.Base.Events.MessageEvent<Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [Guilded.NET.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;')[MessageDeleted](MessageDeletedEvent_MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')[&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;') &#x27A1; MessageDeletedEvent

### Remarks
  
An event of the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat.

### See Also
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeleted](MessageDeletedEvent_MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')
- [Message](Message 'Guilded.NET.Base.Content.Message')

| Properties | |
| :--- | :--- |
| [ChannelId](MessageDeletedEvent_ChannelId 'Guilded.NET.Base.Events.MessageDeletedEvent.ChannelId') | The identifier of the channel where this message is. |
| [DeletedAt](MessageDeletedEvent_DeletedAt 'Guilded.NET.Base.Events.MessageDeletedEvent.DeletedAt') | The date of when the message was deleted. |
| [Id](MessageDeletedEvent_Id 'Guilded.NET.Base.Events.MessageDeletedEvent.Id') | The identifier of the message. |
