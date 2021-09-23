
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.RemoveRoleAsync(GId, uint) Method
Removes a role from the given user.  
```csharp
public override System.Threading.Tasks.Task RemoveRoleAsync(Guilded.NET.Base.GId memberId, uint roleId);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_RemoveRoleAsync(Guilded_NET_Base_GId_uint)_memberId'></a>
`memberId` [GId](GId 'Guilded.NET.Base.GId')  
The identifier of the losing user
  
<a name='Guilded_NET_AbstractGuildedClient_RemoveRoleAsync(Guilded_NET_Base_GId_uint)_roleId'></a>
`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the role to remove
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Removes a role of [roleId](AbstractGuildedClient_RemoveRoleAsync(GId_uint)#Guilded_NET_AbstractGuildedClient_RemoveRoleAsync(Guilded_NET_Base_GId_uint)_roleId 'Guilded.NET.AbstractGuildedClient.RemoveRoleAsync(Guilded.NET.Base.GId, uint).roleId') from the member of [memberId](AbstractGuildedClient_RemoveRoleAsync(GId_uint)#Guilded_NET_AbstractGuildedClient_RemoveRoleAsync(Guilded_NET_Base_GId_uint)_memberId 'Guilded.NET.AbstractGuildedClient.RemoveRoleAsync(Guilded.NET.Base.GId, uint).memberId') if permissions are met.



If they don't hold a role of [roleId](AbstractGuildedClient_RemoveRoleAsync(GId_uint)#Guilded_NET_AbstractGuildedClient_RemoveRoleAsync(Guilded_NET_Base_GId_uint)_roleId 'Guilded.NET.AbstractGuildedClient.RemoveRoleAsync(Guilded.NET.Base.GId, uint).roleId'), then nothing happens.
