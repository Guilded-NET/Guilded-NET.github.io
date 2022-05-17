---
title: WebsocketMessage
layout: references
section: references
tags:
  - references
  - property
description: "

An event when WebSocket receives a message."
---

## BaseGuildedClient.WebsocketMessage Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

An event when WebSocket receives a message.

```csharp
protected IObservable<Guilded.Base.Events.GuildedSocketMessage> WebsocketMessage { get; }
```

### Remarks
  
An event when WebSocket receives any kind of message from Guilded.  
  
If event with opcode `8` is received, it is given as an exception instead.

#### Exceptions

[GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')  
Received when any kind of error is received. Handled through [System.Reactive.Subjects.Subject&lt;&gt;.OnError(System.Exception)](https://docs.microsoft.com/en-us/dotnet/api/System.Reactive.Subjects.Subject-1.OnError#System_Reactive_Subjects_Subject_1_OnError_System_Exception_ 'System.Reactive.Subjects.Subject`1.OnError(System.Exception)').

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')