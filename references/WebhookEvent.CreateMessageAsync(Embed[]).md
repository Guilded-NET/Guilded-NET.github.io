---
title: CreateMessageAsync(Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](WebhookEvent.CreateMessageAsync(Embed[])#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds') using a webhook."
---

## WebhookEvent.CreateMessageAsync(Embed[]) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`WebhookEvent`](WebhookEvent 'Guilded.Base.Events.WebhookEvent')

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](WebhookEvent.CreateMessageAsync(Embed[])#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds') using a webhook.

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(params Guilded.Base.Embeds.Embed[] embeds);
```
#### Parameters

<a name='Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed 'Guilded.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The array of [all custom embeds](Embed 'Guilded.Base.Embeds.Embed') in [the message](Message 'Guilded.Base.Content.Message') (max — `1`)

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')