
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.AddXpAsync(GId, long) Method

Adds XP to the user.
```csharp
public abstract System.Threading.Tasks.Task<long> AddXpAsync(Guilded.NET.Base.GId memberId, long amount);
```

#### Parameters

<a name='Guilded_NET_Base_BaseGuildedClient_AddXpAsync(Guilded_NET_Base_GId_long)_memberId'></a>
`memberId` [GId](GId 'Guilded.NET.Base.GId')

The identifier of the receiving member

<a name='Guilded_NET_Base_BaseGuildedClient_AddXpAsync(Guilded_NET_Base_GId_long)_amount'></a>
`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')

The amount of XP received


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Total XP


#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the amount of XP given exceeds the limit

### Remarks
  
Gives the specified [amount](BaseGuildedClient_AddXpAsync(GId_long)#Guilded_NET_Base_BaseGuildedClient_AddXpAsync(Guilded_NET_Base_GId_long)_amount 'Guilded.NET.Base.BaseGuildedClient.AddXpAsync(Guilded.NET.Base.GId, long).amount') of XP to the member.