---
title: ListItemCreated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new list item](ListItem 'Guilded.Base.Content.ListItem') is posted."
---

## AbstractGuildedClient.ListItemCreated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new list item](ListItem 'Guilded.Base.Content.ListItem') is posted.

```csharp
public IObservable<Guilded.Base.Events.ListItemEvent> ListItemCreated { get; }
```

### Remarks
  
An event with the name `ListItemCreated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [ListItemUpdated](AbstractGuildedClient.ListItemUpdated 'Guilded.AbstractGuildedClient.ListItemUpdated')
- [ListItemDeleted](AbstractGuildedClient.ListItemDeleted 'Guilded.AbstractGuildedClient.ListItemDeleted')
- [ListItemCompleted](AbstractGuildedClient.ListItemCompleted 'Guilded.AbstractGuildedClient.ListItemCompleted')
- [ListItemUncompleted](AbstractGuildedClient.ListItemUncompleted 'Guilded.AbstractGuildedClient.ListItemUncompleted')