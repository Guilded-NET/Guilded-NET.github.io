---
title: Member(User, IList<uint>, DateTime, string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Member](Member 'Guilded.Base.Servers.Member')f rom the specified JSON properties."
---

## Member(User, IList<uint>, DateTime, string) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Member`](Member 'Guilded.Base.Servers.Member')

Initializes a new instance of [Member](Member 'Guilded.Base.Servers.Member')f rom the specified JSON properties.

```csharp
public Member(Guilded.Base.Users.User user, System.Collections.Generic.IList<uint> roleIds, System.DateTime joinedAt, string? nickname=null);
```
#### Parameters

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,System.DateTime,string).user'></a>

`user` [User](User 'Guilded.Base.Users.User')

[the user](User 'Guilded.Base.Users.User') who is a member of the server

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,System.DateTime,string).roleIds'></a>

`roleIds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of roles that member holds

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,System.DateTime,string).joinedAt'></a>

`joinedAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the member joined

<a name='Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User,System.Collections.Generic.IList_uint_,System.DateTime,string).nickname'></a>

`nickname` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The nickname that member has

### See Also
- [Member](Member 'Guilded.Base.Servers.Member')