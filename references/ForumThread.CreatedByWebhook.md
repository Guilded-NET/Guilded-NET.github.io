---
title: CreatedByWebhook
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the forum thread](ForumThread 'Guilded.Base.Content.ForumThread')."
---

## ForumThread.CreatedByWebhook Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ForumThread`](ForumThread 'Guilded.Base.Content.ForumThread')

Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the forum thread](ForumThread 'Guilded.Base.Content.ForumThread').

```csharp
public System.Nullable<Guid> CreatedByWebhook { get; }
```

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
[Webhook ID](Webhook.Id 'Guilded.Base.Servers.Webhook.Id')?

### See Also
- [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread')
- [CreatedBy](ChannelContent_TId,TServer_.CreatedBy 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedBy')
- [CreatedAt](ChannelContent_TId,TServer_.CreatedAt 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedAt')
- [UpdatedAt](TitledContent.UpdatedAt 'Guilded.Base.Content.TitledContent.UpdatedAt')