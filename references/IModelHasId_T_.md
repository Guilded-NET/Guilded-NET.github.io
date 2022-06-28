---
title: IModelHasId<T>
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents a model that has [an identifier](IModelHasId_T_.Id 'Guilded.Base.IModelHasId<T>.Id')."
---

## IModelHasId<T> Interface
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents a model that has [an identifier](IModelHasId_T_.Id 'Guilded.Base.IModelHasId<T>.Id').

```csharp
public interface IModelHasId<out T>
```

Derived  
&#8627; [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')  
&#8627; [ChannelMention](Mentions.ChannelMention 'Guilded.Base.Content.Mentions.ChannelMention')  
&#8627; [RoleMention](Mentions.RoleMention 'Guilded.Base.Content.Mentions.RoleMention')  
&#8627; [UserMention](Mentions.UserMention 'Guilded.Base.Content.Mentions.UserMention')  
&#8627; [Reaction](Reaction 'Guilded.Base.Content.Reaction')  
&#8627; [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')  
&#8627; [Me](Me 'Guilded.Base.Users.Me')  
&#8627; [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')
#### Type parameters

<a name='Guilded.Base.IModelHasId_T_.T'></a>

`T`

The type of [the identifier](IModelHasId_T_.Id 'Guilded.Base.IModelHasId<T>.Id')

| Properties | |
| :--- | :--- |
| [Id](IModelHasId_T_.Id 'Guilded.Base.IModelHasId<T>.Id') | Gets the identifier of [the content](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>'). |
