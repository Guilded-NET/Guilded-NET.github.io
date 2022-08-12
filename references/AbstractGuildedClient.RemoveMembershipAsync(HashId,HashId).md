---
title: RemoveMembershipAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes the user from the [group](AbstractGuildedClient.RemoveMembershipAsync(HashId,HashId)#Guilded.AbstractGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group 'Guilded.AbstractGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).group')."
---

## AbstractGuildedClient.RemoveMembershipAsync(HashId, HashId) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Removes the user from the [group](AbstractGuildedClient.RemoveMembershipAsync(HashId,HashId)#Guilded.AbstractGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group 'Guilded.AbstractGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).group').

```csharp
public override System.Threading.Tasks.Task RemoveMembershipAsync(Guilded.Base.HashId group, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group'></a>

`group` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the parent group

<a name='Guilded.AbstractGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

### Remarks
  
This disallows the user to interact or see the specified group.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')