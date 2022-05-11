---
title: GetBansAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the list of [server](BaseGuildedClient.GetBansAsync(HashId).md#Guilded.Base.BaseGuildedClient.GetBansAsync(Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.GetBansAsync(Guilded.Base.HashId).server') bans."
---

## BaseGuildedClient.GetBansAsync(HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Gets the list of [server](BaseGuildedClient.GetBansAsync(HashId).md#Guilded.Base.BaseGuildedClient.GetBansAsync(Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.GetBansAsync(Guilded.Base.HashId).server') bans.

```csharp
public abstract System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Servers.MemberBan>> GetBansAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetBansAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to get bans of

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[MemberBan](MemberBan.md 'Guilded.Base.Servers.MemberBan')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of member ban information