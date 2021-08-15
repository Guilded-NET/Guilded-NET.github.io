#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
## GuildedClient.GetMessagesAsync(Guid, uint) Method
Gets messages with a specific limit.  
```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.NET.Base.Chat.Message>> GetMessagesAsync(System.Guid channelId, uint limit=50u);
```
#### Parameters
<a name='Guilded_NET_GuildedClient_GetMessagesAsync(System_Guid_uint)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_GuildedClient_GetMessagesAsync(System_Guid_uint)_limit'></a>
`limit` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
How many messages it should get
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Guilded.NET.Base.Chat.Message](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Chat.Message 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of messages
#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
IList<Message> msg = await client.GetMessagesAsync(message.ChannelId);  
```
