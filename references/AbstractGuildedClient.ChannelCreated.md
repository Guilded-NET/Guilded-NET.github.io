---
title: ChannelCreated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') is created."
---

## AbstractGuildedClient.ChannelCreated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') is created.

```csharp
public IObservable<Guilded.Base.Events.ChannelEvent> ChannelCreated { get; }
```

### Remarks
  
An event with the name `TeamChannelCreated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [WebhookCreated](AbstractGuildedClient.WebhookCreated 'Guilded.AbstractGuildedClient.WebhookCreated')
- [WebhookUpdated](AbstractGuildedClient.WebhookUpdated 'Guilded.AbstractGuildedClient.WebhookUpdated')
- [ChannelUpdated](AbstractGuildedClient.ChannelUpdated 'Guilded.AbstractGuildedClient.ChannelUpdated')
- [ChannelDeleted](AbstractGuildedClient.ChannelDeleted 'Guilded.AbstractGuildedClient.ChannelDeleted')