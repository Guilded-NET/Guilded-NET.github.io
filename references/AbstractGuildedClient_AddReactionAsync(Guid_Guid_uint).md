
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.AddReactionAsync(Guid, Guid, uint) Method
Adds a reaction to a message.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Reaction> AddReactionAsync(System.Guid channelId, System.Guid messageId, uint emoteId);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_AbstractGuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to add a reaction on
  
<a name='Guilded_NET_AbstractGuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_emoteId'></a>
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
Adds a reaction of identifier [emoteId](AbstractGuildedClient_AddReactionAsync(Guid_Guid_uint)#Guilded_NET_AbstractGuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_emoteId 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint).emoteId') to [messageId](AbstractGuildedClient_AddReactionAsync(Guid_Guid_uint)#Guilded_NET_AbstractGuildedClient_AddReactionAsync(System_Guid_System_Guid_uint)_messageId 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint).messageId').
