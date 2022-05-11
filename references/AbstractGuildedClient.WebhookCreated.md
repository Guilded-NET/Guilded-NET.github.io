---
title: WebhookCreated
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `TeamWebhookCreated` or `TeamWebhookUpdated` and opcode `0` that occurs once [webhook](WebhookEvent.Webhook.md 'Guilded.Base.Events.WebhookEvent.Webhook') gets created or updated."
---

## AbstractGuildedClient.WebhookCreated Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `TeamWebhookCreated` or `TeamWebhookUpdated` and opcode `0` that occurs once [webhook](WebhookEvent.Webhook.md 'Guilded.Base.Events.WebhookEvent.Webhook') gets created or updated.

```csharp
public IObservable<Guilded.Base.Events.WebhookEvent> WebhookCreated { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')