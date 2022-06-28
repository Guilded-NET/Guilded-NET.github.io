---
title: CreateWebhookAsync(HashId, Guid, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [new webhook](Webhook 'Guilded.Base.Servers.Webhook') in the [channel](AbstractGuildedClient.CreateWebhookAsync(HashId,Guid,string)#Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).channel 'Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string).channel')."
---

## AbstractGuildedClient.CreateWebhookAsync(HashId, Guid, string) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Creates a [new webhook](Webhook 'Guilded.Base.Servers.Webhook') in the [channel](AbstractGuildedClient.CreateWebhookAsync(HashId,Guid,string)#Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).channel 'Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string).channel').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Servers.Webhook> CreateWebhookAsync(Guilded.Base.HashId server, Guid channel, string name);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') will be created

<a name='Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') will be created

<a name='Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
The specified [name](AbstractGuildedClient.CreateWebhookAsync(HashId,Guid,string)#Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).name 'Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string).name') is null, empty or whitespace

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Webhook](Webhook 'Guilded.Base.Servers.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [webhook](Webhook 'Guilded.Base.Servers.Webhook')