---
title: User
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the extended information about a user."
---

## User Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Users`](Guilded.Base.Users.md 'Guilded.Base.Users')

Represents the extended information about a user.

```csharp
public class User : Guilded.Base.Users.UserSummary
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject') &#129106; [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary') &#129106; User

| Constructors | |
| :--- | :--- |
| [User(HashId, UserType, string, DateTime)](User.User(HashId,UserType,string,DateTime).md 'Guilded.Base.Users.User.User(Guilded.Base.HashId, Guilded.Base.Users.UserType, string, System.DateTime)') | Initializes a new instance of [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CreatedAt](User.CreatedAt.md 'Guilded.Base.Users.User.CreatedAt') | Gets the date when the user has registered their account. |

### See Also
- [SocialLink](SocialLink.md 'Guilded.Base.Users.SocialLink')
- [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary')