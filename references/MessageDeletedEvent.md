---
title: MessageDeletedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

An event that occurs once someone deletes a message.

```csharp
public class MessageDeletedEvent : Guilded.NET.Base.Events.MessageEvent<Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted>
```"
---

## MessageDeletedEvent Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Events`](Guilded.NET.Base.Events 'Guilded.NET.Base.Events')

An event that occurs once someone deletes a message.

```csharp
public class MessageDeletedEvent : Guilded.NET.Base.Events.MessageEvent<Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [Guilded.NET.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent<T>')[MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')[&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent<T>') &#129106; MessageDeletedEvent

### Remarks
  
An event of the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat.

| Constructors | |
| :--- | :--- |
| [MessageDeletedEvent(MessageDeleted)](MessageDeletedEvent.MessageDeletedEvent(MessageDeleted) 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeletedEvent(Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted)') | Creates a new instance of [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent'). This is currently only used in deserialization. |

| Properties | |
| :--- | :--- |
| [ChannelId](MessageDeletedEvent.ChannelId 'Guilded.NET.Base.Events.MessageDeletedEvent.ChannelId') | The identifier of the channel where the message was. |
| [DeletedAt](MessageDeletedEvent.DeletedAt 'Guilded.NET.Base.Events.MessageDeletedEvent.DeletedAt') | The date of when the message was deleted. |
| [Id](MessageDeletedEvent.Id 'Guilded.NET.Base.Events.MessageDeletedEvent.Id') | The identifier of the message. |

### See Also
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')
- [Message](Message 'Guilded.NET.Base.Content.Message')