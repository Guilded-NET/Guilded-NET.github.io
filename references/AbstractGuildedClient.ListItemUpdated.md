---
title: ListItemUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a list item](ListItem 'Guilded.Base.Content.ListItem') is edited."
---

## AbstractGuildedClient.ListItemUpdated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a list item](ListItem 'Guilded.Base.Content.ListItem') is edited.

```csharp
public IObservable<Guilded.Base.Events.ListItemEvent> ListItemUpdated { get; }
```

### Remarks
  
An event with the name `ListItemUpdated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [ListItemCreated](AbstractGuildedClient.ListItemCreated 'Guilded.AbstractGuildedClient.ListItemCreated')
- [ListItemDeleted](AbstractGuildedClient.ListItemDeleted 'Guilded.AbstractGuildedClient.ListItemDeleted')
- [ListItemCompleted](AbstractGuildedClient.ListItemCompleted 'Guilded.AbstractGuildedClient.ListItemCompleted')
- [ListItemUncompleted](AbstractGuildedClient.ListItemUncompleted 'Guilded.AbstractGuildedClient.ListItemUncompleted')