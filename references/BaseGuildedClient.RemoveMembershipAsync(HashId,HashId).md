---
title: RemoveMembershipAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes [user](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).user 'Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).user') from [group](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group 'Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).group')."
---

## BaseGuildedClient.RemoveMembershipAsync(HashId, HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Removes [user](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).user 'Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).user') from [group](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group 'Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).group').

```csharp
public abstract System.Threading.Tasks.Task RemoveMembershipAsync(Guilded.Base.HashId group, Guilded.Base.HashId user);
```

### Remarks
  
This disallows [user](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).user 'Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).user') to interact or see the specified group.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group'></a>

`group` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the parent group

<a name='Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).user'></a>

`user` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the member](Member 'Guilded.Base.Servers.Member') to remove

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')