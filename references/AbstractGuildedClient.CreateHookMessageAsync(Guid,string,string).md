---
title: CreateHookMessageAsync(Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message in a chat using provided webhook.

```csharp
public override System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, string content);
```"
---

## AbstractGuildedClient.CreateHookMessageAsync(Guid, string, string) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Creates a message in a chat using provided webhook.

```csharp
public override System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, string content);
```

### Remarks
  
Creates a new message using the specified webhook.  
  
The [content](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,string)#Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid,string,string).content 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, string).content') will be formatted in Markdown.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid,string,string).webhookId'></a>

`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid,string,string).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token of executed webhook

<a name='Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of message in Markdown plain text

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')