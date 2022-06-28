---
title: EventDeleted
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is deleted."
---

## AbstractGuildedClient.EventDeleted Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is deleted.

```csharp
public IObservable<Guilded.Base.Events.CalendarEventEvent> EventDeleted { get; }
```

### Remarks
  
An event with the name `CalendarEventDeleted` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [EventCreated](AbstractGuildedClient.EventCreated 'Guilded.AbstractGuildedClient.EventCreated')
- [EventUpdated](AbstractGuildedClient.EventUpdated 'Guilded.AbstractGuildedClient.EventUpdated')