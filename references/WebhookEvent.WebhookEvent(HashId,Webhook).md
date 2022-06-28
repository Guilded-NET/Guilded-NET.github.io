---
title: WebhookEvent(HashId, Webhook)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [WebhookEvent](WebhookEvent 'Guilded.Base.Events.WebhookEvent') from the specified JSON properties."
---

## WebhookEvent(HashId, Webhook) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`WebhookEvent`](WebhookEvent 'Guilded.Base.Events.WebhookEvent')

Initializes a new instance of [WebhookEvent](WebhookEvent 'Guilded.Base.Events.WebhookEvent') from the specified JSON properties.

```csharp
public WebhookEvent(Guilded.Base.HashId serverId, Guilded.Base.Servers.Webhook webhook);
```
#### Parameters

<a name='Guilded.Base.Events.WebhookEvent.WebhookEvent(Guilded.Base.HashId,Guilded.Base.Servers.Webhook).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') got created/updated

<a name='Guilded.Base.Events.WebhookEvent.WebhookEvent(Guilded.Base.HashId,Guilded.Base.Servers.Webhook).webhook'></a>

`webhook` [Webhook](Webhook 'Guilded.Base.Servers.Webhook')

[The webhook](Webhook 'Guilded.Base.Servers.Webhook') that got created or updated

### See Also
- [WebhookEvent](WebhookEvent 'Guilded.Base.Events.WebhookEvent')