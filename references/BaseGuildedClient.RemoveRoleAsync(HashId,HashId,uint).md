---
title: RemoveRoleAsync(HashId, HashId, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes a [role](BaseGuildedClient.RemoveRoleAsync(HashId,HashId,uint).md#Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') from the user."
---

## BaseGuildedClient.RemoveRoleAsync(HashId, HashId, uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Removes a [role](BaseGuildedClient.RemoveRoleAsync(HashId,HashId,uint).md#Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') from the user.

```csharp
public abstract System.Threading.Tasks.Task RemoveRoleAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, uint role);
```

### Remarks
  
If they don't hold the specified [role](BaseGuildedClient.RemoveRoleAsync(HashId,HashId,uint).md#Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role'), then nothing happens.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to modify member in

<a name='Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the losing user

<a name='Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role'></a>

`role` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to remove

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')