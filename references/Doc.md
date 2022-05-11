---
title: Doc
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a document in a document channel."
---

## Doc Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content.md 'Guilded.Base.Content')

Represents a document in a document channel.

```csharp
public class Doc : Guilded.Base.Content.TitledContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; [TitledContent](TitledContent.md 'Guilded.Base.Content.TitledContent') &#129106; Doc

| Constructors | |
| :--- | :--- |
| [Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](Doc.Doc(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_HashId_,Nullable_DateTime_).md 'Guilded.Base.Content.Doc.Doc(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>)') | Initializes a new instance of [Doc](Doc.md 'Guilded.Base.Content.Doc') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [UpdatedBy](Doc.UpdatedBy.md 'Guilded.Base.Content.Doc.UpdatedBy') | Gets the identifier of the member who updated the document. |

| Methods | |
| :--- | :--- |
| [DeleteAsync()](Doc.DeleteAsync().md 'Guilded.Base.Content.Doc.DeleteAsync()') | Deletes a doc from a channel. |
| [UpdateAsync(string, string)](Doc.UpdateAsync(string,string).md 'Guilded.Base.Content.Doc.UpdateAsync(string, string)') | Edits the [content](Doc.UpdateAsync(string,string).md#Guilded.Base.Content.Doc.UpdateAsync(string,string).content 'Guilded.Base.Content.Doc.UpdateAsync(string, string).content') or the [title](Doc.UpdateAsync(string,string).md#Guilded.Base.Content.Doc.UpdateAsync(string,string).title 'Guilded.Base.Content.Doc.UpdateAsync(string, string).title') of a doc in a channel. |

### See Also
- [ForumThread](ForumThread.md 'Guilded.Base.Content.ForumThread')
- [ListItem&lt;T&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')
- [Message](Message.md 'Guilded.Base.Content.Message')