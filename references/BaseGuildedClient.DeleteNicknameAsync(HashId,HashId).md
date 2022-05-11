---
title: DeleteNicknameAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes the nickname of the specified [member](BaseGuildedClient.DeleteNicknameAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') in the [server](BaseGuildedClient.DeleteNicknameAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId).server')."
---

## BaseGuildedClient.DeleteNicknameAsync(HashId, HashId) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Removes the nickname of the specified [member](BaseGuildedClient.DeleteNicknameAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') in the [server](BaseGuildedClient.DeleteNicknameAsync(HashId,HashId).md#Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId).server 'Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId).server').

```csharp
public abstract System.Threading.Tasks.Task DeleteNicknameAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to modify member in

<a name='Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the member to update

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
Nickname