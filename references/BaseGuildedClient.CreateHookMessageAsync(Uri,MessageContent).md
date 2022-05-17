---
title: CreateHookMessageAsync(Uri, MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') using [webhookUrl](BaseGuildedClient.CreateHookMessageAsync(Uri,MessageContent)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,Guilded.Base.Content.MessageContent).webhookUrl 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, Guilded.Base.Content.MessageContent).webhookUrl')."
---

## BaseGuildedClient.CreateHookMessageAsync(Uri, MessageContent) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates [a message](Message 'Guilded.Base.Content.Message') using [webhookUrl](BaseGuildedClient.CreateHookMessageAsync(Uri,MessageContent)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,Guilded.Base.Content.MessageContent).webhookUrl 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, Guilded.Base.Content.MessageContent).webhookUrl').

```csharp
public abstract System.Threading.Tasks.Task CreateHookMessageAsync(Uri webhookUrl, Guilded.Base.Content.MessageContent message);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,Guilded.Base.Content.MessageContent).webhookUrl'></a>

`webhookUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,Guilded.Base.Content.MessageContent).message'></a>

`message` [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent')

The message to send

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')