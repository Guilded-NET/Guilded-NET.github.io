---
title: AddRoleAsync(HashId, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a [role](UserSummary.AddRoleAsync(HashId,uint).md#Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).role 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint).role') to the user."
---

## UserSummary.AddRoleAsync(HashId, uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary.md 'Guilded.Base.Users.UserSummary')

Adds a [role](UserSummary.AddRoleAsync(HashId,uint).md#Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).role 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint).role') to the user.

```csharp
public System.Threading.Tasks.Task AddRoleAsync(Guilded.Base.HashId server, uint role);
```

### Remarks
  
If they hold the specified [role](UserSummary.AddRoleAsync(HashId,uint).md#Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).role 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint).role'), then nothing happens.
#### Parameters

<a name='Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to modify member in

<a name='Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).role'></a>

`role` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to add

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')