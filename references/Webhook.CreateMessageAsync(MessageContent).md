---
title: CreateMessageAsync(MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [message](Webhook.CreateMessageAsync(MessageContent).md#Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent).message 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent).message') in a chat using a webhook."
---

## Webhook.CreateMessageAsync(MessageContent) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook.md 'Guilded.Base.Servers.Webhook')

Creates a [message](Webhook.CreateMessageAsync(MessageContent).md#Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent).message 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent).message') in a chat using a webhook.

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(Guilded.Base.Content.MessageContent message);
```
#### Parameters

<a name='Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent).message'></a>

`message` [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent')

The message to send

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')