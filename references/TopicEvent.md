---
title: TopicEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs when someone creates, updates or deletes a [forum topic](Topic 'Guilded.Base.Content.Topic')."
---

## TopicEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs when someone creates, updates or deletes a [forum topic](Topic 'Guilded.Base.Content.Topic').

```csharp
public class TopicEvent : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; TopicEvent

| Constructors | |
| :--- | :--- |
| [TopicEvent(Topic, HashId)](TopicEvent.TopicEvent(Topic,HashId) 'Guilded.Base.Events.TopicEvent.TopicEvent(Guilded.Base.Content.Topic, Guilded.Base.HashId)') | Initializes a new instance of [TopicEvent](TopicEvent 'Guilded.Base.Events.TopicEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [BumpedAt](TopicEvent.BumpedAt 'Guilded.Base.Events.TopicEvent.BumpedAt') | Gets the date when the [topic](TopicSummary 'Guilded.Base.Content.TopicSummary') was bumped. |
| [ChannelId](TopicEvent.ChannelId 'Guilded.Base.Events.TopicEvent.ChannelId') | Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are. |
| [Content](TopicEvent.Content 'Guilded.Base.Events.TopicEvent.Content') | Gets the text contents of the [topic](Topic 'Guilded.Base.Content.Topic'). |
| [CreatedAt](TopicEvent.CreatedAt 'Guilded.Base.Events.TopicEvent.CreatedAt') | Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created. |
| [CreatedBy](TopicEvent.CreatedBy 'Guilded.Base.Events.TopicEvent.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |
| [CreatedByWebhook](TopicEvent.CreatedByWebhook 'Guilded.Base.Events.TopicEvent.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the forum thread](TopicSummary 'Guilded.Base.Content.TopicSummary'). |
| [Title](TopicEvent.Title 'Guilded.Base.Events.TopicEvent.Title') | Gets the title of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent'). |
| [Topic](TopicEvent.Topic 'Guilded.Base.Events.TopicEvent.Topic') | Gets the [topic](Topic 'Guilded.Base.Content.Topic') received from the event. |
| [UpdatedAt](TopicEvent.UpdatedAt 'Guilded.Base.Events.TopicEvent.UpdatedAt') | Gets the date when [the titled content](TitledContent 'Guilded.Base.Content.TitledContent') were updated. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](TopicEvent.AddReactionAsync(uint) 'Guilded.Base.Events.TopicEvent.AddReactionAsync(uint)') | Adds emote to the content. |
| [DeleteAsync()](TopicEvent.DeleteAsync() 'Guilded.Base.Events.TopicEvent.DeleteAsync()') | Deletes a [forum post](Topic 'Guilded.Base.Content.Topic'). |
| [RemoveReactionAsync(uint)](TopicEvent.RemoveReactionAsync(uint) 'Guilded.Base.Events.TopicEvent.RemoveReactionAsync(uint)') | Removes emote from the content. |
| [UpdateAsync(string, string)](TopicEvent.UpdateAsync(string,string) 'Guilded.Base.Events.TopicEvent.UpdateAsync(string, string)') | Edits [forum post's](Topic 'Guilded.Base.Content.Topic')[title](TopicEvent.UpdateAsync(string,string)#Guilded.Base.Events.TopicEvent.UpdateAsync(string,string).title 'Guilded.Base.Events.TopicEvent.UpdateAsync(string, string).title') and [content](TopicEvent.UpdateAsync(string,string)#Guilded.Base.Events.TopicEvent.UpdateAsync(string,string).content 'Guilded.Base.Events.TopicEvent.UpdateAsync(string, string).content'). |

### See Also
- [Topic](Topic 'Guilded.Base.Content.Topic')
- [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')
- [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent')
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')