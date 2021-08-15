
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## Message Class
A message posted in the chat.  
```csharp
public class Message : Guilded.NET.Base.Chat.BaseMessage
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; [BaseMessage](BaseMessage 'Guilded.NET.Base.Chat.BaseMessage') &#129106; Message  

| Properties | |
| :--- | :--- |
| [ByBot](Message_ByBot 'Guilded.NET.Base.Chat.Message.ByBot') | Gets whether the message was created by a bot or webhook.<br/> |
| [Content](Message_Content 'Guilded.NET.Base.Chat.Message.Content') | The contents of this message as a Markdown string.<br/> |
| [CreatedAt](Message_CreatedAt 'Guilded.NET.Base.Chat.Message.CreatedAt') | The date of when this message was posted.<br/> |
| [CreatedBy](Message_CreatedBy 'Guilded.NET.Base.Chat.Message.CreatedBy') | The identifier of the author of this message.<br/> |
| [CreatedByBot](Message_CreatedByBot 'Guilded.NET.Base.Chat.Message.CreatedByBot') | The identifier of the bot that posted this message.<br/> |
| [CreatedByWebhook](Message_CreatedByWebhook 'Guilded.NET.Base.Chat.Message.CreatedByWebhook') | The identifier of the webhook that posted this message.<br/> |
| [UpdatedAt](Message_UpdatedAt 'Guilded.NET.Base.Chat.Message.UpdatedAt') | The date of when this message was edited.<br/> |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](Message_AddReactionAsync(uint) 'Guilded.NET.Base.Chat.Message.AddReactionAsync(uint)') | Add a reaction to this message.<br/> |
| [DeleteMessageAsync()](Message_DeleteMessageAsync() 'Guilded.NET.Base.Chat.Message.DeleteMessageAsync()') | Deletes this message.<br/> |
| [Of(BaseUser)](Message_Of(BaseUser) 'Guilded.NET.Base.Chat.Message.Of(Guilded.NET.Base.Users.BaseUser)') | Gets whether this message was posted by the given user.<br/> |
| [RemoveReactionAsync(uint)](Message_RemoveReactionAsync(uint) 'Guilded.NET.Base.Chat.Message.RemoveReactionAsync(uint)') | Removes a reaction from this message.<br/> |
| [ToString()](Message_ToString() 'Guilded.NET.Base.Chat.Message.ToString()') | Converts the content of this message to Markdown representation of it.<br/> |
| [UpdateMessageAsync(MessageContent)](Message_UpdateMessageAsync(MessageContent) 'Guilded.NET.Base.Chat.Message.UpdateMessageAsync(Guilded.NET.Base.Chat.MessageContent)') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(object)](Message_UpdateMessageAsync(object) 'Guilded.NET.Base.Chat.Message.UpdateMessageAsync(object)') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(string, object[])](Message_UpdateMessageAsync(string_object__) 'Guilded.NET.Base.Chat.Message.UpdateMessageAsync(string, object[])') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(string)](Message_UpdateMessageAsync(string) 'Guilded.NET.Base.Chat.Message.UpdateMessageAsync(string)') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(IFormatProvider, string, object[])](Message_UpdateMessageAsync(IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.Message.UpdateMessageAsync(System.IFormatProvider, string, object[])') | Updates the contents of the message.<br/> |

#### See Also
- [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')
- [Paragraph](Paragraph 'Guilded.NET.Base.Chat.Paragraph')
- [ContainerNode&lt;T&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')
- [Node](Node 'Guilded.NET.Base.Chat.Node')
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
