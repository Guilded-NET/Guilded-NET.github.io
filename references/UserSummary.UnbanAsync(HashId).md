---
title: UnbanAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Unbans the member."
---

## UserSummary.UnbanAsync(HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary 'Guilded.Base.Users.UserSummary')

Unbans the member.

```csharp
public System.Threading.Tasks.Task UnbanAsync(Guilded.Base.HashId server);
```

### Remarks
  
Allows them to join the server again.
#### Parameters

<a name='Guilded.Base.Users.UserSummary.UnbanAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to unban [member](Member 'Guilded.Base.Servers.Member') in

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')