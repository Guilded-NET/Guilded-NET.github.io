---
title: MessageEvent<T>
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the base for message-related events."
---

## MessageEvent<T> Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents the base for message-related events.

```csharp
public abstract class MessageEvent<T> : Guilded.Base.BaseObject
    where T : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; MessageEvent<T>

Derived  
&#8627; [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent')  
&#8627; [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent')
#### Type parameters

<a name='Guilded.Base.Events.MessageEvent_T_.T'></a>

`T`

| Constructors | |
| :--- | :--- |
| [MessageEvent(Nullable&lt;HashId&gt;, T)](MessageEvent_T_.MessageEvent(Nullable_HashId_,T).md 'Guilded.Base.Events.MessageEvent<T>.MessageEvent(System.Nullable<Guilded.Base.HashId>, T)') | Initializes a new instance of [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Message](MessageEvent_T_.Message.md 'Guilded.Base.Events.MessageEvent<T>.Message') | The message received from the event. |

### See Also
- [Message](MessageEvent_T_.Message.md 'Guilded.Base.Events.MessageEvent<T>.Message')
- [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent')