---
title: CreateMessageAsync(Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message with content containing [embeds](Webhook.CreateMessageAsync(Embed[]).md#Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds') in a chat using a webhook."
---

## Webhook.CreateMessageAsync(Embed[]) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook.md 'Guilded.Base.Servers.Webhook')

Creates a message with content containing [embeds](Webhook.CreateMessageAsync(Embed[]).md#Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds') in a chat using a webhook.

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(params Guilded.Base.Embeds.Embed[] embeds);
```
#### Parameters

<a name='Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed.md 'Guilded.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The array of embeds to add in the message

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')