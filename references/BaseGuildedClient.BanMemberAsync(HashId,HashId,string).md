---
title: BanMemberAsync(HashId, HashId, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Bans the [member](BaseGuildedClient.BanMemberAsync(HashId,HashId,string)#Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member 'Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).member')."
---

## BaseGuildedClient.BanMemberAsync(HashId, HashId, string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Bans the [member](BaseGuildedClient.BanMemberAsync(HashId,HashId,string)#Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member 'Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).member').

```csharp
public System.Threading.Tasks.Task BanMemberAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, string? reason=null);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to ban member from

<a name='Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the member](Member 'Guilded.Base.Servers.Member') to ban

<a name='Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).reason'></a>

`reason` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The reason for a ban

### Remarks
  
Disallows them from joining again, until they receive an unban with [RemoveMemberBanAsync(HashId, HashId)](BaseGuildedClient.RemoveMemberBanAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.RemoveMemberBanAsync(Guilded.Base.HashId, Guilded.Base.HashId)') method.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
Created [member's ban](MemberBan 'Guilded.Base.Servers.MemberBan')