---
title: DeleteNicknameAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes a message from a channel."
---

## UserSummary.DeleteNicknameAsync(HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary.md 'Guilded.Base.Users.UserSummary')

Deletes a message from a channel.

```csharp
public System.Threading.Tasks.Task DeleteNicknameAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.Base.Users.UserSummary.DeleteNicknameAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')