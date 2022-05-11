---
title: GetMembersAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the list of all [server](BaseGuildedClient.GetMembersAsync(HashId).md#Guilded.Base.BaseGuildedClient.GetMembersAsync(Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.GetMembersAsync(Guilded.Base.HashId).server') members."
---

## BaseGuildedClient.GetMembersAsync(HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Gets the list of all [server](BaseGuildedClient.GetMembersAsync(HashId).md#Guilded.Base.BaseGuildedClient.GetMembersAsync(Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.GetMembersAsync(Guilded.Base.HashId).server') members.

```csharp
public abstract System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Servers.MemberSummary<Guilded.Base.Users.UserSummary>>> GetMembersAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetMembersAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to get member list of

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Guilded.Base.Servers.MemberSummary&lt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary<T>')[UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary')[&gt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary<T>')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of members