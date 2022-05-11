---
title: Reaction
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a [content](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>') reaction."
---

## Reaction Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content.md 'Guilded.Base.Content')

Represents a [content](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>') reaction.

```csharp
public class Reaction : Guilded.Base.ClientObject,
Guilded.Base.Content.IWebhookCreatable,
Guilded.Base.Content.ICreatableContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject') &#129106; Reaction

Implements [IWebhookCreatable](IWebhookCreatable.md 'Guilded.Base.Content.IWebhookCreatable'), [ICreatableContent](ICreatableContent.md 'Guilded.Base.Content.ICreatableContent')

| Constructors | |
| :--- | :--- |
| [Reaction(uint, Nullable&lt;HashId&gt;, HashId, Nullable&lt;Guid&gt;, DateTime)](Reaction.Reaction(uint,Nullable_HashId_,HashId,Nullable_Guid_,DateTime).md 'Guilded.Base.Content.Reaction.Reaction(uint, System.Nullable<Guilded.Base.HashId>, Guilded.Base.HashId, System.Nullable<Guid>, System.DateTime)') | Initializes a new instance of [Reaction](Reaction.md 'Guilded.Base.Content.Reaction') with provided details. |

| Properties | |
| :--- | :--- |
| [CreatedAt](Reaction.CreatedAt.md 'Guilded.Base.Content.Reaction.CreatedAt') | Gets the date of when the reaction was created. |
| [CreatedBy](Reaction.CreatedBy.md 'Guilded.Base.Content.Reaction.CreatedBy') | Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the reaction. |
| [CreatedByWebhook](Reaction.CreatedByWebhook.md 'Guilded.Base.Content.Reaction.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') that created the reaction. |
| [Id](Reaction.Id.md 'Guilded.Base.Content.Reaction.Id') | Gets the identifier of the emote reacted with. |
| [ServerId](Reaction.ServerId.md 'Guilded.Base.Content.Reaction.ServerId') | Gets the identifier of the server where the content is. |

| Methods | |
| :--- | :--- |
| [Equals(object)](Reaction.Equals(object).md 'Guilded.Base.Content.Reaction.Equals(object)') | Returns whether this and [obj](Reaction.Equals(object).md#Guilded.Base.Content.Reaction.Equals(object).obj 'Guilded.Base.Content.Reaction.Equals(object).obj') are equal to each other. |
| [GetHashCode()](Reaction.GetHashCode().md 'Guilded.Base.Content.Reaction.GetHashCode()') | Gets a hashcode of this object. |

### See Also
- [Message](Message.md 'Guilded.Base.Content.Message')
- [Doc](Doc.md 'Guilded.Base.Content.Doc')
- [ForumThread](ForumThread.md 'Guilded.Base.Content.ForumThread')