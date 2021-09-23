
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.AddReactionAsync(Guid, uint, uint) Method
Adds a reaction to the content.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Reaction> AddReactionAsync(System.Guid channelId, uint contentId, uint emoteId);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_AddReactionAsync(System_Guid_uint_uint)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_AbstractGuildedClient_AddReactionAsync(System_Guid_uint_uint)_contentId'></a>
`contentId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the content to add a reaction on
  
<a name='Guilded_NET_AbstractGuildedClient_AddReactionAsync(System_Guid_uint_uint)_emoteId'></a>
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
Adds a reaction of identifier [emoteId](AbstractGuildedClient_AddReactionAsync(Guid_uint_uint)#Guilded_NET_AbstractGuildedClient_AddReactionAsync(System_Guid_uint_uint)_emoteId 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, uint, uint).emoteId') to content of identifier [contentId](AbstractGuildedClient_AddReactionAsync(Guid_uint_uint)#Guilded_NET_AbstractGuildedClient_AddReactionAsync(System_Guid_uint_uint)_contentId 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, uint, uint).contentId').
