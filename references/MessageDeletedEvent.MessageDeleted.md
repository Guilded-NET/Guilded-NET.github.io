---
title: MessageDeleted
layout: references
section: references
tags:
  - references
  - class
description: "

A message that was recently deleted/removed.

```csharp
public class MessageDeletedEvent.MessageDeleted : Guilded.NET.Base.BaseObject
```"
---

## MessageDeletedEvent.MessageDeleted Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`MessageDeletedEvent`](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')

A message that was recently deleted/removed.

```csharp
public class MessageDeletedEvent.MessageDeleted : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; MessageDeleted

### Remarks
  
A no longer existing message that was deleted/removed by an author of this message or by a server staff.

| Constructors | |
| :--- | :--- |
| [MessageDeleted(Guid, Guid, HashId, DateTime)](MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,HashId,DateTime) 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(System.Guid, System.Guid, Guilded.NET.Base.HashId, System.DateTime)') | The identifier of the message. |

| Properties | |
| :--- | :--- |
| [ChannelId](MessageDeletedEvent.MessageDeleted.ChannelId 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.ChannelId') | The identifier of the channel where the message was. |
| [DeletedAt](MessageDeletedEvent.MessageDeleted.DeletedAt 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.DeletedAt') | The date of when the message was deleted. |
| [Id](MessageDeletedEvent.MessageDeleted.Id 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.Id') | The identifier of the message. |
| [ServerId](MessageDeletedEvent.MessageDeleted.ServerId 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.ServerId') | The identifier of the server where the message was. |

| Methods | |
| :--- | :--- |
| [Equals(object)](MessageDeletedEvent.MessageDeleted.Equals(object) 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object)') | Returns whether this and [obj](MessageDeletedEvent.MessageDeleted.Equals(object)#Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object).obj 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object).obj') are equal to each other. |
| [GetHashCode()](MessageDeletedEvent.MessageDeleted.GetHashCode() 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.GetHashCode()') | Gets a hashcode of this object. |
| [ToString()](MessageDeletedEvent.MessageDeleted.ToString() 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.ToString()') | Creates string equivalent of the message. |

### See Also
- [Message](Message 'Guilded.NET.Base.Content.Message')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')