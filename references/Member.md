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
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Servers`](Guilded.Base.Servers.md 'Guilded.Base.Servers')

A server member.

```csharp
public class Member : Guilded.Base.Servers.MemberSummary<Guilded.Base.Users.User>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [Guilded.Base.Servers.MemberSummary&lt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary<T>')[User](User.md 'Guilded.Base.Users.User')[&gt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary<T>') &#129106; Member

### Remarks
  
The full information about a member in the server.

| Constructors | |
| :--- | :--- |
| [Member(User, IList&lt;uint&gt;, string, DateTime)](Member.Member(User,IList_uint_,string,DateTime).md 'Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User, System.Collections.Generic.IList<uint>, string, System.DateTime)') | Initializes a new instance of [Member](Member.md 'Guilded.Base.Servers.Member'). |

| Properties | |
| :--- | :--- |
| [JoinedAt](Member.JoinedAt.md 'Guilded.Base.Servers.Member.JoinedAt') | Gets the date of when the member joined. |
| [Nickname](Member.Nickname.md 'Guilded.Base.Servers.Member.Nickname') | Gets the set nickname of the user in the server. |

### See Also
- [MemberSummary&lt;T&gt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary<T>')
- [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary')
- [User](User.md 'Guilded.Base.Users.User')