#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat').[BaseMessage](BaseMessage.md 'Guilded.NET.Base.Chat.BaseMessage')
## BaseMessage.RespondAsync(MessageContent) Method
Creates a new message in same channel as a response.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> RespondAsync(Guilded.NET.Base.Chat.MessageContent content);
```
#### Parameters
<a name='Guilded_NET_Base_Chat_BaseMessage_RespondAsync(Guilded_NET_Base_Chat_MessageContent)_content'></a>
`content` [MessageContent](MessageContent.md 'Guilded.NET.Base.Chat.MessageContent')  
The contents of the message in rich text markup
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message posted
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await message.RespondAsync(new MessageContent(  
    new BlockQuote(message.ToString()),  
    new Paragraph("Done!")      
));  
```
