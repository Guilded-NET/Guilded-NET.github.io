---
title: UnbanMemberAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Unbans the [member](BaseGuildedClient.UnbanMemberAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member')."
---

## BaseGuildedClient.UnbanMemberAsync(HashId, HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Unbans the [member](BaseGuildedClient.UnbanMemberAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member').

```csharp
public abstract System.Threading.Tasks.Task UnbanMemberAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```

### Remarks
  
Allows them to join the server again.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to unban [member](Member 'Guilded.Base.Servers.Member') in

<a name='Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the member](Member 'Guilded.Base.Servers.Member') to unban

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')