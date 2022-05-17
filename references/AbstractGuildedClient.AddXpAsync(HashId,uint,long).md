---
title: AddXpAsync(HashId, uint, long)
layout: references
section: references
tags:
  - references
  - method
description: "

Gives [amount](AbstractGuildedClient.AddXpAsync(HashId,uint,long)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).amount 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long).amount') to the [role](AbstractGuildedClient.AddXpAsync(HashId,uint,long)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).role 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long).role') members."
---

## AbstractGuildedClient.AddXpAsync(HashId, uint, long) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gives [amount](AbstractGuildedClient.AddXpAsync(HashId,uint,long)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).amount 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long).amount') to the [role](AbstractGuildedClient.AddXpAsync(HashId,uint,long)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).role 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long).role') members.

```csharp
public override System.Threading.Tasks.Task AddXpAsync(Guilded.Base.HashId server, uint role, long amount);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server where the role is

<a name='Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).role'></a>

`role` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the receiving role

<a name='Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,long).amount'></a>

`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')

The amount of XP received (values — `[-1000, 1000]`)

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')