
#### [Guilded.NET](index 'index')
### [Guilded.NET](index#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient 'Guilded.NET.GuildedClient')
## GuildedClient.CreateMessageAsync(Guid, string) Method
Creates a message in a chat.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> CreateMessageAsync(System.Guid channelId, string content);
```

#### Parameters
<a name='Guilded_NET_GuildedClient_CreateMessageAsync(System_Guid_string)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_GuildedClient_CreateMessageAsync(System_Guid_string)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The contents of the message in Markdown plain text
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.NET.Base.Chat.Message](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Chat.Message 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message created

#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](GuildedClient_CreateMessageAsync(Guid_string)#Guilded_NET_GuildedClient_CreateMessageAsync(System_Guid_string)_content 'Guilded.NET.GuildedClient.CreateMessageAsync(System.Guid, string).content') only consists of whitespace or is null
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](GuildedClient_CreateMessageAsync(Guid_string)#Guilded_NET_GuildedClient_CreateMessageAsync(System_Guid_string)_content 'Guilded.NET.GuildedClient.CreateMessageAsync(System.Guid, string).content') is above the message limit of 4000 characters
### Example
```csharp
await client.CreateMessageAsync(channelId, "Hello!");  
```
