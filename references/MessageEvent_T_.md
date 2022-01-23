---
title: MessageEvent<T>
layout: references
section: references
tags:
  - references
  - class
description: "

The base for message-related events.

```csharp
public class MessageEvent<T> : Guilded.NET.Base.BaseObject
    where T : Guilded.NET.Base.BaseObject
```"
---

## MessageEvent<T> Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Events`](Guilded.NET.Base.Events 'Guilded.NET.Base.Events')

The base for message-related events.

```csharp
public class MessageEvent<T> : Guilded.NET.Base.BaseObject
    where T : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; MessageEvent<T>

Derived  
&#8627; [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')  
&#8627; [MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent')
#### Type parameters

<a name='Guilded.NET.Base.Events.MessageEvent_T_.T'></a>

`T`

| Constructors | |
| :--- | :--- |
| [MessageEvent(T)](MessageEvent_T_.MessageEvent(T) 'Guilded.NET.Base.Events.MessageEvent<T>.MessageEvent(T)') | Creates a new instance of [MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent'). This is currently only used in deserialization. |

| Properties | |
| :--- | :--- |
| [Message](MessageEvent_T_.Message 'Guilded.NET.Base.Events.MessageEvent<T>.Message') | The message received from the event. |

### See Also
- [Message](MessageEvent_T_.Message 'Guilded.NET.Base.Events.MessageEvent<T>.Message')
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')