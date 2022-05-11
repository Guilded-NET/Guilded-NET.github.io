---
title: ListItemSummary
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an item in a list channel."
---

## ListItemSummary Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents an item in a list channel.

```csharp
public class ListItemSummary : Guilded.Base.Content.ListItemBase<Guilded.Base.Content.ListItemNote>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.Base.ClientObject') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[,](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; [Guilded.Base.Content.ListItemBase&lt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')[ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote')[&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>') &#129106; ListItemSummary

### Remarks
  
Either an existing or a cached list item.

| Constructors | |
| :--- | :--- |
| [ListItemSummary(Guid, Guid, HashId, string, HashId, DateTime, Nullable&lt;Guid&gt;, ListItemNote, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;Guid&gt;)](ListItemSummary.ListItemSummary(Guid,Guid,HashId,string,HashId,DateTime,Nullable_Guid_,ListItemNote,Nullable_DateTime_,Nullable_HashId_,Nullable_DateTime_,Nullable_HashId_,Nullable_Guid_) 'Guilded.Base.Content.ListItemSummary.ListItemSummary(Guid, Guid, Guilded.Base.HashId, string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guid>, Guilded.Base.Content.ListItemNote, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<Guid>)') | Initializes a new instance of [ListItemSummary](ListItemSummary 'Guilded.Base.Content.ListItemSummary') from the specified JSON properties. |

### See Also
- [ListItem](ListItem 'Guilded.Base.Content.ListItem')
- [ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote')
- [ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary')
- [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')
- [Message](Message 'Guilded.Base.Content.Message')
- [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread')
- [Doc](Doc 'Guilded.Base.Content.Doc')