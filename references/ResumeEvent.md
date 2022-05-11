---
title: ResumeEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with an event opcode of `2` that occurs when the client passes last event message identifier."
---

## ResumeEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents an event with an event opcode of `2` that occurs when the client passes last event message identifier.

```csharp
public class ResumeEvent : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; ResumeEvent

| Constructors | |
| :--- | :--- |
| [ResumeEvent(string)](ResumeEvent.ResumeEvent(string).md 'Guilded.Base.Events.ResumeEvent.ResumeEvent(string)') | Initializes a new instance of [ResumeEvent](ResumeEvent.md 'Guilded.Base.Events.ResumeEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [MessageId](ResumeEvent.MessageId.md 'Guilded.Base.Events.ResumeEvent.MessageId') | Gets the identifier of the last received event. |

### See Also
- [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent')
- [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException')
- [LastMessageId](BaseGuildedClient.LastMessageId.md 'Guilded.Base.BaseGuildedClient.LastMessageId')