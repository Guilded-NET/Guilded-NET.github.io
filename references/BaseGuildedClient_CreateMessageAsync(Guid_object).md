
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.CreateMessageAsync(Guid, object) Method
Creates a message in a chat.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> CreateMessageAsync(System.Guid channelId, object content);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_object)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_object)_content'></a>
`content` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
The contents of the message in Markdown plain text
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message posted

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](BaseGuildedClient_CreateMessageAsync(Guid_object)#Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_object)_content 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, object).content') only consists of whitespace or is null
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](BaseGuildedClient_CreateMessageAsync(Guid_object)#Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_object)_content 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, object).content') is above the message limit of 4000 characters
### Example
```csharp
await client.CreateMessageAsync(channelId, result);  
```
