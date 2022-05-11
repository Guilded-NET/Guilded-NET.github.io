---
title: UnbanMemberAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Unbans the specified [member](BaseGuildedClient.UnbanMemberAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member')."
---

## BaseGuildedClient.UnbanMemberAsync(HashId, HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Unbans the specified [member](BaseGuildedClient.UnbanMemberAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId).member').

```csharp
public abstract System.Threading.Tasks.Task UnbanMemberAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```

### Remarks
  
Allows them to join the server again.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to unban member in

<a name='Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the member to unban

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')