---
title: RemoveRoleAsync(HashId, HashId, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes [role](AbstractGuildedClient.RemoveRoleAsync(HashId,HashId,uint).md#Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') from [the user](User.md 'Guilded.Base.Users.User')."
---

## AbstractGuildedClient.RemoveRoleAsync(HashId, HashId, uint) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Removes [role](AbstractGuildedClient.RemoveRoleAsync(HashId,HashId,uint).md#Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') from [the user](User.md 'Guilded.Base.Users.User').

```csharp
public override System.Threading.Tasks.Task RemoveRoleAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, uint role);
```

### Remarks
  
If they don't hold the [role](AbstractGuildedClient.RemoveRoleAsync(HashId,HashId,uint).md#Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role'), then nothing happens.
#### Parameters

<a name='Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to modify [member](Member.md 'Guilded.Base.Servers.Member') in

<a name='Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of [the losing member](Member.md 'Guilded.Base.Servers.Member')

<a name='Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role'></a>

`role` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to remove

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')