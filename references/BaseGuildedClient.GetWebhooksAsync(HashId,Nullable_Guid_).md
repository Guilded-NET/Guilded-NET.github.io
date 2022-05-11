---
title: GetWebhooksAsync(HashId, Nullable<Guid>)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a list of webhooks."
---

## BaseGuildedClient.GetWebhooksAsync(HashId, Nullable<Guid>) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Gets a list of webhooks.

```csharp
public abstract System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Servers.Webhook>> GetWebhooksAsync(Guilded.Base.HashId serverId, System.Nullable<Guid> channelId=null);
```

### Remarks
  
Gets a list of all webhooks in the specified server. If [channelId](BaseGuildedClient.GetWebhooksAsync(HashId,Nullable_Guid_).md#Guilded.Base.BaseGuildedClient.GetWebhooksAsync(Guilded.Base.HashId,System.Nullable_Guid_).channelId 'Guilded.Base.BaseGuildedClient.GetWebhooksAsync(Guilded.Base.HashId, System.Nullable<Guid>).channelId') parameter is given, it gets all of the channel webhooks instead.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetWebhooksAsync(Guilded.Base.HashId,System.Nullable_Guid_).serverId'></a>

`serverId` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the server to get webhooks from

<a name='Guilded.Base.BaseGuildedClient.GetWebhooksAsync(Guilded.Base.HashId,System.Nullable_Guid_).channelId'></a>

`channelId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the channel to get webhooks from

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Webhook](Webhook.md 'Guilded.Base.Servers.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of webhooks