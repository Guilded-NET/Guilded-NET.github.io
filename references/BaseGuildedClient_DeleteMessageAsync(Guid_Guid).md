
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.DeleteMessageAsync(Guid, Guid) Method
Deletes a specified message.  
```csharp
public abstract System.Threading.Tasks.Task DeleteMessageAsync(System.Guid channelId, System.Guid messageId);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_DeleteMessageAsync(System_Guid_System_Guid)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_Base_BaseGuildedClient_DeleteMessageAsync(System_Guid_System_Guid)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to delete
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.DeleteMessageAsync(channelId, messageId);  
```
