---
title: CreateMessageAsync(string, Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](Webhook.CreateMessageAsync(string,Embed[])#Guilded.Base.Servers.Webhook.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[]).embeds') and content using a webhook."
---

## Webhook.CreateMessageAsync(string, Embed[]) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook 'Guilded.Base.Servers.Webhook')

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](Webhook.CreateMessageAsync(string,Embed[])#Guilded.Base.Servers.Webhook.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[]).embeds') and content using a webhook.

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(string message, params Guilded.Base.Embeds.Embed[] embeds);
```

### Remarks
  
The content will be formatted in Markdown.
#### Parameters

<a name='Guilded.Base.Servers.Webhook.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Guilded.Base.Servers.Webhook.CreateMessageAsync(string,Guilded.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed 'Guilded.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The array of [all custom embeds](Embed 'Guilded.Base.Embeds.Embed') in [the message](Message 'Guilded.Base.Content.Message') (max — `1`)

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')