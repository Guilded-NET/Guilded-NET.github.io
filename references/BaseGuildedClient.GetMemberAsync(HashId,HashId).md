---
title: GetMemberAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets full information about the [member](BaseGuildedClient.GetMemberAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member')."
---

## BaseGuildedClient.GetMemberAsync(HashId, HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Gets full information about the [member](BaseGuildedClient.GetMemberAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.Member> GetMemberAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server where [the member](Member 'Guilded.Base.Servers.Member') is

<a name='Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the member](Member 'Guilded.Base.Servers.Member') to get

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Member](Member 'Guilded.Base.Servers.Member')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[member](BaseGuildedClient.GetMemberAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member')