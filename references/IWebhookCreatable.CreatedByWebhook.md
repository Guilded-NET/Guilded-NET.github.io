---
title: CreatedByWebhook
layout: references
section: references
tags:
  - references
  - property
description: "

The identifier of the webhook creator of the content.

```csharp
System.Nullable<System.Guid> CreatedByWebhook { get; }
```"
---

## IWebhookCreatable.CreatedByWebhook Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`IWebhookCreatable`](IWebhookCreatable 'Guilded.NET.Base.Content.IWebhookCreatable')

The identifier of the webhook creator of the content.

```csharp
System.Nullable<System.Guid> CreatedByWebhook { get; }
```

### Remarks
  
The identifier of the webhook that created this content.  
> **Note:**    
> Currently, only chat messages can be created by Webhooks.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Webhook ID?