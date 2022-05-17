---
title: CreateMessageAsync(MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') using webhook."
---

## Webhook.CreateMessageAsync(MessageContent) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook 'Guilded.Base.Servers.Webhook')

Creates [a message](Message 'Guilded.Base.Content.Message') using webhook.

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(Guilded.Base.Content.MessageContent message);
```
#### Parameters

<a name='Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent).message'></a>

`message` [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent')

The message to send

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')