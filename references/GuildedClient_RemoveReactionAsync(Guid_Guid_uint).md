
#### [Guilded.NET](index 'index')
### [Guilded.NET](index#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient 'Guilded.NET.GuildedClient')
## GuildedClient.RemoveReactionAsync(Guid, Guid, uint) Method
Removes a reaction from a message.  
```csharp
public override System.Threading.Tasks.Task RemoveReactionAsync(System.Guid channelId, System.Guid messageId, uint emoteId);
```

#### Parameters
<a name='Guilded_NET_GuildedClient_RemoveReactionAsync(System_Guid_System_Guid_uint)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_GuildedClient_RemoveReactionAsync(System_Guid_System_Guid_uint)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to remove a reaction from
  
<a name='Guilded_NET_GuildedClient_RemoveReactionAsync(System_Guid_System_Guid_uint)_emoteId'></a>
`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the emote to remove
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.RemoveReactionAsync(channelId, messageId, 90002569);  
```
