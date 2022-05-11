---
title: CreateMessageAsync(MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [message](WebhookEvent.CreateMessageAsync(MessageContent).md#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent).message 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent).message') in a chat using a webhook."
---

## WebhookEvent.CreateMessageAsync(MessageContent) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`WebhookEvent`](WebhookEvent.md 'Guilded.Base.Events.WebhookEvent')

Creates a [message](WebhookEvent.CreateMessageAsync(MessageContent).md#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent).message 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent).message') in a chat using a webhook.

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(Guilded.Base.Content.MessageContent message);
```
#### Parameters

<a name='Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent).message'></a>

`message` [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent')

The message to send

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')