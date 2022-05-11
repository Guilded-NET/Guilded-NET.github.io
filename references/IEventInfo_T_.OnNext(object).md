---
title: OnNext(object)
layout: references
section: references
tags:
  - references
  - method
description: "

Notifies observers with OnNext."
---

## IEventInfo<T>.OnNext(object) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`IEventInfo<T>`](IEventInfo_T_ 'Guilded.IEventInfo<T>')

Notifies observers with OnNext.

```csharp
void OnNext(object value);
```

### Remarks
  
Notifies all [Observable](IEventInfo_T_.Observable 'Guilded.IEventInfo<T>.Observable')'s observers.
#### Parameters

<a name='Guilded.IEventInfo_T_.OnNext(object).value'></a>

`value` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The next received value