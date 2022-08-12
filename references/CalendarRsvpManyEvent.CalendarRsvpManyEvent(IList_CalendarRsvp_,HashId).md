---
title: CalendarRsvpManyEvent(IList<CalendarRsvp>, HashId)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent') from the specified JSON properties."
---

## CalendarRsvpManyEvent(IList<CalendarRsvp>, HashId) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarRsvpManyEvent`](CalendarRsvpManyEvent 'Guilded.Base.Events.CalendarRsvpManyEvent')

Initializes a new instance of [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent') from the specified JSON properties.

```csharp
public CalendarRsvpManyEvent(System.Collections.Generic.IList<Guilded.Base.Content.CalendarRsvp> calendarEventRsvps, Guilded.Base.HashId serverId);
```
#### Parameters

<a name='Guilded.Base.Events.CalendarRsvpManyEvent.CalendarRsvpManyEvent(System.Collections.Generic.IList_Guilded.Base.Content.CalendarRsvp_,Guilded.Base.HashId).calendarEventRsvps'></a>

`calendarEventRsvps` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') received from the event

<a name='Guilded.Base.Events.CalendarRsvpManyEvent.CalendarRsvpManyEvent(System.Collections.Generic.IList_Guilded.Base.Content.CalendarRsvp_,Guilded.Base.HashId).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the [calendar RSVP event](CalendarRsvpManyEvent 'Guilded.Base.Events.CalendarRsvpManyEvent') occurred

### See Also
- [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent')