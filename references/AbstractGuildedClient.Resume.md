---
title: Resume
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when all lost [WebSocket messages](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage') get re-sent."
---

## AbstractGuildedClient.Resume Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when all lost [WebSocket messages](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage') get re-sent.

```csharp
public IObservable<Guilded.Base.Events.ResumeEvent> Resume { get; }
```

### Remarks
  
An event with an event opcode of `2`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [Welcome](AbstractGuildedClient.Welcome 'Guilded.AbstractGuildedClient.Welcome')