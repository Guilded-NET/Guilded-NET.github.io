---
title: Topic
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the full information of a topic/post/thread in a [forum channel](ChannelType#Guilded.Base.Servers.ChannelType.Forums 'Guilded.Base.Servers.ChannelType.Forums')."
---

## Topic Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents the full information of a topic/post/thread in a [forum channel](ChannelType#Guilded.Base.Servers.ChannelType.Forums 'Guilded.Base.Servers.ChannelType.Forums').

```csharp
public class Topic : Guilded.Base.Content.TopicSummary
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent') &#129106; [TopicSummary](TopicSummary 'Guilded.Base.Content.TopicSummary') &#129106; Topic

| Constructors | |
| :--- | :--- |
| [Topic(uint, Guid, HashId, string, string, HashId, DateTime, DateTime, Nullable&lt;Guid&gt;, Nullable&lt;DateTime&gt;)](Topic.Topic(uint,Guid,HashId,string,string,HashId,DateTime,DateTime,Nullable_Guid_,Nullable_DateTime_) 'Guilded.Base.Content.Topic.Topic(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.DateTime, System.DateTime, System.Nullable<Guid>, System.Nullable<System.DateTime>)') | Initializes a new instance of [Topic](Topic 'Guilded.Base.Content.Topic') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Content](Topic.Content 'Guilded.Base.Content.Topic.Content') | Gets the text contents of the [topic](Topic 'Guilded.Base.Content.Topic'). |

### See Also
- [TopicSummary](TopicSummary 'Guilded.Base.Content.TopicSummary')
- [Doc](Doc 'Guilded.Base.Content.Doc')
- [Message](Message 'Guilded.Base.Content.Message')
- [ListItem](ListItem 'Guilded.Base.Content.ListItem')
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')