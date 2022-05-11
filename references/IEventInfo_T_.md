---
title: IEventInfo<T>
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents the base interface for event info."
---

## IEventInfo<T> Interface
###### **Assembly:** `Guilded`<br/>**Namespace:** [`Guilded`](Guilded.md 'Guilded')

Represents the base interface for event info.

```csharp
public interface IEventInfo<out T>
```

Derived  
&#8627; [EventInfo&lt;T&gt;](EventInfo_T_.md 'Guilded.EventInfo<T>')
#### Type parameters

<a name='Guilded.IEventInfo_T_.T'></a>

`T`

The type of the observable

| Properties | |
| :--- | :--- |
| [ArgumentType](IEventInfo_T_.ArgumentType.md 'Guilded.IEventInfo<T>.ArgumentType') | The type of the arguments that should be used. |
| [Observable](IEventInfo_T_.Observable.md 'Guilded.IEventInfo<T>.Observable') | An observable that can be subscribed. |

| Methods | |
| :--- | :--- |
| [OnError(Exception)](IEventInfo_T_.OnError(Exception).md 'Guilded.IEventInfo<T>.OnError(System.Exception)') | Notifies observers with OnError. |
| [OnNext(object)](IEventInfo_T_.OnNext(object).md 'Guilded.IEventInfo<T>.OnNext(object)') | Notifies observers with OnNext. |

### See Also
- [EventInfo&lt;T&gt;](EventInfo_T_.md 'Guilded.EventInfo<T>')
- [AbstractGuildedClient](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')