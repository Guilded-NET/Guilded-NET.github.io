---
title: ListItemCompleted
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a list item](ListItem 'Guilded.Base.Content.ListItem') is set as completed."
---

## AbstractGuildedClient.ListItemCompleted Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a list item](ListItem 'Guilded.Base.Content.ListItem') is set as completed.

```csharp
public IObservable<Guilded.Base.Events.ListItemEvent> ListItemCompleted { get; }
```

### Remarks
  
An event with the name `ListItemCompleted` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [ListItemUpdated](AbstractGuildedClient.ListItemUpdated 'Guilded.AbstractGuildedClient.ListItemUpdated')
- [ListItemUpdated](AbstractGuildedClient.ListItemUpdated 'Guilded.AbstractGuildedClient.ListItemUpdated')
- [ListItemCompleted](AbstractGuildedClient.ListItemCompleted 'Guilded.AbstractGuildedClient.ListItemCompleted')
- [ListItemUncompleted](AbstractGuildedClient.ListItemUncompleted 'Guilded.AbstractGuildedClient.ListItemUncompleted')