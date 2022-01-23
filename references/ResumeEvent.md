---
title: ResumeEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Event that occurs when client passes last event message identifier.

```csharp
public class ResumeEvent : Guilded.NET.Base.BaseObject
```"
---

## ResumeEvent Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Events`](Guilded.NET.Base.Events 'Guilded.NET.Base.Events')

Event that occurs when client passes last event message identifier.

```csharp
public class ResumeEvent : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; ResumeEvent

### Remarks
  
[ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent') only occurs if last event message identifier is passed to the WebSocket in `guilded-last-message-id` header. This event is only received after all events are given to the client and normal events are being received again.  
  
In API, this event has no name but has an event opcode of `2`.

| Constructors | |
| :--- | :--- |
| [ResumeEvent(string)](ResumeEvent.ResumeEvent(string) 'Guilded.NET.Base.Events.ResumeEvent.ResumeEvent(string)') | Creates a new instance of [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent'). This is currently only used in deserialization. |

| Properties | |
| :--- | :--- |
| [MessageId](ResumeEvent.MessageId 'Guilded.NET.Base.Events.ResumeEvent.MessageId') | The identifier of the last received event. |

### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')
- [LastMessageId](BaseGuildedClient.LastMessageId 'Guilded.NET.Base.BaseGuildedClient.LastMessageId')