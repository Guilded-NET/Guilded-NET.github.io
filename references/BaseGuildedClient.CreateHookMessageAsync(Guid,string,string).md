---
title: CreateHookMessageAsync(Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message with content containing only [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string).content') in a chat using a [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string).webhook')."
---

## BaseGuildedClient.CreateHookMessageAsync(Guid, string, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Creates a message with content containing only [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string).content') in a chat using a [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string).webhook').

```csharp
public System.Threading.Tasks.Task CreateHookMessageAsync(Guid webhook, string token, string content);
```

### Remarks
  
The text [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string).content') will be formatted in Markdown.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The required token for executing the webhook

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text content of the message in Markdown

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')