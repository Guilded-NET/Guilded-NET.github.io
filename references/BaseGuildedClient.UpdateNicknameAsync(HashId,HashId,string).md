---
title: UpdateNicknameAsync(HashId, HashId, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Updates the member's nickname.

```csharp
public abstract System.Threading.Tasks.Task<string> UpdateNicknameAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId, string nickname);
```"
---

## BaseGuildedClient.UpdateNicknameAsync(HashId, HashId, string) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Updates the member's nickname.

```csharp
public abstract System.Threading.Tasks.Task<string> UpdateNicknameAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId, string nickname);
```

### Remarks
  
Changes the specified member's nickname. New nickname will be set as [nickname](BaseGuildedClient.UpdateNicknameAsync(HashId,HashId,string)#Guilded.NET.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,string).nickname 'Guilded.NET.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, string).nickname') parameter.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,string).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The server to modify member in

<a name='Guilded.NET.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,string).memberId'></a>

`memberId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the member to update

<a name='Guilded.NET.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,string).nickname'></a>

`nickname` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new nickname of the member

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Nickname