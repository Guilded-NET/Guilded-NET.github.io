#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
## GuildedClient.AddReactionAsync(Guid, Guid, uint) Method
Adds a reaction to a message.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Reaction> AddReactionAsync(System.Guid channelId, System.Guid messageId, uint emoteId);
```
#### Parameters
<a name='Guilded_NET_GuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_GuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to add a reaction on
  
<a name='Guilded_NET_GuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_emoteId'></a>
`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the emote to add
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.NET.Base.Reaction](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Reaction 'Guilded.NET.Base.Reaction')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Reaction added
#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.AddReactionAsync(channelId, messageId, 90002569);  
```
