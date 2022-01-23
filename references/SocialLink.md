---
title: SocialLink
layout: references
section: references
tags:
  - references
  - class
description: "

A social media link.

```csharp
public class SocialLink : Guilded.NET.Base.BaseObject
```"
---

## SocialLink Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Users`](Guilded.NET.Base.Users 'Guilded.NET.Base.Users')

A social media link.

```csharp
public class SocialLink : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; SocialLink

### Remarks
  
Defines what platforms this user has linked to, such as [Twitch](SocialLinkType#Guilded.NET.Base.Users.SocialLinkType.Twitch 'Guilded.NET.Base.Users.SocialLinkType.Twitch') and provides information about them.

| Constructors | |
| :--- | :--- |
| [SocialLink(SocialLinkType, string, string)](SocialLink.SocialLink(SocialLinkType,string,string) 'Guilded.NET.Base.Users.SocialLink.SocialLink(Guilded.NET.Base.Users.SocialLinkType, string, string)') | Creates a new instance of [SocialLink](SocialLink 'Guilded.NET.Base.Users.SocialLink'). This is currently only used in deserialization. |

| Properties | |
| :--- | :--- |
| [Handle](SocialLink.Handle 'Guilded.NET.Base.Users.SocialLink.Handle') | The name or identifier in this social link. |
| [ServiceId](SocialLink.ServiceId 'Guilded.NET.Base.Users.SocialLink.ServiceId') | The identifier of this social link. |
| [Type](SocialLink.Type 'Guilded.NET.Base.Users.SocialLink.Type') | The type of social link it is. |

### See Also
- [Member](Member 'Guilded.NET.Base.Servers.Member')
- [SocialLinkType](SocialLinkType 'Guilded.NET.Base.Users.SocialLinkType')