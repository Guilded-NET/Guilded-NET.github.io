---
title: CreateWebhookAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [new webhook](Webhook 'Guilded.Base.Servers.Webhook') in the channel."
---

## ServerChannel.CreateWebhookAsync(string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ServerChannel`](ServerChannel 'Guilded.Base.Servers.ServerChannel')

Creates a [new webhook](Webhook 'Guilded.Base.Servers.Webhook') in the channel.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Servers.Webhook> CreateWebhookAsync(string name);
```
#### Parameters

<a name='Guilded.Base.Servers.ServerChannel.CreateWebhookAsync(string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
The specified [name](ServerChannel.CreateWebhookAsync(string)#Guilded.Base.Servers.ServerChannel.CreateWebhookAsync(string).name 'Guilded.Base.Servers.ServerChannel.CreateWebhookAsync(string).name') is null, empty or whitespace

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Webhook](Webhook 'Guilded.Base.Servers.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [webhook](Webhook 'Guilded.Base.Servers.Webhook')