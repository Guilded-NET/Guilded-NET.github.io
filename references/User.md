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
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Users`](Guilded.Base.Users 'Guilded.Base.Users')

Represents the extended information about a user.

```csharp
public class User : Guilded.Base.Users.UserSummary
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary') &#129106; User

| Constructors | |
| :--- | :--- |
| [User(HashId, string, DateTime, Uri, Uri, UserType)](User.User(HashId,string,DateTime,Uri,Uri,UserType) 'Guilded.Base.Users.User.User(Guilded.Base.HashId, string, System.DateTime, Uri, Uri, Guilded.Base.Users.UserType)') | Initializes a new instance of [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Banner](User.Banner 'Guilded.Base.Users.User.Banner') | Gets the global banner of [the user](User 'Guilded.Base.Users.User'). |
| [CreatedAt](User.CreatedAt 'Guilded.Base.Users.User.CreatedAt') | Gets the date when [the user](User 'Guilded.Base.Users.User') has registered their account. |

### See Also
- [SocialLink](SocialLink 'Guilded.Base.Users.SocialLink')
- [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')
- [Me](Me 'Guilded.Base.Users.Me')