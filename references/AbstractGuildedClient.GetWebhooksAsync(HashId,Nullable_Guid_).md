---
title: GetWebhooksAsync(HashId, Nullable<Guid>)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a list of [webhooks](Webhook.md 'Guilded.Base.Servers.Webhook')."
---

## AbstractGuildedClient.GetWebhooksAsync(HashId, Nullable<Guid>) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets a list of [webhooks](Webhook.md 'Guilded.Base.Servers.Webhook').

```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Servers.Webhook>> GetWebhooksAsync(Guilded.Base.HashId server, System.Nullable<Guid> channel=null);
```

### Remarks
  
If [channel](AbstractGuildedClient.GetWebhooksAsync(HashId,Nullable_Guid_).md#Guilded.AbstractGuildedClient.GetWebhooksAsync(Guilded.Base.HashId,System.Nullable_Guid_).channel 'Guilded.AbstractGuildedClient.GetWebhooksAsync(Guilded.Base.HashId, System.Nullable<Guid>).channel') parameter is given, it gets all of [the channel webhooks](Webhook.md 'Guilded.Base.Servers.Webhook') instead.
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetWebhooksAsync(Guilded.Base.HashId,System.Nullable_Guid_).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the server to get [webhooks](Webhook.md 'Guilded.Base.Servers.Webhook') from

<a name='Guilded.AbstractGuildedClient.GetWebhooksAsync(Guilded.Base.HashId,System.Nullable_Guid_).channel'></a>

`channel` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [the channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel') to get webhooks from

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Webhook](Webhook.md 'Guilded.Base.Servers.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of [webhooks](Webhook.md 'Guilded.Base.Servers.Webhook')