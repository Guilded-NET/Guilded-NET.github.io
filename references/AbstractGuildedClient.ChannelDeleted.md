---
title: ChannelDeleted
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel')."
---

## AbstractGuildedClient.ChannelDeleted Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel').

```csharp
public IObservable<Guilded.Base.Events.ChannelEvent> ChannelDeleted { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')
- [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')