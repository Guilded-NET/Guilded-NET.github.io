---
title: CreateHookMessageAsync(Guid, string, string, IList<Embed>)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') and [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).content') using a [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).webhook')."
---

## BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, IList<Embed>) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') and [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).content') using a [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).webhook').

```csharp
public System.Threading.Tasks.Task CreateHookMessageAsync(Guid webhook, string token, string content, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed> embeds);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') to execute

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [required token](Webhook.Token 'Guilded.Base.Servers.Webhook.Token') of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') to execute it

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [text contents](Message.Content 'Guilded.Base.Content.Message.Content') of [the message](Message 'Guilded.Base.Content.Message') in Markdown

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds'></a>

`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed 'Guilded.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of [all custom embeds](Embed 'Guilded.Base.Embeds.Embed') in [the message](Message 'Guilded.Base.Content.Message') (max — `1`)

### Remarks
  
The [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).content') will be formatted in Markdown.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')