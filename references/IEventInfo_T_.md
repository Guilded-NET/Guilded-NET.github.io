---
title: IEventInfo<T>
layout: references
section: references
tags:
  - references
  - interface
description: "

The base interface for event info.

```csharp
public interface IEventInfo<out T>
```"
---

## IEventInfo<T> Interface
###### **Assembly:** `Guilded.NET`<br/>**Namespace:** [`Guilded.NET`](Guilded.NET 'Guilded.NET')

The base interface for event info.

```csharp
public interface IEventInfo<out T>
```

Derived  
&#8627; [EventInfo&lt;T&gt;](EventInfo_T_ 'Guilded.NET.EventInfo<T>')
#### Type parameters

<a name='Guilded.NET.IEventInfo_T_.T'></a>

`T`

The type of the observable

| Properties | |
| :--- | :--- |
| [ArgumentType](IEventInfo_T_.ArgumentType 'Guilded.NET.IEventInfo<T>.ArgumentType') | The type of the arguments that should be used. |
| [Observable](IEventInfo_T_.Observable 'Guilded.NET.IEventInfo<T>.Observable') | An observable that can be subscribed. |

| Methods | |
| :--- | :--- |
| [OnError(Exception)](IEventInfo_T_.OnError(Exception) 'Guilded.NET.IEventInfo<T>.OnError(System.Exception)') | Notifies observers with OnError. |
| [OnNext(object)](IEventInfo_T_.OnNext(object) 'Guilded.NET.IEventInfo<T>.OnNext(object)') | Notifies observers with OnNext. |
