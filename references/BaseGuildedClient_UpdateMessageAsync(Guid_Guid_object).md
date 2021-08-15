#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.UpdateMessageAsync(Guid, Guid, object) Method
Updates the contents of the message.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> UpdateMessageAsync(System.Guid channelId, System.Guid messageId, object content);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_object)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_object)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to edit
  
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_object)_content'></a>
`content` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
The contents of the message in Markdown plain text
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message edited
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_object).md#Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_object)_content 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, object).content') only consists of whitespace or is null
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_object).md#Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_object)_content 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, object).content') is above the message limit of 4000 characters
### Example
```csharp
await client.UpdateMessageAsync(channelId, messageId, result);  
```
