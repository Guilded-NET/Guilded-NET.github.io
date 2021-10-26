
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content')
## Message Class

A message posted in the chat.
```csharp
public class Message : Guilded.NET.Base.Content.ChannelContent<System.Guid>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#x27A1; [Guilded.NET.Base.Content.ChannelContent&lt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;') &#x27A1; Message

### Remarks
  
An existing/a cached message that can be found in a chat. This can be found in chat channels, voice channels, stream channels and their equivalent threads.  
  
This currently includes both messages of types [Default](MessageType#Guilded_NET_Base_Content_MessageType_Default 'Guilded.NET.Base.Content.MessageType.Default') and [System](MessageType#Guilded_NET_Base_Content_MessageType_System 'Guilded.NET.Base.Content.MessageType.System'), but it could be changed in the future.

### See Also
- [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem')
- [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread')
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')

| Properties | |
| :--- | :--- |
| [Content](Message_Content 'Guilded.NET.Base.Content.Message.Content') | The contents of the message. |
| [IsPrivate](Message_IsPrivate 'Guilded.NET.Base.Content.Message.IsPrivate') | Whether the reply is private. |
| [IsReply](Message_IsReply 'Guilded.NET.Base.Content.Message.IsReply') | Whether the specified message is a reply |
| [ReplyMessageIds](Message_ReplyMessageIds 'Guilded.NET.Base.Content.Message.ReplyMessageIds') | Which messages it is replying to. |
| [Type](Message_Type 'Guilded.NET.Base.Content.Message.Type') | The type of the message. |
| [UpdatedAt](Message_UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') | The date of when the message was updated. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](Message_AddReactionAsync(uint) 'Guilded.NET.Base.Content.Message.AddReactionAsync(uint)') | Adds a reaction to the message. |
| [CreateMessageAsync(string, bool, Guid[])](Message_CreateMessageAsync(string_bool_Guid__) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string, bool, System.Guid[])') | Creates a message in a chat. |
| [CreateMessageAsync(string, Guid[])](Message_CreateMessageAsync(string_Guid__) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string, System.Guid[])') | Creates a message in a chat. |
| [CreateMessageAsync(string)](Message_CreateMessageAsync(string) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string)') | Creates a message in a chat. |
| [DeleteMessageAsync()](Message_DeleteMessageAsync() 'Guilded.NET.Base.Content.Message.DeleteMessageAsync()') | Deletes the message. |
| [RemoveReactionAsync(uint)](Message_RemoveReactionAsync(uint) 'Guilded.NET.Base.Content.Message.RemoveReactionAsync(uint)') | Removes a reaction from the message. |
| [ReplyAsync(string, bool)](Message_ReplyAsync(string_bool) 'Guilded.NET.Base.Content.Message.ReplyAsync(string, bool)') | Replies to the message in the chat. |
| [ReplyAsync(string)](Message_ReplyAsync(string) 'Guilded.NET.Base.Content.Message.ReplyAsync(string)') | Replies to the message in the chat. |
| [UpdateMessageAsync(string)](Message_UpdateMessageAsync(string) 'Guilded.NET.Base.Content.Message.UpdateMessageAsync(string)') | Updates the message. |
