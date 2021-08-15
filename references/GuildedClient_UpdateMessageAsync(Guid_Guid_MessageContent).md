
#### [Guilded.NET](index 'index')
### [Guilded.NET](index#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient 'Guilded.NET.GuildedClient')
## GuildedClient.UpdateMessageAsync(Guid, Guid, MessageContent) Method
Updates the contents of a message.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> UpdateMessageAsync(System.Guid channelId, System.Guid messageId, Guilded.NET.Base.Chat.MessageContent content);
```

#### Parameters
<a name='Guilded_NET_GuildedClient_UpdateMessageAsync(System_Guid_System_Guid_Guilded_NET_Base_Chat_MessageContent)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_GuildedClient_UpdateMessageAsync(System_Guid_System_Guid_Guilded_NET_Base_Chat_MessageContent)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to edit
  
<a name='Guilded_NET_GuildedClient_UpdateMessageAsync(System_Guid_System_Guid_Guilded_NET_Base_Chat_MessageContent)_content'></a>
`content` [Guilded.NET.Base.Chat.MessageContent](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Chat.MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
The new content of the message in rich text markup
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.NET.Base.Chat.Message](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Chat.Message 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message edited

#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.UpdateMessageAsync(channelId, messageId, new MessageContent("Edited message"));  
```
