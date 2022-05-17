---
title: DocDeleted
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId')."
---

## AbstractGuildedClient.DocDeleted Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId').

```csharp
public IObservable<Guilded.Base.Events.DocEvent> DocDeleted { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [Doc](Doc 'Guilded.Base.Content.Doc')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')