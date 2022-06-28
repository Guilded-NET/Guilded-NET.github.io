---
title: Welcome
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [WebSocket](BaseGuildedClient.Websocket 'Guilded.Base.BaseGuildedClient.Websocket') is connected."
---

## AbstractGuildedClient.Welcome Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [WebSocket](BaseGuildedClient.Websocket 'Guilded.Base.BaseGuildedClient.Websocket') is connected.

```csharp
public IObservable<Guilded.Base.Events.WelcomeEvent> Welcome { get; }
```

### Remarks
  
An event with the opcode `1`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [Resume](AbstractGuildedClient.Resume 'Guilded.AbstractGuildedClient.Resume')