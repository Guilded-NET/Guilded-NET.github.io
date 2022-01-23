---
title: AddRoleAsync(HashId, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a role to the user.

```csharp
public System.Threading.Tasks.Task AddRoleAsync(Guilded.NET.Base.HashId serverId, uint roleId);
```"
---

## Member.AddRoleAsync(HashId, uint) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Member`](Member 'Guilded.NET.Base.Servers.Member')

Adds a role to the user.

```csharp
public System.Threading.Tasks.Task AddRoleAsync(Guilded.NET.Base.HashId serverId, uint roleId);
```

### Remarks
  
Gives the specified role to the member.  
  
If they hold the specified role, then nothing happens.
#### Parameters

<a name='Guilded.NET.Base.Servers.Member.AddRoleAsync(Guilded.NET.Base.HashId,uint).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The server to modify member in

<a name='Guilded.NET.Base.Servers.Member.AddRoleAsync(Guilded.NET.Base.HashId,uint).roleId'></a>

`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the role to add

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')