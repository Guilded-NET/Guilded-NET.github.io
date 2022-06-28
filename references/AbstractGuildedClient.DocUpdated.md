---
title: DocUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a document](Doc 'Guilded.Base.Content.Doc') is edited."
---

## AbstractGuildedClient.DocUpdated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a document](Doc 'Guilded.Base.Content.Doc') is edited.

```csharp
public IObservable<Guilded.Base.Events.DocEvent> DocUpdated { get; }
```

### Remarks
  
An event with the name `DocUpdated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [DocCreated](AbstractGuildedClient.DocCreated 'Guilded.AbstractGuildedClient.DocCreated')
- [DocDeleted](AbstractGuildedClient.DocDeleted 'Guilded.AbstractGuildedClient.DocDeleted')