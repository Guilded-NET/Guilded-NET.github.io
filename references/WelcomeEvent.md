---
title: WelcomeEvent
layout: references
section: references
tags:
  - references
  - class
description: "

An event that is received once WebSocket is initiated.

```csharp
public class WelcomeEvent : Guilded.NET.Base.BaseObject
```"
---

## WelcomeEvent Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Events`](Guilded.NET.Base.Events 'Guilded.NET.Base.Events')

An event that is received once WebSocket is initiated.

```csharp
public class WelcomeEvent : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; WelcomeEvent

### Remarks
  
This event is received once WebSocket (re)connects to Guilded.  
  
[WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent') can be used to ensure that WebSocket has connected to Guilded or that the events from Guilded are being received.  
  
This event has no name in API but has an event opcode of `1`.

| Constructors | |
| :--- | :--- |
| [WelcomeEvent(int, string)](WelcomeEvent.WelcomeEvent(int,string) 'Guilded.NET.Base.Events.WelcomeEvent.WelcomeEvent(int, string)') | Creates a new instance of [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent'). This is currently only used in deserialization. |

| Properties | |
| :--- | :--- |
| [HeartbeatInterval](WelcomeEvent.HeartbeatInterval 'Guilded.NET.Base.Events.WelcomeEvent.HeartbeatInterval') | The duration between heartbeats. |
| [LastMessageId](WelcomeEvent.LastMessageId 'Guilded.NET.Base.Events.WelcomeEvent.LastMessageId') | The identifier of the last event sent. |

### See Also
- [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')