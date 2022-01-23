---
title: GetMemberRolesAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the member's roles.

```csharp
public abstract System.Threading.Tasks.Task<System.Collections.Generic.IList<uint>> GetMemberRolesAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId);
```"
---

## BaseGuildedClient.GetMemberRolesAsync(HashId, HashId) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Gets the member's roles.

```csharp
public abstract System.Threading.Tasks.Task<System.Collections.Generic.IList<uint>> GetMemberRolesAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId);
```

### Remarks
  
Gets the specified member's role ID list. No permissions are required.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The server where to fetch user's information

<a name='Guilded.NET.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).memberId'></a>

`memberId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the role holder

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of role IDs