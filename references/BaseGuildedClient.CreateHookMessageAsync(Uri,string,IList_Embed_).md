---
title: CreateHookMessageAsync(Uri, string, IList<Embed>)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') using [webhookUrl](BaseGuildedClient.CreateHookMessageAsync(Uri,string,IList_Embed_)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).webhookUrl 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).webhookUrl')."
---

## BaseGuildedClient.CreateHookMessageAsync(Uri, string, IList<Embed>) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates [a message](Message 'Guilded.Base.Content.Message') using [webhookUrl](BaseGuildedClient.CreateHookMessageAsync(Uri,string,IList_Embed_)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).webhookUrl 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).webhookUrl').

```csharp
public System.Threading.Tasks.Task CreateHookMessageAsync(Uri webhookUrl, string content, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed> embeds);
```

### Remarks
  
The [content](BaseGuildedClient.CreateHookMessageAsync(Uri,string,IList_Embed_)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).content') will be formatted in Markdown.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).webhookUrl'></a>

`webhookUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [text contents](Message.Content 'Guilded.Base.Content.Message.Content') of [the message](Message 'Guilded.Base.Content.Message') in Markdown

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds'></a>

`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed 'Guilded.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of [all custom embeds](Embed 'Guilded.Base.Embeds.Embed') in [the message](Message 'Guilded.Base.Content.Message') (max — `1`)

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')