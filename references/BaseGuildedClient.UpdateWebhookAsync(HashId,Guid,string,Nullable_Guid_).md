---
title: UpdateWebhookAsync(HashId, Guid, string, Nullable<Guid>)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [webhook](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_)#Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).webhook 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>).webhook')."
---

## BaseGuildedClient.UpdateWebhookAsync(HashId, Guid, string, Nullable<Guid>) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Edits the [webhook](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_)#Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).webhook 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>).webhook').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.Webhook> UpdateWebhookAsync(Guilded.Base.HashId server, Guid webhook, string name, System.Nullable<Guid> newChannel=null);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') is

<a name='Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') to update

<a name='Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new name of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

<a name='Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).newChannel'></a>

`newChannel` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') will be moved to

### Remarks
  
[Webhook](Webhook 'Guilded.Base.Servers.Webhook') can moved between [channels](ServerChannel 'Guilded.Base.Servers.ServerChannel') using '[newChannel](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_)#Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).newChannel 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>).newChannel')' parameter.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
The specified [name](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_)#Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).name 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>).name') is null, empty or whitespace

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Webhook](Webhook 'Guilded.Base.Servers.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [webhook](Webhook 'Guilded.Base.Servers.Webhook')