#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.UpdateMessageAsync(Guid, Guid, MessageContent) Method
Updates the contents of the message.  
```csharp
public abstract System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> UpdateMessageAsync(System.Guid channelId, System.Guid messageId, Guilded.NET.Base.Chat.MessageContent content);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_Guilded_NET_Base_Chat_MessageContent)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_Guilded_NET_Base_Chat_MessageContent)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to edit
  
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_Guilded_NET_Base_Chat_MessageContent)_content'></a>
`content` [MessageContent](MessageContent.md 'Guilded.NET.Base.Chat.MessageContent')  
The new content of the message in rich text markup
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message edited
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.UpdateMessageAsync(channelId, messageId, new MessageContent("Edited message"));  
```
