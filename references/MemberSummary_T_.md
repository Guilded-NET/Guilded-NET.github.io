---
title: MemberSummary<T>
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the base type for [member models](Member 'Guilded.Base.Servers.Member')."
---

## MemberSummary<T> Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Servers`](Guilded.Base.Servers 'Guilded.Base.Servers')

Represents the base type for [member models](Member 'Guilded.Base.Servers.Member').

```csharp
public class MemberSummary<T> : Guilded.Base.BaseModel
    where T : Guilded.Base.Users.UserSummary
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; MemberSummary<T>

Derived  
&#8627; [Member](Member 'Guilded.Base.Servers.Member')  
&#8627; [MemberSummary](MemberSummary 'Guilded.Base.Servers.MemberSummary')
#### Type parameters

<a name='Guilded.Base.Servers.MemberSummary_T_.T'></a>

`T`

The type of [the user](User 'Guilded.Base.Users.User') object

| Constructors | |
| :--- | :--- |
| [MemberSummary(T, IList&lt;uint&gt;)](MemberSummary_T_.MemberSummary(T,IList_uint_) 'Guilded.Base.Servers.MemberSummary<T>.MemberSummary(T, System.Collections.Generic.IList<uint>)') | Initializes a new instance of [MemberSummary&lt;T&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>'). |

| Properties | |
| :--- | :--- |
| [Id](MemberSummary_T_.Id 'Guilded.Base.Servers.MemberSummary<T>.Id') | Gets the identifier of [user](User 'Guilded.Base.Users.User'). |
| [IsBot](MemberSummary_T_.IsBot 'Guilded.Base.Servers.MemberSummary<T>.IsBot') | Gets whether [the user](User 'Guilded.Base.Users.User') is a [bot](UserType#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot'). |
| [Name](MemberSummary_T_.Name 'Guilded.Base.Servers.MemberSummary<T>.Name') | Gets the global username of [the user](User 'Guilded.Base.Users.User'). |
| [RoleIds](MemberSummary_T_.RoleIds 'Guilded.Base.Servers.MemberSummary<T>.RoleIds') | Gets the list of roles [member](Member 'Guilded.Base.Servers.Member') holds. |
| [Type](MemberSummary_T_.Type 'Guilded.Base.Servers.MemberSummary<T>.Type') | Gets the type of [the user](User 'Guilded.Base.Users.User') they are. |
| [User](MemberSummary_T_.User 'Guilded.Base.Servers.MemberSummary<T>.User') | Gets [the user](User 'Guilded.Base.Users.User') they are. |

### See Also
- [Member](Member 'Guilded.Base.Servers.Member')
- [MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan')
- [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')
- [Webhook](Webhook 'Guilded.Base.Servers.Webhook')