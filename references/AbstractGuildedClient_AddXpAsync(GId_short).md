
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.AddXpAsync(GId, short) Method
Adds XP to the given user.  
```csharp
public override System.Threading.Tasks.Task<long> AddXpAsync(Guilded.NET.Base.GId memberId, short amount);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_AddXpAsync(Guilded_NET_Base_GId_short)_memberId'></a>
`memberId` [GId](GId 'Guilded.NET.Base.GId')  
The identifier of the receiving member
  
<a name='Guilded_NET_AbstractGuildedClient_AddXpAsync(Guilded_NET_Base_GId_short)_amount'></a>
`amount` [System.Int16](https://docs.microsoft.com/en-us/dotnet/api/System.Int16 'System.Int16')  
The amount of XP received from -1000 to 1000
  

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
Gives [amount](AbstractGuildedClient_AddXpAsync(GId_short)#Guilded_NET_AbstractGuildedClient_AddXpAsync(Guilded_NET_Base_GId_short)_amount 'Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.GId, short).amount') of XP to member of [memberId](AbstractGuildedClient_AddXpAsync(GId_short)#Guilded_NET_AbstractGuildedClient_AddXpAsync(Guilded_NET_Base_GId_short)_memberId 'Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.GId, short).memberId').



The minimum XP amount is `-1000` and maximum is `1000`.
