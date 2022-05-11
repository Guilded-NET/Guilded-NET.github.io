---
title: KickAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes the specified member from the [server](UserSummary.KickAsync(HashId).md#Guilded.Base.Users.UserSummary.KickAsync(Guilded.Base.HashId).server 'Guilded.Base.Users.UserSummary.KickAsync(Guilded.Base.HashId).server')."
---

## UserSummary.KickAsync(HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary.md 'Guilded.Base.Users.UserSummary')

Removes the specified member from the [server](UserSummary.KickAsync(HashId).md#Guilded.Base.Users.UserSummary.KickAsync(Guilded.Base.HashId).server 'Guilded.Base.Users.UserSummary.KickAsync(Guilded.Base.HashId).server').

```csharp
public System.Threading.Tasks.Task KickAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.Base.Users.UserSummary.KickAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to kick member from

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')