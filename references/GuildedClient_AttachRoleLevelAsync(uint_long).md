
#### [Guilded.NET](index 'index')
### [Guilded.NET](index#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient 'Guilded.NET.GuildedClient')
## GuildedClient.AttachRoleLevelAsync(uint, long) Method
Attaches amount of XP required to a role.  
```csharp
public override System.Threading.Tasks.Task AttachRoleLevelAsync(uint roleId, long amount);
```

#### Parameters
<a name='Guilded_NET_GuildedClient_AttachRoleLevelAsync(uint_long)_roleId'></a>
`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the editing role
  
<a name='Guilded_NET_GuildedClient_AttachRoleLevelAsync(uint_long)_amount'></a>
`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')  
The amount XP added
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.AttachRoleLevelAsync(1000000000, 2048);  
```
