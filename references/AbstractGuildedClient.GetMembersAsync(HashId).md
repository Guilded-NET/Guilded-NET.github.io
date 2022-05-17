---
title: GetMembersAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the list of all [server](AbstractGuildedClient.GetMembersAsync(HashId)#Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId).server 'Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId).server')[members](Member 'Guilded.Base.Servers.Member')."
---

## AbstractGuildedClient.GetMembersAsync(HashId) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets the list of all [server](AbstractGuildedClient.GetMembersAsync(HashId)#Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId).server 'Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId).server')[members](Member 'Guilded.Base.Servers.Member').

```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Servers.MemberSummary<Guilded.Base.Users.UserSummary>>> GetMembersAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to get [member](Member 'Guilded.Base.Servers.Member') list of

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Guilded.Base.Servers.MemberSummary&lt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary`1')[UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')[&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of [members](Member 'Guilded.Base.Servers.Member')