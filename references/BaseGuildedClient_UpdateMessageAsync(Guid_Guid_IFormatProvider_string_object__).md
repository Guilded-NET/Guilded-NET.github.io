#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.UpdateMessageAsync(Guid, Guid, IFormatProvider, string, object[]) Method
Updates the contents of the message.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> UpdateMessageAsync(System.Guid channelId, System.Guid messageId, System.IFormatProvider provider, string format, params object[] args);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_System_IFormatProvider_string_object__)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_System_IFormatProvider_string_object__)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to edit
  
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_System_IFormatProvider_string_object__)_provider'></a>
`provider` [System.IFormatProvider](https://docs.microsoft.com/en-us/dotnet/api/System.IFormatProvider 'System.IFormatProvider')  
The provider that gives the format string information about the culture
  
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_System_IFormatProvider_string_object__)_format'></a>
`format` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The composite format string
  
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_System_IFormatProvider_string_object__)_args'></a>
`args` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The arguments of the format string
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message edited
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [format](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_IFormatProvider_string_object__).md#Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_System_IFormatProvider_string_object__)_format 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, System.IFormatProvider, string, object[]).format') only consists of whitespace or is null
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [format](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_IFormatProvider_string_object__).md#Guilded_NET_Base_BaseGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_System_IFormatProvider_string_object__)_format 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, System.IFormatProvider, string, object[]).format') is above the message limit of 4000 characters
### Example
```csharp
await client.UpdateMessageAsync(channelId, messageId, cultureInfo, "Current time: {0}", DateTime.Now);  
```
