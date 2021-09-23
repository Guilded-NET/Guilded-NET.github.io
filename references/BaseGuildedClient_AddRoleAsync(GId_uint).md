
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.AddRoleAsync(GId, uint) Method
Adds a role to the given user.  
```csharp
public abstract System.Threading.Tasks.Task AddRoleAsync(Guilded.NET.Base.GId memberId, uint roleId);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_AddRoleAsync(Guilded_NET_Base_GId_uint)_memberId'></a>
`memberId` [GId](GId 'Guilded.NET.Base.GId')  
The identifier of the receiving user
  
<a name='Guilded_NET_Base_BaseGuildedClient_AddRoleAsync(Guilded_NET_Base_GId_uint)_roleId'></a>
`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the role to add
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Gives a member of [memberId](BaseGuildedClient_AddRoleAsync(GId_uint)#Guilded_NET_Base_BaseGuildedClient_AddRoleAsync(Guilded_NET_Base_GId_uint)_memberId 'Guilded.NET.Base.BaseGuildedClient.AddRoleAsync(Guilded.NET.Base.GId, uint).memberId') the role of [roleId](BaseGuildedClient_AddRoleAsync(GId_uint)#Guilded_NET_Base_BaseGuildedClient_AddRoleAsync(Guilded_NET_Base_GId_uint)_roleId 'Guilded.NET.Base.BaseGuildedClient.AddRoleAsync(Guilded.NET.Base.GId, uint).roleId') if permissions are met.



If they hold the role of [roleId](BaseGuildedClient_AddRoleAsync(GId_uint)#Guilded_NET_Base_BaseGuildedClient_AddRoleAsync(Guilded_NET_Base_GId_uint)_roleId 'Guilded.NET.Base.BaseGuildedClient.AddRoleAsync(Guilded.NET.Base.GId, uint).roleId'), then nothing happens.
