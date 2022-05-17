---
title: CreateHookMessageAsync(Uri, string, Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') using [webhookUrl](BaseGuildedClient.CreateHookMessageAsync(Uri,string,Embed[])#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,Guilded.Base.Embeds.Embed[]).webhookUrl 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string, Guilded.Base.Embeds.Embed[]).webhookUrl')."
---

## BaseGuildedClient.CreateHookMessageAsync(Uri, string, Embed[]) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates [a message](Message 'Guilded.Base.Content.Message') using [webhookUrl](BaseGuildedClient.CreateHookMessageAsync(Uri,string,Embed[])#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,Guilded.Base.Embeds.Embed[]).webhookUrl 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string, Guilded.Base.Embeds.Embed[]).webhookUrl').

```csharp
public System.Threading.Tasks.Task CreateHookMessageAsync(Uri webhookUrl, string content, params Guilded.Base.Embeds.Embed[] embeds);
```

### Remarks
  
The [content](BaseGuildedClient.CreateHookMessageAsync(Uri,string,Embed[])#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string, Guilded.Base.Embeds.Embed[]).content') will be formatted in Markdown.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,Guilded.Base.Embeds.Embed[]).webhookUrl'></a>

`webhookUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,Guilded.Base.Embeds.Embed[]).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [text contents](Message.Content 'Guilded.Base.Content.Message.Content') of [the message](Message 'Guilded.Base.Content.Message') in Markdown

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,Guilded.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed 'Guilded.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The array of [all custom embeds](Embed 'Guilded.Base.Embeds.Embed') in [the message](Message 'Guilded.Base.Content.Message') (max — `1`)

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')