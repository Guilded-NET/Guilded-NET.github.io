---
title: EventCreated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is posted."
---

## AbstractGuildedClient.EventCreated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is posted.

```csharp
public IObservable<Guilded.Base.Events.CalendarEventEvent> EventCreated { get; }
```

### Remarks
  
An event with the name `CalendarEventCreated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [EventUpdated](AbstractGuildedClient.EventUpdated 'Guilded.AbstractGuildedClient.EventUpdated')
- [EventDeleted](AbstractGuildedClient.EventDeleted 'Guilded.AbstractGuildedClient.EventDeleted')