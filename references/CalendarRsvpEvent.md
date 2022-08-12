---
title: CalendarRsvpEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs when someone adds, removes or edits a [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')."
---

## CalendarRsvpEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs when someone adds, removes or edits a [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

```csharp
public class CalendarRsvpEvent : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; CalendarRsvpEvent

| Constructors | |
| :--- | :--- |
| [CalendarRsvpEvent(CalendarRsvp, HashId)](CalendarRsvpEvent.CalendarRsvpEvent(CalendarRsvp,HashId) 'Guilded.Base.Events.CalendarRsvpEvent.CalendarRsvpEvent(Guilded.Base.Content.CalendarRsvp, Guilded.Base.HashId)') | Initializes a new instance of [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CalendarEventId](CalendarRsvpEvent.CalendarEventId 'Guilded.Base.Events.CalendarRsvpEvent.CalendarEventId') | Gets the identifier of [the parent calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [CalendarRsvp](CalendarRsvpEvent.CalendarRsvp 'Guilded.Base.Events.CalendarRsvpEvent.CalendarRsvp') | Gets [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') received from the event. |
| [ChannelId](CalendarRsvpEvent.ChannelId 'Guilded.Base.Events.CalendarRsvpEvent.ChannelId') | Gets the identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the calendar event](CalendarRsvp.CalendarEventId 'Guilded.Base.Content.CalendarRsvp.CalendarEventId') is. |
| [CreatedAt](CalendarRsvpEvent.CreatedAt 'Guilded.Base.Events.CalendarRsvpEvent.CreatedAt') | Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created. |
| [CreatedBy](CalendarRsvpEvent.CreatedBy 'Guilded.Base.Events.CalendarRsvpEvent.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |
| [Status](CalendarRsvpEvent.Status 'Guilded.Base.Events.CalendarRsvpEvent.Status') | Gets the status of the [user's](CalendarRsvp.UserId 'Guilded.Base.Content.CalendarRsvp.UserId')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |
| [UpdatedAt](CalendarRsvpEvent.UpdatedAt 'Guilded.Base.Events.CalendarRsvpEvent.UpdatedAt') | Gets the date when [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') was updated. |
| [UpdatedBy](CalendarRsvpEvent.UpdatedBy 'Guilded.Base.Events.CalendarRsvpEvent.UpdatedBy') | Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |
| [UserId](CalendarRsvpEvent.UserId 'Guilded.Base.Events.CalendarRsvpEvent.UserId') | Gets the identifier of [the user](User 'Guilded.Base.Users.User') whose RSVP it is. |

| Methods | |
| :--- | :--- |
| [RemoveAsync()](CalendarRsvpEvent.RemoveAsync() 'Guilded.Base.Events.CalendarRsvpEvent.RemoveAsync()') | Deletes the specified [calendar event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |
| [SetAsync(CalendarRsvpStatus)](CalendarRsvpEvent.SetAsync(CalendarRsvpStatus) 'Guilded.Base.Events.CalendarRsvpEvent.SetAsync(Guilded.Base.Content.CalendarRsvpStatus)') | Creates or edits a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |

### See Also
- [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent')
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')
- [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')