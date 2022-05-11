---
title: SocialLink
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a social media link of a [user](User 'Guilded.Base.Users.User')."
---

## SocialLink Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Users`](Guilded.Base.Users 'Guilded.Base.Users')

Represents a social media link of a [user](User 'Guilded.Base.Users.User').

```csharp
public class SocialLink : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; SocialLink

| Constructors | |
| :--- | :--- |
| [SocialLink(SocialLinkType, string, string)](SocialLink.SocialLink(SocialLinkType,string,string) 'Guilded.Base.Users.SocialLink.SocialLink(Guilded.Base.Users.SocialLinkType, string, string)') | Initializes a new instance of [SocialLink](SocialLink 'Guilded.Base.Users.SocialLink') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Handle](SocialLink.Handle 'Guilded.Base.Users.SocialLink.Handle') | Gets the name, unique identifier or unique tag of the [user](User 'Guilded.Base.Users.User') in this social link. |
| [ServiceId](SocialLink.ServiceId 'Guilded.Base.Users.SocialLink.ServiceId') | Gets the unique identifier of the [user](User 'Guilded.Base.Users.User') in this social link. |
| [Type](SocialLink.Type 'Guilded.Base.Users.SocialLink.Type') | Gets the type of social link it is. |

### See Also
- [Me](Me 'Guilded.Base.Users.Me')
- [User](User 'Guilded.Base.Users.User')
- [Member](Member 'Guilded.Base.Servers.Member')
- [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')
- [SocialLinkType](SocialLinkType 'Guilded.Base.Users.SocialLinkType')