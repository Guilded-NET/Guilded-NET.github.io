---
title: UpdateNicknameAsync(HashId, HashId, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Changes the [nickname](BaseGuildedClient.UpdateNicknameAsync(HashId,HashId,string).md#Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).nickname 'Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).nickname') of the specified [member](BaseGuildedClient.UpdateNicknameAsync(HashId,HashId,string).md#Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member 'Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).member') in the [server](BaseGuildedClient.UpdateNicknameAsync(HashId,HashId,string).md#Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).server 'Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).server')."
---

## BaseGuildedClient.UpdateNicknameAsync(HashId, HashId, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Changes the [nickname](BaseGuildedClient.UpdateNicknameAsync(HashId,HashId,string).md#Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).nickname 'Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).nickname') of the specified [member](BaseGuildedClient.UpdateNicknameAsync(HashId,HashId,string).md#Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member 'Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).member') in the [server](BaseGuildedClient.UpdateNicknameAsync(HashId,HashId,string).md#Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).server 'Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).server').

```csharp
public abstract System.Threading.Tasks.Task<string> UpdateNicknameAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, string nickname);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server to modify member in

<a name='Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the member to update

<a name='Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).nickname'></a>

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