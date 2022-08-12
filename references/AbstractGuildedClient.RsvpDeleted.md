---
title: RsvpDeleted
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is deleted."
---

## AbstractGuildedClient.RsvpDeleted Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is deleted.

```csharp
public IObservable<Guilded.Base.Events.CalendarRsvpEvent> RsvpDeleted { get; }
```

### Remarks
  
An event with the name `CalendarEventRsvpDeleted` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [RsvpUpdated](AbstractGuildedClient.RsvpUpdated 'Guilded.AbstractGuildedClient.RsvpUpdated')
- [RsvpManyUpdated](AbstractGuildedClient.RsvpManyUpdated 'Guilded.AbstractGuildedClient.RsvpManyUpdated')
- [EventCreated](AbstractGuildedClient.EventCreated 'Guilded.AbstractGuildedClient.EventCreated')
- [EventUpdated](AbstractGuildedClient.EventUpdated 'Guilded.AbstractGuildedClient.EventUpdated')