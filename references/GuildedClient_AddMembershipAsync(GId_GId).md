
#### [Guilded.NET](index 'index')
### [Guilded.NET](index#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient 'Guilded.NET.GuildedClient')
## GuildedClient.AddMembershipAsync(GId, GId) Method
Adds a member to the group.  
```csharp
public override System.Threading.Tasks.Task AddMembershipAsync(Guilded.NET.Base.GId groupId, Guilded.NET.Base.GId memberId);
```

#### Parameters
<a name='Guilded_NET_GuildedClient_AddMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_groupId'></a>
`groupId` [Guilded.NET.Base.GId](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GId 'Guilded.NET.Base.GId')  
The identifier of the parent group
  
<a name='Guilded_NET_GuildedClient_AddMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_memberId'></a>
`memberId` [Guilded.NET.Base.GId](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GId 'Guilded.NET.Base.GId')  
The identifier of the member to add
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.AddMembershipAsync(group.Id, message.CreatedBy);  
```
