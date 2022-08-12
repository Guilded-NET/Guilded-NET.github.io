---
title: Mentions
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a collection of mentions of certain element or user."
---

## Mentions Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents a collection of mentions of certain element or user.

```csharp
public class Mentions : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; Mentions

| Constructors | |
| :--- | :--- |
| [Mentions(bool, bool, IList&lt;UserMention&gt;, IList&lt;ChannelMention&gt;, IList&lt;RoleMention&gt;)](Mentions.Mentions(bool,bool,IList_UserMention_,IList_ChannelMention_,IList_RoleMention_) 'Guilded.Base.Content.Mentions.Mentions(bool, bool, System.Collections.Generic.IList<Guilded.Base.Content.Mentions.UserMention>, System.Collections.Generic.IList<Guilded.Base.Content.Mentions.ChannelMention>, System.Collections.Generic.IList<Guilded.Base.Content.Mentions.RoleMention>)') | Initializes a new instance of [Mentions](Mentions 'Guilded.Base.Content.Mentions') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelIds](Mentions.ChannelIds 'Guilded.Base.Content.Mentions.ChannelIds') | Gets the identifiers of [the channels](ServerChannel 'Guilded.Base.Servers.ServerChannel') that have been [mentioned](Mentions 'Guilded.Base.Content.Mentions'). |
| [Channels](Mentions.Channels 'Guilded.Base.Content.Mentions.Channels') | Gets the list of [channels](ServerChannel 'Guilded.Base.Servers.ServerChannel') that have been [mentioned](Mentions 'Guilded.Base.Content.Mentions'). |
| [Everyone](Mentions.Everyone 'Guilded.Base.Content.Mentions.Everyone') | Gets whether `@everyone` has been [mentioned](Mentions 'Guilded.Base.Content.Mentions'). |
| [Here](Mentions.Here 'Guilded.Base.Content.Mentions.Here') | Gets whether `@here` has been [mentioned](Mentions 'Guilded.Base.Content.Mentions'). |
| [RoleIds](Mentions.RoleIds 'Guilded.Base.Content.Mentions.RoleIds') | Gets the identifiers of [the channels](ServerChannel 'Guilded.Base.Servers.ServerChannel') that have been [mentioned](Mentions 'Guilded.Base.Content.Mentions'). |
| [Roles](Mentions.Roles 'Guilded.Base.Content.Mentions.Roles') | Gets the list of roles that have been [mentioned](Mentions 'Guilded.Base.Content.Mentions'). |
| [UserIds](Mentions.UserIds 'Guilded.Base.Content.Mentions.UserIds') | Gets the identifiers of [the users](User 'Guilded.Base.Users.User') that have been [mentioned](Mentions 'Guilded.Base.Content.Mentions'). |
| [Users](Mentions.Users 'Guilded.Base.Content.Mentions.Users') | Gets the list of [users](User 'Guilded.Base.Users.User') that have been [mentioned](Mentions 'Guilded.Base.Content.Mentions'). |

### See Also
- [Embed](Embed 'Guilded.Base.Embeds.Embed')