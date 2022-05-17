---
title: WelcomeEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the opcode `1` that is received once WebSocket connects or reconnects."
---

## WelcomeEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event with the opcode `1` that is received once WebSocket connects or reconnects.

```csharp
public class WelcomeEvent : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; WelcomeEvent

### Remarks
  
[WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent') can be used to ensure that WebSocket has connected to Guilded or that the events from Guilded are being received.

| Constructors | |
| :--- | :--- |
| [WelcomeEvent(int, Me, string)](WelcomeEvent.WelcomeEvent(int,Me,string) 'Guilded.Base.Events.WelcomeEvent.WelcomeEvent(int, Guilded.Base.Users.Me, string)') | Initializes a new instance of [WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [HeartbeatInterval](WelcomeEvent.HeartbeatInterval 'Guilded.Base.Events.WelcomeEvent.HeartbeatInterval') | Gets the time duration between heartbeats in milliseconds. |
| [LastMessageId](WelcomeEvent.LastMessageId 'Guilded.Base.Events.WelcomeEvent.LastMessageId') | Gets the identifier of the last received WebSocket message. |
| [User](WelcomeEvent.User 'Guilded.Base.Events.WelcomeEvent.User') | Gets the currently logged in user. |

### See Also
- [ResumeEvent](ResumeEvent 'Guilded.Base.Events.ResumeEvent')
- [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')