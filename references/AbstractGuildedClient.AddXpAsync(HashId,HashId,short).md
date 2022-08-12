---
title: AddXpAsync(HashId, HashId, short)
layout: references
section: references
tags:
  - references
  - method
description: "

Gives [amount](AbstractGuildedClient.AddXpAsync(HashId,HashId,short)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,Guilded.Base.HashId,short).amount 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, Guilded.Base.HashId, short).amount') to the specified [member](AbstractGuildedClient.AddXpAsync(HashId,HashId,short)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,Guilded.Base.HashId,short).member 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, Guilded.Base.HashId, short).member')."
---

## AbstractGuildedClient.AddXpAsync(HashId, HashId, short) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gives [amount](AbstractGuildedClient.AddXpAsync(HashId,HashId,short)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,Guilded.Base.HashId,short).amount 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, Guilded.Base.HashId, short).amount') to the specified [member](AbstractGuildedClient.AddXpAsync(HashId,HashId,short)#Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,Guilded.Base.HashId,short).member 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, Guilded.Base.HashId, short).member').

```csharp
public override System.Threading.Tasks.Task<long> AddXpAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, short amount);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,Guilded.Base.HashId,short).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to modify [member](Member 'Guilded.Base.Servers.Member') in

<a name='Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,Guilded.Base.HashId,short).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the receiving member](Member 'Guilded.Base.Servers.Member')

<a name='Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId,Guilded.Base.HashId,short).amount'></a>

`amount` [System.Int16](https://docs.microsoft.com/en-us/dotnet/api/System.Int16 'System.Int16')

The amount of XP received (values — `[-1000, 1000]`)

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the amount of XP given exceeds the limit

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Total XP