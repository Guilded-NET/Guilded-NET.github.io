---
title: CreateMessageAsync(IList<Embed>)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message with content containing [embeds](Webhook.CreateMessageAsync(IList_Embed_).md#Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') in a chat using a webhook."
---

## Webhook.CreateMessageAsync(IList<Embed>) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook.md 'Guilded.Base.Servers.Webhook')

Creates a message with content containing [embeds](Webhook.CreateMessageAsync(IList_Embed_).md#Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') in a chat using a webhook.

```csharp
public System.Threading.Tasks.Task CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed> embeds);
```
#### Parameters

<a name='Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds'></a>

`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed.md 'Guilded.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of embeds to add in the message

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')