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
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Message that was received from a WebSocket client.

```csharp
public class GuildedSocketMessage : Guilded.Base.ClientObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.Base.ClientObject') &#129106; GuildedSocketMessage

### Remarks
  
Any message that can be received the Guilded WebSocket, including Guilded events.

| Constructors | |
| :--- | :--- |
| [GuildedSocketMessage(byte, string, JObject, string)](GuildedSocketMessage.GuildedSocketMessage(byte,string,JObject,string) 'Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(byte, string, Newtonsoft.Json.Linq.JObject, string)') | Initializes a new instance of [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [EventName](GuildedSocketMessage.EventName 'Guilded.Base.Events.GuildedSocketMessage.EventName') | Gets the name of the event received. |
| [MessageId](GuildedSocketMessage.MessageId 'Guilded.Base.Events.GuildedSocketMessage.MessageId') | Gets an identifier that allows the event to be replayed. |
| [Opcode](GuildedSocketMessage.Opcode 'Guilded.Base.Events.GuildedSocketMessage.Opcode') | Gets an operation code that tells about the message. |
| [RawData](GuildedSocketMessage.RawData 'Guilded.Base.Events.GuildedSocketMessage.RawData') | Gets the data associated with the event. |

### See Also
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent')
- [ResumeEvent](ResumeEvent 'Guilded.Base.Events.ResumeEvent')