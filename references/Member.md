---
title: Member
layout: references
section: references
tags:
  - references
  - class
description: "

A server member."
---

## Member Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Servers`](Guilded.Base.Servers 'Guilded.Base.Servers')

A server member.

```csharp
public class Member : Guilded.Base.Servers.MemberSummary<Guilded.Base.Users.User>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; [Guilded.Base.Servers.MemberSummary&lt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>')[User](User 'Guilded.Base.Users.User')[&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>') &#129106; Member

### Remarks
  
The full information about a member in the server.

| Constructors | |
| :--- | :--- |
| [Member(User, IList&lt;uint&gt;, DateTime, string)](Member.Member(User,IList_uint_,DateTime,string) 'Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User, System.Collections.Generic.IList<uint>, System.DateTime, string)') | Initializes a new instance of [Member](Member 'Guilded.Base.Servers.Member')f rom the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [JoinedAt](Member.JoinedAt 'Guilded.Base.Servers.Member.JoinedAt') | Gets the date when the member joined. |
| [Nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') | Gets the set nickname of [the user](User 'Guilded.Base.Users.User') in the server. |

### See Also
- [MemberSummary&lt;T&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>')
- [MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan')
- [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')
- [User](User 'Guilded.Base.Users.User')
- [Webhook](Webhook 'Guilded.Base.Servers.Webhook')