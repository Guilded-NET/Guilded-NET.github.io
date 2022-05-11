---
title: UpdateNicknameAsync(HashId, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Changes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the member."
---

## UserSummary.UpdateNicknameAsync(HashId, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary 'Guilded.Base.Users.UserSummary')

Changes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the member.

```csharp
public System.Threading.Tasks.Task<string> UpdateNicknameAsync(Guilded.Base.HashId server, string nickname);
```
#### Parameters

<a name='Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId,string).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to modify member in

<a name='Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId,string).nickname'></a>

`nickname` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new nickname of the member

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname')