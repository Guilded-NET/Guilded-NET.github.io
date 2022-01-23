---
title: Observable
layout: references
section: references
tags:
  - references
  - property
description: "

An observable that can be subscribed.

```csharp
public System.IObservable<T> Observable { get; }
```"
---

## EventInfo<T>.Observable Property
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`EventInfo<T>`](EventInfo_T_ 'Guilded.NET.EventInfo<T>')

An observable that can be subscribed.

```csharp
public System.IObservable<T> Observable { get; }
```

### Remarks
  
An observable that can be subscribed to. The received event will be of type [T](EventInfo_T_#Guilded.NET.EventInfo_T_.T 'Guilded.NET.EventInfo<T>.T').  
  
This relies on [Subject](EventInfo_T_.Subject 'Guilded.NET.EventInfo<T>.Subject').

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[T](EventInfo_T_#Guilded.NET.EventInfo_T_.T 'Guilded.NET.EventInfo<T>.T')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')  
[Subject](EventInfo_T_.Subject 'Guilded.NET.EventInfo<T>.Subject') as observable