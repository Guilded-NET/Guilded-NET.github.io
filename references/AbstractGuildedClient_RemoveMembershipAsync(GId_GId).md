
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.RemoveMembershipAsync(GId, GId) Method
Removes a member from the group.  
```csharp
public override System.Threading.Tasks.Task RemoveMembershipAsync(Guilded.NET.Base.GId groupId, Guilded.NET.Base.GId memberId);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_RemoveMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_groupId'></a>
`groupId` [GId](GId 'Guilded.NET.Base.GId')  
The identifier of the parent group
  
<a name='Guilded_NET_AbstractGuildedClient_RemoveMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_memberId'></a>
`memberId` [GId](GId 'Guilded.NET.Base.GId')  
The identifier of the member to remove
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Removes a member of [memberId](AbstractGuildedClient_RemoveMembershipAsync(GId_GId)#Guilded_NET_AbstractGuildedClient_RemoveMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_memberId 'Guilded.NET.AbstractGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId).memberId') from the group [groupId](AbstractGuildedClient_RemoveMembershipAsync(GId_GId)#Guilded_NET_AbstractGuildedClient_RemoveMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_groupId 'Guilded.NET.AbstractGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId).groupId').



This disallows member of [memberId](AbstractGuildedClient_RemoveMembershipAsync(GId_GId)#Guilded_NET_AbstractGuildedClient_RemoveMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_memberId 'Guilded.NET.AbstractGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId).memberId') to interact or see the group [groupId](AbstractGuildedClient_RemoveMembershipAsync(GId_GId)#Guilded_NET_AbstractGuildedClient_RemoveMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_groupId 'Guilded.NET.AbstractGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId).groupId')
