---
title: TopicSummary
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a summary of a [topic](Topic 'Guilded.Base.Content.Topic') in a [forum channel](ChannelType#Guilded.Base.Servers.ChannelType.Forums 'Guilded.Base.Servers.ChannelType.Forums')."
---

## TopicSummary Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents a summary of a [topic](Topic 'Guilded.Base.Content.Topic') in a [forum channel](ChannelType#Guilded.Base.Servers.ChannelType.Forums 'Guilded.Base.Servers.ChannelType.Forums').

```csharp
public class TopicSummary : Guilded.Base.Content.TitledContent,
Guilded.Base.Content.IContentMarkdown
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent') &#129106; TopicSummary

Implements [IContentMarkdown](IContentMarkdown 'Guilded.Base.Content.IContentMarkdown')

Derived  
&#8627; [Topic](Topic 'Guilded.Base.Content.Topic')

### Remarks
  
This summary does not contain the [content](Topic.Content 'Guilded.Base.Content.Topic.Content') of the [topic](Topic 'Guilded.Base.Content.Topic') and only the [title](TitledContent.Title 'Guilded.Base.Content.TitledContent.Title')

| Constructors | |
| :--- | :--- |
| [TopicSummary(uint, Guid, HashId, string, HashId, DateTime, DateTime, Nullable&lt;Guid&gt;, Nullable&lt;DateTime&gt;, Mentions)](TopicSummary.TopicSummary(uint,Guid,HashId,string,HashId,DateTime,DateTime,Nullable_Guid_,Nullable_DateTime_,Mentions) 'Guilded.Base.Content.TopicSummary.TopicSummary(uint, Guid, Guilded.Base.HashId, string, Guilded.Base.HashId, System.DateTime, System.DateTime, System.Nullable<Guid>, System.Nullable<System.DateTime>, Guilded.Base.Content.Mentions)') | Initializes a new instance of [TopicSummary](TopicSummary 'Guilded.Base.Content.TopicSummary') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [BumpedAt](TopicSummary.BumpedAt 'Guilded.Base.Content.TopicSummary.BumpedAt') | Gets the date when the [topic](TopicSummary 'Guilded.Base.Content.TopicSummary') was bumped. |
| [CreatedByWebhook](TopicSummary.CreatedByWebhook 'Guilded.Base.Content.TopicSummary.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the forum thread](TopicSummary 'Guilded.Base.Content.TopicSummary'). |
| [Mentions](TopicSummary.Mentions 'Guilded.Base.Content.TopicSummary.Mentions') | Gets the [mentions](Mentions 'Guilded.Base.Content.Mentions') found in [the content](Message.Content 'Guilded.Base.Content.Message.Content'). |

| Methods | |
| :--- | :--- |
| [DeleteAsync()](TopicSummary.DeleteAsync() 'Guilded.Base.Content.TopicSummary.DeleteAsync()') | Deletes a [forum post](Topic 'Guilded.Base.Content.Topic'). |
| [UpdateAsync(string, string)](TopicSummary.UpdateAsync(string,string) 'Guilded.Base.Content.TopicSummary.UpdateAsync(string, string)') | Edits [forum post's](Topic 'Guilded.Base.Content.Topic')[title](TopicSummary.UpdateAsync(string,string)#Guilded.Base.Content.TopicSummary.UpdateAsync(string,string).title 'Guilded.Base.Content.TopicSummary.UpdateAsync(string, string).title') and [content](TopicSummary.UpdateAsync(string,string)#Guilded.Base.Content.TopicSummary.UpdateAsync(string,string).content 'Guilded.Base.Content.TopicSummary.UpdateAsync(string, string).content'). |

### See Also
- [Topic](Topic 'Guilded.Base.Content.Topic')
- [Doc](Doc 'Guilded.Base.Content.Doc')
- [Message](Message 'Guilded.Base.Content.Message')
- [ListItem](ListItem 'Guilded.Base.Content.ListItem')
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')