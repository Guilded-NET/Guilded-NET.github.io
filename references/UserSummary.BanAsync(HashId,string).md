---
title: BanAsync(HashId, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Bans the member."
---

## UserSummary.BanAsync(HashId, string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary 'Guilded.Base.Users.UserSummary')

Bans the member.

```csharp
public System.Threading.Tasks.Task BanAsync(Guilded.Base.HashId server, string? reason=null);
```

### Remarks
  
Disallows them from joining again, until they receive an unban with [UnbanMemberAsync(HashId, HashId)](BaseGuildedClient.UnbanMemberAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)') method.
#### Parameters

<a name='Guilded.Base.Users.UserSummary.BanAsync(Guilded.Base.HashId,string).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to ban member from

<a name='Guilded.Base.Users.UserSummary.BanAsync(Guilded.Base.HashId,string).reason'></a>

`reason` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The reason for a ban

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
Created [member's ban](MemberBan 'Guilded.Base.Servers.MemberBan')