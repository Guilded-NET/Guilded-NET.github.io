---
title: RsvpUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is edited."
---

## AbstractGuildedClient.RsvpUpdated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is edited.

```csharp
public IObservable<Guilded.Base.Events.CalendarRsvpEvent> RsvpUpdated { get; }
```

### Remarks
  
This may include deletion as well. This hasn't been checked yet.  
  
An event with the name `CalendarEventRssvpUpdated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [RsvpManyUpdated](AbstractGuildedClient.RsvpManyUpdated 'Guilded.AbstractGuildedClient.RsvpManyUpdated')
- [RsvpDeleted](AbstractGuildedClient.RsvpDeleted 'Guilded.AbstractGuildedClient.RsvpDeleted')
- [EventUpdated](AbstractGuildedClient.EventUpdated 'Guilded.AbstractGuildedClient.EventUpdated')
- [EventDeleted](AbstractGuildedClient.EventDeleted 'Guilded.AbstractGuildedClient.EventDeleted')