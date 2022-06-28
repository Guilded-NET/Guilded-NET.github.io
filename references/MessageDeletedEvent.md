---
title: MessageDeletedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs when someone deletes [a message](Message 'Guilded.Base.Content.Message')."
---

## MessageDeletedEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs when someone deletes [a message](Message 'Guilded.Base.Content.Message').

```csharp
public class MessageDeletedEvent : Guilded.Base.Events.MessageEvent<Guilded.Base.Events.MessageDeletedEvent.MessageDeleted>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [Guilded.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.Base.Events.MessageEvent<T>')[MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')[&gt;](MessageEvent_T_ 'Guilded.Base.Events.MessageEvent<T>') &#129106; MessageDeletedEvent

| Constructors | |
| :--- | :--- |
| [MessageDeletedEvent(MessageDeleted, Nullable&lt;HashId&gt;)](MessageDeletedEvent.MessageDeletedEvent(MessageDeleted,Nullable_HashId_) 'Guilded.Base.Events.MessageDeletedEvent.MessageDeletedEvent(Guilded.Base.Events.MessageDeletedEvent.MessageDeleted, System.Nullable<Guilded.Base.HashId>)') | Initializes a new instance of [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](MessageDeletedEvent.ChannelId 'Guilded.Base.Events.MessageDeletedEvent.ChannelId') | Gets the identifier of the channel where the message was. |
| [DeletedAt](MessageDeletedEvent.DeletedAt 'Guilded.Base.Events.MessageDeletedEvent.DeletedAt') | Gets the date when the message was deleted. |
| [Id](MessageDeletedEvent.Id 'Guilded.Base.Events.MessageDeletedEvent.Id') | Gets the identifier of the message. |
| [IsPrivate](MessageDeletedEvent.IsPrivate 'Guilded.Base.Events.MessageDeletedEvent.IsPrivate') | Gets whether the deleted message was [private mention](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate') or a [private reply](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate'). |

### See Also
- [MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [Message](Message 'Guilded.Base.Content.Message')