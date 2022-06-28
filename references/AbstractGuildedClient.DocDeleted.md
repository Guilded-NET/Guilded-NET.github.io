---
title: DocDeleted
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a document](Doc 'Guilded.Base.Content.Doc') is deleted."
---

## AbstractGuildedClient.DocDeleted Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a document](Doc 'Guilded.Base.Content.Doc') is deleted.

```csharp
public IObservable<Guilded.Base.Events.DocEvent> DocDeleted { get; }
```

### Remarks
  
An event with the name `DocDeleted` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [DocCreated](AbstractGuildedClient.DocCreated 'Guilded.AbstractGuildedClient.DocCreated')
- [DocUpdated](AbstractGuildedClient.DocUpdated 'Guilded.AbstractGuildedClient.DocUpdated')