---
title: Member(User, IList<uint>, DateTime, string, bool)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Member](Member 'Guilded.Base.Servers.Member')f rom the specified JSON properties."
---

## Member(User, IList<uint>, DateTime, string, bool) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Member`](Member 'Guilded.Base.Servers.Member')

Initializes a new instance of [Member](Member 'Guilded.Base.Servers.Member')f rom the specified JSON properties.

```csharp
public Member(Guilded.Base.Users.User user, System.Collections.Generic.IList<uint> roleIds, System.DateTime joinedAt, string? nickname=null, bool isOwner=false);
```
#### Parameters

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,System.DateTime,string,bool).user'></a>

`user` [User](User 'Guilded.Base.Users.User')

[the user](User 'Guilded.Base.Users.User') who is a member of the server

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,System.DateTime,string,bool).roleIds'></a>

`roleIds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of roles that member holds

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,System.DateTime,string,bool).joinedAt'></a>

`joinedAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the member joined

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,System.DateTime,string,bool).nickname'></a>

`nickname` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The nickname that member has

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,System.DateTime,string,bool).isOwner'></a>

`isOwner` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether [the member](Member 'Guilded.Base.Servers.Member') is the owner of the server

### See Also
- [Member](Member 'Guilded.Base.Servers.Member')