---
title: AddMemberBanAsync(HashId, HashId, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Bans the [member](BaseGuildedClient.AddMemberBanAsync(HashId,HashId,string)#Guilded.Base.BaseGuildedClient.AddMemberBanAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member 'Guilded.Base.BaseGuildedClient.AddMemberBanAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).member')."
---

## BaseGuildedClient.AddMemberBanAsync(HashId, HashId, string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Bans the [member](BaseGuildedClient.AddMemberBanAsync(HashId,HashId,string)#Guilded.Base.BaseGuildedClient.AddMemberBanAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member 'Guilded.Base.BaseGuildedClient.AddMemberBanAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).member').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.MemberBan> AddMemberBanAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, string? reason=null);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.AddMemberBanAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to ban member from

<a name='Guilded.Base.BaseGuildedClient.AddMemberBanAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the member](Member 'Guilded.Base.Servers.Member') to ban

<a name='Guilded.Base.BaseGuildedClient.AddMemberBanAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).reason'></a>

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
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [member's ban](MemberBan 'Guilded.Base.Servers.MemberBan')