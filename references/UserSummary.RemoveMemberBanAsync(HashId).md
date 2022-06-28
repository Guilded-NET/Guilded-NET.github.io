---
title: RemoveMemberBanAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Unbans the member."
---

## UserSummary.RemoveMemberBanAsync(HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary 'Guilded.Base.Users.UserSummary')

Unbans the member.

```csharp
public System.Threading.Tasks.Task RemoveMemberBanAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.Base.Users.UserSummary.RemoveMemberBanAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to unban [member](Member 'Guilded.Base.Servers.Member') in

### Remarks
  
Allows them to join [the server](Server 'Guilded.Base.Servers.Server') again.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')