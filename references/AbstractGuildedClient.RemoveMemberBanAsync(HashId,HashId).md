---
title: RemoveMemberBanAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Unbans the [member](AbstractGuildedClient.RemoveMemberBanAsync(HashId,HashId)#Guilded.AbstractGuildedClient.RemoveMemberBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.AbstractGuildedClient.RemoveMemberBanAsync(Guilded.Base.HashId, Guilded.Base.HashId).member')."
---

## AbstractGuildedClient.RemoveMemberBanAsync(HashId, HashId) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Unbans the [member](AbstractGuildedClient.RemoveMemberBanAsync(HashId,HashId)#Guilded.AbstractGuildedClient.RemoveMemberBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.AbstractGuildedClient.RemoveMemberBanAsync(Guilded.Base.HashId, Guilded.Base.HashId).member').

```csharp
public override System.Threading.Tasks.Task RemoveMemberBanAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.RemoveMemberBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to unban [member](Member 'Guilded.Base.Servers.Member') in

<a name='Guilded.AbstractGuildedClient.RemoveMemberBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the member](Member 'Guilded.Base.Servers.Member') to unban

### Remarks
  
Allows them to join [the server](Server 'Guilded.Base.Servers.Server') again.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')