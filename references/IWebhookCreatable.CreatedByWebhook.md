---
title: CreatedByWebhook
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of the webhook creator of the content."
---

## IWebhookCreatable.CreatedByWebhook Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`IWebhookCreatable`](IWebhookCreatable.md 'Guilded.Base.Content.IWebhookCreatable')

Gets the identifier of the webhook creator of the content.

```csharp
System.Nullable<Guid> CreatedByWebhook { get; }
```

### Remarks
> **Note:**    
> Currently, only chat messages can be created by Webhooks.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Webhook ID?