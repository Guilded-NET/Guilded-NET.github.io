---
title: AddXpAsync(HashId, uint, long)
layout: references
section: references
tags:
  - references
  - method
description: "

Gives [amount](BaseGuildedClient.AddXpAsync(HashId,uint,long).md#Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).amount 'Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long).amount') to the specified [role](BaseGuildedClient.AddXpAsync(HashId,uint,long).md#Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).role 'Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long).role') members."
---

## BaseGuildedClient.AddXpAsync(HashId, uint, long) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Gives [amount](BaseGuildedClient.AddXpAsync(HashId,uint,long).md#Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).amount 'Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long).amount') to the specified [role](BaseGuildedClient.AddXpAsync(HashId,uint,long).md#Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).role 'Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long).role') members.

```csharp
public abstract System.Threading.Tasks.Task AddXpAsync(Guilded.Base.HashId server, uint role, long amount);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server where the role is

<a name='Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).role'></a>

`role` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the receiving role

<a name='Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).amount'></a>

`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')

The amount of XP received (values — `[-1000, 1000]`)

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')