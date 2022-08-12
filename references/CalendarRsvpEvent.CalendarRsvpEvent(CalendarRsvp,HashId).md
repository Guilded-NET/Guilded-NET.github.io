---
title: CalendarRsvpEvent(CalendarRsvp, HashId)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent') from the specified JSON properties."
---

## CalendarRsvpEvent(CalendarRsvp, HashId) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarRsvpEvent`](CalendarRsvpEvent 'Guilded.Base.Events.CalendarRsvpEvent')

Initializes a new instance of [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent') from the specified JSON properties.

```csharp
public CalendarRsvpEvent(Guilded.Base.Content.CalendarRsvp calendarEventRsvp, Guilded.Base.HashId serverId);
```
#### Parameters

<a name='Guilded.Base.Events.CalendarRsvpEvent.CalendarRsvpEvent(Guilded.Base.Content.CalendarRsvp,Guilded.Base.HashId).calendarEventRsvp'></a>

`calendarEventRsvp` [CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')

[The calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') received from the event

<a name='Guilded.Base.Events.CalendarRsvpEvent.CalendarRsvpEvent(Guilded.Base.Content.CalendarRsvp,Guilded.Base.HashId).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the [calendar RSVP event](CalendarRsvpEvent 'Guilded.Base.Events.CalendarRsvpEvent') occurred

### See Also
- [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent')