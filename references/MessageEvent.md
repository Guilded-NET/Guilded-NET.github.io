
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Events](index#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## MessageEvent Class
The base for message-related events.  
```csharp
public class MessageEvent : Guilded.NET.Base.Events.MessageEvent<Guilded.NET.Base.Chat.Message>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [Guilded.NET.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;')[Message](Message 'Guilded.NET.Base.Chat.Message')[&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;') &#129106; MessageEvent  

Derived  
&#8627; [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')  
&#8627; [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')  

| Properties | |
| :--- | :--- |
| [ByBot](MessageEvent_ByBot 'Guilded.NET.Base.Events.MessageEvent.ByBot') | Gets whether the message was posted by a bot or webhook.<br/> |
| [Content](MessageEvent_Content 'Guilded.NET.Base.Events.MessageEvent.Content') | The contents of this message as a Markdown string.<br/> |
| [CreatedBy](MessageEvent_CreatedBy 'Guilded.NET.Base.Events.MessageEvent.CreatedBy') | The identifier of the author of this message.<br/> |
| [CreatedByBot](MessageEvent_CreatedByBot 'Guilded.NET.Base.Events.MessageEvent.CreatedByBot') | The identifier of the bot that posted this message.<br/> |
| [CreatedByWebhook](MessageEvent_CreatedByWebhook 'Guilded.NET.Base.Events.MessageEvent.CreatedByWebhook') | The identifier of the webhook that posted this message.<br/> |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](MessageEvent_AddReactionAsync(uint) 'Guilded.NET.Base.Events.MessageEvent.AddReactionAsync(uint)') | Adds a reaction to this message.<br/> |
| [DeleteMessageAsync()](MessageEvent_DeleteMessageAsync() 'Guilded.NET.Base.Events.MessageEvent.DeleteMessageAsync()') | Deletes this message.<br/> |
| [Of(BaseUser)](MessageEvent_Of(BaseUser) 'Guilded.NET.Base.Events.MessageEvent.Of(Guilded.NET.Base.Users.BaseUser)') | Gets whether this message was posted by the given user.<br/> |
| [RemoveReactionAsync(uint)](MessageEvent_RemoveReactionAsync(uint) 'Guilded.NET.Base.Events.MessageEvent.RemoveReactionAsync(uint)') | Removes a reaction from this message.<br/> |
| [UpdateMessageAsync(MessageContent)](MessageEvent_UpdateMessageAsync(MessageContent) 'Guilded.NET.Base.Events.MessageEvent.UpdateMessageAsync(Guilded.NET.Base.Chat.MessageContent)') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(object)](MessageEvent_UpdateMessageAsync(object) 'Guilded.NET.Base.Events.MessageEvent.UpdateMessageAsync(object)') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(string, object[])](MessageEvent_UpdateMessageAsync(string_object__) 'Guilded.NET.Base.Events.MessageEvent.UpdateMessageAsync(string, object[])') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(string)](MessageEvent_UpdateMessageAsync(string) 'Guilded.NET.Base.Events.MessageEvent.UpdateMessageAsync(string)') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(IFormatProvider, string, object[])](MessageEvent_UpdateMessageAsync(IFormatProvider_string_object__) 'Guilded.NET.Base.Events.MessageEvent.UpdateMessageAsync(System.IFormatProvider, string, object[])') | Updates the contents of the message.<br/> |

#### See Also
- [Message](Message 'Guilded.NET.Base.Chat.Message')
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
