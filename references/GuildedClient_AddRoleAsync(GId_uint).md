
#### [Guilded.NET](index 'index')
### [Guilded.NET](index#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient 'Guilded.NET.GuildedClient')
## GuildedClient.AddRoleAsync(GId, uint) Method
Adds a role to the given user.  
```csharp
public override System.Threading.Tasks.Task AddRoleAsync(Guilded.NET.Base.GId memberId, uint roleId);
```

#### Parameters
<a name='Guilded_NET_GuildedClient_AddRoleAsync(Guilded_NET_Base_GId_uint)_memberId'></a>
`memberId` [Guilded.NET.Base.GId](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GId 'Guilded.NET.Base.GId')  
The identifier of the receiving user
  
<a name='Guilded_NET_GuildedClient_AddRoleAsync(Guilded_NET_Base_GId_uint)_roleId'></a>
`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the role to add
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.AddRoleAsync(message.CreatedBy, 100000000);  
```
