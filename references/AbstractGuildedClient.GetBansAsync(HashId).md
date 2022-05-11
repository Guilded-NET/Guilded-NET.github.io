---
title: GetBansAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the list of [server](AbstractGuildedClient.GetBansAsync(HashId).md#Guilded.AbstractGuildedClient.GetBansAsync(Guilded.Base.HashId).server 'Guilded.AbstractGuildedClient.GetBansAsync(Guilded.Base.HashId).server') bans."
---

## AbstractGuildedClient.GetBansAsync(HashId) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets the list of [server](AbstractGuildedClient.GetBansAsync(HashId).md#Guilded.AbstractGuildedClient.GetBansAsync(Guilded.Base.HashId).server 'Guilded.AbstractGuildedClient.GetBansAsync(Guilded.Base.HashId).server') bans.

```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Servers.MemberBan>> GetBansAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetBansAsync(Guilded.Base.HashId).server'></a>

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
List of [Member ban information](MemberBan.md 'Guilded.Base.Servers.MemberBan')