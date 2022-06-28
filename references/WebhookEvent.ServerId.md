---
title: ServerId
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') has been created/updated."
---

## WebhookEvent.ServerId Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`WebhookEvent`](WebhookEvent 'Guilded.Base.Events.WebhookEvent')

Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') has been created/updated.

```csharp
public Guilded.Base.HashId ServerId { get; }
```

#### Property Value
[HashId](HashId 'Guilded.Base.HashId')  
Server ID

### See Also
- [WebhookEvent](WebhookEvent 'Guilded.Base.Events.WebhookEvent')
- [ChannelId](WebhookEvent.ChannelId 'Guilded.Base.Events.WebhookEvent.ChannelId')
- [Webhook](WebhookEvent.Webhook 'Guilded.Base.Events.WebhookEvent.Webhook')