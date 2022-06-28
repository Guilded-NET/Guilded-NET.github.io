---
title: DocCreated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new document](Doc 'Guilded.Base.Content.Doc') is posted."
---

## AbstractGuildedClient.DocCreated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new document](Doc 'Guilded.Base.Content.Doc') is posted.

```csharp
public IObservable<Guilded.Base.Events.DocEvent> DocCreated { get; }
```

### Remarks
  
An event with the name `DocCreated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [DocUpdated](AbstractGuildedClient.DocUpdated 'Guilded.AbstractGuildedClient.DocUpdated')
- [DocDeleted](AbstractGuildedClient.DocDeleted 'Guilded.AbstractGuildedClient.DocDeleted')