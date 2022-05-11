---
title: GetBanAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the information about the ban of the member."
---

## UserSummary.GetBanAsync(HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary.md 'Guilded.Base.Users.UserSummary')

Gets the information about the ban of the member.

```csharp
public System.Threading.Tasks.Task GetBanAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.Base.Users.UserSummary.GetBanAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server where the user has been banned

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
Member ban information