---
title: CreateHookMessageAsync(Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing only [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string).content') using a [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string).webhook')."
---

## BaseGuildedClient.CreateHookMessageAsync(Guid, string, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates [a message](Message 'Guilded.Base.Content.Message') with content containing only [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string).content') using a [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string).webhook').

```csharp
public System.Threading.Tasks.Task CreateHookMessageAsync(Guid webhook, string token, string content);
```

### Remarks
  
The [content](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).content 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string).content') will be formatted in Markdown.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') to execute

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [required token](Webhook.Token 'Guilded.Base.Servers.Webhook.Token') of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') to execute it

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [text contents](Message.Content 'Guilded.Base.Content.Message.Content') of [the message](Message 'Guilded.Base.Content.Message') in Markdown

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')