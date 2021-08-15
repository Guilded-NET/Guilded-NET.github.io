
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat').[BaseMessage](BaseMessage 'Guilded.NET.Base.Chat.BaseMessage')
## BaseMessage.RespondAsync(MessageContent) Method
Creates a new message in same channel as a response.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> RespondAsync(Guilded.NET.Base.Chat.MessageContent content);
```

#### Parameters
<a name='Guilded_NET_Base_Chat_BaseMessage_RespondAsync(Guilded_NET_Base_Chat_MessageContent)_content'></a>
`content` [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
The contents of the message in rich text markup
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message posted

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await message.RespondAsync(new MessageContent(  
    new BlockQuote(message.ToString()),  
    new Paragraph("Done!")      
));  
```
