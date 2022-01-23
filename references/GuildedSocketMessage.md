---
title: GuildedSocketMessage
layout: references
section: references
tags:
  - references
  - class
description: "

Message that was received from a WebSocket client.

```csharp
public class GuildedSocketMessage : Guilded.NET.Base.ClientObject
```"
---

## GuildedSocketMessage Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Events`](Guilded.NET.Base.Events 'Guilded.NET.Base.Events')

Message that was received from a WebSocket client.

```csharp
public class GuildedSocketMessage : Guilded.NET.Base.ClientObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; GuildedSocketMessage

### Remarks
  
Any message that can be received the Guilded WebSocket, including Guilded events.

| Constructors | |
| :--- | :--- |
| [GuildedSocketMessage(byte, string, JObject, string)](GuildedSocketMessage.GuildedSocketMessage(byte,string,JObject,string) 'Guilded.NET.Base.Events.GuildedSocketMessage.GuildedSocketMessage(byte, string, Newtonsoft.Json.Linq.JObject, string)') | Creates a new instance of [GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage') with given information. |

| Properties | |
| :--- | :--- |
| [EventName](GuildedSocketMessage.EventName 'Guilded.NET.Base.Events.GuildedSocketMessage.EventName') | The name of the event received. |
| [MessageId](GuildedSocketMessage.MessageId 'Guilded.NET.Base.Events.GuildedSocketMessage.MessageId') | An identifier that allows the event to be replayed. |
| [Opcode](GuildedSocketMessage.Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode') | An operation code that tells about the message. |
| [RawData](GuildedSocketMessage.RawData 'Guilded.NET.Base.Events.GuildedSocketMessage.RawData') | The data associated with the event. |

### See Also
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')