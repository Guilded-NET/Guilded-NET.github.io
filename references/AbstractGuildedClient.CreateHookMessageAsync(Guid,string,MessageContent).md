---
title: CreateHookMessageAsync(Guid, string, MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates [a message](Message.md 'Guilded.Base.Content.Message') using [webhook](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent).md#Guilded.AbstractGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).webhook 'Guilded.AbstractGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent).webhook')."
---

## AbstractGuildedClient.CreateHookMessageAsync(Guid, string, MessageContent) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Creates [a message](Message.md 'Guilded.Base.Content.Message') using [webhook](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent).md#Guilded.AbstractGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).webhook 'Guilded.AbstractGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent).webhook').

```csharp
public override System.Threading.Tasks.Task CreateHookMessageAsync(Guid webhook, string token, Guilded.Base.Content.MessageContent message);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') to execute

<a name='Guilded.AbstractGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [required token](Webhook.Token.md 'Guilded.Base.Servers.Webhook.Token') of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') to execute it

<a name='Guilded.AbstractGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).message'></a>

`message` [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent')

The message to send

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')