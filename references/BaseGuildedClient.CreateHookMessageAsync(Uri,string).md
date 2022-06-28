---
title: CreateHookMessageAsync(Uri, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') using [webhookUrl](BaseGuildedClient.CreateHookMessageAsync(Uri,string)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string).webhookUrl 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string).webhookUrl')."
---

## BaseGuildedClient.CreateHookMessageAsync(Uri, string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates [a message](Message 'Guilded.Base.Content.Message') using [webhookUrl](BaseGuildedClient.CreateHookMessageAsync(Uri,string)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string).webhookUrl 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string).webhookUrl').

```csharp
public System.Threading.Tasks.Task CreateHookMessageAsync(Uri webhookUrl, string content);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string).webhookUrl'></a>

`webhookUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [text contents](Message.Content 'Guilded.Base.Content.Message.Content') of [the message](Message 'Guilded.Base.Content.Message') in Markdown

### Remarks
  
The [content](BaseGuildedClient.CreateHookMessageAsync(Uri,string)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string).content') will be formatted in Markdown.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')