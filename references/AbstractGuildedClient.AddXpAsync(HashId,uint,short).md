---
title: AddXpAsync(HashId, uint, short)
layout: references
section: references
tags:
  - references
  - method
description: "

Gives [amount](AbstractGuildedClient.AddXpAsync(HashId,uint,short)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,short).amount 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, short).amount') to the [role](AbstractGuildedClient.AddXpAsync(HashId,uint,short)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,short).role 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, short).role') members."
---

## AbstractGuildedClient.AddXpAsync(HashId, uint, short) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gives [amount](AbstractGuildedClient.AddXpAsync(HashId,uint,short)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,short).amount 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, short).amount') to the [role](AbstractGuildedClient.AddXpAsync(HashId,uint,short)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,short).role 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, short).role') members.

```csharp
public override System.Threading.Tasks.Task AddXpAsync(Guilded.Base.HashId server, uint role, short amount);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,short).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server where the role is

<a name='Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,short).role'></a>

`role` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the receiving role

<a name='Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,uint,short).amount'></a>

`amount` [System.Int16](https://docs.microsoft.com/en-us/dotnet/api/System.Int16 'System.Int16')

The amount of XP received (values — `[-1000, 1000]`)

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')