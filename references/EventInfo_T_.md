---
title: EventInfo<T>
layout: references
section: references
tags:
  - references
  - class
description: "

Defines a Guilded event.

```csharp
public class EventInfo<T> :
Guilded.NET.IEventInfo<T>
```"
---

## EventInfo<T> Class
###### **Assembly:** `Guilded.NET`<br/>**Namespace:** [`Guilded.NET`](Guilded.NET 'Guilded.NET')

Defines a Guilded event.

```csharp
public class EventInfo<T> :
Guilded.NET.IEventInfo<T>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; EventInfo<T>

Implements [Guilded.NET.IEventInfo&lt;](IEventInfo_T_ 'Guilded.NET.IEventInfo<T>')[T](EventInfo_T_#Guilded.NET.EventInfo_T_.T 'Guilded.NET.EventInfo<T>.T')[&gt;](IEventInfo_T_ 'Guilded.NET.IEventInfo<T>')

### Remarks
  
Defines a new Guilded event that can be used in [GuildedEvents](AbstractGuildedClient.GuildedEvents 'Guilded.NET.AbstractGuildedClient.GuildedEvents')  
  
The event can be subscribed via [Observable](EventInfo_T_.Observable 'Guilded.NET.EventInfo<T>.Observable').
#### Type parameters

<a name='Guilded.NET.EventInfo_T_.T'></a>

`T`

The type of the event that will be received. Used in [Subject](EventInfo_T_.Subject 'Guilded.NET.EventInfo<T>.Subject') and [Observable](EventInfo_T_.Observable 'Guilded.NET.EventInfo<T>.Observable')

| Constructors | |
| :--- | :--- |
| [EventInfo()](EventInfo_T_.EventInfo() 'Guilded.NET.EventInfo<T>.EventInfo()') | Creates a new Guilded event. |

| Fields | |
| :--- | :--- |
| [Subject](EventInfo_T_.Subject 'Guilded.NET.EventInfo<T>.Subject') | A subject that will be used as an observable. |

| Properties | |
| :--- | :--- |
| [ArgumentType](EventInfo_T_.ArgumentType 'Guilded.NET.EventInfo<T>.ArgumentType') | The type of the arguments that should be used. |
| [Observable](EventInfo_T_.Observable 'Guilded.NET.EventInfo<T>.Observable') | An observable that can be subscribed. |

| Methods | |
| :--- | :--- |
| [OnError(Exception)](EventInfo_T_.OnError(Exception) 'Guilded.NET.EventInfo<T>.OnError(System.Exception)') | Notifies observers with OnError. |
| [OnNext(object)](EventInfo_T_.OnNext(object) 'Guilded.NET.EventInfo<T>.OnNext(object)') | Notifies observers with OnNext. |
