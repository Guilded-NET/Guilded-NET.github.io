---
title: ListItemDeleted
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId')."
---

## AbstractGuildedClient.ListItemDeleted Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').

```csharp
public IObservable<Guilded.Base.Events.ListItemEvent> ListItemDeleted { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [Guilded.Base.Content.ListItemBase&lt;&gt;](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItemBase-1 'Guilded.Base.Content.ListItemBase`1')
- [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent')
- [Guilded.Base.Events.DocEvent](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent 'Guilded.Base.Events.DocEvent')
- [Guilded.Base.Events.ChannelEvent](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ChannelEvent 'Guilded.Base.Events.ChannelEvent')