---
title: RemoveMembershipAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes the [user](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).user 'Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).user') from the [group](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group 'Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).group')."
---

## BaseGuildedClient.RemoveMembershipAsync(HashId, HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Removes the [user](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).user 'Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).user') from the [group](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group 'Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).group').

```csharp
public abstract System.Threading.Tasks.Task RemoveMembershipAsync(Guilded.Base.HashId group, Guilded.Base.HashId user);
```

### Remarks
  
This disallows the member to interact or see the specified group.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group'></a>

`group` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the parent group

<a name='Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).user'></a>

`user` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the member to remove

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')