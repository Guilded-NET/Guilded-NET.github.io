---
title: RsvpManyUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when multiple [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') are edited or created."
---

## AbstractGuildedClient.RsvpManyUpdated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when multiple [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') are edited or created.

```csharp
public IObservable<Guilded.Base.Events.CalendarRsvpManyEvent> RsvpManyUpdated { get; }
```

### Remarks
  
An event with the name `CalendarEventRsvpManyUpdated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [RsvpUpdated](AbstractGuildedClient.RsvpUpdated 'Guilded.AbstractGuildedClient.RsvpUpdated')
- [RsvpDeleted](AbstractGuildedClient.RsvpDeleted 'Guilded.AbstractGuildedClient.RsvpDeleted')
- [EventCreated](AbstractGuildedClient.EventCreated 'Guilded.AbstractGuildedClient.EventCreated')
- [EventDeleted](AbstractGuildedClient.EventDeleted 'Guilded.AbstractGuildedClient.EventDeleted')