---
title: OnNext(object)
layout: references
section: references
tags:
  - references
  - method
description: "

Notifies observers with OnNext.

```csharp
public void OnNext(object value);
```"
---

## EventInfo<T>.OnNext(object) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`EventInfo<T>`](EventInfo_T_ 'Guilded.NET.EventInfo<T>')

Notifies observers with OnNext.

```csharp
public void OnNext(object value);
```

### Remarks
  
Notifies all [Observable](EventInfo_T_.Observable 'Guilded.NET.EventInfo<T>.Observable')'s observers. Invokes [Subject](EventInfo_T_.Subject 'Guilded.NET.EventInfo<T>.Subject')'s [System.Reactive.Subjects.Subject&lt;&gt;.OnNext(@0)](https://docs.microsoft.com/en-us/dotnet/api/System.Reactive.Subjects.Subject-1.OnNext#System_Reactive_Subjects_Subject_1_OnNext__0_ 'System.Reactive.Subjects.Subject`1.OnNext(`0)') method.
#### Parameters

<a name='Guilded.NET.EventInfo_T_.OnNext(object).value'></a>

`value` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The next received value