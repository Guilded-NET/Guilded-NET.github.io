
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## MessageEvent Class

The base for message-related events.
```csharp
public class MessageEvent : Guilded.NET.Base.Events.MessageEvent<Guilded.NET.Base.Content.Message>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [Guilded.NET.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;') &#x27A1; MessageEvent

Derived  
&#8627; [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')  
&#8627; [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')

### See Also
- [Message](Message 'Guilded.NET.Base.Content.Message')
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')

| Properties | |
| :--- | :--- |
| [ChannelId](MessageEvent_ChannelId 'Guilded.NET.Base.Events.MessageEvent.ChannelId') | The identifier of the channel where the content is. |
| [Content](MessageEvent_Content 'Guilded.NET.Base.Events.MessageEvent.Content') | The contents of the message. |
| [CreatedAt](MessageEvent_CreatedAt 'Guilded.NET.Base.Events.MessageEvent.CreatedAt') | The date of when the content was created. |
| [CreatedAuto](MessageEvent_CreatedAuto 'Guilded.NET.Base.Events.MessageEvent.CreatedAuto') | Gets whether the content was created by a bot or a webhook. |
| [CreatedBy](MessageEvent_CreatedBy 'Guilded.NET.Base.Events.MessageEvent.CreatedBy') | The identifier of the user creator of the content. |
| [CreatedByBot](MessageEvent_CreatedByBot 'Guilded.NET.Base.Events.MessageEvent.CreatedByBot') | The identifier of the bot creator of the content. |
| [CreatedByWebhook](MessageEvent_CreatedByWebhook 'Guilded.NET.Base.Events.MessageEvent.CreatedByWebhook') | The identifier of the webhook creator of the content. |
| [Type](MessageEvent_Type 'Guilded.NET.Base.Events.MessageEvent.Type') | The type of the message. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](MessageEvent_AddReactionAsync(uint) 'Guilded.NET.Base.Events.MessageEvent.AddReactionAsync(uint)') | Adds a reaction to the message. |
| [CreateMessageAsync(string, bool, Guid[])](MessageEvent_CreateMessageAsync(string_bool_Guid__) 'Guilded.NET.Base.Events.MessageEvent.CreateMessageAsync(string, bool, System.Guid[])') | Creates a message in a chat. |
| [CreateMessageAsync(string, Guid[])](MessageEvent_CreateMessageAsync(string_Guid__) 'Guilded.NET.Base.Events.MessageEvent.CreateMessageAsync(string, System.Guid[])') | Creates a message in a chat. |
| [CreateMessageAsync(string)](MessageEvent_CreateMessageAsync(string) 'Guilded.NET.Base.Events.MessageEvent.CreateMessageAsync(string)') | Creates a message in a chat. |
| [DeleteMessageAsync()](MessageEvent_DeleteMessageAsync() 'Guilded.NET.Base.Events.MessageEvent.DeleteMessageAsync()') | Deletes the message. |
| [RemoveReactionAsync(uint)](MessageEvent_RemoveReactionAsync(uint) 'Guilded.NET.Base.Events.MessageEvent.RemoveReactionAsync(uint)') | Removes a reaction from the message. |
| [ReplyAsync(string, bool)](MessageEvent_ReplyAsync(string_bool) 'Guilded.NET.Base.Events.MessageEvent.ReplyAsync(string, bool)') | Replies to the message in the chat. |
| [ReplyAsync(string)](MessageEvent_ReplyAsync(string) 'Guilded.NET.Base.Events.MessageEvent.ReplyAsync(string)') | Replies to the message in the chat. |
| [UpdateMessageAsync(string)](MessageEvent_UpdateMessageAsync(string) 'Guilded.NET.Base.Events.MessageEvent.UpdateMessageAsync(string)') | Updates the message. |
