
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.AddRoleAsync(GId, uint) Method

Adds a role to the user.
```csharp
public override System.Threading.Tasks.Task AddRoleAsync(Guilded.NET.Base.GId memberId, uint roleId);
```

#### Parameters

<a name='Guilded_NET_AbstractGuildedClient_AddRoleAsync(Guilded_NET_Base_GId_uint)_memberId'></a>
`memberId` [GId](https://guilded-net.github.io/references/GId 'Guilded.NET.Base.GId')

The identifier of the receiving user

<a name='Guilded_NET_AbstractGuildedClient_AddRoleAsync(Guilded_NET_Base_GId_uint)_roleId'></a>
`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to add


#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')


#### Exceptions

[GuildedException](https://guilded-net.github.io/references/GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](https://guilded-net.github.io/references/GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](https://guilded-net.github.io/references/GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](https://guilded-net.github.io/references/GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

### Remarks
  
Gives the specified role to the member.  
  
If they hold the specified role, then nothing happens.