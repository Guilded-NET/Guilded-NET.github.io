---
title: DeleteWebhookAsync(HashId, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the [webhook](BaseGuildedClient.DeleteWebhookAsync(HashId,Guid)#Guilded.Base.BaseGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId,Guid).webhook 'Guilded.Base.BaseGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId, Guid).webhook')."
---

## BaseGuildedClient.DeleteWebhookAsync(HashId, Guid) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Deletes the [webhook](BaseGuildedClient.DeleteWebhookAsync(HashId,Guid)#Guilded.Base.BaseGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId,Guid).webhook 'Guilded.Base.BaseGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId, Guid).webhook').

```csharp
public abstract System.Threading.Tasks.Task DeleteWebhookAsync(Guilded.Base.HashId server, Guid webhook);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId,Guid).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the server where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') is

<a name='Guilded.Base.BaseGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId,Guid).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') to delete

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')