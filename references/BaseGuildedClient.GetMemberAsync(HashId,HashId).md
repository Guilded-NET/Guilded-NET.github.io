---
title: GetMemberAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets full information about the specified [member](BaseGuildedClient.GetMemberAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') in the [server](BaseGuildedClient.GetMemberAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).server')."
---

## BaseGuildedClient.GetMemberAsync(HashId, HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Gets full information about the specified [member](BaseGuildedClient.GetMemberAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') in the [server](BaseGuildedClient.GetMemberAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).server').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.Member> GetMemberAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server where the member is

<a name='Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the member to get

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Member](Member.md 'Guilded.Base.Servers.Member')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Member