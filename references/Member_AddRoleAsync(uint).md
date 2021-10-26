
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Teams](Guilded_NET_Base#Guilded_NET_Base_Teams 'Guilded.NET.Base.Teams').[Member](Member 'Guilded.NET.Base.Teams.Member')
## Member.AddRoleAsync(uint) Method

Adds a role to the user.
```csharp
public System.Threading.Tasks.Task AddRoleAsync(uint roleId);
```

#### Parameters

<a name='Guilded_NET_Base_Teams_Member_AddRoleAsync(uint)_roleId'></a>
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
  
Gives the specified role to the member.  
  
If they hold the specified role, then nothing happens.