---
title: Welcome
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the opcode `1` that is received once WebSocket connects or reconnects."
---

## AbstractGuildedClient.Welcome Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Represents an event with the opcode `1` that is received once WebSocket connects or reconnects.

```csharp
public IObservable<Guilded.Base.Events.WelcomeEvent> Welcome { get; }
```

### Remarks
  
[WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent') can be used to ensure that WebSocket has connected to Guilded or that the events from Guilded are being received.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [ResumeEvent](ResumeEvent 'Guilded.Base.Events.ResumeEvent')
- [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')