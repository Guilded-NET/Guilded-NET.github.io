---
title: GuildedWebhookClient(IWebhook[])
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given [webhooks](GuildedWebhookClient.GuildedWebhookClient(IWebhook[])#Guilded.GuildedWebhookClient.GuildedWebhookClient(Guilded.Base.Servers.IWebhook[]).webhooks 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Guilded.Base.Servers.IWebhook[]).webhooks')."
---

## GuildedWebhookClient(IWebhook[]) Constructor
##### **Assembly:** `Guilded`<br/>**Type:** [`GuildedWebhookClient`](GuildedWebhookClient 'Guilded.GuildedWebhookClient')

Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given [webhooks](GuildedWebhookClient.GuildedWebhookClient(IWebhook[])#Guilded.GuildedWebhookClient.GuildedWebhookClient(Guilded.Base.Servers.IWebhook[]).webhooks 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Guilded.Base.Servers.IWebhook[]).webhooks').

```csharp
public GuildedWebhookClient(params Guilded.Base.Servers.IWebhook[] webhooks);
```

### Remarks
  
To execute the webhooks, you can use [CreateMessageAsync(MessageContent)](GuildedWebhookClient.CreateMessageAsync(MessageContent) 'Guilded.GuildedWebhookClient.CreateMessageAsync(Guilded.Base.Content.MessageContent)') method.
#### Parameters

<a name='Guilded.GuildedWebhookClient.GuildedWebhookClient(Guilded.Base.Servers.IWebhook[]).webhooks'></a>

`webhooks` [Guilded.Base.Servers.IWebhook](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.IWebhook 'Guilded.Base.Servers.IWebhook')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The list of [webhooks](Webhook 'Guilded.Base.Servers.Webhook') that will be executed

### See Also
- [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient')
- [GuildedWebhookClient(IList&lt;IWebhook&gt;)](GuildedWebhookClient.GuildedWebhookClient(IList_IWebhook_) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(System.Collections.Generic.IList<Guilded.Base.Servers.IWebhook>)')
- [GuildedWebhookClient(IWebhook[])](GuildedWebhookClient.GuildedWebhookClient(IWebhook[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Guilded.Base.Servers.IWebhook[])')
- [GuildedWebhookClient(Uri[])](GuildedWebhookClient.GuildedWebhookClient(Uri[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Uri[])')
- [GuildedWebhookClient(string[])](GuildedWebhookClient.GuildedWebhookClient(string[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(string[])')
- [GuildedWebhookClient(Guid, string)](GuildedWebhookClient.GuildedWebhookClient(Guid,string) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Guid, string)')