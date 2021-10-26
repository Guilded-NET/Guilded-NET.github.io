
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.RemoveMembershipAsync(GId, GId) Method

Removes a member from the group.
```csharp
public override System.Threading.Tasks.Task RemoveMembershipAsync(Guilded.NET.Base.GId groupId, Guilded.NET.Base.GId memberId);
```

#### Parameters

<a name='Guilded_NET_AbstractGuildedClient_RemoveMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_groupId'></a>
`groupId` [GId](https://guilded-net.github.io/references/GId 'Guilded.NET.Base.GId')

The identifier of the parent group

<a name='Guilded_NET_AbstractGuildedClient_RemoveMembershipAsync(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_memberId'></a>
`memberId` [GId](https://guilded-net.github.io/references/GId 'Guilded.NET.Base.GId')

The identifier of the member to remove


#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')


#### Exceptions

[GuildedException](https://guilded-net.github.io/references/GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](https://guilded-net.github.io/references/GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](https://guilded-net.github.io/references/GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](https://guilded-net.github.io/references/GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

### Remarks
  
Removes the specified member from the group.  
  
This disallows the member to interact or see the specified group.