---
title: RemoveMemberRoleAsync(HashId, HashId, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes the specified [role](AbstractGuildedClient.RemoveMemberRoleAsync(HashId,HashId,uint)#Guilded.AbstractGuildedClient.RemoveMemberRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.AbstractGuildedClient.RemoveMemberRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') from [the user](User 'Guilded.Base.Users.User')."
---

## AbstractGuildedClient.RemoveMemberRoleAsync(HashId, HashId, uint) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Removes the specified [role](AbstractGuildedClient.RemoveMemberRoleAsync(HashId,HashId,uint)#Guilded.AbstractGuildedClient.RemoveMemberRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.AbstractGuildedClient.RemoveMemberRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') from [the user](User 'Guilded.Base.Users.User').

```csharp
public override System.Threading.Tasks.Task RemoveMemberRoleAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, uint role);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.RemoveMemberRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to modify [member](Member 'Guilded.Base.Servers.Member') in

<a name='Guilded.AbstractGuildedClient.RemoveMemberRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the losing member](Member 'Guilded.Base.Servers.Member')

<a name='Guilded.AbstractGuildedClient.RemoveMemberRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role'></a>

`role` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to remove

### Remarks
  
If they don't hold the specified [role](AbstractGuildedClient.RemoveMemberRoleAsync(HashId,HashId,uint)#Guilded.AbstractGuildedClient.RemoveMemberRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.AbstractGuildedClient.RemoveMemberRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role'), then nothing happens.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')