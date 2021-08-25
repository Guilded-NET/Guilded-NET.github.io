
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.CreateMessageAsync(Guid, string, object[]) Method
Creates a message in a chat.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> CreateMessageAsync(System.Guid channelId, string format, params object[] args);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_string_object__)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_string_object__)_format'></a>
`format` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The composite format string
  
<a name='Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_string_object__)_args'></a>
`args` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The arguments of the format string
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message posted

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [format](BaseGuildedClient_CreateMessageAsync(Guid_string_object__)#Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_string_object__)_format 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, object[]).format') only consists of whitespace or is null
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [format](BaseGuildedClient_CreateMessageAsync(Guid_string_object__)#Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_string_object__)_format 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, object[]).format') is above the message limit of 4000 characters
### Example
```csharp
await client.CreateMessageAsync(channelId, "Results: {0}", result);  
```