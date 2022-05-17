---
title: CreatedByWebhook
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the message."
---

## Message.CreatedByWebhook Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message 'Guilded.Base.Content.Message')

Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the message.

```csharp
public System.Nullable<Guid> CreatedByWebhook { get; }
```

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
[Webhook ID](Webhook.Id 'Guilded.Base.Servers.Webhook.Id')?

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [CreatedBy](ChannelContent_TId,TServer_.CreatedBy 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedBy')
- [CreatedAt](ChannelContent_TId,TServer_.CreatedAt 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedAt')
- [UpdatedAt](Message.UpdatedAt 'Guilded.Base.Content.Message.UpdatedAt')