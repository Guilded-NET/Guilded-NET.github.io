---
title: AddRoleAsync(HashId, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a [role](UserSummary.AddRoleAsync(HashId,uint)#Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).role 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint).role') to [the user](User 'Guilded.Base.Users.User')."
---

## UserSummary.AddRoleAsync(HashId, uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary 'Guilded.Base.Users.UserSummary')

Adds a [role](UserSummary.AddRoleAsync(HashId,uint)#Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).role 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint).role') to [the user](User 'Guilded.Base.Users.User').

```csharp
public System.Threading.Tasks.Task AddRoleAsync(Guilded.Base.HashId server, uint role);
```

### Remarks
  
If they hold the [role](UserSummary.AddRoleAsync(HashId,uint)#Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).role 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint).role'), then nothing happens.
#### Parameters

<a name='Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to modify [member](Member 'Guilded.Base.Servers.Member') in

<a name='Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).role'></a>

`role` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to add

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')