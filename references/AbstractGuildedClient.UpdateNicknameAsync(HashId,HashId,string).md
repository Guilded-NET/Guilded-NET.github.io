---
title: UpdateNicknameAsync(HashId, HashId, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Changes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the [member](AbstractGuildedClient.UpdateNicknameAsync(HashId,HashId,string)#Guilded.AbstractGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member 'Guilded.AbstractGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).member')."
---

## AbstractGuildedClient.UpdateNicknameAsync(HashId, HashId, string) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Changes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the [member](AbstractGuildedClient.UpdateNicknameAsync(HashId,HashId,string)#Guilded.AbstractGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member 'Guilded.AbstractGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string).member').

```csharp
public override System.Threading.Tasks.Task<string> UpdateNicknameAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, string nickname);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server to modify member in

<a name='Guilded.AbstractGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the member to update

<a name='Guilded.AbstractGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId,Guilded.Base.HashId,string).nickname'></a>

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