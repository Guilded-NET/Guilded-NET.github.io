
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.AddXpAsync(uint, long) Method

Adds XP to the role.
```csharp
public override System.Threading.Tasks.Task AddXpAsync(uint roleId, long amount);
```

#### Parameters

<a name='Guilded_NET_AbstractGuildedClient_AddXpAsync(uint_long)_roleId'></a>
`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the receiving role

<a name='Guilded_NET_AbstractGuildedClient_AddXpAsync(uint_long)_amount'></a>
`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')

The amount of XP received


#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')


#### Exceptions

[GuildedException](https://guilded-net.github.io/references/GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](https://guilded-net.github.io/references/GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](https://guilded-net.github.io/references/GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](https://guilded-net.github.io/references/GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

### Remarks
  
Gives the specified [amount](AbstractGuildedClient_AddXpAsync(uint_long)#Guilded_NET_AbstractGuildedClient_AddXpAsync(uint_long)_amount 'Guilded.NET.AbstractGuildedClient.AddXpAsync(uint, long).amount') of XP to the role's members.