---
title: TitledContent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a document in a document channel."
---

## TitledContent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents a document in a document channel.

```csharp
public abstract class TitledContent : Guilded.Base.Content.ChannelContent<uint, Guilded.Base.HashId>,
Guilded.Base.Content.IUpdatableContent,
Guilded.Base.Content.IReactibleContent,
Guilded.Base.IServerBased,
Guilded.Base.IHasParentClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; TitledContent

Implements [IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent'), [IReactibleContent](IReactibleContent 'Guilded.Base.Content.IReactibleContent'), [IServerBased](IServerBased 'Guilded.Base.IServerBased'), [IHasParentClient](IHasParentClient 'Guilded.Base.IHasParentClient')

Derived  
&#8627; [Doc](Doc 'Guilded.Base.Content.Doc')  
&#8627; [TopicSummary](TopicSummary 'Guilded.Base.Content.TopicSummary')

| Constructors | |
| :--- | :--- |
| [TitledContent(uint, Guid, HashId, string, HashId, DateTime, Nullable&lt;DateTime&gt;)](TitledContent.TitledContent(uint,Guid,HashId,string,HashId,DateTime,Nullable_DateTime_) 'Guilded.Base.Content.TitledContent.TitledContent(uint, Guid, Guilded.Base.HashId, string, Guilded.Base.HashId, System.DateTime, System.Nullable<System.DateTime>)') | Initializes a new instance of [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Title](TitledContent.Title 'Guilded.Base.Content.TitledContent.Title') | Gets the title of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent'). |
| [UpdatedAt](TitledContent.UpdatedAt 'Guilded.Base.Content.TitledContent.UpdatedAt') | Gets the date when [the titled content](TitledContent 'Guilded.Base.Content.TitledContent') were updated. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](TitledContent.AddReactionAsync(uint) 'Guilded.Base.Content.TitledContent.AddReactionAsync(uint)') | Adds emote to the content. |
| [RemoveReactionAsync(uint)](TitledContent.RemoveReactionAsync(uint) 'Guilded.Base.Content.TitledContent.RemoveReactionAsync(uint)') | Removes emote from the content. |

### See Also
- [Topic](Topic 'Guilded.Base.Content.Topic')
- [Doc](Doc 'Guilded.Base.Content.Doc')
- [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')
- [Message](Message 'Guilded.Base.Content.Message')