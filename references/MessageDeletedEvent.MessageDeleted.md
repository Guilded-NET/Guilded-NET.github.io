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
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageDeletedEvent`](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent')

Represents a message that was recently deleted/removed.

```csharp
public class MessageDeletedEvent.MessageDeleted : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; MessageDeleted

| Constructors | |
| :--- | :--- |
| [MessageDeleted(Guid, Guid, DateTime, Nullable&lt;HashId&gt;, bool)](MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,DateTime,Nullable_HashId_,bool) 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid, Guid, System.DateTime, System.Nullable<Guilded.Base.HashId>, bool)') | The identifier of the message. |

| Properties | |
| :--- | :--- |
| [ChannelId](MessageDeletedEvent.MessageDeleted.ChannelId 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ChannelId') | Gets the identifier of the channel where the message was. |
| [DeletedAt](MessageDeletedEvent.MessageDeleted.DeletedAt 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.DeletedAt') | Gets the date when the message was deleted. |
| [Id](MessageDeletedEvent.MessageDeleted.Id 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Id') | Gets the identifier of the message. |
| [IsPrivate](MessageDeletedEvent.MessageDeleted.IsPrivate 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.IsPrivate') | Gets whether the deleted message was [private mention](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate') or a [private reply](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate'). |
| [ServerId](MessageDeletedEvent.MessageDeleted.ServerId 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ServerId') | Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the message was. |

| Methods | |
| :--- | :--- |
| [Equals(object)](MessageDeletedEvent.MessageDeleted.Equals(object) 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object)') | Returns whether this and [obj](MessageDeletedEvent.MessageDeleted.Equals(object)#Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object).obj 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object).obj') are equal to each other. |
| [GetHashCode()](MessageDeletedEvent.MessageDeleted.GetHashCode() 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.GetHashCode()') | Gets a hashcode of this object. |
| [ToString()](MessageDeletedEvent.MessageDeleted.ToString() 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ToString()') | Creates string equivalent of the message. |

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent')