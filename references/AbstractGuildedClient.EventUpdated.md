---
title: EventUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is edited."
---

## AbstractGuildedClient.EventUpdated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is edited.

```csharp
public IObservable<Guilded.Base.Events.CalendarEventEvent> EventUpdated { get; }
```

### Remarks
  
An event with the name `CalendarEventUpdated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [EventCreated](AbstractGuildedClient.EventCreated 'Guilded.AbstractGuildedClient.EventCreated')
- [EventDeleted](AbstractGuildedClient.EventDeleted 'Guilded.AbstractGuildedClient.EventDeleted')