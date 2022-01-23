---
title: AddRoleAsync(HashId, HashId, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a role to the user.

```csharp
public abstract System.Threading.Tasks.Task AddRoleAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId, uint roleId);
```"
---

## BaseGuildedClient.AddRoleAsync(HashId, HashId, uint) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Adds a role to the user.

```csharp
public abstract System.Threading.Tasks.Task AddRoleAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId, uint roleId);
```

### Remarks
  
Gives the specified role to the member.  
  
If they hold the specified role, then nothing happens.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.AddRoleAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,uint).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The server to modify member in

<a name='Guilded.NET.Base.BaseGuildedClient.AddRoleAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,uint).memberId'></a>

`memberId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the receiving user

<a name='Guilded.NET.Base.BaseGuildedClient.AddRoleAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,uint).roleId'></a>

`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to add

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')