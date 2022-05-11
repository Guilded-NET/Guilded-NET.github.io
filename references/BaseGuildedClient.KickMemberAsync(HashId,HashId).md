---
title: KickMemberAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes the specified [member](BaseGuildedClient.KickMemberAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') from the [server](BaseGuildedClient.KickMemberAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).server')."
---

## BaseGuildedClient.KickMemberAsync(HashId, HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Removes the specified [member](BaseGuildedClient.KickMemberAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') from the [server](BaseGuildedClient.KickMemberAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).server').

```csharp
public abstract System.Threading.Tasks.Task KickMemberAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to kick member from

<a name='Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the member to kick

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')