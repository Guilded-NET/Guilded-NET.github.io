---
title: CreateMessageAsync(string, Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient')."
---

## GuildedWebhookClient.CreateMessageAsync(string, Embed[]) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`GuildedWebhookClient`](GuildedWebhookClient 'Guilded.GuildedWebhookClient')

Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient').

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(string content, params Guilded.Base.Embeds.Embed[] embeds);
```
#### Parameters

<a name='Guilded.GuildedWebhookClient.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [text contents](Message.Content 'Guilded.Base.Content.Message.Content') of [the message](Message 'Guilded.Base.Content.Message') in Markdown

<a name='Guilded.GuildedWebhookClient.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed 'Guilded.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The array of [all custom embeds](Embed 'Guilded.Base.Embeds.Embed') in [the message](Message 'Guilded.Base.Content.Message') (max — `1`)

### Remarks
  
The [content](GuildedWebhookClient.CreateMessageAsync(string,Embed[])#Guilded.GuildedWebhookClient.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).content 'Guilded.GuildedWebhookClient.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[]).content') will be formatted in Markdown.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')