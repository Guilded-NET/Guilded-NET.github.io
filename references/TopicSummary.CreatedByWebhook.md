---
title: CreatedByWebhook
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the forum thread](TopicSummary 'Guilded.Base.Content.TopicSummary')."
---

## TopicSummary.CreatedByWebhook Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`TopicSummary`](TopicSummary 'Guilded.Base.Content.TopicSummary')

Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the forum thread](TopicSummary 'Guilded.Base.Content.TopicSummary').

```csharp
public System.Nullable<Guid> CreatedByWebhook { get; }
```

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
[Webhook ID](Webhook.Id 'Guilded.Base.Servers.Webhook.Id')?

### See Also
- [TopicSummary](TopicSummary 'Guilded.Base.Content.TopicSummary')
- [CreatedBy](ChannelContent_TId,TServer_.CreatedBy 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedBy')
- [CreatedAt](ChannelContent_TId,TServer_.CreatedAt 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedAt')
- [UpdatedAt](TitledContent.UpdatedAt 'Guilded.Base.Content.TitledContent.UpdatedAt')