---
title: GetBanAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets [the information](MemberBan 'Guilded.Base.Servers.MemberBan') about the ban of [member](BaseGuildedClient.GetBanAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId).member')."
---

## BaseGuildedClient.GetBanAsync(HashId, HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Gets [the information](MemberBan 'Guilded.Base.Servers.MemberBan') about the ban of [member](BaseGuildedClient.GetBanAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId).member').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.MemberBan> GetBanAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server where [the user](User 'Guilded.Base.Users.User') has been banned

<a name='Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the member](Member 'Guilded.Base.Servers.Member') to get ban information of

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[member](BaseGuildedClient.GetBanAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') ban