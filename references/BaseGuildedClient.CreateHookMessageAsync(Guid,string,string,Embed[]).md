---
title: CreateHookMessageAsync(Guid, string, string, Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message in a chat using provided webhook.

```csharp
public System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, string content, params Guilded.NET.Base.Embeds.Embed[] embeds);
```"
---

## BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, Embed[]) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Creates a message in a chat using provided webhook.

```csharp
public System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, string content, params Guilded.NET.Base.Embeds.Embed[] embeds);
```

### Remarks
  
Creates a new message using the specified webhook.  
  
The [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,Embed[])#Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid,string,string,Guilded.NET.Base.Embeds.Embed[]).content 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string, Guilded.NET.Base.Embeds.Embed[]).content') will be formatted in Markdown.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid,string,string,Guilded.NET.Base.Embeds.Embed[]).webhookId'></a>

`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid,string,string,Guilded.NET.Base.Embeds.Embed[]).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token of executed webhook

<a name='Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid,string,string,Guilded.NET.Base.Embeds.Embed[]).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of message in Markdown plain text

<a name='Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid,string,string,Guilded.NET.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed 'Guilded.NET.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The array of embeds to add in the message

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')