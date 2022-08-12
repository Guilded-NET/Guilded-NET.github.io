---
title: CreateMessageAsync(IList<Embed>)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient')."
---

## GuildedWebhookClient.CreateMessageAsync(IList<Embed>) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`GuildedWebhookClient`](GuildedWebhookClient 'Guilded.GuildedWebhookClient')

Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient').

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed> embeds);
```
#### Parameters

<a name='Guilded.GuildedWebhookClient.CreateMessageAsync(System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds'></a>

`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed 'Guilded.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of [all custom embeds](Embed 'Guilded.Base.Embeds.Embed') in [the message](Message 'Guilded.Base.Content.Message') (max — `1`)

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')