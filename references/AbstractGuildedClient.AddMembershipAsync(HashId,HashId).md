---
title: AddMembershipAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds user to [group](AbstractGuildedClient.AddMembershipAsync(HashId,HashId).md#Guilded.AbstractGuildedClient.AddMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group 'Guilded.AbstractGuildedClient.AddMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).group')."
---

## AbstractGuildedClient.AddMembershipAsync(HashId, HashId) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Adds user to [group](AbstractGuildedClient.AddMembershipAsync(HashId,HashId).md#Guilded.AbstractGuildedClient.AddMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group 'Guilded.AbstractGuildedClient.AddMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId).group').

```csharp
public override System.Threading.Tasks.Task AddMembershipAsync(Guilded.Base.HashId group, Guilded.Base.HashId member);
```

### Remarks
  
This allows user to interact or see the specified group.
#### Parameters

<a name='Guilded.AbstractGuildedClient.AddMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).group'></a>

`group` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the parent group

<a name='Guilded.AbstractGuildedClient.AddMembershipAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')