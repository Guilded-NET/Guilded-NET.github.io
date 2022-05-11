---
title: UpdateWebhookAsync(HashId, Guid, string, Nullable<Guid>)
layout: references
section: references
tags:
  - references
  - method
description: "

Updates the specified [webhook](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_).md#Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).webhook 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>).webhook') in the specified [server](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_).md#Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).server 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>).server')."
---

## BaseGuildedClient.UpdateWebhookAsync(HashId, Guid, string, Nullable<Guid>) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Updates the specified [webhook](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_).md#Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).webhook 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>).webhook') in the specified [server](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_).md#Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).server 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>).server').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.Webhook> UpdateWebhookAsync(Guilded.Base.HashId server, Guid webhook, string name, System.Nullable<Guid> newChannel=null);
```

### Remarks
  
Webhooks can moved between channels using '[newChannel](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_).md#Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).newChannel 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>).newChannel')' parameter.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the server where the webhook is

<a name='Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).webhook'></a>

`webhook` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to update

<a name='Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new name of the webhook

<a name='Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).newChannel'></a>

`newChannel` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the channel where the webhook will be moved to

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
The specified [name](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_).md#Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId,Guid,string,System.Nullable_Guid_).name 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>).name') is null, empty or whitespace

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Webhook](Webhook.md 'Guilded.Base.Servers.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated webhook