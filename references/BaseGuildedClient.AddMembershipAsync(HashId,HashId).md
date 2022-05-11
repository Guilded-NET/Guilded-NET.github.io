---
title: AddMembershipAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds the [user](BaseGuildedClient.AddMembershipAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).user 'Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).user') to the [group](BaseGuildedClient.AddMembershipAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group 'Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).group')."
---

## BaseGuildedClient.AddMembershipAsync(HashId, HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Adds the [user](BaseGuildedClient.AddMembershipAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).user 'Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).user') to the [group](BaseGuildedClient.AddMembershipAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group 'Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).group').

```csharp
public abstract System.Threading.Tasks.Task AddMembershipAsync(Guilded.Base.HashId group, Guilded.Base.HashId user);
```

### Remarks
  
This allows the member to interact or see the specified group.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group'></a>

`group` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the parent group

<a name='Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).user'></a>

`user` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the member to add

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')