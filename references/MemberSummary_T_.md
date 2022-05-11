---
title: MemberSummary<T>
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the summary about a member."
---

## MemberSummary<T> Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Servers`](Guilded.Base.Servers.md 'Guilded.Base.Servers')

Represents the summary about a member.

```csharp
public class MemberSummary<T> : Guilded.Base.BaseObject
    where T : Guilded.Base.Users.UserSummary
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; MemberSummary<T>

Derived  
&#8627; [Member](Member.md 'Guilded.Base.Servers.Member')
#### Type parameters

<a name='Guilded.Base.Servers.MemberSummary_T_.T'></a>

`T`

The type of the user object

| Constructors | |
| :--- | :--- |
| [MemberSummary(T, IList&lt;uint&gt;)](MemberSummary_T_.MemberSummary(T,IList_uint_).md 'Guilded.Base.Servers.MemberSummary<T>.MemberSummary(T, System.Collections.Generic.IList<uint>)') | Initializes a new instance of [MemberSummary&lt;T&gt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary<T>'). |

| Properties | |
| :--- | :--- |
| [Id](MemberSummary_T_.Id.md 'Guilded.Base.Servers.MemberSummary<T>.Id') | Gets The identifier of [user](User.md 'Guilded.Base.Users.User'). |
| [IsBot](MemberSummary_T_.IsBot.md 'Guilded.Base.Servers.MemberSummary<T>.IsBot') | Gets whether the user is a [bot](UserType.md#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot'). |
| [Name](MemberSummary_T_.Name.md 'Guilded.Base.Servers.MemberSummary<T>.Name') | Gets the global username of the user. |
| [RoleIds](MemberSummary_T_.RoleIds.md 'Guilded.Base.Servers.MemberSummary<T>.RoleIds') | Gets the list of roles user holds. |
| [Type](MemberSummary_T_.Type.md 'Guilded.Base.Servers.MemberSummary<T>.Type') | Gets the type of the user they are. |
| [User](MemberSummary_T_.User.md 'Guilded.Base.Servers.MemberSummary<T>.User') | Gets the user they are. |
