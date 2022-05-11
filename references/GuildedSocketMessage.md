---
title: GuildedSocketMessage
layout: references
section: references
tags:
  - references
  - class
description: "

Message that was received from a WebSocket client."
---

## GuildedSocketMessage Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Message that was received from a WebSocket client.

```csharp
public class GuildedSocketMessage : Guilded.Base.ClientObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject') &#129106; GuildedSocketMessage

### Remarks
  
Any message that can be received the Guilded WebSocket, including Guilded events.

| Constructors | |
| :--- | :--- |
| [GuildedSocketMessage(byte, string, JObject, string)](GuildedSocketMessage.GuildedSocketMessage(byte,string,JObject,string).md 'Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(byte, string, Newtonsoft.Json.Linq.JObject, string)') | Initializes a new instance of [GuildedSocketMessage](GuildedSocketMessage.md 'Guilded.Base.Events.GuildedSocketMessage') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [EventName](GuildedSocketMessage.EventName.md 'Guilded.Base.Events.GuildedSocketMessage.EventName') | Gets the name of the event received. |
| [MessageId](GuildedSocketMessage.MessageId.md 'Guilded.Base.Events.GuildedSocketMessage.MessageId') | Gets an identifier that allows the event to be replayed. |
| [Opcode](GuildedSocketMessage.Opcode.md 'Guilded.Base.Events.GuildedSocketMessage.Opcode') | Gets an operation code that tells about the message. |
| [RawData](GuildedSocketMessage.RawData.md 'Guilded.Base.Events.GuildedSocketMessage.RawData') | Gets the data associated with the event. |

### See Also
- [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent')
- [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent')
- [ResumeEvent](ResumeEvent.md 'Guilded.Base.Events.ResumeEvent')