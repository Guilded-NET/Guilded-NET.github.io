
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.AddReactionAsync(Guid, Guid, uint) Method
Adds a reaction to a message.  
```csharp
public abstract System.Threading.Tasks.Task<Guilded.NET.Base.Content.Reaction> AddReactionAsync(System.Guid channelId, System.Guid messageId, uint emoteId);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_Base_BaseGuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to add a reaction on
  
<a name='Guilded_NET_Base_BaseGuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_emoteId'></a>
`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the emote to add
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Reaction](Reaction 'Guilded.NET.Base.Content.Reaction')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Reaction added

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Adds a reaction of identifier [emoteId](BaseGuildedClient_AddReactionAsync(Guid_Guid_uint)#Guilded_NET_Base_BaseGuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_emoteId 'Guilded.NET.Base.BaseGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint).emoteId') to [messageId](BaseGuildedClient_AddReactionAsync(Guid_Guid_uint)#Guilded_NET_Base_BaseGuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_messageId 'Guilded.NET.Base.BaseGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint).messageId').
