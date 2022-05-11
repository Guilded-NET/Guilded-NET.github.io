---
title: MessageDeleted
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a message that was recently deleted/removed."
---

## MessageDeletedEvent.MessageDeleted Class
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageDeletedEvent`](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent')

Represents a message that was recently deleted/removed.

```csharp
public class MessageDeletedEvent.MessageDeleted : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; MessageDeleted

| Constructors | |
| :--- | :--- |
| [MessageDeleted(Guid, Guid, Nullable&lt;HashId&gt;, DateTime)](MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,Nullable_HashId_,DateTime).md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid, Guid, System.Nullable<Guilded.Base.HashId>, System.DateTime)') | The identifier of the message. |

| Properties | |
| :--- | :--- |
| [ChannelId](MessageDeletedEvent.MessageDeleted.ChannelId.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ChannelId') | Gets the identifier of the channel where the message was. |
| [DeletedAt](MessageDeletedEvent.MessageDeleted.DeletedAt.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.DeletedAt') | Gets the date of when the message was deleted. |
| [Id](MessageDeletedEvent.MessageDeleted.Id.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Id') | Gets the identifier of the message. |
| [ServerId](MessageDeletedEvent.MessageDeleted.ServerId.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ServerId') | Gets the identifier of the server where the message was. |

| Methods | |
| :--- | :--- |
| [Equals(object)](MessageDeletedEvent.MessageDeleted.Equals(object).md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object)') | Returns whether this and [obj](MessageDeletedEvent.MessageDeleted.Equals(object).md#Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object).obj 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object).obj') are equal to each other. |
| [GetHashCode()](MessageDeletedEvent.MessageDeleted.GetHashCode().md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.GetHashCode()') | Gets a hashcode of this object. |
| [ToString()](MessageDeletedEvent.MessageDeleted.ToString().md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ToString()') | Creates string equivalent of the message. |

### See Also
- [Message](Message.md 'Guilded.Base.Content.Message')
- [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent')