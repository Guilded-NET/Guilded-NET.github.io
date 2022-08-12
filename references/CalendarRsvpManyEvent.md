---
title: CalendarRsvpManyEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs when someone adds, removes or edits multiple [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')."
---

## CalendarRsvpManyEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs when someone adds, removes or edits multiple [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

```csharp
public class CalendarRsvpManyEvent : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; CalendarRsvpManyEvent

| Constructors | |
| :--- | :--- |
| [CalendarRsvpManyEvent(IList&lt;CalendarRsvp&gt;, HashId)](CalendarRsvpManyEvent.CalendarRsvpManyEvent(IList_CalendarRsvp_,HashId) 'Guilded.Base.Events.CalendarRsvpManyEvent.CalendarRsvpManyEvent(System.Collections.Generic.IList<Guilded.Base.Content.CalendarRsvp>, Guilded.Base.HashId)') | Initializes a new instance of [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CalendarEventId](CalendarRsvpManyEvent.CalendarEventId 'Guilded.Base.Events.CalendarRsvpManyEvent.CalendarEventId') | Gets the identifier of [the parent calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [CalendarRsvps](CalendarRsvpManyEvent.CalendarRsvps 'Guilded.Base.Events.CalendarRsvpManyEvent.CalendarRsvps') | Gets the list of [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') received from the event. |
| [ChannelId](CalendarRsvpManyEvent.ChannelId 'Guilded.Base.Events.CalendarRsvpManyEvent.ChannelId') | Gets the identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the calendar event](CalendarRsvp.CalendarEventId 'Guilded.Base.Content.CalendarRsvp.CalendarEventId') is. |
| [Count](CalendarRsvpManyEvent.Count 'Guilded.Base.Events.CalendarRsvpManyEvent.Count') | Gets the count of how many [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') have been changed. |
| [CreatedAt](CalendarRsvpManyEvent.CreatedAt 'Guilded.Base.Events.CalendarRsvpManyEvent.CreatedAt') | Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created. |
| [CreatedBy](CalendarRsvpManyEvent.CreatedBy 'Guilded.Base.Events.CalendarRsvpManyEvent.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |
| [First](CalendarRsvpManyEvent.First 'Guilded.Base.Events.CalendarRsvpManyEvent.First') | Gets the first [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') in a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [Last](CalendarRsvpManyEvent.Last 'Guilded.Base.Events.CalendarRsvpManyEvent.Last') | Gets the last [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') in a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [Status](CalendarRsvpManyEvent.Status 'Guilded.Base.Events.CalendarRsvpManyEvent.Status') | Gets the status of the [user's](CalendarRsvp.UserId 'Guilded.Base.Content.CalendarRsvp.UserId')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |
| [UpdatedAt](CalendarRsvpManyEvent.UpdatedAt 'Guilded.Base.Events.CalendarRsvpManyEvent.UpdatedAt') | Gets the date when [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') was updated. |
| [UpdatedBy](CalendarRsvpManyEvent.UpdatedBy 'Guilded.Base.Events.CalendarRsvpManyEvent.UpdatedBy') | Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |
| [UserId](CalendarRsvpManyEvent.UserId 'Guilded.Base.Events.CalendarRsvpManyEvent.UserId') | Gets the identifier of [the user](User 'Guilded.Base.Users.User') whose RSVP it is. |

### See Also
- [CalendarRsvpEvent](CalendarRsvpEvent 'Guilded.Base.Events.CalendarRsvpEvent')
- [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent')
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')
- [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')