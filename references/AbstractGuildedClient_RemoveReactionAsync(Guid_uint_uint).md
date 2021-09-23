
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.RemoveReactionAsync(Guid, uint, uint) Method
Removes a reaction from the content.  
```csharp
public override System.Threading.Tasks.Task RemoveReactionAsync(System.Guid channelId, uint contentId, uint emoteId);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_RemoveReactionAsync(System_Guid_uint_uint)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_AbstractGuildedClient_RemoveReactionAsync(System_Guid_uint_uint)_contentId'></a>
`contentId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the content to remove a reaction from
  
<a name='Guilded_NET_AbstractGuildedClient_RemoveReactionAsync(System_Guid_uint_uint)_emoteId'></a>
`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the emote to remove
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Remove a reaction of identifier [emoteId](AbstractGuildedClient_RemoveReactionAsync(Guid_uint_uint)#Guilded_NET_AbstractGuildedClient_RemoveReactionAsync(System_Guid_uint_uint)_emoteId 'Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid, uint, uint).emoteId') from content of identifier [contentId](AbstractGuildedClient_RemoveReactionAsync(Guid_uint_uint)#Guilded_NET_AbstractGuildedClient_RemoveReactionAsync(System_Guid_uint_uint)_contentId 'Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid, uint, uint).contentId').
