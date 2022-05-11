---
title: Webhook(Guid, string, string, Guid, HashId, DateTime, HashId, Nullable<DateTime>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Webhook](Webhook.md 'Guilded.Base.Servers.Webhook') with the specified properties."
---

## Webhook(Guid, string, string, Guid, HashId, DateTime, HashId, Nullable<DateTime>) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook.md 'Guilded.Base.Servers.Webhook')

Initializes a new instance of [Webhook](Webhook.md 'Guilded.Base.Servers.Webhook') with the specified properties.

```csharp
public Webhook(Guid id, string name, string? token, Guid channelId, Guilded.Base.HashId serverId, System.DateTime createdAt, Guilded.Base.HashId createdBy, System.Nullable<System.DateTime> deletedAt);
```
#### Parameters

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,System.Nullable_System.DateTime_).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,System.Nullable_System.DateTime_).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the webhook

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,System.Nullable_System.DateTime_).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token of the webhook

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,System.Nullable_System.DateTime_).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where webhook is

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,System.Nullable_System.DateTime_).serverId'></a>

`serverId` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the server where webhook is

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,System.Nullable_System.DateTime_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the webhook was created

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,System.Nullable_System.DateTime_).createdBy'></a>

`createdBy` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of [user](User.md 'Guilded.Base.Users.User') creator of the webhook

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,System.Nullable_System.DateTime_).deletedAt'></a>

`deletedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The date of when the webhook was deleted