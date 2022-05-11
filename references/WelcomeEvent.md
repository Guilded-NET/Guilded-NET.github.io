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
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents an event with the opcode `1` that is received once WebSocket connects or reconnects.

```csharp
public class WelcomeEvent : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; WelcomeEvent

### Remarks
  
[WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent') can be used to ensure that WebSocket has connected to Guilded or that the events from Guilded are being received.

| Constructors | |
| :--- | :--- |
| [WelcomeEvent(int, Me, string)](WelcomeEvent.WelcomeEvent(int,Me,string).md 'Guilded.Base.Events.WelcomeEvent.WelcomeEvent(int, Guilded.Base.Users.Me, string)') | Initializes a new instance of [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [HeartbeatInterval](WelcomeEvent.HeartbeatInterval.md 'Guilded.Base.Events.WelcomeEvent.HeartbeatInterval') | Gets the time duration between heartbeats in milliseconds. |
| [LastMessageId](WelcomeEvent.LastMessageId.md 'Guilded.Base.Events.WelcomeEvent.LastMessageId') | Gets the identifier of the last received WebSocket message. |
| [User](WelcomeEvent.User.md 'Guilded.Base.Events.WelcomeEvent.User') | Gets the currently logged in user. |

### See Also
- [ResumeEvent](ResumeEvent.md 'Guilded.Base.Events.ResumeEvent')
- [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException')