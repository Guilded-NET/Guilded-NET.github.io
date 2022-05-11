---
title: MemberBan
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the information of [user's](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') ban."
---

## MemberBan Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Servers`](Guilded.Base.Servers.md 'Guilded.Base.Servers')

Represents the information of [user's](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') ban.

```csharp
public class MemberBan : Guilded.Base.BaseObject,
Guilded.Base.Content.ICreatableContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; MemberBan

Implements [ICreatableContent](ICreatableContent.md 'Guilded.Base.Content.ICreatableContent')

| Constructors | |
| :--- | :--- |
| [MemberBan(UserSummary, HashId, DateTime, string)](MemberBan.MemberBan(UserSummary,HashId,DateTime,string).md 'Guilded.Base.Servers.MemberBan.MemberBan(Guilded.Base.Users.UserSummary, Guilded.Base.HashId, System.DateTime, string)') | Initializes a new instance of [MemberBan](MemberBan.md 'Guilded.Base.Servers.MemberBan') with the provided details. |

| Properties | |
| :--- | :--- |
| [CreatedAt](MemberBan.CreatedAt.md 'Guilded.Base.Servers.MemberBan.CreatedAt') | Gets the date of when the [user](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') was banned |
| [CreatedBy](MemberBan.CreatedBy.md 'Guilded.Base.Servers.MemberBan.CreatedBy') | Gets the identifier of the staff who banned. |
| [Reason](MemberBan.Reason.md 'Guilded.Base.Servers.MemberBan.Reason') | Gets the reason why the [user](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') has been banned, if the reason was specified. |
| [User](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') | Gets the banned user. |
