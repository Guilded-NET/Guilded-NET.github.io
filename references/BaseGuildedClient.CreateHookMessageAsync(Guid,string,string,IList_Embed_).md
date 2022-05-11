---
title: CreateHookMessageAsync(Guid, string, string, IList<Embed>)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message with content containing [embeds](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') and [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).content') in a chat using a [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).webhook')."
---

## BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, IList<Embed>) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Creates a message with content containing [embeds](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).embeds') and [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).content') in a chat using a [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).webhook').

```csharp
public System.Threading.Tasks.Task CreateHookMessageAsync(Guid webhook, string token, string content, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed> embeds);
```

### Remarks
  
The text [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>).content') will be formatted in Markdown.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The required token for executing the webhook

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text content of the message in Markdown

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.Embed_).embeds'></a>

`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed.md 'Guilded.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of embeds to add in the message

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')