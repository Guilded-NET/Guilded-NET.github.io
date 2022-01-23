---
title: RemoveRoleAsync(HashId, HashId, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes a role from the user.

```csharp
public override System.Threading.Tasks.Task RemoveRoleAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId, uint roleId);
```"
---

## AbstractGuildedClient.RemoveRoleAsync(HashId, HashId, uint) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Removes a role from the user.

```csharp
public override System.Threading.Tasks.Task RemoveRoleAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId, uint roleId);
```

### Remarks
  
Removes the specified role from the given member.  
  
If they don't hold the specified role, then nothing happens.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.RemoveRoleAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,uint).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The server to modify member in

<a name='Guilded.NET.AbstractGuildedClient.RemoveRoleAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,uint).memberId'></a>

`memberId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the losing user

<a name='Guilded.NET.AbstractGuildedClient.RemoveRoleAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,uint).roleId'></a>

`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to remove

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')