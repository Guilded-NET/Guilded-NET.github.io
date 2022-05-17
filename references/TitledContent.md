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
public class TitledContent : Guilded.Base.Content.ChannelContent<uint, Guilded.Base.HashId>,
Guilded.Base.Content.IUpdatableContent,
Guilded.Base.Content.IReactibleContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.Base.ClientObject') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; TitledContent

Implements [IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent'), [IReactibleContent](IReactibleContent 'Guilded.Base.Content.IReactibleContent')

Derived  
&#8627; [Doc](Doc 'Guilded.Base.Content.Doc')  
&#8627; [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread')

| Constructors | |
| :--- | :--- |
| [TitledContent(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;DateTime&gt;)](TitledContent.TitledContent(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_DateTime_) 'Guilded.Base.Content.TitledContent.TitledContent(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.DateTime, System.Nullable<System.DateTime>)') | Initializes a new instance of [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Content](TitledContent.Content 'Guilded.Base.Content.TitledContent.Content') | Gets the text contents of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent'). |
| [Title](TitledContent.Title 'Guilded.Base.Content.TitledContent.Title') | Gets the title of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent'). |
| [UpdatedAt](TitledContent.UpdatedAt 'Guilded.Base.Content.TitledContent.UpdatedAt') | Gets the date when the content were updated. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](TitledContent.AddReactionAsync(uint) 'Guilded.Base.Content.TitledContent.AddReactionAsync(uint)') | Adds emote to the content. |

### See Also
- [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread')
- [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')
- [Message](Message 'Guilded.Base.Content.Message')