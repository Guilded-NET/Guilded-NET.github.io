---
title: CreateMessageAsync(string, Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message with content containing [embeds](WebhookEvent.CreateMessageAsync(string,Embed[]).md#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[]).embeds') and content in a chat using a webhook."
---

## WebhookEvent.CreateMessageAsync(string, Embed[]) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`WebhookEvent`](WebhookEvent.md 'Guilded.Base.Events.WebhookEvent')

Creates a message with content containing [embeds](WebhookEvent.CreateMessageAsync(string,Embed[]).md#Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[]).embeds') and content in a chat using a webhook.

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(string message, params Guilded.Base.Embeds.Embed[] embeds);
```

### Remarks
  
The text content will be formatted in Markdown.
#### Parameters

<a name='Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed.md 'Guilded.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The array of embeds to add in the message

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')