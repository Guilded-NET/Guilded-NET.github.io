---
title: RemoveMembershipAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Removes a member from the group.

```csharp
public abstract System.Threading.Tasks.Task RemoveMembershipAsync(Guilded.NET.Base.HashId groupId, Guilded.NET.Base.HashId memberId);
```"
---

## BaseGuildedClient.RemoveMembershipAsync(HashId, HashId) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Removes a member from the group.

```csharp
public abstract System.Threading.Tasks.Task RemoveMembershipAsync(Guilded.NET.Base.HashId groupId, Guilded.NET.Base.HashId memberId);
```

### Remarks
  
Removes the specified member from the group.  
  
This disallows the member to interact or see the specified group.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).groupId'></a>

`groupId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the parent group

<a name='Guilded.NET.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).memberId'></a>

`memberId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the member to remove

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')