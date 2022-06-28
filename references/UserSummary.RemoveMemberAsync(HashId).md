---
title: RemoveMemberAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes the member from the [server](UserSummary.RemoveMemberAsync(HashId)#Guilded.Base.Users.UserSummary.RemoveMemberAsync(Guilded.Base.HashId).server 'Guilded.Base.Users.UserSummary.RemoveMemberAsync(Guilded.Base.HashId).server')."
---

## UserSummary.RemoveMemberAsync(HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary 'Guilded.Base.Users.UserSummary')

Removes the member from the [server](UserSummary.RemoveMemberAsync(HashId)#Guilded.Base.Users.UserSummary.RemoveMemberAsync(Guilded.Base.HashId).server 'Guilded.Base.Users.UserSummary.RemoveMemberAsync(Guilded.Base.HashId).server').

```csharp
public System.Threading.Tasks.Task RemoveMemberAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.Base.Users.UserSummary.RemoveMemberAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to kick [the member](Member 'Guilded.Base.Servers.Member') from

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')