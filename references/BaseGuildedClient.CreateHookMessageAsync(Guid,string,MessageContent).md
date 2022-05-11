---
title: CreateHookMessageAsync(Guid, string, MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [message](BaseGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).message 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent).message') in a chat using a [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent).webhook')."
---

## BaseGuildedClient.CreateHookMessageAsync(Guid, string, MessageContent) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Creates a [message](BaseGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).message 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent).message') in a chat using a [webhook](BaseGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent).md#Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).webhook 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent).webhook').

```csharp
public abstract System.Threading.Tasks.Task CreateHookMessageAsync(Guid webhook, string token, Guilded.Base.Content.MessageContent message);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The required token for executing the webhook

<a name='Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid,string,Guilded.Base.Content.MessageContent).message'></a>

`message` [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent')

The message to send

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')