---
title: GetMembersAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the list of all [server](AbstractGuildedClient.GetMembersAsync(HashId).md#Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId).server 'Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId).server')[members](Member.md 'Guilded.Base.Servers.Member')."
---

## AbstractGuildedClient.GetMembersAsync(HashId) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets the list of all [server](AbstractGuildedClient.GetMembersAsync(HashId).md#Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId).server 'Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId).server')[members](Member.md 'Guilded.Base.Servers.Member').

```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Servers.MemberSummary<Guilded.Base.Users.UserSummary>>> GetMembersAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to get [member](Member.md 'Guilded.Base.Servers.Member') list of

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Guilded.Base.Servers.MemberSummary&lt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary`1')[UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary')[&gt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of [members](Member.md 'Guilded.Base.Servers.Member')