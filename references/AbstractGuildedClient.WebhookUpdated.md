---
title: WebhookUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a webhook](Webhook 'Guilded.Base.Servers.Webhook') is edited."
---

## AbstractGuildedClient.WebhookUpdated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a webhook](Webhook 'Guilded.Base.Servers.Webhook') is edited.

```csharp
public IObservable<Guilded.Base.Events.WebhookEvent> WebhookUpdated { get; }
```

### Remarks
  
An event with the name `TeamWebhookUpdated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [WebhookCreated](AbstractGuildedClient.WebhookCreated 'Guilded.AbstractGuildedClient.WebhookCreated')
- [ChannelCreated](AbstractGuildedClient.ChannelCreated 'Guilded.AbstractGuildedClient.ChannelCreated')
- [ChannelUpdated](AbstractGuildedClient.ChannelUpdated 'Guilded.AbstractGuildedClient.ChannelUpdated')
- [ChannelDeleted](AbstractGuildedClient.ChannelDeleted 'Guilded.AbstractGuildedClient.ChannelDeleted')