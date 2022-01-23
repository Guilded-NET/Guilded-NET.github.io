---
title: CreateHookMessageAsync(Guid, string, string, IList<Embed>)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message in a chat using provided webhook.

```csharp
public override System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, string content, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed> embeds);
```"
---

## AbstractGuildedClient.CreateHookMessageAsync(Guid, string, string, IList<Embed>) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Creates a message in a chat using provided webhook.

```csharp
public override System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, string content, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed> embeds);
```

### Remarks
  
Creates a new message using the specified webhook.  
  
The [content](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_)#Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid,string,string,System.Collections.Generic.IList_Guilded.NET.Base.Embeds.Embed_).content 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed>).content') will be formatted in Markdown.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid,string,string,System.Collections.Generic.IList_Guilded.NET.Base.Embeds.Embed_).webhookId'></a>

`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid,string,string,System.Collections.Generic.IList_Guilded.NET.Base.Embeds.Embed_).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token of executed webhook

<a name='Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid,string,string,System.Collections.Generic.IList_Guilded.NET.Base.Embeds.Embed_).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of message in Markdown plain text

<a name='Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid,string,string,System.Collections.Generic.IList_Guilded.NET.Base.Embeds.Embed_).embeds'></a>

`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of embeds to add in the message

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')