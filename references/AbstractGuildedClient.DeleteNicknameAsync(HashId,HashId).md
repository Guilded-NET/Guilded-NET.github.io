---
title: DeleteNicknameAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes member's nickname.

```csharp
public override System.Threading.Tasks.Task DeleteNicknameAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId);
```"
---

## AbstractGuildedClient.DeleteNicknameAsync(HashId, HashId) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Deletes member's nickname.

```csharp
public override System.Threading.Tasks.Task DeleteNicknameAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId);
```

### Remarks
  
Removes the specified member's nickname.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.DeleteNicknameAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The server to modify member in

<a name='Guilded.NET.AbstractGuildedClient.DeleteNicknameAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).memberId'></a>

`memberId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the member to update

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
Nickname