---
title: AddXpAsync(HashId, uint, long)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds XP to the role.

```csharp
public override System.Threading.Tasks.Task AddXpAsync(Guilded.NET.Base.HashId serverId, uint roleId, long amount);
```"
---

## AbstractGuildedClient.AddXpAsync(HashId, uint, long) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Adds XP to the role.

```csharp
public override System.Threading.Tasks.Task AddXpAsync(Guilded.NET.Base.HashId serverId, uint roleId, long amount);
```

### Remarks
  
Gives the specified [amount](AbstractGuildedClient.AddXpAsync(HashId,uint,long)#Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId,uint,long).amount 'Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId, uint, long).amount') of XP to the role's members.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId,uint,long).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The server where the role is

<a name='Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId,uint,long).roleId'></a>

`roleId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the receiving role

<a name='Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId,uint,long).amount'></a>

`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')

The amount of XP received

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')