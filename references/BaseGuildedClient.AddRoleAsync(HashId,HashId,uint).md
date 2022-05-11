---
title: AddRoleAsync(HashId, HashId, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a [role](BaseGuildedClient.AddRoleAsync(HashId,HashId,uint).md#Guilded.Base.BaseGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.Base.BaseGuildedClient.AddRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') to the user."
---

## BaseGuildedClient.AddRoleAsync(HashId, HashId, uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Adds a [role](BaseGuildedClient.AddRoleAsync(HashId,HashId,uint).md#Guilded.Base.BaseGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.Base.BaseGuildedClient.AddRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role') to the user.

```csharp
public abstract System.Threading.Tasks.Task AddRoleAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, uint role);
```

### Remarks
  
If they hold the specified [role](BaseGuildedClient.AddRoleAsync(HashId,HashId,uint).md#Guilded.Base.BaseGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role 'Guilded.Base.BaseGuildedClient.AddRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint).role'), then nothing happens.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to modify member in

<a name='Guilded.Base.BaseGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the receiving user

<a name='Guilded.Base.BaseGuildedClient.AddRoleAsync(Guilded.Base.HashId,Guilded.Base.HashId,uint).role'></a>

`role` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to add

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')