---
title: AddXpAsync(HashId, HashId, long)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds XP to the user.

```csharp
public override System.Threading.Tasks.Task<long> AddXpAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId, long amount);
```"
---

## AbstractGuildedClient.AddXpAsync(HashId, HashId, long) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Adds XP to the user.

```csharp
public override System.Threading.Tasks.Task<long> AddXpAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId, long amount);
```

### Remarks
  
Gives the specified [amount](AbstractGuildedClient.AddXpAsync(HashId,HashId,long)#Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,long).amount 'Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, long).amount') of XP to the member.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,long).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The server to modify member in

<a name='Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,long).memberId'></a>

`memberId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the receiving member

<a name='Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,long).amount'></a>

`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')

The amount of XP received

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the amount of XP given exceeds the limit

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Total XP