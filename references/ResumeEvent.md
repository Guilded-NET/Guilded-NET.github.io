---
title: ResumeEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs once all missed events were [resumed](BaseGuildedClient.LastMessageId 'Guilded.Base.BaseGuildedClient.LastMessageId')."
---

## ResumeEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs once all missed events were [resumed](BaseGuildedClient.LastMessageId 'Guilded.Base.BaseGuildedClient.LastMessageId').

```csharp
public class ResumeEvent : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; ResumeEvent

| Constructors | |
| :--- | :--- |
| [ResumeEvent(string)](ResumeEvent.ResumeEvent(string) 'Guilded.Base.Events.ResumeEvent.ResumeEvent(string)') | Initializes a new instance of [ResumeEvent](ResumeEvent 'Guilded.Base.Events.ResumeEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [MessageId](ResumeEvent.MessageId 'Guilded.Base.Events.ResumeEvent.MessageId') | Gets the identifier of the last received event. |

### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent')
- [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')
- [LastMessageId](BaseGuildedClient.LastMessageId 'Guilded.Base.BaseGuildedClient.LastMessageId')