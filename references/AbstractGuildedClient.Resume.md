---
title: Resume
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with an event opcode of `2` that occurs when the client passes last event message identifier."
---

## AbstractGuildedClient.Resume Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Represents an event with an event opcode of `2` that occurs when the client passes last event message identifier.

```csharp
public IObservable<Guilded.Base.Events.ResumeEvent> Resume { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent')
- [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')
- [LastMessageId](BaseGuildedClient.LastMessageId 'Guilded.Base.BaseGuildedClient.LastMessageId')