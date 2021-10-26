
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## MessageUpdatedEvent Class

An event that occurs once someone edits a message.
```csharp
public class MessageUpdatedEvent : Guilded.NET.Base.Events.MessageEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [Guilded.NET.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;') &#x27A1; [MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent') &#x27A1; MessageUpdatedEvent

### Remarks
  
An event of the name `ChatMessageUpdated` and opcode `0` that occurs once someone updates/edits a message in the chat.  
  
When receiving this event, [UpdatedAt](Message_UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') will always hold a value.

### See Also
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
- [Message](Message 'Guilded.NET.Base.Content.Message')

| Properties | |
| :--- | :--- |
| [UpdatedAt](MessageUpdatedEvent_UpdatedAt 'Guilded.NET.Base.Events.MessageUpdatedEvent.UpdatedAt') | The date of when the message was updated. |
