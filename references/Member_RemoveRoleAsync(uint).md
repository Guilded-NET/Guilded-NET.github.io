
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Teams](Guilded_NET_Base#Guilded_NET_Base_Teams 'Guilded.NET.Base.Teams').[Member](Member 'Guilded.NET.Base.Teams.Member')
## Member.RemoveRoleAsync(uint) Method

Removes a role from the user.
```csharp
public System.Threading.Tasks.Task RemoveRoleAsync(uint roleId);
```

#### Parameters

<a name='Guilded_NET_Base_Teams_Member_RemoveRoleAsync(uint)_roleId'></a>
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
  
Removes the specified role from the given member.  
  
If they don't hold the soecified role, then nothing happens.