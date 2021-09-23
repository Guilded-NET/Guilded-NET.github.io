
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.AttachRoleLevelAsync(uint, long) Method
Attaches amount of XP required to a role.  
```csharp
public override System.Threading.Tasks.Task AttachRoleLevelAsync(uint roleId, long amount);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_AttachRoleLevelAsync(uint_long)_roleId'></a>
`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the editing role
  
<a name='Guilded_NET_AbstractGuildedClient_AttachRoleLevelAsync(uint_long)_amount'></a>
`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')  
The amount XP needed
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Sets how much [amount](AbstractGuildedClient_AttachRoleLevelAsync(uint_long)#Guilded_NET_AbstractGuildedClient_AttachRoleLevelAsync(uint_long)_amount 'Guilded.NET.AbstractGuildedClient.AttachRoleLevelAsync(uint, long).amount') of XP is necessary for role of  
[roleId](AbstractGuildedClient_AttachRoleLevelAsync(uint_long)#Guilded_NET_AbstractGuildedClient_AttachRoleLevelAsync(uint_long)_roleId 'Guilded.NET.AbstractGuildedClient.AttachRoleLevelAsync(uint, long).roleId') to be given.
