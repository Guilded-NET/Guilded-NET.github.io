---
title: CreatedByWebhook
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')."
---

## IWebhookCreatable.CreatedByWebhook Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`IWebhookCreatable`](IWebhookCreatable 'Guilded.Base.Content.IWebhookCreatable')

Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').

```csharp
System.Nullable<Guid> CreatedByWebhook { get; }
```

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
[Webhook ID](Webhook.Id 'Guilded.Base.Servers.Webhook.Id')?

### See Also
- [IWebhookCreatable](IWebhookCreatable 'Guilded.Base.Content.IWebhookCreatable')
- [CreatedAt](ICreatableContent.CreatedAt 'Guilded.Base.Content.ICreatableContent.CreatedAt')
- [CreatedBy](ICreatableContent.CreatedBy 'Guilded.Base.Content.ICreatableContent.CreatedBy')
- [UpdatedAt](IUpdatableContent.UpdatedAt 'Guilded.Base.Content.IUpdatableContent.UpdatedAt')