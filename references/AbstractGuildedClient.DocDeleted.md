---
title: DocDeleted
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId')."
---

## AbstractGuildedClient.DocDeleted Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId').

```csharp
public IObservable<Guilded.Base.Events.DocEvent> DocDeleted { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [Doc](Doc.md 'Guilded.Base.Content.Doc')
- [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent')
- [Guilded.Base.Events.ListItemEvent](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ListItemEvent 'Guilded.Base.Events.ListItemEvent')
- [Guilded.Base.Events.ChannelEvent](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ChannelEvent 'Guilded.Base.Events.ChannelEvent')