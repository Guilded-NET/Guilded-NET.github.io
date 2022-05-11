---
title: CreateWebhookAsync(HashId, Guid, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a new webhook in the specified [channel](BaseGuildedClient.CreateWebhookAsync(HashId,Guid,string).md#Guilded.Base.BaseGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).channel 'Guilded.Base.BaseGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string).channel')."
---

## BaseGuildedClient.CreateWebhookAsync(HashId, Guid, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Creates a new webhook in the specified [channel](BaseGuildedClient.CreateWebhookAsync(HashId,Guid,string).md#Guilded.Base.BaseGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).channel 'Guilded.Base.BaseGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.Webhook> CreateWebhookAsync(Guilded.Base.HashId server, Guid channel, string name);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the server where the webhook will be created

<a name='Guilded.Base.BaseGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the webhook will be created

<a name='Guilded.Base.BaseGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the webhook

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
The specified [name](BaseGuildedClient.CreateWebhookAsync(HashId,Guid,string).md#Guilded.Base.BaseGuildedClient.CreateWebhookAsync(Guilded.Base.HashId,Guid,string).name 'Guilded.Base.BaseGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string).name') is null, empty or whitespace

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Webhook](Webhook.md 'Guilded.Base.Servers.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created webhook