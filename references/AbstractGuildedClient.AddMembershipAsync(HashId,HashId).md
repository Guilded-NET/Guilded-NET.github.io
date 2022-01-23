---
title: AddMembershipAsync(HashId, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a member to the group.

```csharp
public override System.Threading.Tasks.Task AddMembershipAsync(Guilded.NET.Base.HashId groupId, Guilded.NET.Base.HashId memberId);
```"
---

## AbstractGuildedClient.AddMembershipAsync(HashId, HashId) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Adds a member to the group.

```csharp
public override System.Threading.Tasks.Task AddMembershipAsync(Guilded.NET.Base.HashId groupId, Guilded.NET.Base.HashId memberId);
```

### Remarks
  
Adds the specified member to the group.  
  
This allows the member to see and interact with the specified group.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.AddMembershipAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).groupId'></a>

`groupId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the parent group

<a name='Guilded.NET.AbstractGuildedClient.AddMembershipAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).memberId'></a>

`memberId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the member to add

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')