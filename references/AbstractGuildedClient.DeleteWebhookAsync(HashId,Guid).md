---
title: DeleteWebhookAsync(HashId, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the [webhook](AbstractGuildedClient.DeleteWebhookAsync(HashId,Guid).md#Guilded.AbstractGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId,Guid).webhook 'Guilded.AbstractGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId, Guid).webhook')."
---

## AbstractGuildedClient.DeleteWebhookAsync(HashId, Guid) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Deletes the [webhook](AbstractGuildedClient.DeleteWebhookAsync(HashId,Guid).md#Guilded.AbstractGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId,Guid).webhook 'Guilded.AbstractGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId, Guid).webhook').

```csharp
public override System.Threading.Tasks.Task DeleteWebhookAsync(Guilded.Base.HashId server, Guid webhook);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId,Guid).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the server where [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') is

<a name='Guilded.AbstractGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId,Guid).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') to delete

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')