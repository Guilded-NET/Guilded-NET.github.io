
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## MessageCreatedEvent Class
An event that occurs once someone creates a message.  
```csharp
public class MessageCreatedEvent : Guilded.NET.Base.Events.MessageEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [Guilded.NET.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;') &#x27A1; [MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent') &#x27A1; MessageCreatedEvent  
### Remarks
An event that occurs once someone creates/posts a message in the chat.



When receiving this event, [UpdatedAt](Message_UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') will never hold a value.



In API, this event is called `ChatMessageCreated`.

#### See Also
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
