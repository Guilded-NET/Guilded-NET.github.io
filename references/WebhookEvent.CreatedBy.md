---
title: CreatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the webhook](Webhook 'Guilded.Base.Servers.Webhook')."
---

## WebhookEvent.CreatedBy Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`WebhookEvent`](WebhookEvent 'Guilded.Base.Events.WebhookEvent')

Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the webhook](Webhook 'Guilded.Base.Servers.Webhook').

```csharp
public Guilded.Base.HashId CreatedBy { get; }
```

#### Property Value
[HashId](HashId 'Guilded.Base.HashId')  
[User ID](UserSummary.Id 'Guilded.Base.Users.UserSummary.Id')

### See Also
- [Webhook](Webhook 'Guilded.Base.Servers.Webhook')
- [CreatedAt](Webhook.CreatedAt 'Guilded.Base.Servers.Webhook.CreatedAt')
- [DeletedAt](Webhook.DeletedAt 'Guilded.Base.Servers.Webhook.DeletedAt')