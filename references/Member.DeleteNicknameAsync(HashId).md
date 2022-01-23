---
title: DeleteNicknameAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the message.

```csharp
public System.Threading.Tasks.Task DeleteNicknameAsync(Guilded.NET.Base.HashId serverId);
```"
---

## Member.DeleteNicknameAsync(HashId) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Member`](Member 'Guilded.NET.Base.Servers.Member')

Deletes the message.

```csharp
public System.Threading.Tasks.Task DeleteNicknameAsync(Guilded.NET.Base.HashId serverId);
```

### Remarks
  
Removes the specified message, whether it be from the client or another user.
#### Parameters

<a name='Guilded.NET.Base.Servers.Member.DeleteNicknameAsync(Guilded.NET.Base.HashId).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')