#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.AddXpAsync(GId, short) Method
Adds XP to the given user.  
```csharp
public abstract System.Threading.Tasks.Task<long> AddXpAsync(Guilded.NET.Base.GId userId, short xpAmount);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_AddXpAsync(Guilded_NET_Base_GId_short)_userId'></a>
`userId` [GId](GId.md 'Guilded.NET.Base.GId')  
The identifier of the receiving user
  
<a name='Guilded_NET_Base_BaseGuildedClient_AddXpAsync(Guilded_NET_Base_GId_short)_xpAmount'></a>
`xpAmount` [System.Int16](https://docs.microsoft.com/en-us/dotnet/api/System.Int16 'System.Int16')  
The amount of XP received from -1000 to 1000
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Total XP
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.AddXpAsync(message.CreatedBy, 10);  
```
