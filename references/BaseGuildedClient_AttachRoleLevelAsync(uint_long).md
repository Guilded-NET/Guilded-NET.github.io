#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.AttachRoleLevelAsync(uint, long) Method
Attaches amount of XP required to a role.  
```csharp
public abstract System.Threading.Tasks.Task AttachRoleLevelAsync(uint roleId, long xpAmount);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_AttachRoleLevelAsync(uint_long)_roleId'></a>
`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the editing role
  
<a name='Guilded_NET_Base_BaseGuildedClient_AttachRoleLevelAsync(uint_long)_xpAmount'></a>
`xpAmount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')  
The amount XP added
  
#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.AttachRoleLevelAsync(1000000000, 2048);  
```
