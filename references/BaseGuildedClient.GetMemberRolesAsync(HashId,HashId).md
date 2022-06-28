---
title: GetMemberRolesAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the list of roles [member](BaseGuildedClient.GetMemberRolesAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') holds."
---

## BaseGuildedClient.GetMemberRolesAsync(HashId, HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Gets the list of roles [member](BaseGuildedClient.GetMemberRolesAsync(HashId,HashId)#Guilded.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.Base.HashId,Guilded.Base.HashId).member 'Guilded.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.Base.HashId, Guilded.Base.HashId).member') holds.

```csharp
public abstract System.Threading.Tasks.Task<System.Collections.Generic.IList<uint>> GetMemberRolesAsync(Guilded.Base.HashId server, Guilded.Base.HashId member);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.Base.HashId,Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server where to fetch user's information

<a name='Guilded.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.Base.HashId,Guilded.Base.HashId).member'></a>

`member` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the role holder

### Remarks
  
No permissions are required.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of role IDs