---
title: GetWebhookAsync(HashId, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the [webhook](AbstractGuildedClient.GetWebhookAsync(HashId,Guid).md#Guilded.AbstractGuildedClient.GetWebhookAsync(Guilded.Base.HashId,Guid).webhook 'Guilded.AbstractGuildedClient.GetWebhookAsync(Guilded.Base.HashId, Guid).webhook')."
---

## AbstractGuildedClient.GetWebhookAsync(HashId, Guid) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets the [webhook](AbstractGuildedClient.GetWebhookAsync(HashId,Guid).md#Guilded.AbstractGuildedClient.GetWebhookAsync(Guilded.Base.HashId,Guid).webhook 'Guilded.AbstractGuildedClient.GetWebhookAsync(Guilded.Base.HashId, Guid).webhook').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Servers.Webhook> GetWebhookAsync(Guilded.Base.HashId server, Guid webhook);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetWebhookAsync(Guilded.Base.HashId,Guid).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the server [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') is

<a name='Guilded.AbstractGuildedClient.GetWebhookAsync(Guilded.Base.HashId,Guid).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') to get

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Webhook](Webhook.md 'Guilded.Base.Servers.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[webhook](AbstractGuildedClient.GetWebhookAsync(HashId,Guid).md#Guilded.AbstractGuildedClient.GetWebhookAsync(Guilded.Base.HashId,Guid).webhook 'Guilded.AbstractGuildedClient.GetWebhookAsync(Guilded.Base.HashId, Guid).webhook')