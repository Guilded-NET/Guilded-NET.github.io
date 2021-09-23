
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content')
## Message Class
A message posted in the chat.  
```csharp
public class Message : Guilded.NET.Base.Content.ChannelContent<System.Guid>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#x27A1; [Guilded.NET.Base.Content.ChannelContent&lt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;') &#x27A1; Message  
### Remarks
An existing/a cached message that can be found in a chat.



This message type can be found in:

<list type="bullet">  
  <item>  
    <description>  
      <see cref="M:Guilded.NET.Base.BaseGuildedClient.GetMessagesAsync(System.Guid,System.UInt32)"/>  
    </description>  
  </item>  
  <item>  
    <description>  
      <see cref="M:Guilded.NET.Base.BaseGuildedClient.GetMessageAsync(System.Guid,System.Guid)"/>  
    </description>  
  </item>  
  <item>  
    <description>  
      <see cref="T:Guilded.NET.Base.Events.MessageCreatedEvent"/>  
    </description>  
  </item>  
  <item>  
    <description>  
      <see cref="T:Guilded.NET.Base.Events.MessageUpdatedEvent"/>  
    </description>  
  </item>  
  <item>  
    <description>A return value from message creation and updating methods.</description>  
  </item>  
</list>

| Properties | |
| :--- | :--- |
| [Content](Message_Content 'Guilded.NET.Base.Content.Message.Content') | The contents of the message.<br/> |
| [IsPrivate](Message_IsPrivate 'Guilded.NET.Base.Content.Message.IsPrivate') | Whether the reply is private.<br/> |
| [IsReply](Message_IsReply 'Guilded.NET.Base.Content.Message.IsReply') | Whether the specified message is a reply<br/> |
| [ReplyMessageIds](Message_ReplyMessageIds 'Guilded.NET.Base.Content.Message.ReplyMessageIds') | Which messages it is replying to.<br/> |
| [Type](Message_Type 'Guilded.NET.Base.Content.Message.Type') | The type of the message.<br/> |
| [UpdatedAt](Message_UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') | The date of when the message was updated.<br/> |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](Message_AddReactionAsync(uint) 'Guilded.NET.Base.Content.Message.AddReactionAsync(uint)') | Adds a reaction to a message.<br/> |
| [CreateMessageAsync(MessageContent, bool, Guid[])](Message_CreateMessageAsync(MessageContent_bool_Guid__) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(Guilded.NET.Base.Chat.MessageContent, bool, System.Guid[])') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(MessageContent, Guid[])](Message_CreateMessageAsync(MessageContent_Guid__) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(Guilded.NET.Base.Chat.MessageContent, System.Guid[])') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(MessageContent)](Message_CreateMessageAsync(MessageContent) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(Guilded.NET.Base.Chat.MessageContent)') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(string, bool, Guid[])](Message_CreateMessageAsync(string_bool_Guid__) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string, bool, System.Guid[])') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(string, Guid[])](Message_CreateMessageAsync(string_Guid__) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string, System.Guid[])') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(string)](Message_CreateMessageAsync(string) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string)') | Creates a message in a chat.<br/> |
| [DeleteMessageAsync()](Message_DeleteMessageAsync() 'Guilded.NET.Base.Content.Message.DeleteMessageAsync()') | Deletes a specified message.<br/> |
| [RemoveReactionAsync(uint)](Message_RemoveReactionAsync(uint) 'Guilded.NET.Base.Content.Message.RemoveReactionAsync(uint)') | Removes a reaction from a message.<br/> |
| [ReplyAsync(MessageContent, bool)](Message_ReplyAsync(MessageContent_bool) 'Guilded.NET.Base.Content.Message.ReplyAsync(Guilded.NET.Base.Chat.MessageContent, bool)') | Replies to the message in the chat.<br/> |
| [ReplyAsync(MessageContent)](Message_ReplyAsync(MessageContent) 'Guilded.NET.Base.Content.Message.ReplyAsync(Guilded.NET.Base.Chat.MessageContent)') | Replies to the message in the chat.<br/> |
| [ReplyAsync(string, bool)](Message_ReplyAsync(string_bool) 'Guilded.NET.Base.Content.Message.ReplyAsync(string, bool)') | Replies to the message in the chat.<br/> |
| [ReplyAsync(string)](Message_ReplyAsync(string) 'Guilded.NET.Base.Content.Message.ReplyAsync(string)') | Replies to the message in the chat.<br/> |
| [UpdateMessageAsync(MessageContent)](Message_UpdateMessageAsync(MessageContent) 'Guilded.NET.Base.Content.Message.UpdateMessageAsync(Guilded.NET.Base.Chat.MessageContent)') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(string)](Message_UpdateMessageAsync(string) 'Guilded.NET.Base.Content.Message.UpdateMessageAsync(string)') | Updates the contents of the message.<br/> |

#### See Also
- [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem')
- [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread')
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')
