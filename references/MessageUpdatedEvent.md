---
title: MessageUpdatedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

An event that occurs once someone edits a message.

```csharp
public class MessageUpdatedEvent : Guilded.NET.Base.Events.MessageEvent
```"
---

## MessageUpdatedEvent Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Events`](Guilded.NET.Base.Events 'Guilded.NET.Base.Events')

An event that occurs once someone edits a message.

```csharp
public class MessageUpdatedEvent : Guilded.NET.Base.Events.MessageEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [Guilded.NET.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent<T>')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent<T>') &#129106; [MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent') &#129106; MessageUpdatedEvent

### Remarks
  
An event of the name `ChatMessageUpdated` and opcode `0` that occurs once someone updates/edits a message in the chat.  
  
When receiving this event, [UpdatedAt](Message.UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') will always hold a value.

| Constructors | |
| :--- | :--- |
| [MessageUpdatedEvent(Message)](MessageUpdatedEvent.MessageUpdatedEvent(Message) 'Guilded.NET.Base.Events.MessageUpdatedEvent.MessageUpdatedEvent(Guilded.NET.Base.Content.Message)') | Creates a new instance of [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent'). This is currently only used in deserialization. |

| Properties | |
| :--- | :--- |
| [UpdatedAt](MessageUpdatedEvent.UpdatedAt 'Guilded.NET.Base.Events.MessageUpdatedEvent.UpdatedAt') | The date of when the message was updated. |

### See Also
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
- [Message](Message 'Guilded.NET.Base.Content.Message')