---
title: Observable
layout: references
section: references
tags:
  - references
  - property
description: "

An observable that can be subscribed."
---

## IEventInfo<T>.Observable Property
##### **Assembly:** `Guilded`<br/>**Type:** [`IEventInfo<T>`](IEventInfo_T_ 'Guilded.IEventInfo<T>')

An observable that can be subscribed.

```csharp
IObservable<T> Observable { get; }
```

### Remarks
  
An observable that can be subscribed to. The received event will be of type [T](IEventInfo_T_#Guilded.IEventInfo_T_.T 'Guilded.IEventInfo<T>.T').

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')  
Observable