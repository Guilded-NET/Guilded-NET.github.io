---
title: RemoveMemberAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes the [member](BaseGuildedClient.RemoveMemberAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.RemoveMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') from the [server](BaseGuildedClient.RemoveMemberAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.RemoveMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).server')."
---

## BaseGuildedClient.RemoveMemberAsync(HashId, HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Removes the [member](BaseGuildedClient.RemoveMemberAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.RemoveMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') from the [server](BaseGuildedClient.RemoveMemberAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.RemoveMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).server').

```csharp
public abstract System.Threading.Tasks.Task RemoveMemberAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to kick [the member](Member 'Guilded.Base.Servers.Member') from

<a name='Guilded.Base.BaseGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the member](Member 'Guilded.Base.Servers.Member') to kick

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')