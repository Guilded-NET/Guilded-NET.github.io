
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
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

[GuildedException](https://guilded-net.github.io/references/GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](https://guilded-net.github.io/references/GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](https://guilded-net.github.io/references/GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](https://guilded-net.github.io/references/GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

### Remarks
  
Removes a specified reaction from the specified content.