---
title: Member
layout: references
section: references
tags:
  - references
  - class
description: "

Represents information about [the user](User 'Guilded.Base.Users.User') in a server."
---

## Member Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Servers`](Guilded.Base.Servers 'Guilded.Base.Servers')

Represents information about [the user](User 'Guilded.Base.Users.User') in a server.

```csharp
public class Member : Guilded.Base.Servers.MemberSummary<Guilded.Base.Users.User>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; [Guilded.Base.Servers.MemberSummary&lt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>')[User](User 'Guilded.Base.Users.User')[&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>') &#129106; Member

| Constructors | |
| :--- | :--- |
| [Member(User, IList&lt;uint&gt;, DateTime, string, bool)](Member.Member(User,IList_uint_,DateTime,string,bool) 'Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User, System.Collections.Generic.IList<uint>, System.DateTime, string, bool)') | Initializes a new instance of [Member](Member 'Guilded.Base.Servers.Member')f rom the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [IsOwner](Member.IsOwner 'Guilded.Base.Servers.Member.IsOwner') | Gets whether [the member](Member 'Guilded.Base.Servers.Member') is the owner of the server. |
| [JoinedAt](Member.JoinedAt 'Guilded.Base.Servers.Member.JoinedAt') | Gets the date when [the member](Member 'Guilded.Base.Servers.Member') joined. |
| [Nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') | Gets the set nickname of [the member](Member 'Guilded.Base.Servers.Member') in the server. |

### See Also
- [MemberSummary&lt;T&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>')
- [MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan')
- [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')
- [User](User 'Guilded.Base.Users.User')
- [Webhook](Webhook 'Guilded.Base.Servers.Webhook')