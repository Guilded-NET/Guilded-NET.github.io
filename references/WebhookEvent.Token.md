---
title: Token
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the token of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')."
---

## WebhookEvent.Token Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`WebhookEvent`](WebhookEvent 'Guilded.Base.Events.WebhookEvent')

Gets the token of [the webhook](Webhook 'Guilded.Base.Servers.Webhook').

```csharp
public string? Token { get; }
```

### Remarks
  
This will only be given if you have [manage webhooks permission](GeneralPermissions#Guilded.Base.Permissions.GeneralPermissions.ManageWebhooks 'Guilded.Base.Permissions.GeneralPermissions.ManageWebhooks').

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Token?

### See Also
- [Webhook](Webhook 'Guilded.Base.Servers.Webhook')
- [Name](Webhook.Name 'Guilded.Base.Servers.Webhook.Name')
- [Id](Webhook.Id 'Guilded.Base.Servers.Webhook.Id')
- [ChannelId](Webhook.ChannelId 'Guilded.Base.Servers.Webhook.ChannelId')
- [ServerId](Webhook.ServerId 'Guilded.Base.Servers.Webhook.ServerId')