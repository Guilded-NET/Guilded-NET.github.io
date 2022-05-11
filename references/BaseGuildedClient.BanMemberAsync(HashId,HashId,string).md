---
title: BanMemberAsync(HashId, HashId, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Bans the specified [member](BaseGuildedClient.BanMemberAsync(HashId,HashId,string).md#Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member 'Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).member')."
---

## BaseGuildedClient.BanMemberAsync(HashId, HashId, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Bans the specified [member](BaseGuildedClient.BanMemberAsync(HashId,HashId,string).md#Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member 'Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).member').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.MemberBan> BanMemberAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, string? reason=null);
```

### Remarks
  
Disallows them from joining again, until they receive an unban with [UnbanMemberAsync(HashId, HashId)](BaseGuildedClient.UnbanMemberAsync(HashId,HashId).md 'Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)') method.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to ban member from

<a name='Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the member to ban

<a name='Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).reason'></a>

`reason` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The reason for a ban

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[MemberBan](MemberBan.md 'Guilded.Base.Servers.MemberBan')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Member ban information