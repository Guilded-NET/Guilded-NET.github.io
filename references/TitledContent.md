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
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content.md 'Guilded.Base.Content')

Represents a document in a document channel.

```csharp
public class TitledContent : Guilded.Base.Content.ChannelContent<uint, Guilded.Base.HashId>,
Guilded.Base.Content.IUpdatableContent,
Guilded.Base.Content.IReactibleContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; TitledContent

Implements [IUpdatableContent](IUpdatableContent.md 'Guilded.Base.Content.IUpdatableContent'), [IReactibleContent](IReactibleContent.md 'Guilded.Base.Content.IReactibleContent')

Derived  
&#8627; [Doc](Doc.md 'Guilded.Base.Content.Doc')  
&#8627; [ForumThread](ForumThread.md 'Guilded.Base.Content.ForumThread')

| Constructors | |
| :--- | :--- |
| [TitledContent(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;DateTime&gt;)](TitledContent.TitledContent(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_DateTime_).md 'Guilded.Base.Content.TitledContent.TitledContent(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.DateTime, System.Nullable<System.DateTime>)') | Initializes a new instance of [TitledContent](TitledContent.md 'Guilded.Base.Content.TitledContent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Content](TitledContent.Content.md 'Guilded.Base.Content.TitledContent.Content') | Gets the text contents of the document. |
| [Title](TitledContent.Title.md 'Guilded.Base.Content.TitledContent.Title') | Gets the title of the document. |
| [UpdatedAt](TitledContent.UpdatedAt.md 'Guilded.Base.Content.TitledContent.UpdatedAt') | Gets the date of when the content were updated. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](TitledContent.AddReactionAsync(uint).md 'Guilded.Base.Content.TitledContent.AddReactionAsync(uint)') | Adds a emote to the content in a channel. |

### See Also
- [ForumThread](ForumThread.md 'Guilded.Base.Content.ForumThread')
- [ListItem&lt;T&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')
- [Message](Message.md 'Guilded.Base.Content.Message')