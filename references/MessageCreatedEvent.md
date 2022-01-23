---
title: MessageCreatedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

An event that occurs once someone creates a message.

```csharp
public class MessageCreatedEvent : Guilded.NET.Base.Events.MessageEvent
```"
---

## MessageCreatedEvent Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Events`](Guilded.NET.Base.Events 'Guilded.NET.Base.Events')

An event that occurs once someone creates a message.

```csharp
public class MessageCreatedEvent : Guilded.NET.Base.Events.MessageEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [Guilded.NET.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent<T>')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent<T>') &#129106; [MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent') &#129106; MessageCreatedEvent

### Remarks
  
An event of the name `ChatMessageCreated` and opcode `0` that occurs once someone creates/posts a message in the chat. When receiving this event, [UpdatedAt](Message.UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') will never hold a value.

| Constructors | |
| :--- | :--- |
| [MessageCreatedEvent(Message)](MessageCreatedEvent.MessageCreatedEvent(Message) 'Guilded.NET.Base.Events.MessageCreatedEvent.MessageCreatedEvent(Guilded.NET.Base.Content.Message)') | Creates a new instance of [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent'). This is currently only used in deserialization. |

### See Also
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
- [Message](Message 'Guilded.NET.Base.Content.Message')