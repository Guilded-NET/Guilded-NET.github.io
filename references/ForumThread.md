---
title: ForumThread
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a thread or a post in a forum channel."
---

## ForumThread Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content.md 'Guilded.Base.Content')

Represents a thread or a post in a forum channel.

```csharp
public class ForumThread : Guilded.Base.Content.TitledContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; [TitledContent](TitledContent.md 'Guilded.Base.Content.TitledContent') &#129106; ForumThread

### Remarks
  
Currently can only be found as a return value from forum thread creation methods.

| Constructors | |
| :--- | :--- |
| [ForumThread(uint, Guid, HashId, string, string, HashId, Nullable&lt;Guid&gt;, DateTime, Nullable&lt;DateTime&gt;)](ForumThread.ForumThread(uint,Guid,HashId,string,string,HashId,Nullable_Guid_,DateTime,Nullable_DateTime_).md 'Guilded.Base.Content.ForumThread.ForumThread(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.Nullable<Guid>, System.DateTime, System.Nullable<System.DateTime>)') | Initializes a new instance of [ForumThread](ForumThread.md 'Guilded.Base.Content.ForumThread') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CreatedByWebhook](ForumThread.CreatedByWebhook.md 'Guilded.Base.Content.ForumThread.CreatedByWebhook') | Gets the identifier of the webhook that created the forum thread. |

### See Also
- [Message](Message.md 'Guilded.Base.Content.Message')
- [Doc](Doc.md 'Guilded.Base.Content.Doc')
- [ListItem&lt;T&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')