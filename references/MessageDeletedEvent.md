---
title: MessageDeletedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat."
---

## MessageDeletedEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents an event with the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat.

```csharp
public class MessageDeletedEvent : Guilded.Base.Events.MessageEvent<Guilded.Base.Events.MessageDeletedEvent.MessageDeleted>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [Guilded.Base.Events.MessageEvent&lt;](MessageEvent_T_.md 'Guilded.Base.Events.MessageEvent<T>')[MessageDeleted](MessageDeletedEvent.MessageDeleted.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')[&gt;](MessageEvent_T_.md 'Guilded.Base.Events.MessageEvent<T>') &#129106; MessageDeletedEvent

| Constructors | |
| :--- | :--- |
| [MessageDeletedEvent(Nullable&lt;HashId&gt;, MessageDeleted)](MessageDeletedEvent.MessageDeletedEvent(Nullable_HashId_,MessageDeleted).md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeletedEvent(System.Nullable<Guilded.Base.HashId>, Guilded.Base.Events.MessageDeletedEvent.MessageDeleted)') | Initializes a new instance of [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](MessageDeletedEvent.ChannelId.md 'Guilded.Base.Events.MessageDeletedEvent.ChannelId') | Gets the identifier of the channel where the message was. |
| [DeletedAt](MessageDeletedEvent.DeletedAt.md 'Guilded.Base.Events.MessageDeletedEvent.DeletedAt') | Gets the date of when the message was deleted. |
| [Id](MessageDeletedEvent.Id.md 'Guilded.Base.Events.MessageDeletedEvent.Id') | Gets the identifier of the message. |

### See Also
- [MessageDeleted](MessageDeletedEvent.MessageDeleted.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')
- [Message](Message.md 'Guilded.Base.Content.Message')