
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.AddMembershipAsync(GId, GId) Method
Adds a member to the group.  
```csharp
public abstract System.Threading.Tasks.Task AddMembershipAsync(Guilded.NET.Base.GId groupId, Guilded.NET.Base.GId memberId);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_AddMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_groupId'></a>
`groupId` [GId](GId 'Guilded.NET.Base.GId')  
The identifier of the parent group
  
<a name='Guilded_NET_Base_BaseGuildedClient_AddMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_memberId'></a>
`memberId` [GId](GId 'Guilded.NET.Base.GId')  
The identifier of the member to add
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.AddMembershipAsync(group.Id, message.CreatedBy);  
```
