---
title: Mentions(bool, bool, IList<UserMention>, IList<ChannelMention>, IList<RoleMention>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Mentions](Mentions 'Guilded.Base.Content.Mentions') from the specified JSON properties."
---

## Mentions(bool, bool, IList<UserMention>, IList<ChannelMention>, IList<RoleMention>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Mentions`](Mentions 'Guilded.Base.Content.Mentions')

Initializes a new instance of [Mentions](Mentions 'Guilded.Base.Content.Mentions') from the specified JSON properties.

```csharp
public Mentions(bool everyone=false, bool here=false, System.Collections.Generic.IList<Guilded.Base.Content.Mentions.UserMention>? users=null, System.Collections.Generic.IList<Guilded.Base.Content.Mentions.ChannelMention>? channels=null, System.Collections.Generic.IList<Guilded.Base.Content.Mentions.RoleMention>? roles=null);
```
#### Parameters

<a name='Guilded.Base.Content.Mentions.Mentions(bool,bool,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.UserMention_,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.ChannelMention_,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.RoleMention_).everyone'></a>

`everyone` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether `@everyone` has been [mentioned](Mentions 'Guilded.Base.Content.Mentions')

<a name='Guilded.Base.Content.Mentions.Mentions(bool,bool,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.UserMention_,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.ChannelMention_,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.RoleMention_).here'></a>

`here` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether `@here` has been [mentioned](Mentions 'Guilded.Base.Content.Mentions')

<a name='Guilded.Base.Content.Mentions.Mentions(bool,bool,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.UserMention_,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.ChannelMention_,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.RoleMention_).users'></a>

`users` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[UserMention](Mentions.UserMention 'Guilded.Base.Content.Mentions.UserMention')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of [users](User 'Guilded.Base.Users.User') that have been [mentioned](Mentions 'Guilded.Base.Content.Mentions')

<a name='Guilded.Base.Content.Mentions.Mentions(bool,bool,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.UserMention_,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.ChannelMention_,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.RoleMention_).channels'></a>

`channels` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[ChannelMention](Mentions.ChannelMention 'Guilded.Base.Content.Mentions.ChannelMention')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of [channels](ServerChannel 'Guilded.Base.Servers.ServerChannel') that have been [mentioned](Mentions 'Guilded.Base.Content.Mentions')

<a name='Guilded.Base.Content.Mentions.Mentions(bool,bool,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.UserMention_,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.ChannelMention_,System.Collections.Generic.IList_Guilded.Base.Content.Mentions.RoleMention_).roles'></a>

`roles` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[RoleMention](Mentions.RoleMention 'Guilded.Base.Content.Mentions.RoleMention')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of roles that have been [mentioned](Mentions 'Guilded.Base.Content.Mentions')