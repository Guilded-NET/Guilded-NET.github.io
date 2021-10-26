
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.AddXpAsync(GId, long) Method

Adds XP to the user.
```csharp
public override System.Threading.Tasks.Task<long> AddXpAsync(Guilded.NET.Base.GId memberId, long amount);
```

#### Parameters

<a name='Guilded_NET_AbstractGuildedClient_AddXpAsync(Guilded_NET_Base_GId_long)_memberId'></a>
`memberId` [GId](https://guilded-net.github.io/references/GId 'Guilded.NET.Base.GId')

The identifier of the receiving member

<a name='Guilded_NET_AbstractGuildedClient_AddXpAsync(Guilded_NET_Base_GId_long)_amount'></a>
`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')

The amount of XP received


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Total XP


#### Exceptions

[GuildedException](https://guilded-net.github.io/references/GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](https://guilded-net.github.io/references/GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](https://guilded-net.github.io/references/GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](https://guilded-net.github.io/references/GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the amount of XP given exceeds the limit

### Remarks
  
Gives the specified [amount](AbstractGuildedClient_AddXpAsync(GId_long)#Guilded_NET_AbstractGuildedClient_AddXpAsync(Guilded_NET_Base_GId_long)_amount 'Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.GId, long).amount') of XP to the member.