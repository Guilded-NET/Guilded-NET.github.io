---
title: ChannelUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') is edited."
---

## AbstractGuildedClient.ChannelUpdated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') is edited.

```csharp
public IObservable<Guilded.Base.Events.ChannelEvent> ChannelUpdated { get; }
```

### Remarks
  
An event with the name `TeamChannelUpdated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [WebhookCreated](AbstractGuildedClient.WebhookCreated 'Guilded.AbstractGuildedClient.WebhookCreated')
- [WebhookUpdated](AbstractGuildedClient.WebhookUpdated 'Guilded.AbstractGuildedClient.WebhookUpdated')
- [ChannelCreated](AbstractGuildedClient.ChannelCreated 'Guilded.AbstractGuildedClient.ChannelCreated')
- [ChannelDeleted](AbstractGuildedClient.ChannelDeleted 'Guilded.AbstractGuildedClient.ChannelDeleted')