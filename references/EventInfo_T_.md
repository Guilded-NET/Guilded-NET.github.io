---
title: EventInfo<T>
layout: references
section: references
tags:
  - references
  - class
description: "

efines a new Guilded event that can be used in [GuildedEvents](AbstractGuildedClient.GuildedEvents.md 'Guilded.AbstractGuildedClient.GuildedEvents')"
---

## EventInfo<T> Class
###### **Assembly:** `Guilded`<br/>**Namespace:** [`Guilded`](Guilded.md 'Guilded')

efines a new Guilded event that can be used in [GuildedEvents](AbstractGuildedClient.GuildedEvents.md 'Guilded.AbstractGuildedClient.GuildedEvents')

```csharp
public class EventInfo<T> :
Guilded.IEventInfo<T>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; EventInfo<T>

Implements [Guilded.IEventInfo&lt;](IEventInfo_T_.md 'Guilded.IEventInfo<T>')[T](EventInfo_T_.md#Guilded.EventInfo_T_.T 'Guilded.EventInfo<T>.T')[&gt;](IEventInfo_T_.md 'Guilded.IEventInfo<T>')

### Remarks
  
The event can be subscribed via [Observable](EventInfo_T_.Observable.md 'Guilded.EventInfo<T>.Observable').
#### Type parameters

<a name='Guilded.EventInfo_T_.T'></a>

`T`

The type of the event that will be received. Used in [Subject](EventInfo_T_.Subject.md 'Guilded.EventInfo<T>.Subject') and [Observable](EventInfo_T_.Observable.md 'Guilded.EventInfo<T>.Observable')

| Constructors | |
| :--- | :--- |
| [EventInfo()](EventInfo_T_.EventInfo().md 'Guilded.EventInfo<T>.EventInfo()') | Initializes a new instance of [EventInfo&lt;T&gt;](EventInfo_T_.md 'Guilded.EventInfo<T>'). |

| Fields | |
| :--- | :--- |
| [Subject](EventInfo_T_.Subject.md 'Guilded.EventInfo<T>.Subject') | The subject that will be used for subscribing to this event. |

| Properties | |
| :--- | :--- |
| [ArgumentType](EventInfo_T_.ArgumentType.md 'Guilded.EventInfo<T>.ArgumentType') | Gets the type of the observer's argument. |
| [Observable](EventInfo_T_.Observable.md 'Guilded.EventInfo<T>.Observable') | Gets the observable event that can be used to subscribe to the event. |

| Methods | |
| :--- | :--- |
| [OnError(Exception)](EventInfo_T_.OnError(Exception).md 'Guilded.EventInfo<T>.OnError(System.Exception)') | Notifies observers with an exception. |
| [OnNext(object)](EventInfo_T_.OnNext(object).md 'Guilded.EventInfo<T>.OnNext(object)') | Notifies the observers with new value. |

### See Also
- [IEventInfo&lt;T&gt;](IEventInfo_T_.md 'Guilded.IEventInfo<T>')
- [AbstractGuildedClient](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')