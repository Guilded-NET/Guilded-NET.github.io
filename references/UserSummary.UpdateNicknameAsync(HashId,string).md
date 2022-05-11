---
title: UpdateNicknameAsync(HashId, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Changes the [nickname](UserSummary.UpdateNicknameAsync(HashId,string).md#Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId,string).nickname 'Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId, string).nickname') of the specified member in the [server](UserSummary.UpdateNicknameAsync(HashId,string).md#Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId,string).server 'Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId, string).server')."
---

## UserSummary.UpdateNicknameAsync(HashId, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary.md 'Guilded.Base.Users.UserSummary')

Changes the [nickname](UserSummary.UpdateNicknameAsync(HashId,string).md#Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId,string).nickname 'Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId, string).nickname') of the specified member in the [server](UserSummary.UpdateNicknameAsync(HashId,string).md#Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId,string).server 'Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId, string).server').

```csharp
public System.Threading.Tasks.Task<string> UpdateNicknameAsync(Guilded.Base.HashId server, string nickname);
```
#### Parameters

<a name='Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId,string).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to modify member in

<a name='Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId,string).nickname'></a>

`nickname` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new nickname of the member

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Nickname