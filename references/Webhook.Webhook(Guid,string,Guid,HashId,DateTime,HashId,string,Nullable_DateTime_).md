---
title: Webhook(Guid, string, Guid, HashId, DateTime, HashId, string, Nullable<DateTime>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Webhook](Webhook 'Guilded.Base.Servers.Webhook') from the specified JSON properties."
---

## Webhook(Guid, string, Guid, HashId, DateTime, HashId, string, Nullable<DateTime>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook 'Guilded.Base.Servers.Webhook')

Initializes a new instance of [Webhook](Webhook 'Guilded.Base.Servers.Webhook') from the specified JSON properties.

```csharp
public Webhook(Guid id, string name, Guid channelId, Guilded.Base.HashId serverId, System.DateTime createdAt, Guilded.Base.HashId createdBy, string? token=null, System.Nullable<System.DateTime> deletedAt=null);
```
#### Parameters

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,string,System.Nullable_System.DateTime_).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,string,System.Nullable_System.DateTime_).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,string,System.Nullable_System.DateTime_).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where webhook is

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,string,System.Nullable_System.DateTime_).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where webhook is

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,string,System.Nullable_System.DateTime_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when [the webhook](Webhook 'Guilded.Base.Servers.Webhook') was created

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,string,System.Nullable_System.DateTime_).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the user](User 'Guilded.Base.Users.User') that created [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,string,System.Nullable_System.DateTime_).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token of [the webhook](Webhook 'Guilded.Base.Servers.Webhook')

<a name='Guilded.Base.Servers.Webhook.Webhook(Guid,string,Guid,Guilded.Base.HashId,System.DateTime,Guilded.Base.HashId,string,System.Nullable_System.DateTime_).deletedAt'></a>

`deletedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

the date when [the webhook](Webhook 'Guilded.Base.Servers.Webhook') was deleted

### See Also
- [Webhook](Webhook 'Guilded.Base.Servers.Webhook')