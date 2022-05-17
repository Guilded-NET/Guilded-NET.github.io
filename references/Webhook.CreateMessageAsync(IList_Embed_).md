---
title: CreateMessageAsync(IList<Embed>)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](Webhook.CreateMessageAsync(IList_Embed_)#Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') using a webhook."
---

## Webhook.CreateMessageAsync(IList<Embed>) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook 'Guilded.Base.Servers.Webhook')

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing [embeds](Webhook.CreateMessageAsync(IList_Embed_)#Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') using a webhook.

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed> embeds);
```
#### Parameters

<a name='Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds'></a>

`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed 'Guilded.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The array of [all custom embeds](Embed 'Guilded.Base.Embeds.Embed') in [the message](Message 'Guilded.Base.Content.Message') (max — `1`)

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')