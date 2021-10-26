
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.AddXpAsync(uint, long) Method

Adds XP to the role.
```csharp
public abstract System.Threading.Tasks.Task AddXpAsync(uint roleId, long amount);
```

#### Parameters

<a name='Guilded_NET_Base_BaseGuildedClient_AddXpAsync(uint_long)_roleId'></a>
`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the receiving role

<a name='Guilded_NET_Base_BaseGuildedClient_AddXpAsync(uint_long)_amount'></a>
`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')

The amount of XP received


#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')


#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

### Remarks
  
Gives the specified [amount](BaseGuildedClient_AddXpAsync(uint_long)#Guilded_NET_Base_BaseGuildedClient_AddXpAsync(uint_long)_amount 'Guilded.NET.Base.BaseGuildedClient.AddXpAsync(uint, long).amount') of XP to the role's members.