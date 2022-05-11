---
title: CreatedByWebhook
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') that created the reaction."
---

## Reaction.CreatedByWebhook Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Reaction`](Reaction.md 'Guilded.Base.Content.Reaction')

Gets the identifier of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') that created the reaction.

```csharp
public System.Nullable<Guid> CreatedByWebhook { get; }
```

### Remarks
> **Note:**    
> Currently, only chat messages can be created by [webhooks](Webhook.md 'Guilded.Base.Servers.Webhook').

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Webhook ID?