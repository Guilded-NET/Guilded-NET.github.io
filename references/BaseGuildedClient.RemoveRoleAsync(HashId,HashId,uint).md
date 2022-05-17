---
title: RemoveRoleAsync(HashId, HashId, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes [role](BaseGuildedClient.RemoveRoleAsync(HashId,HashId,uint)#Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') from [the user](User 'Guilded.Base.Users.User')."
---

## BaseGuildedClient.RemoveRoleAsync(HashId, HashId, uint) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Removes [role](BaseGuildedClient.RemoveRoleAsync(HashId,HashId,uint)#Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') from [the user](User 'Guilded.Base.Users.User').

```csharp
public abstract System.Threading.Tasks.Task RemoveRoleAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, uint role);
```

### Remarks
  
If they don't hold the [role](BaseGuildedClient.RemoveRoleAsync(HashId,HashId,uint)#Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role'), then nothing happens.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to modify [member](Member 'Guilded.Base.Servers.Member') in

<a name='Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the losing member](Member 'Guilded.Base.Servers.Member')

<a name='Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role'></a>

`role` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to remove

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')