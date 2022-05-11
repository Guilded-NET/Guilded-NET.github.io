---
title: GetBanAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the information about the ban of the [member](BaseGuildedClient.GetBanAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId).member')."
---

## BaseGuildedClient.GetBanAsync(HashId, HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Gets the information about the ban of the [member](BaseGuildedClient.GetBanAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId).member').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.MemberBan> GetBanAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server where the user has been banned

<a name='Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the member to get ban information of

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[MemberBan](MemberBan.md 'Guilded.Base.Servers.MemberBan')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Member ban information