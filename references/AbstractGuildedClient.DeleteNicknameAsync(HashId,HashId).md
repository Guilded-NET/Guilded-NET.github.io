---
title: DeleteNicknameAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the specified [member](AbstractGuildedClient.DeleteNicknameAsync(HashId,HashId)#Guilded.AbstractGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.AbstractGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId).member')."
---

## AbstractGuildedClient.DeleteNicknameAsync(HashId, HashId) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Removes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the specified [member](AbstractGuildedClient.DeleteNicknameAsync(HashId,HashId)#Guilded.AbstractGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.AbstractGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId).member').

```csharp
public override System.Threading.Tasks.Task DeleteNicknameAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to modify [member](Member 'Guilded.Base.Servers.Member') in

<a name='Guilded.AbstractGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the [member](Member 'Guilded.Base.Servers.Member') to update

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')