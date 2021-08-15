#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
## GuildedClient.RemoveMembershipAsync(GId, GId) Method
Removes a member from the group.  
```csharp
public override System.Threading.Tasks.Task RemoveMembershipAsync(Guilded.NET.Base.GId groupId, Guilded.NET.Base.GId memberId);
```
#### Parameters
<a name='Guilded_NET_GuildedClient_RemoveMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_groupId'></a>
`groupId` [Guilded.NET.Base.GId](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GId 'Guilded.NET.Base.GId')  
The identifier of the parent group
  
<a name='Guilded_NET_GuildedClient_RemoveMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_memberId'></a>
`memberId` [Guilded.NET.Base.GId](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GId 'Guilded.NET.Base.GId')  
The identifier of the member to remove
  
#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.RemoveMembershipAsync(group.Id, message.CreatedBy);  
```
