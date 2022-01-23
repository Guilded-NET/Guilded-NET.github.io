---
title: Reaction
layout: references
section: references
tags:
  - references
  - class
description: "

The information about a reaction.

```csharp
public class Reaction : Guilded.NET.Base.ClientObject,
Guilded.NET.Base.Content.IWebhookCreatable
```"
---

## Reaction Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Content`](Guilded.NET.Base.Content 'Guilded.NET.Base.Content')

The information about a reaction.

```csharp
public class Reaction : Guilded.NET.Base.ClientObject,
Guilded.NET.Base.Content.IWebhookCreatable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; Reaction

Implements [IWebhookCreatable](IWebhookCreatable 'Guilded.NET.Base.Content.IWebhookCreatable')

### Remarks
  
Defines a reaction in [ChannelContent&lt;T,S&gt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>'). Only currently exists on messages, forum threads, announcements, media, documents and calendar events. Currently doesn't hold the count of all reactions, nor return all reacting users.

| Constructors | |
| :--- | :--- |
| [Reaction(uint, Nullable&lt;HashId&gt;, HashId, Nullable&lt;Guid&gt;, DateTime)](Reaction.Reaction(uint,Nullable_HashId_,HashId,Nullable_Guid_,DateTime) 'Guilded.NET.Base.Content.Reaction.Reaction(uint, System.Nullable<Guilded.NET.Base.HashId>, Guilded.NET.Base.HashId, System.Nullable<System.Guid>, System.DateTime)') | Creates a new instance of [Reaction](Reaction 'Guilded.NET.Base.Content.Reaction') with provided details. |

| Properties | |
| :--- | :--- |
| [CreatedAt](Reaction.CreatedAt 'Guilded.NET.Base.Content.Reaction.CreatedAt') | The date of when this reaction was created. |
| [CreatedBy](Reaction.CreatedBy 'Guilded.NET.Base.Content.Reaction.CreatedBy') | The identifier of the user creator of the reaction. |
| [CreatedByWebhook](Reaction.CreatedByWebhook 'Guilded.NET.Base.Content.Reaction.CreatedByWebhook') | The identifier of the webhook creator of the reaction. |
| [Id](Reaction.Id 'Guilded.NET.Base.Content.Reaction.Id') | The identifier of the emote reacted with. |
| [ServerId](Reaction.ServerId 'Guilded.NET.Base.Content.Reaction.ServerId') | The identifier of the server where the content is. |

| Methods | |
| :--- | :--- |
| [Equals(object)](Reaction.Equals(object) 'Guilded.NET.Base.Content.Reaction.Equals(object)') | Returns whether this and [obj](Reaction.Equals(object)#Guilded.NET.Base.Content.Reaction.Equals(object).obj 'Guilded.NET.Base.Content.Reaction.Equals(object).obj') are equal to each other. |
| [GetHashCode()](Reaction.GetHashCode() 'Guilded.NET.Base.Content.Reaction.GetHashCode()') | Gets a hashcode of this object. |

### See Also
- [Message](Message 'Guilded.NET.Base.Content.Message')