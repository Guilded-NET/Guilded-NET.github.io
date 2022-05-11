---
title: ChannelUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel')."
---

## AbstractGuildedClient.ChannelUpdated Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel').

```csharp
public IObservable<Guilded.Base.Events.ChannelEvent> ChannelUpdated { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [Guilded.Base.Events.ListItemEvent](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ListItemEvent 'Guilded.Base.Events.ListItemEvent')
- [Guilded.Base.Events.DocEvent](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent 'Guilded.Base.Events.DocEvent')
- [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent')