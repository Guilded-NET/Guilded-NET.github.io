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
void OnError(System.Exception exception);
```"
---

## IEventInfo<T>.OnError(Exception) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`IEventInfo<T>`](IEventInfo_T_ 'Guilded.NET.IEventInfo<T>')

Notifies observers with OnError.

```csharp
void OnError(System.Exception exception);
```

### Remarks
  
Notifies all [Observable](IEventInfo_T_.Observable 'Guilded.NET.IEventInfo<T>.Observable')'s observers with an error.
#### Parameters

<a name='Guilded.NET.IEventInfo_T_.OnError(System.Exception).exception'></a>

`exception` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The next received exception/error