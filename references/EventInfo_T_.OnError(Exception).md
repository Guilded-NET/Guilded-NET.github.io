---
title: OnError(Exception)
layout: references
section: references
tags:
  - references
  - method
description: "

Notifies observers with OnError.

```csharp
public void OnError(System.Exception exception);
```"
---

## EventInfo<T>.OnError(Exception) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`EventInfo<T>`](EventInfo_T_ 'Guilded.NET.EventInfo<T>')

Notifies observers with OnError.

```csharp
public void OnError(System.Exception exception);
```

### Remarks
  
Notifies all [Observable](EventInfo_T_.Observable 'Guilded.NET.EventInfo<T>.Observable')'s observers with an error. Invokes [Subject](EventInfo_T_.Subject 'Guilded.NET.EventInfo<T>.Subject')'s [System.Reactive.Subjects.Subject&lt;&gt;.OnError(System.Exception)](https://docs.microsoft.com/en-us/dotnet/api/System.Reactive.Subjects.Subject-1.OnError#System_Reactive_Subjects_Subject_1_OnError_System_Exception_ 'System.Reactive.Subjects.Subject`1.OnError(System.Exception)') method.
#### Parameters

<a name='Guilded.NET.EventInfo_T_.OnError(System.Exception).exception'></a>

`exception` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The next received exception/error