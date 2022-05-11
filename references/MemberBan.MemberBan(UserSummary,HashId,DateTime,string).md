---
title: MemberBan(UserSummary, HashId, DateTime, string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan') with the provided details."
---

## MemberBan(UserSummary, HashId, DateTime, string) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MemberBan`](MemberBan 'Guilded.Base.Servers.MemberBan')

Initializes a new instance of [MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan') with the provided details.

```csharp
public MemberBan(Guilded.Base.Users.UserSummary user, Guilded.Base.HashId createdBy, System.DateTime createdAt, string? reason=null);
```
#### Parameters

<a name='Guilded.Base.Servers.MemberBan.MemberBan(Guilded.Base.Users.UserSummary,Guilded.Base.HashId,System.DateTime,string).user'></a>

`user` [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')

The user who has been banned

<a name='Guilded.Base.Servers.MemberBan.MemberBan(Guilded.Base.Users.UserSummary,Guilded.Base.HashId,System.DateTime,string).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The author of the ban

<a name='Guilded.Base.Servers.MemberBan.MemberBan(Guilded.Base.Users.UserSummary,Guilded.Base.HashId,System.DateTime,string).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the member was banned

<a name='Guilded.Base.Servers.MemberBan.MemberBan(Guilded.Base.Users.UserSummary,Guilded.Base.HashId,System.DateTime,string).reason'></a>

`reason` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The reason why the user has been banned

### See Also
- [MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan')