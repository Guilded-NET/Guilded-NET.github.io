---
title: GuildedWebhookClient(string[])
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given webhooks."
---

## GuildedWebhookClient(string[]) Constructor
##### **Assembly:** `Guilded`<br/>**Type:** [`GuildedWebhookClient`](GuildedWebhookClient 'Guilded.GuildedWebhookClient')

Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given webhooks.

```csharp
public GuildedWebhookClient(params string[] webhookUrls);
```

### Remarks
  
To execute the webhooks, you can use [CreateMessageAsync(MessageContent)](GuildedWebhookClient.CreateMessageAsync(MessageContent) 'Guilded.GuildedWebhookClient.CreateMessageAsync(Guilded.Base.Content.MessageContent)') method.
#### Parameters

<a name='Guilded.GuildedWebhookClient.GuildedWebhookClient(string[]).webhookUrls'></a>

`webhookUrls` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

### See Also
- [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient')
- [GuildedWebhookClient(IList&lt;IWebhook&gt;)](GuildedWebhookClient.GuildedWebhookClient(IList_IWebhook_) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(System.Collections.Generic.IList<Guilded.Base.Servers.IWebhook>)')
- [GuildedWebhookClient(IWebhook[])](GuildedWebhookClient.GuildedWebhookClient(IWebhook[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Guilded.Base.Servers.IWebhook[])')
- [GuildedWebhookClient(Uri[])](GuildedWebhookClient.GuildedWebhookClient(Uri[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Uri[])')
- [GuildedWebhookClient(string[])](GuildedWebhookClient.GuildedWebhookClient(string[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(string[])')
- [GuildedWebhookClient(Guid, string)](GuildedWebhookClient.GuildedWebhookClient(Guid,string) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Guid, string)')