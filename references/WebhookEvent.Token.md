---
title: Token
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the token of the webhook."
---

## WebhookEvent.Token Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`WebhookEvent`](WebhookEvent.md 'Guilded.Base.Events.WebhookEvent')

Gets the token of the webhook.

```csharp
public string? Token { get; }
```

### Remarks
  
This will only be given if you have [manage webhooks permission](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.ManageWebhooks 'Guilded.Base.Permissions.GeneralPermissions.ManageWebhooks').

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Token?