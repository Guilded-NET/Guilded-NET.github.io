---
title: Reaction(uint, HashId, DateTime, Nullable<HashId>, Nullable<Guid>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Reaction](Reaction 'Guilded.Base.Content.Reaction') with provided details."
---

## Reaction(uint, HashId, DateTime, Nullable<HashId>, Nullable<Guid>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Reaction`](Reaction 'Guilded.Base.Content.Reaction')

Initializes a new instance of [Reaction](Reaction 'Guilded.Base.Content.Reaction') with provided details.

```csharp
public Reaction(uint id, Guilded.Base.HashId createdBy, System.DateTime createdAt, System.Nullable<Guilded.Base.HashId> serverId=null, System.Nullable<Guid> createdByWebhookId=null);
```
#### Parameters

<a name='Guilded.Base.Content.Reaction.Reaction(uint,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).id'></a>

`id` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the emote reacted with

<a name='Guilded.Base.Content.Reaction.Reaction(uint,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') creator of the reaction

<a name='Guilded.Base.Content.Reaction.Reaction(uint,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the reaction was created

<a name='Guilded.Base.Content.Reaction.Reaction(uint,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the reaction is

<a name='Guilded.Base.Content.Reaction.Reaction(uint,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).createdByWebhookId'></a>

`createdByWebhookId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') creator of the reaction

### See Also
- [Reaction](Reaction 'Guilded.Base.Content.Reaction')