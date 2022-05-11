---
title: Member(User, IList<uint>, string, DateTime)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Member](Member.md 'Guilded.Base.Servers.Member')."
---

## Member(User, IList<uint>, string, DateTime) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Member`](Member.md 'Guilded.Base.Servers.Member')

Initializes a new instance of [Member](Member.md 'Guilded.Base.Servers.Member').

```csharp
public Member(Guilded.Base.Users.User user, System.Collections.Generic.IList<uint> roleIds, string? nickname, System.DateTime joinedAt);
```
#### Parameters

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,string,System.DateTime).user'></a>

`user` [User](User.md 'Guilded.Base.Users.User')

The user who is a member of the server

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,string,System.DateTime).roleIds'></a>

`roleIds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of roles that member holds

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,string,System.DateTime).nickname'></a>

`nickname` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The nickname that member has

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,string,System.DateTime).joinedAt'></a>

`joinedAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the member joined