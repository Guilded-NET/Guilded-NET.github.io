---
title: Reaction
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a [content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') reaction."
---

## Reaction Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents a [content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') reaction.

```csharp
public class Reaction : Guilded.Base.ContentModel,
Guilded.Base.IModelHasId<uint>,
Guilded.Base.Content.IWebhookCreatable,
Guilded.Base.Content.ICreatableContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; Reaction

Implements [Guilded.Base.IModelHasId&lt;](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>'), [IWebhookCreatable](IWebhookCreatable 'Guilded.Base.Content.IWebhookCreatable'), [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent')

| Constructors | |
| :--- | :--- |
| [Reaction(uint, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;Guid&gt;)](Reaction.Reaction(uint,HashId,DateTime,Nullable_HashId_,Nullable_Guid_) 'Guilded.Base.Content.Reaction.Reaction(uint, Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<Guid>)') | Initializes a new instance of [Reaction](Reaction 'Guilded.Base.Content.Reaction') with provided details. |

| Properties | |
| :--- | :--- |
| [CreatedAt](Reaction.CreatedAt 'Guilded.Base.Content.Reaction.CreatedAt') | Gets the date when [the reaction](Reaction 'Guilded.Base.Content.Reaction') was created. |
| [CreatedBy](Reaction.CreatedBy 'Guilded.Base.Content.Reaction.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the reaction](Reaction 'Guilded.Base.Content.Reaction'). |
| [CreatedByWebhook](Reaction.CreatedByWebhook 'Guilded.Base.Content.Reaction.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the reaction](Reaction 'Guilded.Base.Content.Reaction'). |
| [Id](Reaction.Id 'Guilded.Base.Content.Reaction.Id') | Gets the identifier of the emote that was reacted with. |
| [ServerId](Reaction.ServerId 'Guilded.Base.Content.Reaction.ServerId') | Gets the identifier of [the reaction](Reaction 'Guilded.Base.Content.Reaction') where the content is. |

| Methods | |
| :--- | :--- |
| [Equals(object)](Reaction.Equals(object) 'Guilded.Base.Content.Reaction.Equals(object)') | Returns whether this and [obj](Reaction.Equals(object)#Guilded.Base.Content.Reaction.Equals(object).obj 'Guilded.Base.Content.Reaction.Equals(object).obj') are equal to each other. |
| [GetHashCode()](Reaction.GetHashCode() 'Guilded.Base.Content.Reaction.GetHashCode()') | Gets a hashcode of this object. |

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [Doc](Doc 'Guilded.Base.Content.Doc')
- [Topic](Topic 'Guilded.Base.Content.Topic')