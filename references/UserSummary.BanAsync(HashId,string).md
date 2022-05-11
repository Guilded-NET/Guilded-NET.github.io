---
title: BanAsync(HashId, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Bans the specified member."
---

## UserSummary.BanAsync(HashId, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary.md 'Guilded.Base.Users.UserSummary')

Bans the specified member.

```csharp
public System.Threading.Tasks.Task BanAsync(Guilded.Base.HashId server, string? reason=null);
```

### Remarks
  
Disallows them from joining again, until they receive an unban with [UnbanMemberAsync(HashId, HashId)](BaseGuildedClient.UnbanMemberAsync(HashId,HashId).md 'Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)') method.
#### Parameters

<a name='Guilded.Base.Users.UserSummary.BanAsync(Guilded.Base.HashId,string).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to ban member from

<a name='Guilded.Base.Users.UserSummary.BanAsync(Guilded.Base.HashId,string).reason'></a>

`reason` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The reason for a ban

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
Member ban information