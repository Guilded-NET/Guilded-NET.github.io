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
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents the base for message-related events.

```csharp
public abstract class MessageEvent<T> : Guilded.Base.ContentModel
    where T : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; MessageEvent<T>

Derived  
&#8627; [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent')  
&#8627; [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
#### Type parameters

<a name='Guilded.Base.Events.MessageEvent_T_.T'></a>

`T`

| Constructors | |
| :--- | :--- |
| [MessageEvent(Nullable&lt;HashId&gt;, T)](MessageEvent_T_.MessageEvent(Nullable_HashId_,T) 'Guilded.Base.Events.MessageEvent<T>.MessageEvent(System.Nullable<Guilded.Base.HashId>, T)') | Initializes a new instance of [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Message](MessageEvent_T_.Message 'Guilded.Base.Events.MessageEvent<T>.Message') | Gets the message received from the event. |
| [ServerId](MessageEvent_T_.ServerId 'Guilded.Base.Events.MessageEvent<T>.ServerId') | Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the event occurred. |

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent')
- [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')
- [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')