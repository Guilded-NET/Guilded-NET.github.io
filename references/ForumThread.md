---
title: ForumThread
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a thread or a post in [a forum channel](ChannelType#Guilded.Base.Servers.ChannelType.Forums 'Guilded.Base.Servers.ChannelType.Forums')."
---

## ForumThread Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents a thread or a post in [a forum channel](ChannelType#Guilded.Base.Servers.ChannelType.Forums 'Guilded.Base.Servers.ChannelType.Forums').

```csharp
public class ForumThread : Guilded.Base.Content.TitledContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.Base.ClientObject') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent') &#129106; ForumThread

### Remarks
  
Currently can only be found as a return value from forum thread creation methods.

| Constructors | |
| :--- | :--- |
| [ForumThread(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;Guid&gt;, Nullable&lt;DateTime&gt;)](ForumThread.ForumThread(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_Guid_,Nullable_DateTime_) 'Guilded.Base.Content.ForumThread.ForumThread(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guid>, System.Nullable<System.DateTime>)') | Initializes a new instance of [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CreatedByWebhook](ForumThread.CreatedByWebhook 'Guilded.Base.Content.ForumThread.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the forum thread](ForumThread 'Guilded.Base.Content.ForumThread'). |

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [Doc](Doc 'Guilded.Base.Content.Doc')
- [ListItem](ListItem 'Guilded.Base.Content.ListItem')