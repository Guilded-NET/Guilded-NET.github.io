---
title: RemoveMemberAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes the specified [member](AbstractGuildedClient.RemoveMemberAsync(HashId,HashId)#Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') from the [server](AbstractGuildedClient.RemoveMemberAsync(HashId,HashId)#Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server 'Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).server')."
---

## AbstractGuildedClient.RemoveMemberAsync(HashId, HashId) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Removes the specified [member](AbstractGuildedClient.RemoveMemberAsync(HashId,HashId)#Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') from the [server](AbstractGuildedClient.RemoveMemberAsync(HashId,HashId)#Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server 'Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).server').

```csharp
public override System.Threading.Tasks.Task RemoveMemberAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to kick the [member](Member 'Guilded.Base.Servers.Member') from

<a name='Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the [member](Member 'Guilded.Base.Servers.Member') to kick

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')