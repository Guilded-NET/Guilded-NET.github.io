---
title: AddXpAsync(HashId, short)
layout: references
section: references
tags:
  - references
  - method
description: "

Gives [amount](UserSummary.AddXpAsync(HashId,short).md#Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId,short).amount 'Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId, short).amount') to the specified member."
---

## UserSummary.AddXpAsync(HashId, short) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary.md 'Guilded.Base.Users.UserSummary')

Gives [amount](UserSummary.AddXpAsync(HashId,short).md#Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId,short).amount 'Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId, short).amount') to the specified member.

```csharp
public System.Threading.Tasks.Task<long> AddXpAsync(Guilded.Base.HashId server, short amount);
```
#### Parameters

<a name='Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId,short).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to modify member in

<a name='Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId,short).amount'></a>

`amount` [System.Int16](https://docs.microsoft.com/en-us/dotnet/api/System.Int16 'System.Int16')

The amount of XP received (values — `[-1000, 1000]`)

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the amount of XP given exceeds the limit

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Total XP