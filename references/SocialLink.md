---
title: SocialLink
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a social media link of a [user](User.md 'Guilded.Base.Users.User')."
---

## SocialLink Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Users`](Guilded.Base.Users.md 'Guilded.Base.Users')

Represents a social media link of a [user](User.md 'Guilded.Base.Users.User').

```csharp
public class SocialLink : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; SocialLink

| Constructors | |
| :--- | :--- |
| [SocialLink(SocialLinkType, string, string)](SocialLink.SocialLink(SocialLinkType,string,string).md 'Guilded.Base.Users.SocialLink.SocialLink(Guilded.Base.Users.SocialLinkType, string, string)') | Initializes a new instance of [SocialLink](SocialLink.md 'Guilded.Base.Users.SocialLink') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Handle](SocialLink.Handle.md 'Guilded.Base.Users.SocialLink.Handle') | Gets the name, unique identifier or unique tag of the [user](User.md 'Guilded.Base.Users.User') in this social link. |
| [ServiceId](SocialLink.ServiceId.md 'Guilded.Base.Users.SocialLink.ServiceId') | Gets the unique identifier of the [user](User.md 'Guilded.Base.Users.User') in this social link. |
| [Type](SocialLink.Type.md 'Guilded.Base.Users.SocialLink.Type') | Gets the type of social link it is. |

### See Also
- [User](User.md 'Guilded.Base.Users.User')
- [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary')
- [SocialLinkType](SocialLinkType.md 'Guilded.Base.Users.SocialLinkType')