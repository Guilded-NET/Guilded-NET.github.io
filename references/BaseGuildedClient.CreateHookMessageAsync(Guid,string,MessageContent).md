---
title: CreateHookMessageAsync(Guid, string, MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message 'Guilded.Base.Content.Message') using [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent).webhook')."
---

## BaseGuildedClient.CreateHookMessageAsync(Guid, string, MessageContent) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates [a message](Message 'Guilded.Base.Content.Message') using [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent)#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent).webhook').

```csharp
public abstract System.Threading.Tasks.Task CreateHookMessageAsync(Guid webhook, string token, Guilded.Base.Content.MessageContent message);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') to execute

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [required token](Webhook.Token 'Guilded.Base.Servers.Webhook.Token') of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') to execute it

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).message'></a>

`message` [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent')

The message to send

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')