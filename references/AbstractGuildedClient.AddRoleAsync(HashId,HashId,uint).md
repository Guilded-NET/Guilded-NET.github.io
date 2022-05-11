---
title: AddRoleAsync(HashId, HashId, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a [role](AbstractGuildedClient.AddRoleAsync(HashId,HashId,uint).md#Guilded.AbstractGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.AbstractGuildedClient.AddRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') to [the user](User.md 'Guilded.Base.Users.User')."
---

## AbstractGuildedClient.AddRoleAsync(HashId, HashId, uint) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Adds a [role](AbstractGuildedClient.AddRoleAsync(HashId,HashId,uint).md#Guilded.AbstractGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.AbstractGuildedClient.AddRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') to [the user](User.md 'Guilded.Base.Users.User').

```csharp
public override System.Threading.Tasks.Task AddRoleAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, uint role);
```

### Remarks
  
If they hold the [role](AbstractGuildedClient.AddRoleAsync(HashId,HashId,uint).md#Guilded.AbstractGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.AbstractGuildedClient.AddRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role'), then nothing happens.
#### Parameters

<a name='Guilded.AbstractGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to modify [member](Member.md 'Guilded.Base.Servers.Member') in

<a name='Guilded.AbstractGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of [the receiving member](Member.md 'Guilded.Base.Servers.Member')

<a name='Guilded.AbstractGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role'></a>

`role` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to add

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')