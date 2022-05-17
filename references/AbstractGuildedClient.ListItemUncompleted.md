---
title: ListItemUncompleted
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId')."
---

## AbstractGuildedClient.ListItemUncompleted Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').

```csharp
public IObservable<Guilded.Base.Events.ListItemEvent> ListItemUncompleted { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase`1')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')