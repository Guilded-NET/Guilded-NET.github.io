---
title: UnbanAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Unbans the specified member."
---

## UserSummary.UnbanAsync(HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary.md 'Guilded.Base.Users.UserSummary')

Unbans the specified member.

```csharp
public System.Threading.Tasks.Task UnbanAsync(Guilded.Base.HashId server);
```

### Remarks
  
Allows them to join the server again.
#### Parameters

<a name='Guilded.Base.Users.UserSummary.UnbanAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to unban member in

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')