---
title: CreateHookMessageAsync(Uri, MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [message](Message 'Guilded.Base.Content.Message') using the specified [webhookUrl](AbstractGuildedClient.CreateHookMessageAsync(Uri,MessageContent)#Guilded.AbstractGuildedClient.CreateHookMessageAsync(Uri,Guilded.Base.Content.MessageContent).webhookUrl 'Guilded.AbstractGuildedClient.CreateHookMessageAsync(Uri, Guilded.Base.Content.MessageContent).webhookUrl')."
---

## AbstractGuildedClient.CreateHookMessageAsync(Uri, MessageContent) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Creates a [message](Message 'Guilded.Base.Content.Message') using the specified [webhookUrl](AbstractGuildedClient.CreateHookMessageAsync(Uri,MessageContent)#Guilded.AbstractGuildedClient.CreateHookMessageAsync(Uri,Guilded.Base.Content.MessageContent).webhookUrl 'Guilded.AbstractGuildedClient.CreateHookMessageAsync(Uri, Guilded.Base.Content.MessageContent).webhookUrl').

```csharp
public override System.Threading.Tasks.Task CreateHookMessageAsync(Uri webhookUrl, Guilded.Base.Content.MessageContent message);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.CreateHookMessageAsync(Uri,Guilded.Base.Content.MessageContent).webhookUrl'></a>

`webhookUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL of the [webhook](Webhook 'Guilded.Base.Servers.Webhook')

<a name='Guilded.AbstractGuildedClient.CreateHookMessageAsync(Uri,Guilded.Base.Content.MessageContent).message'></a>

`message` [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent')

The message to send

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')