---
title: AddXpAsync(HashId, short)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds XP to the user.

```csharp
public System.Threading.Tasks.Task<long> AddXpAsync(Guilded.NET.Base.HashId serverId, short amount);
```"
---

## Member.AddXpAsync(HashId, short) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Member`](Member 'Guilded.NET.Base.Servers.Member')

Adds XP to the user.

```csharp
public System.Threading.Tasks.Task<long> AddXpAsync(Guilded.NET.Base.HashId serverId, short amount);
```

### Remarks
  
Gives the specified [amount](Member.AddXpAsync(HashId,short)#Guilded.NET.Base.Servers.Member.AddXpAsync(Guilded.NET.Base.HashId,short).amount 'Guilded.NET.Base.Servers.Member.AddXpAsync(Guilded.NET.Base.HashId, short).amount') of XP to the member.
#### Parameters

<a name='Guilded.NET.Base.Servers.Member.AddXpAsync(Guilded.NET.Base.HashId,short).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The server to modify member in

<a name='Guilded.NET.Base.Servers.Member.AddXpAsync(Guilded.NET.Base.HashId,short).amount'></a>

`amount` [System.Int16](https://docs.microsoft.com/en-us/dotnet/api/System.Int16 'System.Int16')

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