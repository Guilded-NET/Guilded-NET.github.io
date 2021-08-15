#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
## GuildedClient.UpdateMessageAsync(Guid, Guid, string) Method
Updates the contents of a message.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> UpdateMessageAsync(System.Guid channelId, System.Guid messageId, string content);
```
#### Parameters
<a name='Guilded_NET_GuildedClient_UpdateMessageAsync(System_Guid_System_Guid_string)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_GuildedClient_UpdateMessageAsync(System_Guid_System_Guid_string)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to edit
  
<a name='Guilded_NET_GuildedClient_UpdateMessageAsync(System_Guid_System_Guid_string)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The new content of the message in Markdown plain text
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.NET.Base.Chat.Message](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Chat.Message 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message edited
#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](GuildedClient_UpdateMessageAsync(Guid_Guid_string).md#Guilded_NET_GuildedClient_UpdateMessageAsync(System_Guid_System_Guid_string)_content 'Guilded.NET.GuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string).content') only consists of whitespace or is null
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](GuildedClient_UpdateMessageAsync(Guid_Guid_string).md#Guilded_NET_GuildedClient_UpdateMessageAsync(System_Guid_System_Guid_string)_content 'Guilded.NET.GuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string).content') is above the message limit of 4000 characters
### Example
```csharp
await client.UpdateMessageAsync(channelId, messageId, "Edited message");  
```
### Remarks
Updates the contents of a message based on Markdown, if the permissions are met.
