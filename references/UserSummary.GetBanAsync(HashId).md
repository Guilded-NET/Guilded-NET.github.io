---
title: GetBanAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets [the information](MemberBan 'Guilded.Base.Servers.MemberBan') about the ban of member."
---

## UserSummary.GetBanAsync(HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary 'Guilded.Base.Users.UserSummary')

Gets [the information](MemberBan 'Guilded.Base.Servers.MemberBan') about the ban of member.

```csharp
public System.Threading.Tasks.Task GetBanAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.Base.Users.UserSummary.GetBanAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server where [the user](User 'Guilded.Base.Users.User') has been banned

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
member ban