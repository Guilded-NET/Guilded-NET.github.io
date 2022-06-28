---
title: MemberBan
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the information of [user's](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') ban."
---

## MemberBan Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Servers`](Guilded.Base.Servers 'Guilded.Base.Servers')

Represents the information of [user's](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') ban.

```csharp
public class MemberBan : Guilded.Base.BaseModel,
Guilded.Base.Content.ICreatableContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; MemberBan

Implements [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent')

| Constructors | |
| :--- | :--- |
| [MemberBan(UserSummary, HashId, DateTime, string)](MemberBan.MemberBan(UserSummary,HashId,DateTime,string) 'Guilded.Base.Servers.MemberBan.MemberBan(Guilded.Base.Users.UserSummary, Guilded.Base.HashId, System.DateTime, string)') | Initializes a new instance of [MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan') with the provided details. |

| Properties | |
| :--- | :--- |
| [CreatedAt](MemberBan.CreatedAt 'Guilded.Base.Servers.MemberBan.CreatedAt') | Gets the date when the [user](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') was banned |
| [CreatedBy](MemberBan.CreatedBy 'Guilded.Base.Servers.MemberBan.CreatedBy') | Gets the identifier of the staff who banned. |
| [Reason](MemberBan.Reason 'Guilded.Base.Servers.MemberBan.Reason') | Gets the reason why the [user](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') has been banned, if the reason was specified. |
| [User](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') | Gets the banned user. |

### See Also
- [Member](Member 'Guilded.Base.Servers.Member')
- [MemberSummary&lt;T&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>')
- [User](User 'Guilded.Base.Users.User')