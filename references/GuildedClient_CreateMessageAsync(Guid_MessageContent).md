#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
## GuildedClient.CreateMessageAsync(Guid, MessageContent) Method
Creates a message in a chat.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> CreateMessageAsync(System.Guid channelId, Guilded.NET.Base.Chat.MessageContent content);
```
#### Parameters
<a name='Guilded_NET_GuildedClient_CreateMessageAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_GuildedClient_CreateMessageAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent)_content'></a>
`content` [Guilded.NET.Base.Chat.MessageContent](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Chat.MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
The contents of the message in rich text markup
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.NET.Base.Chat.Message](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Chat.Message 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message created
#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.CreateMessageAsync(channelId, new MessageContent  
(  
    new Leaf("Welcome to "),  
    new Leaf(team.Name, MarkType.Bold),  
    new Leaf("!")  
);  
```
