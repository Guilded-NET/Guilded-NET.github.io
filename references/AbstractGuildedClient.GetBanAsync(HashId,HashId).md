---
title: GetBanAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets [the information](MemberBan.md 'Guilded.Base.Servers.MemberBan') about the ban of [member](AbstractGuildedClient.GetBanAsync(HashId,HashId).md#Guilded.AbstractGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.AbstractGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId).member')."
---

## AbstractGuildedClient.GetBanAsync(HashId, HashId) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets [the information](MemberBan.md 'Guilded.Base.Servers.MemberBan') about the ban of [member](AbstractGuildedClient.GetBanAsync(HashId,HashId).md#Guilded.AbstractGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.AbstractGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId).member').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Servers.MemberBan> GetBanAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server where [the user](User.md 'Guilded.Base.Users.User') has been banned

<a name='Guilded.AbstractGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of [the member](Member.md 'Guilded.Base.Servers.Member') to get ban information of

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[MemberBan](MemberBan.md 'Guilded.Base.Servers.MemberBan')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[member](AbstractGuildedClient.GetBanAsync(HashId,HashId).md#Guilded.AbstractGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.AbstractGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') ban