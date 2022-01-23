---
title: Resume
layout: references
section: references
tags:
  - references
  - property
description: "

Event that occurs when client passes last event message identifier.

```csharp
public System.IObservable<Guilded.NET.Base.Events.ResumeEvent> Resume { get; }
```"
---

## AbstractGuildedClient.Resume Property
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Event that occurs when client passes last event message identifier.

```csharp
public System.IObservable<Guilded.NET.Base.Events.ResumeEvent> Resume { get; }
```

### Remarks
  
[ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent') only occurs if last event message identifier is passed to the WebSocket in `guilded-last-message-id` header. This event is only received after all events are given to the client and normal events are being received again.  
  
In API, this event has no name but has an event opcode of `2`.

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')
- [LastMessageId](BaseGuildedClient.LastMessageId 'Guilded.NET.Base.BaseGuildedClient.LastMessageId')