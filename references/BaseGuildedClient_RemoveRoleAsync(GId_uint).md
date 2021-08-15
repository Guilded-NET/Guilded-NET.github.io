#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.RemoveRoleAsync(GId, uint) Method
Removes a role from the given user.  
```csharp
public abstract System.Threading.Tasks.Task RemoveRoleAsync(Guilded.NET.Base.GId memberId, uint roleId);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_RemoveRoleAsync(Guilded_NET_Base_GId_uint)_memberId'></a>
`memberId` [GId](GId.md 'Guilded.NET.Base.GId')  
The identifier of the losing user
  
<a name='Guilded_NET_Base_BaseGuildedClient_RemoveRoleAsync(Guilded_NET_Base_GId_uint)_roleId'></a>
`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the role to remove
  
#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.RemoveRoleAsync(message.CreatedBy, 100000000);  
```
